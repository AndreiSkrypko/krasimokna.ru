import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { LEAD_THANK_YOU_PATH } from "../lib/lead-thank-you";
import { readLeadForm } from "../lib/read-lead-form";
import { submitLead } from "../lib/submit-lead";
import { LeadFormConsentNote } from "./LeadFormConsentNote";

type LeadConsultCardProps = {
  id?: string;
  variant?: "light" | "dark";
  title?: string;
  description?: string;
  onSuccess?: () => void;
  className?: string;
  density?: "default" | "compact";
};

export function LeadConsultCard({
  id = "consult-lead",
  variant = "light",
  title = "Бесплатная консультация",
  description = "Оставьте контакты — перезвоним, уточним объём и ориентировочную стоимость.",
  onSuccess,
  className = "",
  density = "default",
}: LeadConsultCardProps) {
  const navigate = useNavigate();
  const compact = density === "compact";
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isDark = variant === "dark";
  const isHeroLead = id === "hero-lead";

  const fieldClassName = isDark
    ? "min-h-11 w-full rounded-xl border border-white/30 bg-white/[0.16] px-4 text-sm text-white shadow-sm outline-none transition placeholder:text-white/55 focus:border-accent focus:bg-white/20 focus:ring-2 focus:ring-accent/35"
    : "min-h-11 w-full rounded-xl border border-input bg-glass-strong px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20";

  const shellClass = isDark
    ? isHeroLead
      ? "hero-lead-card text-white"
      : "glass-dark text-white"
    : "glass-panel-strong border border-white/70";

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const payload = readLeadForm(form, id.startsWith("hero-lead") ? "Главная — расчёт" : "Консультация");

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitLead(payload);
      onSuccess?.();
      await navigate({ to: LEAD_THANK_YOU_PATH });
    } catch {
      setSubmitError("Не удалось отправить заявку. Позвоните нам или попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <aside
      id={id}
      className={`relative overflow-hidden rounded-2xl ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6 lg:p-7"} ${shellClass} ${className}`.trim()}
    >
      <div className="relative">
        <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
          Бесплатно
        </p>
        <h2
          className={`mt-2 font-display font-bold tracking-tight ${compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} ${isDark ? "text-white" : "text-foreground"}`}
          id={`${id}-title`}
        >
          {title}
        </h2>
        <p
          className={`${compact ? "mt-1.5 text-xs leading-relaxed sm:text-sm" : "mt-2 text-sm leading-relaxed"} ${isDark ? "text-white/88" : "text-muted-foreground"}`}
        >
          {description}
        </p>

        <form className={`${compact ? "mt-4 space-y-2.5" : "mt-5 space-y-3"}`} onSubmit={submitRequest} aria-labelledby={`${id}-title`}>
            <label className="sr-only" htmlFor={`${id}-name`}>
              Ваше имя
            </label>
            <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Ваше имя" className={fieldClassName} />
            <label className="sr-only" htmlFor={`${id}-phone`}>
              Телефон
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Телефон"
              className={fieldClassName}
            />
            <label className="sr-only" htmlFor={`${id}-details`}>
              Комментарий
            </label>
            <textarea
              id={`${id}-details`}
              name="details"
              rows={compact ? 1 : 2}
              placeholder="Например: реставрация дерева или покраска ПВХ"
              className={`${fieldClassName} resize-none py-2.5 ${compact ? "min-h-11" : "min-h-[4.5rem]"}`}
            />
            {submitError ? (
              <p className={`text-center text-xs ${isDark ? "text-red-300" : "text-destructive"}`} role="alert">
                {submitError}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={submitting}
              className={`btn-premium inline-flex w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-accent-foreground disabled:opacity-70 ${compact ? "min-h-11" : "min-h-12"}`}
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Отправляем…
                </>
              ) : (
                <>
                  Заказать консультацию <ArrowRight className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
            <LeadFormConsentNote variant={isDark ? "dark" : "light"} />
        </form>
      </div>
    </aside>
  );
}
