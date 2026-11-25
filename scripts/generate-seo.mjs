import fs from "node:fs";
import path from "node:path";

import { getPublicPaths, SITE_URL } from "./site-routes.mjs";

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toAbsoluteUrl(routePath) {
  if (routePath === "/") return `${SITE_URL}/`;
  const normalized = routePath.endsWith("/") ? routePath.slice(0, -1) : routePath;
  return `${SITE_URL}${normalized}`;
}

function priorityFor(routePath) {
  if (routePath === "/") return "1.0";
  if (routePath === "/portfolio" || routePath === "/uslugi") return "0.9";
  if (routePath.startsWith("/uslugi/")) return "0.8";
  if (routePath.startsWith("/politika") || routePath.startsWith("/soglasie") || routePath === "/pravovaya-informaciya" || routePath === "/polzovatelskoe-soglashenie") {
    return "0.4";
  }
  return "0.6";
}

function changefreqFor(routePath) {
  if (routePath === "/") return "weekly";
  if (routePath.startsWith("/uslugi")) return "monthly";
  return "yearly";
}

export function buildRobotsTxt() {
  return `# https://krasimokna.ru
User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Yandex
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export function buildSitemapXml({ lastmod = new Date().toISOString().slice(0, 10) } = {}) {
  const urls = getPublicPaths()
    .map((routePath) => {
      const loc = escapeXml(toAbsoluteUrl(routePath));
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(routePath)}</changefreq>
    <priority>${priorityFor(routePath)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function writeSeoFiles(targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "robots.txt"), buildRobotsTxt(), "utf8");
  fs.writeFileSync(path.join(targetDir, "sitemap.xml"), buildSitemapXml(), "utf8");
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("generate-seo.mjs")) {
  const out = process.argv[2] ?? path.join(process.cwd(), "public");
  writeSeoFiles(out);
  console.log(`[generate-seo] robots.txt + sitemap.xml → ${out}`);
}
