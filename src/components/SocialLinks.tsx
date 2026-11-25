import type { SocialLink } from "../lib/contacts";
import { socialLinks } from "../lib/contacts";

function SocialIcon({ id }: { id: SocialLink["id"] }) {
  const className = "size-[18px]";

  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z" />
      </svg>
    );
  }

  if (id === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M21.94 4.57a1.5 1.5 0 0 0-1.58-.2L3.6 12.41a1.25 1.25 0 0 0 .08 2.3l4.58 1.67 1.76 5.34a1.25 1.25 0 0 0 2 .52l2.52-2.58 4.67 3.45a1.25 1.25 0 0 0 1.96-.76l2.87-15.43a1.5 1.5 0 0 0-.54-1.46zM9.45 14.58l-.17 2.52-1.05-3.18 8.2-5.05-7.98 5.71z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M11.4 2C9.5 2 5.3 2.03 3.7 3.5 2.4 4.6 1.9 6.1 1.9 8c-.1 2.9-.1 5.7 0 8.6.1 1.4.4 3.1 1.4 4.1 1.1 1 2.8 1.3 4.3 1.5 1.2.2 2.4.2 3.6.2 2.2 0 4.4-.1 6.5-.4 1.5-.2 3-.4 4.1-1.3 1-1 1.5-2.2 1.5-3.6.1-3 .1-6 0-9-.1-1.3-.4-2.7-1.4-3.6C20.4 2.6 18.6 2.2 16.9 2.1 15.1 2 13.2 2 11.4 2zm.1 5c3.3 0 6.6.3 9.5 1.9.7.4 1.3.9 1.7 1.6.4.8.6 1.7.6 2.6.1 2.4 0 4.8-.1 7.2-.1.8-.1 1.7-.5 2.4-.5.9-1.5 1.4-2.4 1.7-1.7.5-3.5.8-5.3.9-2.8.2-5.5.3-8.3.2-1.1 0-2.2-.1-3.2-.5-1-.4-1.8-1.2-2.1-2.4-.3-1.3-.3-2.7-.4-4.1-.1-2.4 0-4.8.4-7.2.1-1.1.4-2.2 1.1-3 .8-.9 2.1-1.1 3.3-1.3 1.7-.2 3.4-.2 5.1-.2z" />
      <path d="M8.2 10.8c-.1 0-.2.1-.2.2-.5 1.3-.3 2.8.6 4 .9 1.2 2.2 2.1 3.7 2.5 1.5.4 3.1.2 4.5-.5.1-.1.1-.2 0-.3l-1.1-1.3c-.1-.1-.2-.1-.3 0-.8.4-1.7.5-2.6.3-.9-.2-1.7-.7-2.3-1.4-.6-.7-1-1.6-1.1-2.5 0-.9.2-1.8.7-2.6.1-.1.1-.2 0-.3l-1.1-1.3c-.1-.1-.2-.1-.3 0-1.2.9-2 2.3-2.2 3.8-.1.5-.1 1 0 1.4z" />
    </svg>
  );
}

type SocialLinksProps = {
  variant: "header" | "contact";
  onHeroSurface?: boolean;
  /** Переопределяет классы контейнера (variant header) */
  className?: string;
};

export function SocialLinks({ variant, onHeroSurface = false, className }: SocialLinksProps) {
  if (variant === "header") {
    return (
      <div className={className ?? "hidden items-center gap-1 sm:flex"}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.id === "instagram" || link.id === "telegram" ? "_blank" : undefined}
            rel={link.id === "instagram" || link.id === "telegram" ? "noopener noreferrer" : undefined}
            className={`inline-flex size-9 items-center justify-center rounded-lg transition ${
              onHeroSurface
                ? "text-white/75 hover:bg-white/10 hover:text-white"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            aria-label={link.label}
          >
            <SocialIcon id={link.id} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className="mt-5 space-y-2">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target={link.id === "instagram" || link.id === "telegram" ? "_blank" : undefined}
            rel={link.id === "instagram" || link.id === "telegram" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/60 px-4 py-3 transition hover:border-accent/30 hover:bg-secondary/50"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <SocialIcon id={link.id} />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-bold tracking-tight">{link.label}</span>
              <span className="block truncate text-xs text-muted-foreground">{link.hint}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
