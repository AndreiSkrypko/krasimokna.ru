import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Reveal } from "../../components/Reveal";
import { SiteChrome } from "../../components/SiteChrome";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../../components/ui/dialog";
import { portfolioProjects, type PortfolioProject } from "../../data/portfolio";
import { buildPageHead } from "../../lib/brand";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "../../lib/contacts";

type ZoomPhoto = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

function buildPortfolioGallery(): ZoomPhoto[] {
  const items: ZoomPhoto[] = [];
  for (const project of portfolioProjects) {
    items.push({
      src: project.beforeSrc,
      alt: project.beforeAlt,
      label: "До",
      caption: project.beforeCaption,
    });
    items.push({
      src: project.afterSrc,
      alt: project.afterAlt,
      label: "После",
      caption: project.afterCaption,
    });
  }
  return items;
}

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    buildPageHead({
      title: "Портфолио: реставрация и покраска окон — Москва и МО | Красим окна",
      description:
        "Снимки до и после: реставрация деревянных окон, покраска ПВХ и алюминия, двери и фасады — объекты в Москве и Московской области.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const gallery = useMemo(() => buildPortfolioGallery(), []);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const zoom = zoomIndex !== null ? gallery[zoomIndex] : null;

  const goPrev = useCallback(() => {
    setZoomIndex((current) => {
      if (current === null) return null;
      return (current - 1 + gallery.length) % gallery.length;
    });
  }, [gallery.length]);

  const goNext = useCallback(() => {
    setZoomIndex((current) => {
      if (current === null) return null;
      return (current + 1) % gallery.length;
    });
  }, [gallery.length]);

  useEffect(() => {
    if (zoomIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomIndex, goPrev, goNext]);

  return (
    <SiteChrome>
      <main className="relative z-10 pb-16 pt-6 sm:pt-8">
        <section className="site-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> На главную
          </Link>
          <Reveal className="mt-6 max-w-2xl">
            <p className="section-eyebrow">Портфолио</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Реставрация и покраска окон — до/после</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              В каждой карточке — состояние до работ и финиш после реставрации или покраски профиля на объектах в Москве и области.
            </p>
          </Reveal>
        </section>

        <div className="site-container mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {portfolioProjects.map((project, index) => (
            <PortfolioPair
              key={project.id}
              project={project}
              index={index}
              galleryOffset={index * 2}
              onOpenZoom={setZoomIndex}
            />
          ))}
        </div>

        <PortfolioLightbox
          zoom={zoom}
          zoomIndex={zoomIndex}
          total={gallery.length}
          onClose={() => setZoomIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
        />

        <section className="site-container mt-14 sm:mt-16">
          <Reveal className="glass-panel rounded-2xl p-7 text-center sm:p-9">
            <h2 className="font-display text-2xl font-bold tracking-tight">Хотите так же на своём объекте?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Оставьте заявку на главной или позвоните — рассчитаем стоимость и согласуем выезд.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                hash="hero-lead"
                className="btn-premium inline-flex min-h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold text-accent-foreground"
              >
                Заявка на расчёт
              </Link>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-semibold transition hover:bg-secondary"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </SiteChrome>
  );
}

function PortfolioLightbox({
  zoom,
  zoomIndex,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  zoom: ZoomPhoto | null;
  zoomIndex: number | null;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const open = zoomIndex !== null;

  return (
    <Dialog open={open} onOpenChange={(next) => { if (!next) onClose(); }}>
      <DialogContent className="w-max max-w-[min(96vw,1100px)] gap-0 border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button]:hidden">
        <DialogTitle className="sr-only">{zoom ? `${zoom.label}. ${zoom.alt}` : "Фото"}</DialogTitle>
        {zoom && zoomIndex !== null ? (
          <figure className="flex flex-col items-center">
            <div className="relative flex items-center">
              <button
                type="button"
                className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80 sm:-left-4 sm:top-auto sm:translate-y-0 sm:-translate-x-full"
                aria-label="Предыдущее фото"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrev();
                }}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <div className="relative">
                <img
                  key={zoom.src}
                  src={zoom.src}
                  alt={zoom.alt}
                  className="block max-h-[82vh] max-w-[min(86vw,1000px)] rounded-xl object-contain sm:max-w-[min(92vw,1000px)]"
                />
                <DialogClose
                  type="button"
                  className="absolute right-2 top-2 z-10 rounded-full bg-white p-1.5 text-foreground shadow-md transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/80"
                  aria-label="Закрыть"
                >
                  <X className="size-4" aria-hidden="true" />
                </DialogClose>
              </div>
              <button
                type="button"
                className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80 sm:-right-4 sm:top-auto sm:translate-y-0 sm:translate-x-full"
                aria-label="Следующее фото"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </div>
            <figcaption className="mt-3 flex flex-col items-center gap-1">
              <span className="w-fit rounded-full bg-black/75 px-4 py-1.5 text-center font-display text-sm font-semibold text-white">
                {zoom.label} · {zoom.caption}
              </span>
              <span className="text-xs font-medium text-white/70">
                {zoomIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function PortfolioPair({
  project,
  index,
  galleryOffset,
  onOpenZoom,
}: {
  project: PortfolioProject;
  index: number;
  galleryOffset: number;
  onOpenZoom: (index: number) => void;
}) {
  const [open, setOpen] = useState<"before" | "after" | null>(null);
  const widthFor = (side: "before" | "after") => {
    if (open === null) return "50%";
    return open === side ? "74%" : "26%";
  };

  return (
    <article id={project.id} className="scroll-mt-24">
      <Reveal delay={0.04 + index * 0.04}>
        <h2 className="mb-2 font-display text-base font-bold tracking-tight sm:text-lg">{project.workLabel}</h2>
        <div
          className="flex h-56 overflow-hidden rounded-xl bg-neutral-950 shadow-[0_22px_40px_-28px_rgba(20,32,28,0.7)] ring-1 ring-black/15 sm:h-64"
          onMouseLeave={() => setOpen(null)}
        >
          <BookPage
            src={project.beforeSrc}
            alt={project.beforeAlt}
            label="До"
            caption={project.beforeCaption}
            edge="left"
            width={widthFor("before")}
            showCaption={open !== "after"}
            onOpen={() => setOpen("before")}
            onZoom={() => onOpenZoom(galleryOffset)}
          />
          <BookPage
            src={project.afterSrc}
            alt={project.afterAlt}
            label="После"
            caption={project.afterCaption}
            edge="right"
            width={widthFor("after")}
            showCaption={open !== "before"}
            onOpen={() => setOpen("after")}
            onZoom={() => onOpenZoom(galleryOffset + 1)}
          />
        </div>
      </Reveal>
    </article>
  );
}

function BookPage({
  src,
  alt,
  label,
  caption,
  edge,
  width,
  showCaption,
  onOpen,
  onZoom,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  edge: "left" | "right";
  width: string;
  showCaption: boolean;
  onOpen: () => void;
  onZoom: () => void;
}) {
  return (
    <figure
      className="relative h-full min-w-0 overflow-hidden transition-[width] duration-500 ease-out"
      style={{ width }}
      onMouseEnter={onOpen}
    >
      <button
        type="button"
        className="absolute inset-0 z-20 cursor-zoom-in"
        aria-label={`Увеличить: ${alt}`}
        onClick={onZoom}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
      <div
        className={`pointer-events-none absolute inset-0 ${edge === "left" ? "shadow-[inset_-16px_0_18px_-12px_rgba(0,0,0,0.55)]" : "shadow-[inset_16px_0_18px_-12px_rgba(0,0,0,0.55)]"}`}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 pt-8 sm:p-2.5">
        <span className="before-after-caption-tag">{label}</span>
        {showCaption ? (
          <figcaption className="mt-1.5 font-display text-[11px] font-semibold leading-tight tracking-tight text-white sm:text-xs">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
