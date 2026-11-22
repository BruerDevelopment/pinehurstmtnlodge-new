// One-off: converts the owner's kitchen guide JPGs to webp in public/photos/rooms/kitchen/guide-photos/.
// Files are sorted by name within each folder and numbered upstairs-01.., downstairs-01.. in that order.
// Prints the sorted source names so src/configs/kitchen-guide.ts can be kept in the same order.
//   node scripts/convert-kitchen-guide.mjs "<path to Kitchen Guides folder>"
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = process.argv[2];
if (!sourceRoot) {
  console.error("Usage: node scripts/convert-kitchen-guide.mjs \"<Kitchen Guides folder>\"");
  process.exit(1);
}

const outDir = path.join(root, "public", "photos", "rooms", "kitchen", "guide-photos");
fs.mkdirSync(outDir, { recursive: true });

const folders = [
  { prefix: "upstairs", dir: "Upstairs Kitchen Guide" },
  { prefix: "downstairs", dir: "Downstairs Kitchen Guide" },
];

for (const { prefix, dir } of folders) {
  const sourceDir = path.join(sourceRoot, dir);
  const names = fs
    .readdirSync(sourceDir)
    .filter((name) => /\.(jpe?g|png)$/i.test(name))
    .sort();

  console.log(`${prefix} (${names.length}):`);
  for (let i = 0; i < names.length; i++) {
    const out = `${prefix}-${String(i + 1).padStart(2, "0")}.webp`;
    await sharp(path.join(sourceDir, names[i]))
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outDir, out));
    console.log(`  ${out}  <-  ${names[i]}`);
  }
}
