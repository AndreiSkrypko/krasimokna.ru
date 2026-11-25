import { createFileRoute } from "@tanstack/react-router";

import { ServicePageView } from "../../components/ServicePageView";
import { getServiceBySlug } from "../../data/services";
import { buildPageHead } from "../../lib/brand";

export const Route = createFileRoute("/uslugi/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return { meta: [{ title: "Услуга не найдена — Красим окна" }] };
    }
    return buildPageHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/uslugi/${params.slug}`,
    });
  },
  component: ServiceRoutePage,
});

function ServiceRoutePage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold">Услуга не найдена</h1>
          <p className="mt-2 text-sm text-muted-foreground">Проверьте ссылку или вернитесь на главную.</p>
          <a href="/" className="btn-premium mt-6 inline-flex min-h-11 items-center rounded-xl px-5 font-semibold text-accent-foreground">
            На главную
          </a>
        </div>
      </div>
    );
  }

  return <ServicePageView service={service} />;
}
