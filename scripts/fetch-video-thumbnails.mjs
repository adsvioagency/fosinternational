// Downloads the public cover image of each curated TikTok video (via TikTok's official oEmbed
// endpoint) and stores an optimized copy in src/assets/videos/<videoId>.jpg.
// TikTok's own thumbnail URLs expire, so the site self-hosts these covers instead of hotlinking.
// Run with: npm run thumbnails   (re-run when videos are added; review each image before publishing)
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'src/assets/videos');
mkdirSync(out, { recursive: true });

const source = readFileSync(path.join(root, 'src/content/social-proof.ts'), 'utf8');
const ids = [...new Set([...source.matchAll(/tt\('(\d+)'\)/g)].map((m) => m[1]))];
const force = process.argv.includes('--force');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const id of ids) {
  const file = path.join(out, `${id}.jpg`);
  if (existsSync(file) && !force) {
    console.log('skip (exists)', id);
    continue;
  }
  const videoUrl = `https://www.tiktok.com/@fernandoomgservicessrl/video/${id}`;
  let meta = null;
  for (let attempt = 1; attempt <= 4 && !meta; attempt++) {
    try {
      const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`);
      const json = await res.json();
      if (json.thumbnail_url) meta = json;
      else throw new Error(json.message || 'no thumbnail');
    } catch (e) {
      console.log(`retry ${attempt} for ${id}: ${e.message}`);
      await sleep(3000 * attempt);
    }
  }
  if (!meta) {
    console.log('FAILED', id, '(card keeps the branded placeholder)');
    continue;
  }
  const img = await fetch(meta.thumbnail_url);
  if (!img.ok || !(img.headers.get('content-type') || '').startsWith('image/')) {
    console.log('FAILED download', id, img.status);
    continue;
  }
  const buf = Buffer.from(await img.arrayBuffer());
  await sharp(buf).resize({ width: 720, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(file);
  console.log('saved', id, `${meta.thumbnail_width}x${meta.thumbnail_height}`);
  await sleep(2500);
}
