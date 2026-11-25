const ANCHOR_GAP_PX = 12;

export function getSiteHeaderOffset(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--site-header-stack").trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 76;
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToAnchor(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = getSiteHeaderOffset() + ANCHOR_GAP_PX;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  });
}
