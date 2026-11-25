import { Link } from "@tanstack/react-router";

type LeadFormConsentNoteProps = {
  variant?: "light" | "dark";
};

export function LeadFormConsentNote({ variant = "light" }: LeadFormConsentNoteProps) {
  const className =
    variant === "dark"
      ? "text-center text-[11px] leading-relaxed text-white/50"
      : "text-center text-[11px] leading-relaxed text-muted-foreground";

  return (
    <p className={className}>
      Нажимая кнопку, вы даёте{" "}
      <Link to="/soglasie-na-obrabotku-personalnyh-dannyh" className="underline underline-offset-2 hover:text-accent">
        согласие на обработку персональных данных
      </Link>{" "}
      и подтверждаете ознакомление с{" "}
      <Link to="/politika-personalnyh-dannyh" className="underline underline-offset-2 hover:text-accent">
        политикой обработки ПДн
      </Link>
      ,{" "}
      <Link to="/politika-konfidencialnosti" className="underline underline-offset-2 hover:text-accent">
        политикой конфиденциальности
      </Link>{" "}
      и{" "}
      <Link to="/polzovatelskoe-soglashenie" className="underline underline-offset-2 hover:text-accent">
        пользовательским соглашением
      </Link>
      .
    </p>
  );
}
