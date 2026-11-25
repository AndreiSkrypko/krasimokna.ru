import { LeadRequestForm } from "./LeadRequestForm";
import { RequestDialog } from "./RequestDialog";

type ServiceOrderDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle: string;
  detailsPlaceholder: string;
  formId: string;
};

export function ServiceOrderDialog({
  open,
  onOpenChange,
  serviceTitle,
  detailsPlaceholder,
  formId,
}: ServiceOrderDialogProps) {
  return (
    <RequestDialog
      open={open}
      onOpenChange={onOpenChange}
      eyebrow="Заказ услуги"
      title="Оставить заявку"
      subtitle={serviceTitle}
      focusFieldId={`${formId}-name`}
      titleId={`${formId}-title`}
    >
      <LeadRequestForm
        key={`${formId}-${open}`}
        formId={formId}
        source="Страница услуги"
        serviceContext={serviceTitle}
        detailsPlaceholder={detailsPlaceholder}
        onSuccess={() => onOpenChange(false)}
      />
    </RequestDialog>
  );
}
