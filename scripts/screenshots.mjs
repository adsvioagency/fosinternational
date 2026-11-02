// Full-page screenshots of key pages at several widths using the locally installed Chrome/Edge.
// Usage: node scripts/screenshots.mjs [baseUrl] [outDir] [path1,path2,...] [widths]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:4321';
const out = process.argv[3] || 'screenshots';
const paths = (process.argv[4] || '/fr/').split(',');
const widths = (process.argv[5] || '390,1440').split(',').map(Number);

const candidates = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];
const executablePath = candidates.find((p) => existsSync(p));

await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
for (const w of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 768 ? 844 : 900 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible'));
      // Scroll through so lazy images load, then return to the top.
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      await new Promise((r) => setTimeout(r, 1200));
      window.scrollTo(0, 0);
      // Wait for images, but not forever: carousel images off to the side may never be requested.
      const loads = Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)))));
      await Promise.race([loads, new Promise((r) => setTimeout(r, 4000))]);
    });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const name = (p.replace(/\//g, '_').replace(/^_|_$/g, '') || 'root') + `-${w}.png`;
    await page.screenshot({ path: path.join(out, name), fullPage: true });
    console.log(name, overflow > 0 ? `OVERFLOW ${overflow}px` : 'ok');
  }
  await ctx.close();
}
await browser.close();
