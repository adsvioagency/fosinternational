// Splits a tall screenshot into readable slices: node scripts/slice.mjs file.png [sliceHeight]
import sharp from 'sharp';
const [file, h = '1000'] = process.argv.slice(2);
const meta = await sharp(file).metadata();
const step = Number(h);
for (let top = 0, i = 0; top < meta.height; top += step, i++) {
  const height = Math.min(step, meta.height - top);
  await sharp(file).extract({ left: 0, top, width: meta.width, height }).toFile(file.replace(/\.png$/, `.s${i}.png`));
}
console.log(Math.ceil(meta.height / step), 'slices');
