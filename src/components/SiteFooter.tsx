import { Link } from "@tanstack/react-router";
import { ArrowUp, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { SITE_NAME, SITE_TAGLINE, SISTER_SITE_URL } from "../lib/brand";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { MARKET } from "../lib/site-config";
import { scrollToAnchor, scrollToTop } from "../lib/scrollAnchor";
import { BrandLogo } from "./BrandLogo";

type SiteFooterProps = {
  variant?: "home" | "default";
  onOpenLeadForm?: () => void;
};

type FooterHash = "standards" | "process" | "contact" | "hero-lead" | "before-after" | "services";

function FooterHashLink({
  hash,
  variant,
  className,
  children,
  onOpenLeadForm,
}: {
  hash: FooterHash;
  variant: "home" | "default";
  className: string;
  children: ReactNode;
  onOpenLeadForm?: () => void;
}) {
  if (variant === "home") {
    if (hash === "hero-lead" && onOpenLeadForm) {
      return (
        <button
          type="button"
          className={`${className} cursor-pointer border-0 bg-transparent p-0 text-left font-inherit`}
          onClick={onOpenLeadForm}
        >
          {children}
        </button>
      );
    }
    return (
      <a
        href={`#${hash}`}
        className={className}
        onClick={(event) => {
          event.preventDefault();
          scrollToAnchor(hash);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to="/" hash={hash} className={className}>
      {children}
    </Link>
  );
}

export function SiteFooter({ variant = "default", onOpenLeadForm }: SiteFooterProps) {
  const linkClass =
    "text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <footer className="site-footer relative z-10 mt-auto border-t border-border/80 bg-secondary/35">
      <div className="site-container pb-8 pt-10 sm:pb-10 sm:pt-11">
        <div className="site-footer-grid">
            <div className="min-w-0">
              <Link
                to="/"
                className="inline-flex items-center gap-3"
                onClick={(event) => {
                  if (variant !== "home") return;
                  event.preventDefault();
                  scrollToTop();
                }}
              >
                <BrandLogo size="sm" />
                <span>
                  <span className="block font-display text-lg font-bold tracking-tight">{SITE_NAME}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{SITE_TAGLINE}</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Покраска и реставрация окон без демонтажа — {MARKET.serviceAreaText}.
              </p>
            </div>

            <nav aria-label="Разделы сайта">
              <p className="site-footer-label">Сайт</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/uslugi" className={linkClass}>
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className={linkClass}>
                    Портфолио
                  </Link>
                </li>
                <li>
                  <FooterHashLink hash="services" variant={variant} className={linkClass}>
                    Что делаем
                  </FooterHashLink>
                </li>
                <li>
                  <FooterHashLink hash="before-after" variant={variant} className={linkClass}>
                    До и после
                  </FooterHashLink>
                </li>
              </ul>
            </nav>

            <nav aria-label="Правовая информация">
              <p className="site-footer-label">Правовая информация</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/pravovaya-informaciya" className={linkClass}>
                    Все документы
                  </Link>
                </li>
                <li>
                  <Link to="/politika-personalnyh-dannyh" className={linkClass}>
                    Персональные данные
                  </Link>
                </li>
                <li>
                  <Link to="/politika-konfidencialnosti" className={linkClass}>
                    Конфиденциальность
                  </Link>
                </li>
                <li>
                  <Link to="/politika-cookie" className={linkClass}>
                    Cookie
                  </Link>
                </li>
                <li>
                  <Link to="/polzovatelskoe-soglashenie" className={linkClass}>
                    Соглашение
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="site-footer-label">Связь</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <FooterHashLink hash="contact" variant={variant} className={linkClass}>
                    Контакты
                  </FooterHashLink>
                </li>
                <li>
                  <FooterHashLink
                    hash="hero-lead"
                    variant={variant}
                    className={linkClass}
                    onOpenLeadForm={onOpenLeadForm}
                  >
                    Рассчитать стоимость
                  </FooterHashLink>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_PHONE_E164}`}
                    className={`inline-flex items-center gap-2 font-display text-base font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-lg`}
                  >
                    <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {SITE_PHONE_DISPLAY}
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">пн–сб · 9:00–19:00</li>
                <li className="text-sm text-muted-foreground">{MARKET.regionLabel}</li>
                <li>
                  <a href={SISTER_SITE_URL} className={`${linkClass} text-xs`} rel="alternate">
                    Сайт для Беларуси — krasimokna.by
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div className="site-footer-bar mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            <p>
              © 2014–{new Date().getFullYear()} {SITE_NAME}. Все права защищены.
            </p>
            <p className="mt-1">
              <Link to="/politika-personalnyh-dannyh" className="underline-offset-2 hover:text-foreground hover:underline">
                Обработка персональных данных
              </Link>
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
            onClick={() => scrollToTop()}
          >
            Наверх <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
