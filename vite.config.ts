import fs from "node:fs";
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, type Plugin, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { staticPrerenderPaths } from "./src/data/static-paths";

/** В dev клиент ждёт /assets/*, SSR — /src/assets/*; выравниваем URL при запросе. */
function devClientAssetPaths(): Plugin {
  return {
    name: "dev-client-asset-paths",
    apply: "serve",
    configureServer(server) {
      const root = process.cwd();

      server.middlewares.use((req, _res, next) => {
        const raw = req.url ?? "";
        const qIndex = raw.indexOf("?");
        const pathname = qIndex === -1 ? raw : raw.slice(0, qIndex);
        const search = qIndex === -1 ? "" : raw.slice(qIndex);

        if (!pathname.startsWith("/assets/")) {
          next();
          return;
        }

        const fileName = decodeURIComponent(pathname.slice("/assets/".length));
        const target =
          resolveSrcAsset(root, fileName) ??
          resolveSrcAsset(root, stripViteHash(fileName));

        if (target) {
          req.url = target + search;
        }
        next();
      });
    },
  };
}

function stripViteHash(fileName: string): string {
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

function resolveSrcAsset(root: string, fileName: string): string | null {
  if (!fileName) {
    return null;
  }
  const candidates = [
    path.join(root, "src", "assets", "portfolio", fileName),
    path.join(root, "src", "assets", fileName),
    path.join(root, "public", fileName),
  ];
  for (const abs of candidates) {
    if (fs.existsSync(abs)) {
      const rel = path.relative(path.join(root, "src"), abs).split(path.sep).join("/");
      return `/src/${rel}`;
    }
  }
  return null;
}

export default defineConfig(({ command }) => {
  const deployTarget = process.env.DEPLOY_TARGET ?? "static";
  const staticHosting = deployTarget === "static";

  const plugins: PluginOption[] = [
    ...(command === "serve" ? [devClientAssetPaths()] : []),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    ...tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
      ...(command === "build" && staticHosting
        ? {
            prerender: {
              enabled: true,
              crawlLinks: true,
              autoStaticPathsDiscovery: true,
              pages: staticPrerenderPaths.map((pagePath) => ({
                path: pagePath,
                prerender: { enabled: true },
              })),
            },
          }
        : {}),
    }),
    react(),
  ];

  if (command === "build" && deployTarget === "vercel") {
    plugins.push(...nitro({ preset: "vercel" }));
  }

  return {
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
  };
});
