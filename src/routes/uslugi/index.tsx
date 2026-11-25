import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { SiteChrome } from "../../components/SiteChrome";
import { services } from "../../data/services";
import { buildPageHead } from "../../lib/brand";
import { SITE_PHONE_E164 } from "../../lib/contacts";

export const Route = createFileRoute("/uslugi/")({
  head: () =>
    buildPageHead({
      title: "Услуги — покраска окон и сервис в Москве и МО | Красим окна",
      description:
        "Каталог работ: окраска профиля, кондиционеры, дерево, стеклопакеты, фурнитура, клининг, радиаторы и ворота.",
      path: "/uslugi",
    }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <SiteChrome>
      <main className="relative z-10 pb-14">
        <section className="site-container pt-6 sm:pt-8">
          <div className="service-hero-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-pine-soft/80 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="section-eyebrow">Каталог услуг</p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Услуги для квартир и частных домов</h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Откройте карточку — там этапы, что входит в работу и форма вызова мастера по Москве и области.
              </p>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="btn-premium mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl px-6 font-semibold text-accent-foreground"
              >
                <Phone className="size-4" aria-hidden="true" /> Консультация по телефону
              </a>
            </div>
          </div>
        </section>

        <section className="site-container mt-10 sm:mt-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, shortText, image, imageAlt, icon: Icon }, index) => (
              <Link
                key={slug}
                to="/uslugi/$slug"
                params={{ slug }}
                className="service-card glass-panel reveal-rise group overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1.5"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <div className="service-card-media">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-white/90 text-primary shadow-lg ring-1 ring-white/60 backdrop-blur-sm transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{shortText}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Открыть страницу <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
