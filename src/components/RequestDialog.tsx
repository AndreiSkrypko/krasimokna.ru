import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

type RequestDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eyebrow: string;
  title: string;
  subtitle?: string;
  focusFieldId?: string;
  titleId?: string;
  children: ReactNode;
};

export function RequestDialog({
  open,
  onOpenChange,
  eyebrow,
  title,
  subtitle,
  focusFieldId,
  titleId: titleIdProp,
  children,
}: RequestDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const generatedTitleId = useId();
  const titleId = titleIdProp ?? generatedTitleId;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
      if (focusFieldId) {
        window.requestAnimationFrame(() => {
          document.getElementById(focusFieldId)?.focus({ preventScroll: true });
        });
      }
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, focusFieldId]);

  function close() {
    onOpenChange(false);
  }

  return (
    <dialog
      ref={dialogRef}
      className="service-order-dialog"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="service-order-dialog-panel glass-panel-strong" role="document">
        <button type="button" className="service-order-dialog-close" aria-label="Закрыть" onClick={close}>
          <X className="size-5" aria-hidden="true" />
        </button>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-[1.65rem]">
          {title}
        </h2>
        {subtitle ? <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p> : null}
        <div className="mt-5 sm:mt-6">{children}</div>
      </div>
    </dialog>
  );
}
