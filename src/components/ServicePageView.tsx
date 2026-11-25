import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import type { ServiceDefinition } from "../data/services";
import { services } from "../data/services";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { MARKET } from "../lib/site-config";
import { Reveal } from "./Reveal";
import { ServiceOrderDialog } from "./ServiceOrderDialog";
import { SiteChrome } from "./SiteChrome";

type ServicePageViewProps = {
  service: ServiceDefinition;
};

const quickFacts = ["12+ лет", `Выезд: ${MARKET.regionLabel}`, "Консультация бесплатно"];

export function ServicePageView({ service }: ServicePageViewProps) {
  const Icon = service.icon;
  const otherServices = services.filter((item) => item.slug !== service.slug);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#order") {
      setOrderOpen(true);
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  function openOrder() {
    setOrderOpen(true);
  }

  return (
    <SiteChrome>
      <main className="service-page relative z-10 pb-12 pt-3 sm:pb-14 sm:pt-5">
        <div className="site-container">
          <Link
            to="/uslugi"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> К каталогу услуг
          </Link>
        </div>

        <Reveal className="site-container relative mt-4 sm:mt-5">
          <div className="service-hero-panel service-hero-panel--compact overflow-hidden">
            <img
              src={service.image}
              alt=""
              aria-hidden="true"
              className="hero-ken-burns absolute inset-0 size-full object-cover object-center"
            />
            <div className="hero-scrim absolute inset-0" aria-hidden="true" />
            <div className="relative p-5 sm:p-7 lg:p-8">
              <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                <Icon className="size-3.5 text-accent" aria-hidden="true" /> Услуга
              </span>
              <h1 className="mt-3 max-w-2xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2.5 max-w-xl text-sm leading-snug text-white/85 sm:text-[15px] sm:leading-relaxed">{service.lead}</p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50 sm:text-[11px]">
                {quickFacts.join(" · ")}
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openOrder}
                  className="btn-premium inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-accent-foreground"
                >
                  Заказать услугу <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <a
                  href={`tel:${SITE_PHONE_E164}`}
                  className="glass-dark inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white"
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" /> {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="site-container mt-6 sm:mt-7">
          <article className="glass-panel rounded-2xl p-4 sm:p-5 lg:p-6">
            <div className="service-content-grid">
              <section className="min-w-0">
                <h2 className="service-h2">Что вы получаете</h2>
                <ul className="mt-2.5 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm leading-snug sm:text-[15px] sm:leading-relaxed">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="min-w-0">
                <h3 className="service-h3">Что входит</h3>
                <ol className="service-steps-plain mt-2">
                  {service.includes.map((item, index) => (
                    <li key={item}>
                      <span className="service-steps-plain-num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="min-w-0">
                <h3 className="service-h3">Как проходит заказ</h3>
                <ol className="timeline-rail service-process-rail mt-2 space-y-3 pb-0.5">
                  {service.steps.map((step, index) => (
                    <li key={step} className="relative flex items-start gap-2.5 pl-0.5">
                      <span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full bg-primary font-display text-[11px] font-bold text-primary-foreground ring-2 ring-background">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-snug text-foreground/90">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <div className="service-order-cta mt-5 flex flex-col gap-3 border-t border-border/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Готовы обсудить объект?{" "}
                <a href={`tel:${SITE_PHONE_E164}`} className="font-semibold text-foreground hover:text-accent">
                  {SITE_PHONE_DISPLAY}
                </a>
              </p>
              <button
                type="button"
                onClick={openOrder}
                className="btn-premium inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-accent-foreground sm:w-auto"
              >
                Оформить заявку <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        </Reveal>

        <Reveal className="site-container mt-8 sm:mt-9">
          <div className="flex flex-col gap-2 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="service-h2 mb-0">Другие услуги</h2>
            <Link to="/uslugi" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Весь каталог <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-border/70">
            {otherServices.map(({ slug, title, shortText, icon: OtherIcon }) => (
              <li key={slug}>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug }}
                  className="service-related-link group flex items-center gap-3 py-3.5 sm:gap-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <OtherIcon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[15px] font-semibold leading-snug tracking-tight sm:text-base">{title}</span>
                    <span className="mt-0.5 block line-clamp-1 text-xs leading-snug text-muted-foreground sm:text-sm">{shortText}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-accent/70 transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <ServiceOrderDialog
          open={orderOpen}
          onOpenChange={setOrderOpen}
          serviceTitle={service.title}
          detailsPlaceholder={service.formHint}
          formId={service.slug}
        />
      </main>
    </SiteChrome>
  );
}
