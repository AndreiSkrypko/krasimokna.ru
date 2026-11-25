import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, extname, basename } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const roots = [join(ROOT, "src/assets"), join(ROOT, "public")];
const skipNames = new Set(["favicon.svg", "logo-mark.svg"]);
const rasterExt = new Set([".jpg", ".jpeg", ".png"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (skipNames.has(name)) {
      continue;
    } else if (rasterExt.has(extname(name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

const files = roots.flatMap((dir) => walk(dir));
let saved = 0;

for (const input of files) {
  const output = input.replace(/\.(jpe?g|png)$/i, ".webp");
  if (output === input) continue;

  const meta = await sharp(input).metadata();
  const hasAlpha = meta.hasAlpha === true;

  await sharp(input)
    .webp({
      quality: hasAlpha ? 88 : 82,
      effort: 4,
      alphaQuality: hasAlpha ? 100 : undefined,
    })
    .toFile(output);

  const before = statSync(input).size;
  const after = statSync(output).size;
  saved += before - after;
  unlinkSync(input);
  console.log(`${basename(input)} → ${basename(output)} (${Math.round((1 - after / before) * 100)}% smaller)`);
}

console.log(`Converted ${files.length} files, ~${Math.round(saved / 1024)} KiB saved vs originals.`);
