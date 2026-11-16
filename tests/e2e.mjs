// Interaction checks against a running site (dev or preview). Requests to WhatsApp are blocked,
// so nothing is ever sent to the business. Usage: node tests/e2e.mjs [baseUrl]
import { chromium } from 'playwright-core';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://localhost:4321';
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const browser = await chromium.launch({ executablePath, headless: true });
const results = [];
const check = async (name, fn) => {
  try {
    await fn();
    results.push(['PASS', name]);
  } catch (e) {
    results.push(['FAIL', name, e.message.split('\n')[0]]);
  }
};

const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: base });
const blocked = [];
// Third-party embeds (TikTok player, Google Maps) are not needed for these checks.
await ctx.route(/tiktok\.com|google\.com\/maps/, (route) => route.abort());
await ctx.route(/wa\.me|whatsapp\.com|api\.whatsapp/, (route) => {
  blocked.push(route.request().url());
  route.abort();
});
const page = await ctx.newPage();

await check('K-1 CTA opens the dialog with the service preselected', async () => {
  await page.goto(base + '/fr/services/visa-fiance-etats-unis/');
  await page.click('.page-hero a[data-inquiry]');
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  assert.ok(await dlg.evaluate((d) => d.open));
  assert.equal(await dlg.locator('select[name="service"]').inputValue(), 'us-fiance');
  // Focus moves on the next animation frame after showModal(); wait briefly for it.
  await page
    .waitForFunction(() => document.activeElement?.getAttribute('name') === 'firstName', null, { timeout: 2000 })
    .catch(() => null);
  const focused = await page.evaluate(() => document.activeElement?.getAttribute('name') ?? document.activeElement?.tagName);
  assert.equal(focused, 'firstName');
});

await check('Empty submit shows a focused error summary linked to fields', async () => {
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  await dlg.locator('button[type="submit"]').click();
  const summary = dlg.locator('[data-error-summary]');
  assert.ok(await summary.isVisible());
  assert.equal(await page.evaluate(() => document.activeElement?.hasAttribute('data-error-summary')), true);
  assert.equal(await summary.locator('li').count(), 3);
  assert.equal(await dlg.locator('input[name="firstName"]').getAttribute('aria-invalid'), 'true');
});

let expected;
await check('Valid details produce a correct, encoded WhatsApp link and a preview', async () => {
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  await dlg.locator('input[name="firstName"]').fill('Jean-Éric');
  await dlg.locator('input[name="lastName"]').fill('D’Haïti');
  await dlg.locator('input[name="phone"]').fill('+509 3712-3456');
  await dlg.locator('textarea[name="message"]').fill('L’équipe & moi : « test » ?\nDeuxième ligne');
  await dlg.locator('input[value="office"]').check();
  await dlg.locator('button[type="submit"]').click();
  assert.ok(await dlg.locator('[data-step="preview"]').isVisible());
  const href = await dlg.locator('[data-wa-link]').getAttribute('href');
  const url = new URL(href);
  assert.equal(url.origin + url.pathname, 'https://wa.me/18493998859');
  const text = url.searchParams.get('text');
  expected = text;
  assert.ok(text.includes('Jean-Éric D’Haïti'));
  assert.ok(text.includes('Visa de fiancé(e) K-1/K-2'));
  assert.ok(text.includes('L’équipe & moi : « test » ?\nDeuxième ligne'));
  assert.ok(text.includes('Consultation au bureau'));
  assert.ok(text.endsWith('Demande depuis le site — Français.'));
  assert.equal(await dlg.locator('[data-preview]').innerText(), text);
});

await check('Interface never claims the message was sent or the consultation confirmed', async () => {
  const body = await page.evaluate(() => document.body.innerText);
  assert.ok(!/message envoyé|consultation confirmée|message sent|consultation confirmed/i.test(body));
  assert.equal(await page.locator('[data-wa-link]').first().innerText().then((t) => t.includes('Continuer sur WhatsApp')), true);
});

await check('Copy gives feedback (success or manual-copy fallback)', async () => {
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  await dlg.locator('[data-copy]').click();
  await page.waitForTimeout(200);
  const status = await dlg.locator('[data-status]').innerText();
  assert.ok(/copié|Sélectionnez/.test(status), status);
  const clip = await page.evaluate(() => navigator.clipboard.readText().catch(() => null));
  // The OS clipboard may normalise line endings (CRLF on Windows).
  if (clip !== null) assert.equal(clip.replace(/\r\n/g, '\n'), expected, JSON.stringify(clip.slice(0, 80)));
});

await check('Escape closes the dialog, restores focus and keeps entered data', async () => {
  await page.keyboard.press('Escape');
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  assert.equal(await dlg.evaluate((d) => d.open), false);
  assert.equal(await page.evaluate(() => document.activeElement?.hasAttribute('data-inquiry')), true);
  await page.click('.svc-aside a[data-inquiry]');
  assert.equal(await dlg.locator('input[name="firstName"]').inputValue(), 'Jean-Éric');
  await page.keyboard.press('Escape');
});

await check('No WhatsApp request was made during the tests', async () => {
  assert.equal(blocked.length, 0, blocked.join(', '));
});

await check('Inquiry data is not written to storage or the page URL', async () => {
  const storage = await page.evaluate(() => JSON.stringify({ ...localStorage }) + JSON.stringify({ ...sessionStorage }) + location.href);
  assert.ok(!storage.includes('Jean'));
});

await check('Contact page: unknown ?service fails safely, known one preselects', async () => {
  await page.goto(base + '/fr/contact/?service=%3Cscript%3E#inquiry');
  assert.equal(await page.locator('select[name="service"]').inputValue(), '');
  await page.goto(base + '/fr/contact/?service=ca-study#inquiry');
  assert.equal(await page.locator('select[name="service"]').inputValue(), 'ca-study');
});

await check('“Not sure” requires a short description', async () => {
  await page.goto(base + '/fr/contact/');
  await page.selectOption('select[name="service"]', 'not-sure');
  await page.fill('input[name="firstName"]', 'Ana');
  await page.fill('input[name="lastName"]', 'Pérez');
  await page.fill('input[name="phone"]', '809 555 0123');
  await page.click('[data-page-form] button[type="submit"]');
  const err = await page.locator('[data-field="message"] [data-error]').innerText();
  assert.ok(err.includes('quelques mots'), err);
});

await check('“Other country” requires the destination and is preselectable', async () => {
  await page.goto(base + '/fr/contact/?service=other-country#inquiry');
  assert.equal(await page.locator('select[name="service"]').inputValue(), 'other-country');
  await page.fill('input[name="firstName"]', 'Ana');
  await page.fill('input[name="lastName"]', 'Pérez');
  await page.fill('input[name="phone"]', '809 555 0123');
  await page.click('[data-page-form] button[type="submit"]');
  const err = await page.locator('[data-field="message"] [data-error]').innerText();
  assert.ok(err.includes('pays de destination'), err);
  await page.fill('textarea[name="message"]', 'Chili, visa touriste en mars');
  await page.click('[data-page-form] button[type="submit"]');
  const text = new URL(await page.locator('[data-wa-link]').getAttribute('href')).searchParams.get('text');
  assert.ok(text.includes('Visa touriste ou étudiant : autre pays') && text.includes('Chili'), text);
});

await check('English site builds the message in English', async () => {
  await page.goto(base + '/en/contact/?service=us-tourist');
  await page.fill('input[name="firstName"]', 'Ana');
  await page.fill('input[name="lastName"]', 'Smith');
  await page.fill('input[name="phone"]', '+1 809 555 0123');
  await page.click('[data-page-form] button[type="submit"]');
  const text = new URL(await page.locator('[data-wa-link]').getAttribute('href')).searchParams.get('text');
  assert.ok(text.startsWith('Hello Fernando OMG Services (FOS) team,'));
  assert.ok(text.includes('Service: U.S. tourist visa'));
  assert.ok(await page.locator('[data-wa-link]').innerText().then((t) => t.includes('Continue on WhatsApp')));
});

await check('Service finder filters by destination and resets', async () => {
  await page.goto(base + '/');
  const finder = page.locator('#home-finder');
  const visible = () => finder.locator('[data-finder-item]:not([hidden])').count();
  assert.equal(await visible(), 17);
  await finder.locator('[data-filter="dest"][data-value="ca"]').click();
  assert.equal(await visible(), 7); // 2 Canada services + 5 document/interpreting services usable anywhere
  await finder.locator('[data-filter="need"][data-value="study"]').click();
  assert.equal(await visible(), 1);
  await finder.locator('[data-filter="need"][data-value="unsure"]').click();
  assert.ok(await finder.locator('[data-finder-unsure]').isVisible());
  await finder.locator('[data-finder-reset]').click();
  assert.equal(await visible(), 17);
  assert.equal(await finder.locator('[data-finder-reset]').isVisible(), false);
});

await check('Generic CTAs on a service page preselect that service', async () => {
  await page.goto(base + '/en/services/canada-visitor-visa/');
  await page.click('.header-cta');
  assert.equal(await page.locator('dialog select[name="service"]').inputValue(), 'ca-visitor');
  await page.keyboard.press('Escape');
});

await check('Video cards show a cover and load the TikTok player only on play', async () => {
  await page.goto(base + '/');
  const card = page.locator('.video').first();
  assert.ok(await card.locator('img.video__img').count(), 'cover image missing');
  assert.equal(await page.locator('iframe[src*="tiktok.com"]').count(), 0, 'player loaded before play');
  await card.locator('a[data-play]').click();
  const src = await card.locator('iframe').getAttribute('src');
  assert.ok(src.startsWith('https://www.tiktok.com/player/v1/'), src);
});

await check('Scroll reveal: below-the-fold content appears as it scrolls into view', async () => {
  await page.goto(base + '/');
  const target = page.locator('.office__facts > div').first();
  assert.equal(await target.getAttribute('data-reveal'), 'up');
  assert.equal(await target.evaluate((el) => el.classList.contains('is-visible')), false);
  await target.scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  assert.equal(await target.evaluate((el) => el.classList.contains('is-visible')), true);
  assert.equal(await target.evaluate((el) => getComputedStyle(el).opacity), '1');
  const heroTagged = await page.locator('.hero [data-reveal]').count();
  assert.equal(heroTagged, 0, 'hero must never be hidden');
});

await check('Address links to Google Maps and the map is lazy-loaded', async () => {
  const link = page.locator('a.office__address').first();
  assert.ok((await link.getAttribute('href')).startsWith('https://www.google.com/maps/search/'));
  assert.equal(await page.locator('.office__map iframe').getAttribute('loading'), 'lazy');
});

await check('Desktop services menu opens, closes with Escape', async () => {
  await page.goto(base + '/');
  const toggle = page.locator('[data-services-toggle]');
  await toggle.click();
  assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
  assert.ok(await page.locator('[data-services-panel]').isVisible());
  await page.keyboard.press('Escape');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
});

await check('Language switch points to the equivalent page in all three languages', async () => {
  await page.goto(base + '/fr/services/visa-fiance-etats-unis/');
  const sw = (l) => page.locator(`.utility .langs a[hreflang="${l}"]`);
  assert.equal(await sw('en').getAttribute('href'), '/en/services/us-fiance-visa/');
  assert.equal(await sw('es').getAttribute('href'), '/es/servicios/visa-prometido-estados-unidos/');
  assert.equal(await sw('fr').getAttribute('aria-current'), 'true');
  assert.ok(await sw('es').isVisible(), 'switch hidden on desktop');
  await page.goto(base + '/en/resources/k1-fiance-visa-main-steps/');
  assert.equal(await sw('fr').getAttribute('href'), '/fr/ressources/visa-fiance-k1-grandes-etapes/');
  assert.equal(await sw('es').getAttribute('href'), '/es/recursos/visa-prometido-k1-etapas-principales/');
});

await check('Spanish pages: lang, hreflang set and no translation prompt', async () => {
  await page.goto(base + '/es/');
  assert.equal(await page.getAttribute('html', 'lang'), 'es');
  assert.equal(await page.getAttribute('html', 'translate'), 'no');
  assert.equal(await page.locator('meta[name="google"][content="notranslate"]').count(), 1);
  for (const l of ['fr', 'en', 'es', 'x-default']) assert.equal(await page.locator(`link[rel="alternate"][hreflang="${l}"]`).count(), 1, l);
  assert.ok((await page.title()).includes('Consultor e intérprete de inmigración'));
});

await check('Spanish site builds the message in Spanish', async () => {
  await page.goto(base + '/es/contacto/?service=co-visa');
  await page.fill('input[name="firstName"]', 'Ana');
  await page.fill('input[name="lastName"]', 'Pérez');
  await page.fill('input[name="phone"]', '+1 809 555 0123');
  await page.click('[data-page-form] button[type="submit"]');
  const text = new URL(await page.locator('[data-wa-link]').getAttribute('href')).searchParams.get('text');
  assert.ok(text.startsWith('Hola, equipo de Fernando OMG Services (FOS):'), text);
  assert.ok(text.includes('Servicio: Visa para Colombia (viaje y estudios)'), text);
  assert.ok(text.endsWith('Enviado desde el sitio web — Español.'));
  assert.ok(await page.locator('[data-wa-link]').innerText().then((t) => t.includes('Continuar en WhatsApp')));
});

await check('Floating WhatsApp button opens the inquiry form', async () => {
  await page.goto(base + '/es/servicios/visa-colombia/');
  const fab = page.locator('.wa-fab__btn');
  assert.ok(await fab.isVisible());
  await fab.click();
  const dlg = page.locator('dialog[data-inquiry-dialog]');
  assert.ok(await dlg.evaluate((d) => d.open));
  assert.equal(await dlg.locator('select[name="service"]').inputValue(), 'co-visa');
  await page.keyboard.press('Escape');
});

await check('Colombia page shows its three TikTok videos and the FOS Colombia account', async () => {
  await page.goto(base + '/fr/services/visa-colombie/');
  assert.equal(await page.locator('#videos .video').count(), 3);
  assert.equal(await page.locator('#videos a[href="https://www.tiktok.com/@foscolombia"]').count(), 1);
  assert.equal(await page.locator('.page-hero .eyebrow img.flag').count(), 1);
});

await check('Home hero lists the six destinations with flags; headline is one colour', async () => {
  await page.goto(base + '/en/');
  assert.equal(await page.locator('.hero__countries li img.flag').count(), 6);
  const colours = await page.locator('.hero__title > span').evaluateAll((els) => [...new Set(els.map((e) => getComputedStyle(e).color))]);
  assert.equal(colours.length, 1, colours.join(' / '));
  assert.ok((await page.locator('.hero__title').innerText()).includes('Clearer steps,'));
});

await check('About: green checks for what we do, red crosses for what we do not', async () => {
  await page.goto(base + '/en/about/');
  const doColour = await page.locator('.role__col--do .role__badge').evaluate((e) => getComputedStyle(e).backgroundColor);
  const dontColour = await page.locator('.role__col--dont .role__badge').evaluate((e) => getComputedStyle(e).backgroundColor);
  assert.equal(doColour, 'rgb(29, 107, 69)');
  assert.equal(dontColour, 'rgb(193, 20, 24)');
});

await check('Top ticker scrolls and its button pauses it', async () => {
  await page.goto(base + '/');
  const track = page.locator('.ticker__track');
  assert.notEqual(await track.evaluate((e) => getComputedStyle(e).animationName), 'none');
  await page.click('[data-ticker-toggle]');
  assert.equal(await track.evaluate((e) => getComputedStyle(e).animationPlayState), 'paused');
  assert.equal(await page.locator('[data-ticker-toggle]').getAttribute('aria-pressed'), 'true');
});

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const m = await mobile.newPage();
await check('Mobile menu opens, traps the page behind and closes with Escape', async () => {
  await m.goto(base + '/');
  const btn = m.locator('[data-menu-toggle]');
  await btn.click();
  assert.equal(await btn.getAttribute('aria-expanded'), 'true');
  await m.waitForTimeout(300);
  const box = await m.locator('[data-mobile-menu]').boundingBox();
  assert.ok(box && box.height > 400, `menu panel height ${box?.height}`);
  assert.ok(await m.locator('[data-mobile-menu] a[href="/fr/contact/"]').first().isVisible());
  assert.equal(await m.evaluate(() => document.getElementById('main')?.hasAttribute('inert')), true);
  await m.keyboard.press('Escape');
  assert.equal(await btn.getAttribute('aria-expanded'), 'false');
  assert.equal(await m.evaluate(() => document.getElementById('main')?.hasAttribute('inert')), false);
});

await check('Mobile: language switch is visible at the top and in the menu', async () => {
  await m.goto(base + '/es/');
  assert.ok(await m.locator('.utility .langs a[hreflang="fr"]').isVisible());
  await m.locator('[data-menu-toggle]').click();
  await m.waitForTimeout(300);
  assert.ok(await m.locator('[data-mobile-menu] .langs a[hreflang="en"]').isVisible());
  await m.keyboard.press('Escape');
});

await check('Mobile: no horizontal overflow on key pages', async () => {
  for (const p of ['/', '/en/', '/es/', '/fr/contact/', '/es/contacto/', '/fr/services/visa-fiance-etats-unis/', '/es/servicios/visa-colombia/', '/fr/a-propos/', '/es/sobre-nosotros/', '/en/resources/', '/es/testimonios/']) {
    await m.goto(base + p);
    // body has overflow-x: hidden, which iOS Safari ignores when zooming out: measure without it.
    await m.addStyleTag({ content: 'html, body { overflow-x: visible !important; }' });
    const over = await m.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.ok(over <= 0, `${p} overflows by ${over}px`);
  }
});

// A Spanish-speaking browser reading the French site is offered the Spanish version (never redirected).
const es = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: 'es-DO' });
const e = await es.newPage();
await check('Browser language: Spanish visitor on a French page is offered the Spanish version', async () => {
  await e.goto(base + '/fr/a-propos/');
  assert.equal(new URL(e.url()).pathname, '/fr/a-propos/');
  const bar = e.locator('[data-lang-suggest]');
  assert.ok(await bar.isVisible());
  assert.equal(await bar.locator('[data-lang-suggest-go]').getAttribute('href'), '/es/sobre-nosotros/');
  assert.ok((await bar.innerText()).includes('español'));
  await bar.locator('[data-lang-suggest-no]').click();
  assert.equal(await bar.isVisible(), false);
  assert.ok((await es.cookies()).some((c) => c.name === 'nf_lang' && c.value === 'fr'));
});
await check('Root is the French homepage itself and never redirects', async () => {
  // A Spanish browser carrying a French cookie: either signal used to redirect the root away.
  await es.clearCookies();
  await es.addCookies([{ name: 'nf_lang', value: 'fr', url: base }]);
  const res = await e.goto(base + '/');
  assert.equal(res.status(), 200);
  await e.waitForTimeout(400);
  assert.equal(new URL(e.url()).pathname, '/', 'the root redirected');
  assert.equal(await e.locator('html').getAttribute('lang'), 'fr');
  assert.ok((await e.locator('link[rel="canonical"]').getAttribute('href')).endsWith('/'), 'canonical is not the root');
  // The real site, not a stub: header, footer and the French hero.
  assert.ok(await e.locator('.site-header').isVisible());
  assert.ok(await e.locator('.site-footer').count());
  assert.match(await e.locator('main h1').innerText(), /démarches/i);
});

await check('Root offers the visitor their own language without forcing it', async () => {
  // Spanish browser, no prior choice: the bar appears, the page stays French at /.
  // An earlier check dismissed the bar, which is remembered for the visit in sessionStorage,
  // so clear that as well to act like a first-time visitor.
  await es.clearCookies();
  await e.goto(base + '/');
  await e.evaluate(() => sessionStorage.clear());
  await e.reload();
  assert.equal(new URL(e.url()).pathname, '/');
  const bar = e.locator('[data-lang-suggest]');
  assert.ok(await bar.isVisible(), 'no language offer on the root');
  assert.equal(await bar.locator('[data-lang-suggest-go]').getAttribute('href'), '/es/');
  await bar.locator('[data-lang-suggest-go]').click();
  await e.waitForURL(/\/es\/$/, { timeout: 5000 });
  assert.equal(await e.locator('html').getAttribute('lang'), 'es');
});

await check('Language switch moves between the three homepages', async () => {
  await es.clearCookies();
  for (const [from, l, expected] of [['/', 'en', '/en/'], ['/en/', 'es', '/es/'], ['/es/', 'fr', '/']]) {
    await e.goto(base + from);
    const link = e.locator(`.utility .langs a[hreflang="${l}"]`).first();
    assert.equal(await link.getAttribute('href'), expected, `${from}: switch to ${l}`);
  }
});

await browser.close();
for (const r of results) console.log(r.join(' — '));
const failed = results.filter((r) => r[0] === 'FAIL').length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exit(failed ? 1 : 0);
