import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteChrome } from "../components/SiteChrome";
import { legalPages } from "../data/legal-pages";
import { buildPageHead, SITE_NAME } from "../lib/brand";

export const Route = createFileRoute("/pravovaya-informaciya")({
  head: () =>
    buildPageHead({
      title: `Правовая информация — ${SITE_NAME}`,
      description: "Политика персональных данных, конфиденциальность, cookie и пользовательское соглашение.",
      path: "/pravovaya-informaciya",
    }),
  component: LegalHubPage,
});

function LegalHubPage() {
  return (
    <SiteChrome>
      <main className="relative z-10 pb-14">
        <section className="site-container max-w-3xl pt-6 sm:pt-10">
          <div className="glass-panel-strong rounded-3xl p-6 sm:p-9">
            <p className="section-eyebrow">Документы</p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Правовая информация</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Актуальные документы для пользователей сайта: обработка персональных данных, конфиденциальность, cookie и условия
              использования.
            </p>
            <ul className="mt-8 space-y-3">
              {legalPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-background/50 px-4 py-3.5 transition hover:border-accent/30 hover:bg-secondary/40"
                  >
                    <span>
                      <span className="block font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
                        {page.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">Обновлено {page.updatedAt}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
