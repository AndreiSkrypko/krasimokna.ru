import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { LEAD_THANK_YOU_PATH } from "../lib/lead-thank-you";
import { readLeadForm } from "../lib/read-lead-form";
import { submitLead } from "../lib/submit-lead";
import { LeadFormConsentNote } from "./LeadFormConsentNote";

export const leadRequestFieldClassName =
  "min-h-11 w-full rounded-xl border border-input bg-white/70 px-3.5 text-sm shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20";

const labelClassName = "mb-1 block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground";

type LeadRequestFormProps = {
  formId: string;
  source: string;
  serviceContext?: string;
  detailsPlaceholder: string;
  detailsLabel?: string;
  submitLabel?: string;
  onSuccess?: () => void;
};

export function LeadRequestForm({
  formId,
  source,
  serviceContext,
  detailsPlaceholder,
  detailsLabel = "Детали заказа",
  submitLabel = "Отправить заявку",
  onSuccess,
}: LeadRequestFormProps) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const payload = readLeadForm(event.currentTarget, source, serviceContext);

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
    <form className="space-y-3" onSubmit={submitRequest} aria-labelledby={`${formId}-title`}>
      {serviceContext ? <input type="hidden" name="service" value={serviceContext} /> : null}
      <div>
        <label className={labelClassName} htmlFor={`${formId}-name`}>
          Ваше имя
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          required
          autoComplete="name"
          placeholder="Как к вам обращаться"
          className={leadRequestFieldClassName}
        />
      </div>
      <div>
        <label className={labelClassName} htmlFor={`${formId}-phone`}>
          Телефон
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+7 (9__) ___-__-__"
          className={leadRequestFieldClassName}
        />
      </div>
      <div>
        <label className={labelClassName} htmlFor={`${formId}-details`}>
          {detailsLabel}
        </label>
        <textarea
          id={`${formId}-details`}
          name="details"
          rows={3}
          required={Boolean(serviceContext)}
          placeholder={detailsPlaceholder}
          className={`${leadRequestFieldClassName} min-h-[5.25rem] resize-none py-2.5`}
        />
      </div>
      {submitError ? (
        <p className="text-center text-xs text-destructive" role="alert">
          {submitError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="btn-premium inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-accent-foreground disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Отправляем…
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <LeadFormConsentNote />
    </form>
  );
}
