// Captures the opening poster frame of each curated TikTok video by rendering TikTok's official
// embed player once in local headless Chrome, and saves it as src/assets/videos/<videoId>.jpg.
// The site then shows these self-hosted covers; TikTok itself only loads when a visitor presses play.
// Usage: node scripts/capture-video-covers.mjs [--force] [videoId ...]
// Review every saved image before publishing (client faces, documents, private details).
import { chromium } from 'playwright-core';
import sharp from 'sharp';
sharp.cache(false);
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'src/assets/videos');
mkdirSync(out, { recursive: true });

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.filter((a) => /^\d+$/.test(a));
const source = readFileSync(path.join(root, 'src/content/social-proof.ts'), 'utf8');
const ids = only.length ? only : [...new Set([...source.matchAll(/tt(?:Colombia)?\('(\d+)'\)/g)].map((m) => m[1]))];

// Regions to pixelate permanently (coordinates on the 540px-wide saved cover), e.g. visible documents.
const redactions = {
  // "Visa Mexique": the open passport/visa sticker held up to the camera.
  '7691441369369431317': [{ left: 100, top: 230, width: 320, height: 225 }],
  // FOS Colombia "Visa Colombie": screenshot of a client's visa approval (names, nationality, dates).
  '7677959007834852629': [{ left: 0, top: 480, width: 136, height: 116 }],
};

async function pixelate(file, regions) {
  let buf = readFileSync(file); // read into memory first: on Windows sharp keeps the input file open
  for (const r of regions) {
    const small = await sharp(buf).extract(r).resize(Math.round(r.width / 18), Math.round(r.height / 18)).toBuffer();
    const patch = await sharp(small).resize(r.width, r.height, { kernel: 'nearest' }).toBuffer();
    buf = await sharp(buf).composite([{ input: patch, left: r.left, top: r.top }]).toBuffer();
  }
  await sharp(buf).jpeg({ quality: 82, mozjpeg: true }).toFile(file);
}

const executablePath =['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const browser = await chromium.launch({ executablePath, headless: true });
const ctx = await browser.newContext({ viewport: { width: 405, height: 720 }, deviceScaleFactor: 2, locale: 'fr-FR' });
const page = await ctx.newPage();

for (const id of ids) {
  const file = path.join(out, `${id}.jpg`);
  if (existsSync(file) && !force) {
    console.log('skip (exists)', id);
    continue;
  }
  try {
    await page.goto(`https://www.tiktok.com/player/v1/${id}?controls=0&progress_bar=0&play_button=0&volume_control=0&fullscreen_button=0&timestamp=0&music_info=0&description=0&rel=0&native_context_menu=0&closed_caption=0`, {
      waitUntil: 'networkidle',
      timeout: 45000,
    });
    // Wait for the poster image or the first video frame to paint.
    await page.waitForFunction(
      () => {
        const v = document.querySelector('video');
        const img = [...document.images].find((i) => i.naturalWidth > 200);
        return (v && v.readyState >= 2) || !!img;
      },
      null,
      { timeout: 20000 }
    );
    await page.waitForTimeout(1500);
    // Keep only the picture: hide TikTok's overlays (avatar, counters, buttons), which would date quickly.
    await page.addStyleTag({
      content: `* { visibility: hidden !important; } video, video *, img[data-cover] { visibility: visible !important; } html, body { background: #000 !important; }`,
    });
    await page.evaluate(() => {
      const big = [...document.images].filter((i) => i.naturalWidth > 200);
      const video = document.querySelector('video');
      if (!video || video.readyState < 2) {
        big.forEach((i) => i.setAttribute('data-cover', ''));
      }
    });
    await page.waitForTimeout(300);
    const shot = await page.screenshot({ type: 'png' });
    await sharp(shot).resize({ width: 540 }).jpeg({ quality: 82, mozjpeg: true }).toFile(file);
    if (redactions[id]) await pixelate(file, redactions[id]);
    console.log('saved', id, redactions[id] ? '(redacted)' : '');
  } catch (e) {
    console.log('FAILED', id, e.message.split('\n')[0]);
  }
}
await browser.close();
