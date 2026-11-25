type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md";
};

export function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const box = size === "sm" ? "size-10 rounded-xl" : "size-11 rounded-xl";

  return (
    <span
      className={`brand-logo grid shrink-0 place-items-center shadow-md shadow-accent/25 ring-1 ring-white/20 ${box} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" className="size-[88%]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brand-logo-bg" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f6a07a" />
            <stop offset="0.4" stopColor="#e8734a" />
            <stop offset="1" stopColor="#c94e28" />
          </linearGradient>
          <linearGradient id="brand-logo-glass" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="brand-logo-shine" x1="8" y1="6" x2="28" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#brand-logo-bg)" />
        <rect width="48" height="48" rx="12" fill="url(#brand-logo-shine)" />
        <rect x="1" y="1" width="46" height="46" rx="11" stroke="#ffffff" strokeOpacity="0.28" />
        <rect x="11" y="11" width="26" height="26" rx="3.5" stroke="url(#brand-logo-glass)" strokeWidth="1.75" />
        <path d="M24 11v26M11 24h26" stroke="url(#brand-logo-glass)" strokeWidth="1.35" />
        <path
          d="M13 32c4-3 7-3 11 0 3 2.5 6 2.5 10 0"
          stroke="#fff"
          strokeOpacity="0.95"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
