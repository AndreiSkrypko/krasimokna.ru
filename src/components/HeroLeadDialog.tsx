import { LeadRequestForm } from "./LeadRequestForm";
import { RequestDialog } from "./RequestDialog";

type HeroLeadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
};

const FORM_ID = "hero-lead-dialog";

export function HeroLeadDialog({
  open,
  onOpenChange,
  title = "Рассчитаем стоимость",
  description = "Оставьте телефон — перезвоним в рабочее время и уточним объём по фото или на месте.",
}: HeroLeadDialogProps) {
  return (
    <RequestDialog
      open={open}
      onOpenChange={onOpenChange}
      eyebrow="Бесплатно"
      title={title}
      subtitle={description}
      focusFieldId={`${FORM_ID}-name`}
      titleId={`${FORM_ID}-title`}
    >
      <LeadRequestForm
        key={`${title}-${open}`}
        formId={FORM_ID}
        source="Главная — расчёт"
        detailsLabel="Комментарий"
        detailsPlaceholder="Что покрасить?"
        submitLabel="Заказать консультацию"
        onSuccess={() => onOpenChange(false)}
      />
    </RequestDialog>
  );
}
