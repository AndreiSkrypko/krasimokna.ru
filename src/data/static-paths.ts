import { getPublicPaths, LEGAL_PATHS, SERVICE_SLUGS } from "../../scripts/site-routes.mjs";

/** Пути для статической prerender-сборки (hoster.by и др.) */
export const serviceSlugs = SERVICE_SLUGS;

export const legalPaths = LEGAL_PATHS;

export const staticPrerenderPaths = getPublicPaths();
