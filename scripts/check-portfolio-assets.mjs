import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const t = readFileSync("src/data/portfolio.ts", "utf8");
const imports = [...t.matchAll(/from "\.\.\/assets\/portfolio\/([^"]+)"/g)].map((m) => m[1]);
const missing = imports.filter((f) => !existsSync(join("src/assets/portfolio", f)));
console.log("imports", imports.length, "missing", missing.length);
if (missing.length) console.log(missing);
