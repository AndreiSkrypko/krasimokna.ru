import { LegalDocumentPage } from "../components/LegalDocumentPage";
import type { LegalPageDef } from "../data/legal-pages";
import { buildPageHead, SITE_NAME } from "./brand";

export function legalRouteOptions(page: LegalPageDef) {
  return {
    head: () =>
      buildPageHead({
        title: `${page.title} — ${SITE_NAME}`,
        description: page.metaDescription,
        path: page.path,
      }),
    component: function LegalDocRoutePage() {
      return <LegalDocumentPage page={page} />;
    },
  };
}
