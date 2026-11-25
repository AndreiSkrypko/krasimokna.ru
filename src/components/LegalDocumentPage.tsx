import { Link } from "@tanstack/react-router";

import type { LegalPageDef } from "../data/legal-pages";
import { legalPages } from "../data/legal-pages";
import { SiteChrome } from "./SiteChrome";

type LegalDocumentPageProps = {
  page: LegalPageDef;
};

export function LegalDocumentPage({ page }: LegalDocumentPageProps) {
  const otherPages = legalPages.filter((item) => item.path !== page.path);

  return (
    <SiteChrome>
      <main className="relative z-10 pb-14">
        <article className="site-container max-w-3xl pt-6 sm:pt-10">
          <nav className="text-sm text-muted-foreground" aria-label="Хлебные крошки">
            <Link to="/" className="transition hover:text-foreground">
              Главная
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link to="/pravovaya-informaciya" className="transition hover:text-foreground">
              Правовая информация
            </Link>
          </nav>

          <div className="glass-panel-strong mt-6 rounded-3xl p-6 sm:p-9">
            <p className="section-eyebrow">Правовая информация</p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{page.title}</h1>
            <p className="mt-2 text-xs text-muted-foreground">Обновлено: {page.updatedAt}</p>
            {page.intro ? <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{page.intro}</p> : null}

            <div className="legal-prose mt-8 space-y-8">
              {page.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>

          {otherPages.length > 0 ? (
            <aside className="mt-8 rounded-2xl border border-border/80 bg-secondary/30 p-5 sm:p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">Другие документы</h2>
              <ul className="mt-3 space-y-2">
                {otherPages.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm font-medium text-foreground transition hover:text-accent">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </article>
      </main>
    </SiteChrome>
  );
}
