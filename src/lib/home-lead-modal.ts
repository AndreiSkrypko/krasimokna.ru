export type HomeLeadModalVariant = "calc" | "request";

export const HOME_LEAD_MODAL_COPY: Record<
  HomeLeadModalVariant,
  { title: string; description: string }
> = {
  calc: {
    title: "Ориентир по стоимости",
    description:
      "Напишите номер — наберём в рабочие часы, уточним адрес в Москве или области и посчитаем реставрацию либо покраску по фото или на осмотре.",
  },
  request: {
    title: "Заявка на выезд",
    description:
      "Оставьте телефон или мессенджер — обсудим состояние окон и назовём вилку по смете до выезда мастеров.",
  },
};
