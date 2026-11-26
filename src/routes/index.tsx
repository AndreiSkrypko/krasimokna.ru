// ============= Full file contents =============

import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Reveal } from "../components/Reveal";
import { HeroLeadCard } from "../components/HeroLeadCard";
import { HeroLeadDialog } from "../components/HeroLeadDialog";
import { HomeContactPanel } from "../components/HomeContactPanel";
import { HomeTrustAside } from "../components/HomeTrustAside";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { homeBeforeAfter } from "../data/portfolio";
import { services } from "../data/services";
import { buildPageHead, SITE_NAME, SITE_URL } from "../lib/brand";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { MARKET } from "../lib/site-config";
import { HOME_LEAD_MODAL_COPY, type HomeLeadModalVariant } from "../lib/home-lead-modal";
import { scrollToAnchor } from "../lib/scrollAnchor";
import { homeCopy } from "../data/copy-ru";

/** Стабильный URL (public/) — иначе в dev SSR/клиент расходятся по ?url и ломают гидрацию */
const heroImage = "/window-painting-hero-ru.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildPageHead({
      title: "Реставрация и покраска окон в Москве и МО | Красим окна",
      description:
        "Команда мастеров из Беларуси: реставрация деревянных окон, покраска ПВХ и алюминия без демонтажа, сервис окон — выезд по Москве и Московской области.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: SITE_NAME,
          url: SITE_URL,
          telephone: SITE_PHONE_E164,
          areaServed: [MARKET.regionLabel, { "@type": "AdministrativeArea", name: "Московская область" }],
          description: MARKET.schemaDescription,
          image: `${SITE_URL}/og-image.webp`,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [heroLeadOpen, setHeroLeadOpen] = useState(false);
  const [leadModalVariant, setLeadModalVariant] = useState<HomeLeadModalVariant>("calc");
  const leadModalCopy = HOME_LEAD_MODAL_COPY[leadModalVariant];
  const locationHash = useRouterState({ select: (state) => state.location.hash });

  function openLeadModal(variant: HomeLeadModalVariant = "calc") {
    setLeadModalVariant(variant);
    setHeroLeadOpen(true);
  }

  useEffect(() => {
    if (!locationHash) return;
    const id = locationHash.replace(/^#/, "");
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      if (id === "hero-lead") {
        openLeadModal("calc");
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        return;
      }
      scrollToAnchor(id);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [locationHash]);

  useEffect(() => {
    function onAnchorClick(event: MouseEvent) {
      const link = (event.target as Element).closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href?.startsWith("#") || href.length < 2) return;
      const id = href.slice(1);
      if (id === "hero-lead") {
        event.preventDefault();
        openLeadModal("calc");
        return;
      }
      if (!document.getElementById(id)) return;
      event.preventDefault();
      scrollToAnchor(id);
      window.history.replaceState(null, "", `#${id}`);
    }

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);

  return (
    <main className="page-shell page-grain relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="ambient-layer" aria-hidden="true">
        <div className="absolute -left-40 top-[52rem] size-[34rem] rounded-full bg-pine-soft/40 blur-3xl" />
        <div className="absolute -right-40 top-[86rem] size-[32rem] rounded-full bg-coral-soft/35 blur-3xl" />
      </div>

      <SiteHeader variant="hero" />

      <div className="hero-under-header relative isolate flex min-h-svh flex-col">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            width={1920}
            height={1088}
            fetchPriority="high"
            className="hero-photo hero-ken-burns size-full object-cover object-[34%_42%] sm:object-[32%_40%] lg:object-[30%_38%]"
          />
        </div>
        <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />
        <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

        <section id="top" className="site-container relative flex min-h-0 flex-1 flex-col justify-end pb-10 pt-2 sm:justify-center sm:pb-12 sm:pt-4 lg:pb-14">
          <div className="hero-stagger hero-stagger--ru grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(34rem,42rem)_minmax(0,1fr)_minmax(19rem,22rem)] lg:items-center lg:gap-6 xl:grid-cols-[42rem_minmax(0,1fr)_minmax(22rem,26rem)] xl:gap-8">
            <div className="relative max-w-3xl lg:col-start-1 lg:max-w-none">
            <p className="hero-kicker flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" aria-hidden="true" />
              {MARKET.heroKicker}
            </p>
            <h1 className="hero-headline mt-5 text-balance font-display text-[2.85rem] font-bold leading-[0.94] tracking-tight text-white sm:text-6xl lg:mt-6 lg:text-[3.55rem] lg:leading-[0.92] xl:text-[4.35rem]">
              {homeCopy.headline}
              <br />
              <span className="hero-headline-em">{homeCopy.headlineEm}</span>
            </h1>
            <p className="hero-lead mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
              {homeCopy.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => openLeadModal("calc")}
                className="btn-premium inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl px-8 text-[15px] font-semibold text-accent-foreground"
              >
                Рассчитать стоимость <ArrowRight className="size-4" aria-hidden="true" />
              </button>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-8 text-[15px] font-semibold text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" /> Позвонить
              </a>
            </div>

            <div className="hero-metrics mt-10 grid grid-cols-3 gap-4 pt-6 sm:gap-8">
              {homeCopy.metrics.map((stat) => (
                <div key={stat.label}>
                  <p className="hero-metric-value">{stat.value}</p>
                  <p className="hero-metric-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 flex items-start gap-2.5 text-sm leading-relaxed text-white/70 sm:max-w-lg">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {homeCopy.heroNote}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">{homeCopy.materialsLine}</p>
            </div>

            <div className="hero-stagger-spacer hidden min-w-0 lg:col-start-2 lg:block" aria-hidden="true" />
            <div className="hidden min-w-0 lg:col-start-3 lg:block">
              <HeroLeadCard />
            </div>
          </div>
        </section>
      </div>

      <HeroLeadDialog
        open={heroLeadOpen}
        onOpenChange={setHeroLeadOpen}
        title={leadModalCopy.title}
        description={leadModalCopy.description}
      />

      <section id="before-after" className="relative z-10 w-full bg-background py-8 sm:py-12">
        <div className="site-container">
          <Reveal className="mb-6 max-w-2xl lg:mb-8">
            <p className="section-eyebrow">{homeCopy.beforeAfterTitle}</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{homeCopy.beforeAfterSubtitle}</h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-8">
            <Reveal delay={0.06} className="flex min-w-0 flex-col">
              <div className="before-after-home overflow-hidden rounded-2xl shadow-[0_18px_50px_color-mix(in_oklab,var(--primary)_8%,transparent)] ring-1 ring-primary/10">
                <BeforeAfterSlider
                  layout="card"
                  showFooterNote
                  beforeSrc={homeBeforeAfter.beforeSrc}
                  afterSrc={homeBeforeAfter.afterSrc}
                  beforeAlt={homeBeforeAfter.beforeAlt}
                  afterAlt={homeBeforeAfter.afterAlt}
                  beforeCaption={homeBeforeAfter.beforeCaption}
                  afterCaption={homeBeforeAfter.afterCaption}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col">
              <HomeTrustAside className="min-h-0 flex-1" onOpenLeadForm={() => openLeadModal("calc")} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="site-container relative z-10 py-20 sm:py-24">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.55fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Что мы делаем</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-[2.75rem]">{homeCopy.servicesTitle}</h2>
          </div>
          <div className="max-w-xl lg:justify-self-end lg:pb-1">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{homeCopy.servicesSubtitle}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:text-right">
              {homeCopy.servicesAside}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, shortText, image, imageAlt, featuredLabel }, index) => (
            <Reveal key={slug} delay={0.05 + index * 0.07}>
            <Link
              to="/uslugi/$slug"
              params={{ slug }}
              className="service-card glass-panel group block overflow-hidden rounded-2xl transition duration-500 hover:shadow-[0_20px_50px_color-mix(in_oklab,var(--primary)_10%,transparent)]"
            >
              <div className="service-card-media">
                <img
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 z-10 grid size-11 place-items-center rounded-lg bg-white/92 text-primary shadow-md ring-1 ring-black/5 backdrop-blur-sm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {featuredLabel ? (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-lg">
                    {featuredLabel}
                  </span>
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{shortText}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Подробнее и заказ <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="standards" className="site-container relative z-10 pb-8">
        <Reveal>
        <div className="glass-panel rounded-[1.75rem] p-6 transition duration-500 hover:shadow-[0_28px_80px_color-mix(in_oklab,var(--primary)_12%,transparent)] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Стандарт качества</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{homeCopy.standardsTitle}</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">{homeCopy.standardsSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeCopy.pillars.map(({ title, text }, index) => (
              <Reveal key={title} delay={0.06 + index * 0.06}>
              <div className="rounded-2xl border border-white/60 bg-white/35 p-5 backdrop-blur-sm transition duration-300 hover:border-primary/15 hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--primary)_6%,transparent)]">
                <p className="font-display text-2xl font-bold tracking-tight text-primary">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section id="process" className="site-container relative z-10 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="glass-panel rounded-3xl p-7 sm:p-9">
            <p className="section-eyebrow">Как мы работаем</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{homeCopy.processTitle}</h2>
            <div className="timeline-rail mt-9 space-y-8 pb-2">
              {homeCopy.timelineSteps.map((step, index) => (
                <div key={step} className="relative flex items-start gap-5 pl-1">
                  <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 ring-4 ring-background">{index + 1}</span>
                  <p className="pt-1.5 text-sm font-medium leading-relaxed sm:text-base">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HomeContactPanel onOpenLeadForm={() => openLeadModal("request")} />
          </Reveal>
        </div>
      </section>

      <SiteFooter variant="home" onOpenLeadForm={() => openLeadModal("calc")} />
    </main>
  );
}
