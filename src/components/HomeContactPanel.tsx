import { ArrowRight, Clock, Phone } from "lucide-react";

import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { MARKET } from "../lib/site-config";
import { SocialLinks } from "./SocialLinks";

type HomeContactPanelProps = {
  onOpenLeadForm?: () => void;
};

export function HomeContactPanel({ onOpenLeadForm }: HomeContactPanelProps) {
  return (
    <aside id="contact" className="glass-panel-strong flex h-full flex-col justify-center rounded-3xl p-7 sm:p-9">
      <p className="section-eyebrow">Контакты</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Связаться с нами</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Команда из Беларуси на связи по Москве и области: оценим деревянные рамы, ПВХ или алюминий по фото и согласуем выезд.
      </p>

      <a
        href={`tel:${SITE_PHONE_E164}`}
        className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-border/80 bg-background/60 p-5 transition hover:border-accent/30 hover:bg-secondary/50"
      >
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Phone className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display text-xl font-bold tracking-tight sm:text-2xl">{SITE_PHONE_DISPLAY}</span>
          <span className="mt-0.5 block text-xs text-muted-foreground">Бесплатная консультация по телефону</span>
        </span>
      </a>

      <SocialLinks variant="contact" />

      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="size-4 shrink-0 text-accent" aria-hidden="true" />
        пн–сб 9:00–19:00 · {MARKET.serviceAreaText}
      </p>

      <button
        type="button"
        onClick={onOpenLeadForm}
        className="btn-premium mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold text-accent-foreground"
      >
        Оставить заявку на расчёт <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </aside>
  );
}
