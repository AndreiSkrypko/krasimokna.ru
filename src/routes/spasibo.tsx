import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";

import { SiteChrome } from "../components/SiteChrome";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { buildPageHead, SITE_NAME } from "../lib/brand";

export const Route = createFileRoute("/spasibo")({
  head: () =>
    buildPageHead({
      title: `Заявка принята — ${SITE_NAME}`,
      description: "Спасибо за обращение. Мы перезвоним в рабочее время.",
      path: "/spasibo",
      extraMeta: [{ name: "robots", content: "noindex, follow" }],
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteChrome>
      <main className="relative z-10 flex flex-1 items-center py-12 sm:py-16">
        <section className="site-container w-full max-w-lg">
          <div className="glass-panel-strong rounded-3xl p-7 text-center sm:p-10">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/25">
              <Check className="size-7" aria-hidden="true" />
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">Заявка принята</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Спасибо! Перезвоним в рабочее время — пн–сб с 8:00 до 18:00. Если нужен быстрый ответ, позвоните напрямую.
            </p>
            <a
              href={`tel:${SITE_PHONE_E164}`}
              className="btn-premium mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-accent-foreground"
            >
              <Phone className="size-4" aria-hidden="true" /> {SITE_PHONE_DISPLAY}
            </a>
            <Link
              to="/"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/60 text-sm font-semibold text-foreground transition hover:bg-secondary/50"
            >
              На главную <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
