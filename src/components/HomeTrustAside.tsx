import { Link } from "@tanstack/react-router";

import { homeCopy, trustFootnote } from "../data/copy-ru";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { MARKET } from "../lib/site-config";
import { ArrowRight, Check, Phone } from "lucide-react";

type HomeTrustAsideProps = {
  className?: string;
  onOpenLeadForm?: () => void;
};

export function HomeTrustAside({ className = "", onOpenLeadForm }: HomeTrustAsideProps) {
  return (
    <aside
      className={`glass-panel-strong flex h-full flex-col justify-between rounded-2xl border border-white/70 p-5 sm:p-6 lg:sticky lg:top-[calc(var(--site-header-stack)+0.75rem)] lg:p-7 ${className}`.trim()}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">{homeCopy.trustTitle}</p>
        <h2 className="mt-2 font-display text-lg font-bold tracking-tight sm:text-xl">{homeCopy.trustSubtitle}</h2>
        <ul className="mt-4 space-y-3">
          {homeCopy.trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-border/60 pt-5">
        <a
          href={`tel:${SITE_PHONE_E164}`}
          className="font-display text-2xl font-bold tracking-tight transition-colors hover:text-accent"
        >
          {SITE_PHONE_DISPLAY}
        </a>
        <p className="mt-1 text-xs text-muted-foreground">пн–сб 9:00–19:00 · {MARKET.regionLabel}</p>
        <div className="mt-5 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onOpenLeadForm}
            className="btn-premium inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-accent-foreground"
          >
            Получить расчёт <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <Link
            to="/portfolio"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background/80 text-sm font-semibold transition hover:bg-secondary"
          >
            Все объекты в портфолио
          </Link>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Phone className="size-3.5 shrink-0" aria-hidden="true" />
          {trustFootnote}
        </p>
      </div>
    </aside>
  );
}
