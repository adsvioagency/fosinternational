// Screenshots of the inquiry flow states on mobile (error summary, prepared message) and the open mobile menu.
// WhatsApp requests are blocked. Usage: node scripts/form-states.mjs [baseUrl] [outDir]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:4321';
const out = process.argv[3] || 'docs/screenshots';
mkdirSync(out, { recursive: true });
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const browser = await chromium.launch({ executablePath, headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
await ctx.route(/wa\.me|whatsapp\.com/, (r) => r.abort());
const page = await ctx.newPage();

await page.goto(base + '/fr/services/visa-fiance-etats-unis/');
await page.click('.mobile-bar a[data-inquiry]');
await page.click('dialog [type="submit"]');
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(out, 'mobile-fr-form-errors.png') });

const dlg = page.locator('dialog');
await dlg.locator('[name="firstName"]').fill('Marie');
await dlg.locator('[name="lastName"]').fill('Jean');
await dlg.locator('[name="phone"]').fill('+1 809 555 0123');
await dlg.locator('[name="message"]').fill('J’ai reçu un avis d’approbation de la pétition et je voudrais comprendre la suite.');
await dlg.locator('[type="submit"]').click();
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(out, 'mobile-fr-message-ready.png') });

await page.goto(base + '/en/');
await page.click('[data-menu-toggle]');
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(out, 'mobile-en-menu.png') });

await browser.close();
console.log('saved to', out);
