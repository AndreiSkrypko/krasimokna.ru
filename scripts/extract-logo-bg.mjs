import sharp from "sharp";
import { statSync } from "node:fs";

const src =
  process.argv[2] ??
  "C:/Users/sundonk/.cursor/projects/c-Users-sundonk-cursor-krasimokna-by/assets/c__Users_sundonk_AppData_Roaming_Cursor_User_workspaceStorage_e124cdcb6f720981a84d43d23fba6c78_images_image-f11aeffc-1fa9-40e0-8bd9-c77af01ba163.png";
const dst =
  process.argv[3] ?? "C:/Users/sundonk/.cursor/krasimokna.by/public/logo-extracted.webp";

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  if ((lum > 205 && sat < 40) || (lum > 175 && sat < 18)) {
    data[i + 3] = 0;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).webp({ quality: 88, alphaQuality: 100 }).toFile(dst);

console.log(dst, statSync(dst).size, `${info.width}x${info.height}`);
