import { LeadConsultCard } from "./LeadConsultCard";

type HeroLeadCardProps = {
  id?: string;
  title?: string;
  description?: string;
  onSuccess?: () => void;
  className?: string;
};

export function HeroLeadCard({
  id = "hero-lead",
  title = "Ориентир по стоимости",
  description =
    "Напишите номер — уточним материал окон, адрес в Москве или области и посчитаем реставрацию либо покраску по фото или на осмотре.",
  onSuccess,
  className = "",
}: HeroLeadCardProps) {
  return (
    <LeadConsultCard
      id={id}
      variant="dark"
      title={title}
      description={description}
      onSuccess={onSuccess}
      className={`hero-lead-card lg:max-w-md lg:justify-self-end ${className}`.trim()}
    />
  );
}
