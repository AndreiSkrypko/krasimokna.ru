import { MARKET, SISTER_SITE_URL } from "./site-config";

/** Canonical public URL for Open Graph / JSON-LD (override via VITE_SITE_URL). */
export { SISTER_SITE_URL } from "./site-config";

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://krasimokna.ru";

export const SITE_NAME = "Красим окна";
export const SITE_TAGLINE = "Реставрация дерева · покраска ПВХ и алюминия";
export const SITE_DESCRIPTION =
  "Команда из Беларуси: реставрация деревянных окон, покраска ПВХ и алюминия без демонтажа, сервис окон — Москва и Московская область.";

export const OG_IMAGE_PATH = "/og-image.webp";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** hreflang для пары сайтов BY + RU — снижает риск склейки как дублей */
export function regionalAlternateLinks(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const ruUrl = absoluteUrl(normalized);
  const byUrl = `${SISTER_SITE_URL}${normalized === "/" ? "/" : normalized}`;
  return [
    { rel: "alternate", hrefLang: MARKET.hreflangSelf, href: ruUrl },
    { rel: "alternate", hrefLang: MARKET.hreflangSister, href: byUrl },
    { rel: "alternate", hrefLang: "x-default", href: ruUrl },
  ] as const;
}

export function defaultOpenGraphMeta(overrides?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}) {
  const title = overrides?.title ?? `${SITE_NAME} — реставрация и покраска окон в Москве и МО`;
  const description = overrides?.description ?? SITE_DESCRIPTION;
  const path = overrides?.path ?? "/";
  const url = absoluteUrl(path);
  const image = absoluteUrl(overrides?.image ?? OG_IMAGE_PATH);

  return [
    { title },
    { name: "description", content: description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: MARKET.localeOg },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: "image/webp" },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image:alt", content: `${SITE_NAME} — ${SITE_TAGLINE}, ${MARKET.regionLabel}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: `${SITE_NAME} — ${MARKET.regionLabel}` },
  ] as const;
}

export function buildPageHead(overrides?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  extraMeta?: readonly { name?: string; property?: string; content: string }[];
}) {
  const path = overrides?.path ?? "/";
  return {
    meta: [...defaultOpenGraphMeta(overrides), ...(overrides?.extraMeta ?? [])],
    links: [...regionalAlternateLinks(path)],
  };
}
