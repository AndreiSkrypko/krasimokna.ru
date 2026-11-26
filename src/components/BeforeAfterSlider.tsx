import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  beforeCaption?: string;
  afterCaption?: string;
  showFooterNote?: boolean;
  ariaLabel?: string;
  /** edge — на всю ширину; card — для сетки и колонок */
  layout?: "inline" | "edge" | "card";
  /** Растянуть слайдер по высоте колонки (главная: пара с формой) */
  fillColumn?: boolean;
  /** Заполнить родителя с фиксированным aspect (карточки портфолио) */
  inset?: boolean;
};

/** Одинаковое кадрирование — меньше сдвига при сравнении */
const photoClassName =
  "before-after-photo pointer-events-none absolute inset-0 size-full object-cover object-center";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  beforeCaption = "Плохое покрытие",
  afterCaption = "Новая покраска",
  showFooterNote = true,
  ariaLabel = "Сравнение: старое покрытие и окно после покраски",
  layout = "card",
  fillColumn = false,
  inset = false,
}: BeforeAfterSliderProps) {
  const isEdge = layout === "edge";
  const trackClass =
    layout === "edge"
      ? "before-after-track-cinema"
      : inset
        ? "before-after-track-inset"
        : layout === "card"
          ? fillColumn
            ? "before-after-track-fill"
            : "before-after-track-card"
          : "before-after-track";
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const { left, width } = track.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updateFromClientX(event.clientX);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    updateFromClientX(event.clientX);
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  }

  const rootClass = isEdge
    ? "before-after-bleed"
    : inset
      ? "absolute inset-0"
      : fillColumn
        ? "flex h-full min-h-0 w-full flex-1 flex-col"
        : "w-full";

  return (
    <div className={rootClass}>
      <div
        ref={trackRef}
        className={`relative w-full min-h-0 select-none touch-none ${trackClass} ${className}`.trim()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="group"
        aria-label={ariaLabel}
      >
        <div className="absolute inset-0">
          <img src={afterSrc} alt={afterAlt} draggable={false} className={`${photoClassName} after-photo`} />
          <div
            className={`after-shine-overlay pointer-events-none absolute inset-0 ${fillColumn ? "opacity-60" : ""}`}
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img src={beforeSrc} alt={beforeAlt} draggable={false} className={`${photoClassName} before-photo`} />
          <div
            className={`before-damage-overlay pointer-events-none absolute inset-0 ${
              isEdge ? "opacity-40" : fillColumn ? "opacity-35" : "opacity-55"
            }`}
            aria-hidden="true"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          {position >= 50 ? (
            <div className="absolute inset-y-0 left-0 flex items-end overflow-hidden" style={{ width: `${position}%` }}>
              <div className="w-full min-w-0 bg-gradient-to-t from-black/35 to-transparent p-3 pr-7 pt-10 text-right sm:p-4 sm:pr-9 sm:pt-12">
                <div className="before-after-caption">
                  <span className="before-after-caption-tag">До</span>
                  <p className="before-after-caption-title text-balance [overflow-wrap:anywhere]">{beforeCaption}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-y-0 right-0 flex items-end overflow-hidden" style={{ width: `${100 - position}%` }}>
              <div className="w-full min-w-0 bg-gradient-to-t from-black/35 to-transparent p-3 pl-7 pt-10 sm:p-4 sm:pl-9 sm:pt-12">
                <div className="before-after-caption">
                  <span className="before-after-caption-tag">После</span>
                  <p className="before-after-caption-title text-balance [overflow-wrap:anywhere]">{afterCaption}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="before-after-handle absolute inset-y-0 z-30 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_24px_rgba(255,255,255,0.55)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-primary shadow-lg sm:size-10">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M6 4L2 9l4 5M12 4l4 5-4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {showFooterNote ? (
        <p className="site-container mt-3 text-center text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
          <span className="font-semibold text-destructive">До</span> — фото старого покрытия ·
          <span className="font-semibold text-accent"> после</span> — реальная покраска профиля (не фильтр)
        </p>
      ) : null}
    </div>
  );
}
