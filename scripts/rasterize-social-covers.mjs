// Renders the SVG sources in public/ to PNGs in out/, after `next build` (the static export clears and recreates out/).
//   - Social covers: public/photos/social_covers/*.svg -> 1200x627 PNGs (link previews need PNG/JPG).
//   - Map icons:     public/map/*.svg -> 56x56 PNGs (Leaflet markers use PNG).
// See the "postbuild" script in package.json and the GitHub Actions workflow.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const jobs = [
  {
    label: "social cover",
    sourceDir: path.join(root, "public", "photos", "social_covers"),
    outDir: path.join(root, "out", "photos", "social_covers"),
    width: 1200,
    height: 627,
  },
  {
    label: "map icon",
    sourceDir: path.join(root, "public", "map"),
    outDir: path.join(root, "out", "map"),
    width: 56,
    height: 56,
  },
];

for (const job of jobs) {
  fs.mkdirSync(job.outDir, { recursive: true });
  const files = fs.readdirSync(job.sourceDir).filter((file) => file.endsWith(".svg"));

  for (const file of files) {
    const name = path.basename(file, ".svg");
    const out = path.join(job.outDir, `${name}.png`);
    await sharp(fs.readFileSync(path.join(job.sourceDir, file)), { density: 96 })
      .resize(job.width, job.height)
      .png()
      .toFile(out);
    console.log(`${job.label}: ${file} -> ${path.relative(root, out)}`);
  }
}
