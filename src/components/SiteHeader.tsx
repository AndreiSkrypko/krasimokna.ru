import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../lib/contacts";
import { scrollToAnchor, scrollToTop } from "../lib/scrollAnchor";
import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";

type SiteHeaderProps = {
  variant?: "hero" | "default";
};

type NavItem =
  | { label: string; type: "route"; to: "/uslugi" | "/portfolio" }
  | { label: string; type: "home-hash"; hash: "standards" | "process" | "contact" };

const heroNav: NavItem[] = [
  { label: "Услуги", type: "route", to: "/uslugi" },
  { label: "Портфолио", type: "route", to: "/portfolio" },
  { label: "Стандарт", type: "home-hash", hash: "standards" },
  { label: "Как работаем", type: "home-hash", hash: "process" },
  { label: "Контакты", type: "home-hash", hash: "contact" },
];

const defaultNav: NavItem[] = [
  { label: "Услуги", type: "route", to: "/uslugi" },
  { label: "Портфолио", type: "route", to: "/portfolio" },
  { label: "Стандарт", type: "home-hash", hash: "standards" },
  { label: "Как работаем", type: "home-hash", hash: "process" },
  { label: "Контакты", type: "home-hash", hash: "contact" },
];

function NavItemLink({
  item,
  mode,
  className,
  onNavigate,
}: {
  item: NavItem;
  mode: "hero" | "default" | "hero-scrolled";
  className: string;
  onNavigate?: () => void;
}) {
  if (item.type === "route") {
    return (
      <Link to={item.to} className={className} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  if (mode === "hero") {
    return (
      <a
        href={`#${item.hash}`}
        className={className}
        onClick={(event) => {
          event.preventDefault();
          scrollToAnchor(item.hash);
          onNavigate?.();
        }}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link to="/" hash={item.hash} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  const navItems = variant === "hero" ? heroNav : defaultNav;
  const onHeroSurface = variant === "hero" && !scrolled;
  const linkSurface = onHeroSurface ? "hero" : variant === "hero" ? "hero-scrolled" : "default";
  const isElevated = variant === "default" || scrolled;

  useEffect(() => {
    if (variant !== "hero") return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const headerSurface = !isElevated
    ? "site-header--transparent"
    : variant === "hero"
      ? "site-header--elevated-hero"
      : "site-header--elevated";

  const brandTitle = onHeroSurface ? "text-white" : "text-foreground";
  const brandSub = onHeroSurface ? "text-white/55" : "text-muted-foreground";
  const linkClass = onHeroSurface
    ? "nav-link-fx transition-colors hover:text-white text-white/70"
    : "nav-link-fx transition-colors hover:text-foreground text-muted-foreground";
  const mobileLinkClass =
    "block rounded-lg px-4 py-3.5 text-[15px] font-semibold tracking-tight text-foreground transition hover:bg-secondary/80";

  return (
    <header className={`site-header sticky top-0 z-50 ${headerSurface}`}>
      <div className="site-container relative">
        <nav className="site-header-nav" aria-label="Главная навигация">
          {variant === "hero" ? (
            <a
              href="/"
              className="flex min-w-0 items-center gap-3"
              aria-label="Красим окна — наверх"
              onClick={(event) => {
                event.preventDefault();
                scrollToTop();
                closeMenu();
              }}
            >
              <BrandLogo size="sm" className="sm:size-11" />
              <span className={`min-w-0 leading-tight ${brandTitle}`}>
                <span className="block font-display text-[15px] font-bold tracking-tight sm:text-[17px]">Красим окна</span>
                <span className={`hidden text-[11px] font-medium tracking-wide sm:block ${brandSub}`}>
                  покраска · ремонт · реставрация
                </span>
              </span>
            </a>
          ) : (
            <Link to="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              <BrandLogo size="sm" className="sm:size-11" />
              <span className="min-w-0 leading-tight">
                <span className={`block font-display text-[15px] font-bold tracking-tight sm:text-[17px] ${brandTitle}`}>
                  Красим окна
                </span>
                <span className={`hidden text-[11px] font-medium tracking-wide sm:block ${brandSub}`}>
                  покраска · ремонт · реставрация
                </span>
              </span>
            </Link>
          )}

          <div className="hidden items-center gap-7 text-[13px] font-medium tracking-wide md:flex">
            {navItems.map((item) => (
              <NavItemLink key={item.label} item={item} mode={linkSurface} className={linkClass} />
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <SocialLinks variant="header" onHeroSurface={onHeroSurface} />
            <a
              href={`tel:${SITE_PHONE_E164}`}
              className="btn-premium inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-2.5 text-sm font-semibold text-accent-foreground sm:min-h-11 sm:px-5"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">{SITE_PHONE_DISPLAY}</span>
              <span className="sr-only sm:hidden">Позвонить</span>
            </a>

            <button
              type="button"
              className={`inline-flex size-10 items-center justify-center rounded-lg transition md:hidden ${
                onHeroSurface
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-secondary/80 text-foreground hover:bg-secondary"
              }`}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-primary/30 backdrop-blur-[3px] md:hidden"
              aria-label="Закрыть меню"
              onClick={closeMenu}
            />
            <div
              id={menuId}
              className="mobile-nav-drawer absolute inset-x-0 top-full z-50 mt-2 rounded-xl border border-border/80 bg-background/95 p-3 shadow-[0_20px_50px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Меню сайта"
            >
              <div className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <NavItemLink
                    key={item.label}
                    item={item}
                    mode={linkSurface}
                    className={mobileLinkClass}
                    onNavigate={closeMenu}
                  />
                ))}
              </div>
              <SocialLinks
                variant="header"
                onHeroSurface={false}
                className="mt-3 flex items-center justify-center gap-1"
              />
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="btn-premium mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-accent-foreground"
                onClick={closeMenu}
              >
                <Phone className="size-4" aria-hidden="true" /> {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
