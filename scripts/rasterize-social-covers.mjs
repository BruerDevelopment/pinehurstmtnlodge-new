// Renders the social cover SVGs in public/photos/social_covers to 1200x627 PNGs in out/photos/social_covers.
// Social platforms need PNG/JPG for link previews, so the PNGs are the files the page tags point to.
// Runs after `next build`, because the static export clears and recreates out/
// (see the "postbuild" script and the GitHub Actions workflow).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "public", "photos", "social_covers");
const outDir = path.join(root, "out", "photos", "social_covers");
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith(".svg"));

for (const file of files) {
  const name = path.basename(file, ".svg");
  const out = path.join(outDir, `${name}.png`);
  await sharp(fs.readFileSync(path.join(sourceDir, file)), { density: 96 })
    .resize(1200, 627)
    .png()
    .toFile(out);
  console.log(`social cover: ${file} -> ${path.relative(root, out)}`);
}
