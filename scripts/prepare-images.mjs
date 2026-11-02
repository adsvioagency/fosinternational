// Builds the web-safe image derivatives from the original files supplied by the client.
// Originals live one level above this project and are never modified or copied wholesale.
// Run with: npm run images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.resolve(root, '../..');
const OUT = path.resolve(root, '../src/assets/photos');
const PUBLIC = path.resolve(root, '../public');

await mkdir(OUT, { recursive: true });
await mkdir(PUBLIC, { recursive: true });

const src = (name) => path.join(SOURCE, name);
const jpg = (img, q = 86) => img.jpeg({ quality: q, mozjpeg: true });

// Irreversibly pixelates a region: the exported file contains only the coarse pixels.
async function pixelateRegion(input, region, block = 14) {
  const base = sharp(input);
  const meta = await base.metadata();
  // sharp applies a single resize per pipeline, so downscale and upscale in separate passes.
  const small = await sharp(input)
    .extract(region)
    .resize(Math.max(1, Math.round(region.width / block)), Math.max(1, Math.round(region.height / block)))
    .toBuffer();
  const patch = await sharp(small).resize(region.width, region.height, { kernel: 'nearest' }).toBuffer();
  return sharp(input)
    .composite([{ input: patch, left: region.left, top: region.top }])
    .resize(meta.width, meta.height);
}

async function pixelateRegions(input, regions, block = 14) {
  let buf = await sharp(input).png().toBuffer();
  for (const r of regions) buf = await (await pixelateRegion(buf, r, block)).png().toBuffer();
  return sharp(buf);
}

const jobs = [
  {
    out: 'fernando-portrait-blue.jpg',
    run: () => jpg(sharp(src('Polished Portrait in Blue Suit.png'))),
  },
  {
    out: 'fernando-portrait-office.jpg',
    run: () =>
      jpg(sharp(src('Confident Corporate Portrait with Flags.png')).extract({ left: 130, top: 40, width: 956, height: 1195 })),
  },
  {
    // The child's face is already covered by an emoji in the supplied file; the covering is kept as-is.
    out: 'fernando-with-family.jpg',
    run: () => jpg(sharp(src('Pictures Happy Clients/happy clients.png'))),
  },
  {
    out: 'fernando-with-client-car.jpg',
    run: () => jpg(sharp(src('Pictures Happy Clients/happy client2.png'))),
  },
  {
    // The document held by the client is pixelated (contents removed) and the partial
    // person on the left edge is cropped out.
    out: 'fernando-with-client-document.jpg',
    run: async () => {
      const cropped = await sharp(src('Pictures Happy Clients/Screenshot 2026-10-18 200221.png'))
        .extract({ left: 24, top: 120, width: 355, height: 685 })
        .png()
        .toBuffer();
      const redacted = await (await pixelateRegion(cropped, { left: 24, top: 240, width: 166, height: 204 }, 9)).png().toBuffer();
      return jpg(sharp(redacted));
    },
  },
  {
    out: 'logo-official.jpg',
    run: () => jpg(sharp(src('official logo .jpg')), 92),
  },

  // ---- Team headshots (FOS Team folder, supplied 20 Oct 2026) ----
  ...[
    ['team-fernand-theodore.jpg', 'FOS Team/Fernand Theodor (main).png'],
    ['team-lovely-aldian.jpg', 'FOS Team/Lovely Aldian .. .png'],
    ['team-roodelyne-beausejour.jpg', 'FOS Team/Roodelyne Beauséjour ...png'],
    ['team-alex-belony.jpg', 'FOS Team/Ing. Alex Belony.png'],
    ['team-edline-alexandre.jpg', 'FOS Team/Edline Alexandre ....png'],
  ].map(([out, file]) => ({ out, run: () => jpg(sharp(src(file)).resize({ width: 960 }), 86) })),

  // ---- Client photos (Pictures Happy Clients folder; clients agreed to sharing) ----
  {
    out: 'client-embassy-trio.jpg',
    run: () => jpg(sharp(src('Pictures Happy Clients/to add on section Words from people we have helped.jpeg'))),
  },
  {
    // Embassy letter held up: pixelated.
    out: 'client-trio-letter.jpg',
    run: async () =>
      jpg(await pixelateRegions(src('Pictures Happy Clients/WhatsApp Image 2026-10-19 at 18.37.07 (1).jpeg'), [{ left: 262, top: 444, width: 125, height: 160 }], 10)),
  },
  {
    // Embassy letter held up: pixelated.
    out: 'client-duo-letter.jpg',
    run: async () =>
      jpg(await pixelateRegions(src('Pictures Happy Clients/WhatsApp Image 2026-10-19 at 18.37.07 (2).jpeg'), [{ left: 282, top: 408, width: 180, height: 210 }], 12)),
  },
  {
    // Residence cards held up by four people (incl. one in the background): pixelated.
    out: 'client-group-cards.jpg',
    run: async () =>
      jpg(
        await pixelateRegions(
          src('Pictures Happy Clients/WhatsApp Image 2026-10-19 at 18.49.15 (1).jpeg'),
          [
            { left: 478, top: 632, width: 62, height: 50 },
            { left: 752, top: 598, width: 58, height: 48 },
            { left: 1006, top: 648, width: 62, height: 48 },
            { left: 1462, top: 545, width: 62, height: 40 },
          ],
          10
        )
      ),
  },
  {
    out: 'client-airport-selfie.jpg',
    run: () => jpg(sharp(src('Pictures Happy Clients/WhatsApp Image 2026-10-19 at 18.49.15 (3).jpeg'))),
  },
  {
    // Embassy letter held up: pixelated.
    out: 'client-car-letter.jpg',
    run: async () =>
      jpg(await pixelateRegions(src('Pictures Happy Clients/WhatsApp Image 2026-10-19 at 18.49.15.jpeg'), [{ left: 15, top: 400, width: 370, height: 600 }], 16)),
  },
  {
    // Frame from a social video: hashtag stickers and app interface cropped away.
    out: 'client-video-moment.jpg',
    run: () => jpg(sharp(src('Pictures Happy Clients/Screenshot 2026-10-18 200541.png')).extract({ left: 0, top: 312, width: 636, height: 369 })),
  },
  {
    // Emblem-only crop of the official logo (no redrawing) for the compact header mark.
    out: 'logo-emblem.png',
    run: () =>
      sharp(src('official logo .jpg'))
        .extract({ left: 245, top: 118, width: 570, height: 524 })
        .resize({ height: 160 })
        .png({ compressionLevel: 9 }),
  },
];

for (const job of jobs) {
  const pipeline = await job.run();
  await pipeline.toFile(path.join(OUT, job.out));
  console.log('wrote', job.out);
}

// Social sharing image (1200x630): official logo + portrait on the logo's warm white.
{
  const logo = await sharp(src('official logo .jpg')).resize(560, 560).toBuffer();
  const portrait = await sharp(src('Polished Portrait in Blue Suit.png'))
    .resize(600, 630, { fit: 'cover', position: 'top' })
    .toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#F9F8F6' } })
    .composite([
      { input: logo, left: 20, top: 35 },
      { input: portrait, left: 600, top: 0 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(PUBLIC, 'og-default.jpg'));
  console.log('wrote og-default.jpg');
}

// Favicon / touch icon from the emblem crop.
{
  const emblem = await sharp(src('official logo .jpg')).extract({ left: 245, top: 105, width: 570, height: 570 }).toBuffer();
  await sharp(emblem).resize(180, 180, { fit: 'contain', background: '#F9F8F6' }).png().toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
  await sharp(emblem).resize(48, 48, { fit: 'contain', background: '#F9F8F6' }).png().toFile(path.join(PUBLIC, 'favicon.png'));
  console.log('wrote icons');
}
