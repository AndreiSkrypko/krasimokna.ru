/** Суффикс -{hash}.ext от Vite: в hash есть цифра, иначе это часть имени (painting, before). */
export function stripViteContentHash(fileName: string): string {
  const m = fileName.match(/^(.+)-([A-Za-z0-9_-]{6,12})\.([a-z0-9]+)$/i);
  if (!m) {
    return fileName;
  }
  const [, base, hash, ext] = m;
  if (!/[0-9]/.test(hash)) {
    return fileName;
  }
  return `${base}.${ext}`;
}

/** Единый URL ассетов в dev: SSR отдаёт /src/..., клиент — /assets/... */
export function viteAssetUrl(url: string): string {
  if (!import.meta.env.DEV) {
    return url;
  }

  if (url.startsWith("/src/") || url.startsWith("/window-")) {
    return url;
  }

  const fileName = url.split("/").pop() ?? url;
  const plain = stripViteContentHash(fileName);

  if (plain === "window-painting-hero-ru.webp") {
    return "/window-painting-hero-ru.webp";
  }

  if (plain.startsWith("service-") || plain === "window-painting-hero.webp") {
    return `/src/assets/${plain}`;
  }

  return `/src/assets/portfolio/${plain}`;
}