export type HomeLeadModalVariant = "calc" | "request";

export const HOME_LEAD_MODAL_COPY: Record<
  HomeLeadModalVariant,
  { title: string; description: string }
> = {
  calc: {
    title: "Ориентир по стоимости",
    description:
      "Напишите номер — наберём в рабочие часы, уточним адрес в МО и посчитаем объём по фото или при личном осмотре.",
  },
  request: {
    title: "Заявка на выезд",
    description:
      "Оставьте телефон или мессенджер — обсудим задачу и назовём вилку по смете до выезда бригады.",
  },
};
