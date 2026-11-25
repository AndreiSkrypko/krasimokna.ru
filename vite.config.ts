import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { staticPrerenderPaths } from "./src/data/static-paths";

export default defineConfig(({ command }) => {
  const deployTarget = process.env.DEPLOY_TARGET ?? "static";
  const staticHosting = deployTarget === "static";

  const plugins: PluginOption[] = [
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
