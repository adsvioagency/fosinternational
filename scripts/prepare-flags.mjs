// Rasterises the destination flags (flag-icons 7.5.0, MIT — see scripts/flags/LICENSE-flag-icons.txt)
// into small PNGs. The Dominican and Mexican SVGs carry detailed coats of arms (40–85 KB each),
// far too heavy to inline at chip size, so the site uses these 4:3 bitmaps through astro:assets.
// Usage: node scripts/prepare-flags.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const srcDir = path.resolve('scripts/flags');
const outDir = path.resolve('src/assets/flags');
for (const file of (await readdir(srcDir)).filter((f) => f.endsWith('.svg'))) {
  const out = path.join(outDir, file.replace('.svg', '.png'));
  await sharp(path.join(srcDir, file), { density: 300 }).resize(480, 360).png({ compressionLevel: 9 }).toFile(out);
  console.log(path.relative(process.cwd(), out));
}
