// Static audit of the production build in dist/. Usage: npm run build && node tests/audit-build.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const files = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = path.join(dir, f);
    statSync(p).isDirectory() ? walk(p) : files.push(p);
  }
};
walk(dist);

const rel = (p) => '/' + path.relative(dist, p).split(path.sep).join('/');
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const LANGS = ['fr', 'en', 'es'];
const pages = htmlFiles.filter((f) => /\/(fr|en|es)\//.test(rel(f)));
const problems = [];
const warn = (m) => problems.push(m);

const origin = (() => {
  const html = readFileSync(path.join(dist, 'fr/index.html'), 'utf8');
  return new URL(html.match(/<link rel="canonical" href="([^"]+)"/)[1]).origin;
})();

const get = (html, re) => html.match(re)?.[1];
const pageInfo = new Map();
for (const f of pages) {
  const html = readFileSync(f, 'utf8');
  const urlPath = rel(f).replace(/index\.html$/, '');
  const lang = get(html, /<html lang="([a-z]+)"/);
  const canonical = get(html, /<link rel="canonical" href="([^"]+)"/);
  const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  pageInfo.set(urlPath, { html, lang, canonical, alts });

  if (!urlPath.startsWith(`/${lang}/`)) warn(`${urlPath}: lang="${lang}" does not match path`);
  if (canonical !== origin + urlPath) warn(`${urlPath}: canonical ${canonical} is not self-referencing`);
  for (const k of [...LANGS, 'x-default']) if (!alts[k]) warn(`${urlPath}: missing hreflang ${k}`);
  // The homepage cluster points x-default at the neutral root; every other cluster at French.
  const wantXDefault = /^\/(fr|en|es)\/$/.test(urlPath) ? origin + '/' : alts.fr;
  if (alts['x-default'] !== wantXDefault) warn(`${urlPath}: x-default is ${alts['x-default']}, expected ${wantXDefault}`);
  if (!html.includes('<meta name="google" content="notranslate"')) warn(`${urlPath}: missing notranslate meta`);
  if (alts[lang] !== canonical) warn(`${urlPath}: hreflang self-reference mismatch`);
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) warn(`${urlPath}: ${h1s} <h1> elements`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) warn(`${urlPath}: weak <title>`);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) warn(`${urlPath}: weak meta description`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const s = JSON.stringify(data);
      if (/AggregateRating|"review"/i.test(s)) warn(`${urlPath}: rating/review markup present`);
      const org = data['@graph'].find((n) => n['@type'] === 'ProfessionalService');
      if (org.telephone !== '+18493998859') warn(`${urlPath}: schema telephone ${org.telephone}`);
      if (org.geo) warn(`${urlPath}: unverified geo coordinates`);
    } catch (e) {
      warn(`${urlPath}: JSON-LD does not parse (${e.message})`);
    }
  }

  // Internal links and assets must resolve inside dist/.
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^"]*"/g)) {
    const target = m[1];
    if (target.startsWith('//')) continue;
    const candidates = [path.join(dist, target), path.join(dist, target, 'index.html')];
    if (!candidates.some((c) => existsSync(c) && statSync(c).isFile())) warn(`${urlPath}: broken internal link ${target}`);
  }
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(' ')[0];
      if (u.startsWith('/') && !existsSync(path.join(dist, u))) warn(`${urlPath}: missing srcset image ${u}`);
    }
  }
}

// Reciprocal hreflang: the alternate page must point back.
for (const [p, info] of pageInfo) {
  for (const l of LANGS) {
    const altPath = info.alts[l]?.replace(origin, '');
    const other = pageInfo.get(altPath);
    if (!other) warn(`${p}: hreflang ${l} target ${altPath} not built`);
    else if (other.alts[info.lang] !== info.canonical) warn(`${p}: hreflang not reciprocal with ${altPath}`);
  }
}

// The root: one indexable, language-neutral page, the x-default of the homepage cluster.
const rootFile = path.join(dist, 'index.html');
let rootHtml = '';
if (!existsSync(rootFile)) {
  warn('No index.html at the site root');
} else {
  rootHtml = readFileSync(rootFile, 'utf8');
  const alts = Object.fromEntries([...rootHtml.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  if (get(rootHtml, /<link rel="canonical" href="([^"]+)"/) !== origin + '/') warn('/: canonical is not the bare domain');
  for (const l of LANGS) if (alts[l] !== origin + `/${l}/`) warn(`/: hreflang ${l} is ${alts[l]}`);
  if (alts['x-default'] !== origin + '/') warn('/: x-default does not point at the root');
  if (!/<title>[^<]{10,}<\/title>/.test(rootHtml)) warn('/: weak <title>');
  if (!/<meta name="description" content="[^"]{50,}"/.test(rootHtml)) warn('/: weak meta description');
  if ((rootHtml.match(/<h1[\s>]/g)?.length ?? 0) !== 1) warn('/: expected exactly one <h1>');
  if (!rootHtml.includes('<meta property="og:site_name"')) warn('/: missing og:site_name');
  if (!/<link rel="icon"[^>]+href="\/favicon\.png"/.test(rootHtml)) warn('/: does not declare /favicon.png');
  // Direct, crawlable links to each language version, and no redirect of any kind.
  for (const l of LANGS) if (!new RegExp(`href="/${l}/"`).test(rootHtml)) warn(`/: no direct link to /${l}/`);
  if (/http-equiv="refresh"/i.test(rootHtml)) warn('/: still contains a meta refresh');
  if (/location\.replace|location\.href\s*=/.test(rootHtml)) warn('/: still redirects in script');
  try {
    const graph = JSON.parse(rootHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    const site = graph.find((n) => n['@type'] === 'WebSite');
    if (!site) warn('/: no WebSite structured data');
    else {
      if (site.name !== 'Fernando OMG Services') warn(`/: WebSite name is ${site.name}`);
      if (site.alternateName !== 'FOS') warn(`/: WebSite alternateName is ${site.alternateName}`);
      if (site.url !== origin + '/') warn(`/: WebSite url is ${site.url}`);
    }
  } catch (e) {
    warn(`/: JSON-LD does not parse (${e.message})`);
  }
  for (const m of rootHtml.matchAll(/(?:href|src)="(\/[^"#?]*)[^"]*"/g)) {
    const candidates = [path.join(dist, m[1]), path.join(dist, m[1], 'index.html')];
    if (!candidates.some((c) => existsSync(c) && statSync(c).isFile())) warn(`/: broken internal link ${m[1]}`);
  }
}

// Assets referenced from the bundled CSS (fonts above all) must exist. A stylesheet pulled in with
// an @import inside a component's <style> block gets its url() paths rewritten differently, which
// once left the root page asking for /_astro/files/*.woff2 and falling back to a system font.
for (const f of files.filter((x) => x.endsWith('.css'))) {
  const css = readFileSync(f, 'utf8');
  for (const m of css.matchAll(/url\(\s*["']?(\/[^"')]+)["']?\s*\)/g)) {
    if (!existsSync(path.join(dist, m[1]))) warn(`${rel(f)}: missing asset ${m[1]}`);
  }
}

// The favicon Google reads must be square and at least 96px (it asks for a multiple of 48).
{
  const ico = path.join(dist, 'favicon.png');
  if (!existsSync(ico)) warn('favicon.png missing from the build');
  else {
    // PNG IHDR: width and height are big-endian 32-bit integers at byte 16 and byte 20.
    const buf = readFileSync(ico);
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);
    if (w !== h || w % 48 !== 0 || w < 96) warn(`favicon.png is ${w}x${h}; expected a square multiple of 48, at least 96`);
    else console.log(`Favicon: /favicon.png verified at ${w}x${h}.`);
  }
}

// The sitemap must reach every built page and the root, through the index.
{
  const idx = path.join(dist, 'sitemap-index.xml');
  const child = path.join(dist, 'sitemap-0.xml');
  if (!existsSync(idx) || !existsSync(child)) warn('sitemap-index.xml or sitemap-0.xml missing');
  else {
    if (!readFileSync(idx, 'utf8').includes(origin + '/sitemap-0.xml')) warn('sitemap index does not list sitemap-0.xml');
    const locs = [...readFileSync(child, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (!locs.includes(origin + '/')) warn('sitemap does not list the root');
    for (const [urlPath] of pageInfo) if (!locs.includes(origin + urlPath)) warn(`sitemap is missing ${urlPath}`);
    if (locs.length !== pageInfo.size + 1) warn(`sitemap lists ${locs.length} URLs for ${pageInfo.size} pages plus the root`);
    if (locs.some((u) => /\/404\//.test(u))) warn('sitemap lists the 404 page');
    console.log(`Sitemap: ${locs.length} URLs (${pageInfo.size} language pages + the root).`);
  }
}

// Content rules from the brief.
const allText = [...pages.map((f) => readFileSync(f, 'utf8')), rootHtml].join('\n');
const forbidden = [
  [/Kentucky|Bonao/i, 'obsolete office location'],
  [/564-4156|8495644156/, 'historical Canada-only number'],
  // Assembled from parts so the owner's payment number is not stored here as one searchable string.
  [new RegExp(['270', '948', '1130'].join('-?') + '|Zelle', 'i'), 'payment contact on public pages'],
  [/09:00|9 h\s*[–-]\s*16 h|9am\s*[–-]\s*4pm/i, 'unconfirmed messaging hours'],
  [/example\.com/i, 'placeholder domain'],
  [/24\s*\/\s*7|en ligne maintenant|online now/i, 'availability claim'],
  [/100\s*%\s*(de )?(succès|success|réussite)/i, 'success-rate claim'],
  [/\bTBD\b|coming soon|bientôt disponible|lorem/i, 'placeholder text'],
  [/visa (a été )?délivré grâce|visa issued thanks/i, 'outcome promise'],
];
for (const [re, label] of forbidden) if (re.test(allText)) warn(`Forbidden content found: ${label} (${re})`);
if (!/\+1 \(849\) 399-8859/.test(allText)) warn('Main phone missing');
if (!/Calle Penetracion 6, Buena Vista 1ra, Villa Mella/.test(allText)) warn('Address missing');

// Each language version must not show interface copy from another one (visible text only).
const visibleText = (html) =>
  (html.split('<body')[1] ?? '')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
const leaks = {
  fr: ['Request a consultation', 'Solicitar una consulta', 'Watch on TikTok', 'Ver en TikTok', 'Frequently asked questions', 'Preguntas frecuentes'],
  en: ['Demander une consultation', 'Solicitar una consulta', 'Voir sur TikTok', 'Ver en TikTok', 'Questions fréquentes', 'Preguntas frecuentes'],
  es: ['Demander une consultation', 'Request a consultation', 'Voir sur TikTok', 'Watch on TikTok', 'Questions fréquentes', 'Frequently asked questions', 'Comment nous contacter', 'How to contact us'],
};
for (const [p, info] of pageInfo) {
  const text = visibleText(info.html);
  for (const phrase of leaks[info.lang] ?? []) if (text.includes(phrase)) warn(`${p}: shows "${phrase}" from another language`);
}

// Private/original assets must not ship.
for (const f of files) {
  const r = rel(f);
  if (/Screenshot|proof|testimony|approved|happy client|official logo |\.\.\/|master-prompt|PENDING|SOURCE-LOG/i.test(r)) warn(`Private or original file in build: ${r}`);
}

// Indexing controls.
const draft = !/User-agent: \*\nAllow/.test(readFileSync(path.join(dist, 'robots.txt'), 'utf8'));
const noindexCount = pages.filter((f) => readFileSync(f, 'utf8').includes('name="robots" content="noindex')).length;
console.log(`Build mode: ${draft ? 'draft (noindex)' : 'launch (indexable)'}; origin ${origin}`);
if (draft && noindexCount !== pages.length) warn(`Draft build but only ${noindexCount}/${pages.length} pages are noindex`);
if (!draft && noindexCount > 0) warn(`Launch build still has ${noindexCount} noindex pages`);
const rootNoindex = rootHtml.includes('name="robots" content="noindex');
if (draft && !rootNoindex) warn('Draft build but the root is not noindex');
if (!draft && rootNoindex) warn('Launch build but the root is noindex');

// Rough content length per service/resource page (main column text).
const lengths = [];
for (const [p, info] of pageInfo) {
  if (!/\/(services|servicios|ressources|resources|recursos)\/[^/]+\/$/.test(p)) continue;
  const main = info.html.split('<main')[1]?.split('</main>')[0] ?? '';
  const text = main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  lengths.push([p, text.split(/\s+/).filter(Boolean).length]);
}
lengths.sort((a, b) => a[1] - b[1]);
console.log(`Pages audited: ${pages.length}. Word counts (whole <main>, incl. shared blocks): min ${lengths[0][1]} (${lengths[0][0]}), max ${lengths.at(-1)[1]}`);

if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of [...new Set(problems)]) console.log(' - ' + p);
  process.exit(1);
}
console.log('All build checks passed.');
