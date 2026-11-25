import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="page-shell page-grain relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="ambient-layer" aria-hidden="true">
        <div className="absolute -left-40 top-40 size-[34rem] rounded-full bg-pine-soft/40 blur-3xl" />
        <div className="absolute -right-40 top-[120rem] size-[32rem] rounded-full bg-coral-soft/35 blur-3xl" />
      </div>
      <SiteHeader />
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </div>
  );
}
