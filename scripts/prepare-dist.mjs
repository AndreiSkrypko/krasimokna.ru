import fs from "node:fs";
import path from "node:path";

import { writeSeoFiles } from "./generate-seo.mjs";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const uploadDir = path.join(root, "dist");
const stagingDir = path.join(root, ".dist-staging");

function hasIndexHtml(dir) {
  return fs.existsSync(path.join(dir, "index.html"));
}

const source = [clientDir, path.join(root, ".output", "public"), path.join(root, ".vercel", "output", "static")].find(
  (dir) => hasIndexHtml(dir),
);

if (!source) {
  console.error("[prepare-dist] Не найден index.html после сборки.");
  console.error("[prepare-dist] Ожидается dist/client/index.html (npm run build с DEPLOY_TARGET=static).");
  process.exit(1);
}

fs.rmSync(stagingDir, { recursive: true, force: true });
fs.cpSync(source, stagingDir, { recursive: true });
fs.rmSync(uploadDir, { recursive: true, force: true });
fs.cpSync(stagingDir, uploadDir, { recursive: true });
fs.rmSync(stagingDir, { recursive: true, force: true });

writeSeoFiles(uploadDir);
writeSeoFiles(path.join(root, "public"));

console.log(`[prepare-dist] Готово: dist/ (${path.relative(root, source)} → корень dist/) — заливайте на hoster.by`);
