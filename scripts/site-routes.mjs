/** Единый список публичных URL (sitemap + prerender). */
export const SITE_URL = "https://krasimokna.ru";

export const SERVICE_SLUGS = [
  "pokraska",
  "pokraska-kondicionerov",
  "restavratsiya-dereva",
  "steklopakety",
  "furnitura",
  "klining-okon",
  "radiatory",
  "vorota",
];

export const LEGAL_PATHS = [
  "/pravovaya-informaciya",
  "/politika-personalnyh-dannyh",
  "/soglasie-na-obrabotku-personalnyh-dannyh",
  "/politika-konfidencialnosti",
  "/politika-cookie",
  "/polzovatelskoe-soglashenie",
];

export function getPublicPaths() {
  return [
    "/",
    "/portfolio",
    "/uslugi",
    ...SERVICE_SLUGS.map((slug) => `/uslugi/${slug}`),
    ...LEGAL_PATHS,
  ];
}

/** Редиректы со старых URL — добавьте после публикации, если были другие адреса на .ru */
export const LEGACY_REDIRECTS = [];
