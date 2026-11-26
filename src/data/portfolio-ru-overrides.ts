/** Уникальные подписи портфолио для krasimokna.ru (не дублировать .by). */

type PortfolioTextPick = {
  workLabel: string;
  beforeAlt: string;
  afterAlt: string;
  beforeCaption: string;
  afterCaption: string;
};

type PortfolioWithId = { id: string } & PortfolioTextPick;

export const portfolioRuText: Record<string, PortfolioTextPick> = {
  "wood-brown": {
    workLabel: "Реставрация и покраска деревянного окна",
    beforeAlt: "Деревянная рама до работ: выцветшая краска и потёртости",
    afterAlt: "После покраски: насыщенный шоколадный тон профиля",
    beforeCaption: "Выцветшее покрытие",
    afterCaption: "Шоколадный матовый тон",
  },
  "patio-anthracite": {
    workLabel: "Блок из патио-дверей, цвет антрацит",
    beforeAlt: "Патио-двери до покраски: коричневый ПВХ",
    afterAlt: "Те же двери: глубокий антрацит без подтёков",
    beforeCaption: "Коричневый ПВХ",
    afterCaption: "Антрацит, мат",
  },
  "cafe-teal": {
    workLabel: "Входная группа под фирменный бирюзовый",
    beforeAlt: "Витринная группа до работ: серый стандартный профиль",
    afterAlt: "После: бирюзовый акцент по макету заведения",
    beforeCaption: "Серый заводской цвет",
    afterCaption: "Бирюзовый по ТЗ",
  },
  "facade-dark": {
    workLabel: "Фасадные окна — переход в тёмную гамму",
    beforeAlt: "Белые рамы на фасаде до обновления",
    afterAlt: "Тёмный графитовый профиль на том же фасаде",
    beforeCaption: "Белый профиль",
    afterCaption: "Графитовый тон",
  },
  "house-stucco": {
    workLabel: "Частный дом со штукатуркой — окна в тёмный цвет",
    beforeAlt: "Окна коттеджа до покраски: белый ПВХ",
    afterAlt: "Окна в тёмном цвете, контраст со штукатуркой",
    beforeCaption: "Белый ПВХ",
    afterCaption: "Тёмный контраст",
  },
  "entrance-anthracite": {
    workLabel: "Входная дверь — антрацит вместо белого",
    beforeAlt: "Белая входная дверь до покраски",
    afterAlt: "Входная дверь антрацитового оттенка",
    beforeCaption: "Белая дверь",
    afterCaption: "Антрацит",
  },
  "porch-anthracite": {
    workLabel: "Крыльцо: окна и дверь в одном цвете",
    beforeAlt: "Крыльцо до работ: белые и коричневые профили",
    afterAlt: "Единый антрацит на двери и окнах",
    beforeCaption: "Разные оттенки",
    afterCaption: "Сводный антрацит",
  },
  "frames-anthracite": {
    workLabel: "Комплект створок — серия в антрацит",
    beforeAlt: "Несколько белых рам до покраски",
    afterAlt: "Рамы одного антрацитового оттенка",
    beforeCaption: "Белые рамы",
    afterCaption: "Антрацит серии",
  },
  "balcony-anthracite": {
    workLabel: "Балконный блок — светлый → антрацит",
    beforeAlt: "Окна на лоджии до работ: тёмно-серый профиль",
    afterAlt: "После: ровный антрацит по периметру",
    beforeCaption: "Выцветший серый",
    afterCaption: "Антрацит на лоджии",
  },
  "window-anthracite": {
    workLabel: "Одиночное окно — обновление цвета",
    beforeAlt: "Окно до покраски: белый профиль",
    afterAlt: "То же окно: антрацит, без демонтажа",
    beforeCaption: "Белый профиль",
    afterCaption: "Антрацит",
  },
  "balcony-pvc": {
    workLabel: "ПВХ на балконе — смена оттенка",
    beforeAlt: "Балконное остекление до: белый ПВХ",
    afterAlt: "После покраски: тёмный согласованный цвет",
    beforeCaption: "Белый ПВХ",
    afterCaption: "Тёмный ПВХ",
  },
  "apartment-pvc": {
    workLabel: "Квартира в новостройке — ПВХ под интерьер",
    beforeAlt: "Окна в квартире до: стандартный белый профиль",
    afterAlt: "Профиль в выбранном тоне под отделку",
    beforeCaption: "Белый из застройщика",
    afterCaption: "Цвет под интерьер",
  },
  "niche-pvc": {
    workLabel: "Покраска ПВХ без демонтажа",
    beforeAlt: "Окно в нише до покраски: белый заводской ПВХ и вид на город",
    afterAlt: "То же окно после покраски: глубокий антрацит в том же ракурсе",
    beforeCaption: "Белый заводской ПВХ",
    afterCaption: "Глубокий антрацит",
  },
  "room-pvc": {
    workLabel: "Комната с ПВХ — освежение профиля",
    beforeAlt: "Окно в комнате до: пожелтевший белый",
    afterAlt: "Свежий светлый или тёмный тон по выбору",
    beforeCaption: "Пожелтевший белый",
    afterCaption: "Обновлённый тон",
  },
  "repair-unit-pvc": {
    workLabel: "Окно после ремонта — финальный цвет",
    beforeAlt: "Рама с следами ремонта и старой краски",
    afterAlt: "Чистый профиль в согласованном цвете",
    beforeCaption: "После чернового ремонта",
    afterCaption: "Финишный цвет",
  },
  "sash-anthracite": {
    workLabel: "Створка — локальная смена цвета",
    beforeAlt: "Створка до: белый профиль",
    afterAlt: "Створка после: антрацит",
    beforeCaption: "Белая створка",
    afterCaption: "Антрацит",
  },
  "panorama-anthracite": {
    workLabel: "Панорамное остекление — тёмный контур",
    beforeAlt: "Широкое окно до: светлый профиль",
    afterAlt: "Панорама с антрацитовой рамой",
    beforeCaption: "Светлый контур",
    afterCaption: "Антрацит по периметру",
  },
  "group-anthracite": {
    workLabel: "Группа окон — единый антрацит",
    beforeAlt: "Несколько проёмов до: белые рамы",
    afterAlt: "Серия окон в одном тёмном тоне",
    beforeCaption: "Белая серия",
    afterCaption: "Антрацит серии",
  },
  "wood-restore": {
    workLabel: "Реставрация дерева + новый цвет",
    beforeAlt: "Деревянное окно до: трещины и старая краска",
    afterAlt: "Восстановленный профиль с новым покрытием",
    beforeCaption: "Износ и сколы",
    afterCaption: "Реставрация и цвет",
  },
  "gable-anthracite": {
    workLabel: "Окна в фронтоне — антрацит",
    beforeAlt: "Фронтонные окна до: белый профиль",
    afterAlt: "Фронтон с тёмными рамами",
    beforeCaption: "Белый фронтон",
    afterCaption: "Антрацит на фронтоне",
  },
  "bay-dark": {
    workLabel: "Эркер — тёмная рамная линия",
    beforeAlt: "Эркер до: светлые рамы",
    afterAlt: "Эркер с тёмным профилем",
    beforeCaption: "Светлый эркер",
    afterCaption: "Тёмный акцент",
  },
  "house-facade-dark": {
    workLabel: "Фасад коттеджа — комплект окон",
    beforeAlt: "Коттедж до: белые окна на фасаде",
    afterAlt: "Фасад с тёмными окнами",
    beforeCaption: "Белый комплект",
    afterCaption: "Тёмный комплект",
  },
  "terrace-door": {
    workLabel: "Дверь на террасу — цвет под фасад",
    beforeAlt: "Террасная дверь до: белый профиль",
    afterAlt: "Дверь в тоне фасада или интерьера",
    beforeCaption: "Белая дверь",
    afterCaption: "Согласованный цвет",
  },
  "siding-window": {
    workLabel: "Окно в сайдинге — обновление рамы",
    beforeAlt: "Окно в обшивке до: белый ПВХ",
    afterAlt: "Рама в цвете, гармонирующем с сайдингом",
    beforeCaption: "Белый у сайдинга",
    afterCaption: "Цвет под обшивку",
  },
  "arched-terracotta": {
    workLabel: "Арочное окно — терракотовый акцент",
    beforeAlt: "Арка до: белый профиль",
    afterAlt: "Арочное окно в терракотовом тоне",
    beforeCaption: "Белая арка",
    afterCaption: "Терракот",
  },
  "brick-window": {
    workLabel: "Окно в кирпиче — контрастный профиль",
    beforeAlt: "Окно в кирпичной кладке до работ",
    afterAlt: "Профиль в выбранном контрастном цвете",
    beforeCaption: "Белый в кирпиче",
    afterCaption: "Контрастный тон",
  },
  "triple-brick": {
    workLabel: "Тройной проём в кирпиче",
    beforeAlt: "Три окна в кирпиче до покраски",
    afterAlt: "Единый цвет на трёх створках",
    beforeCaption: "Белая тройка",
    afterCaption: "Один оттенок",
  },
  "renovation-windows": {
    workLabel: "После капремонта — финальная покраска окон",
    beforeAlt: "Окна после ремонта помещения: грязный белый профиль",
    afterAlt: "Чистые рамы в финальном цвете",
    beforeCaption: "После стройпыли",
    afterCaption: "Чистый финиш",
  },
  "stairwell-door": {
    workLabel: "Дверь в подъезде/холле",
    beforeAlt: "Дверь до: белый или потёртый профиль",
    afterAlt: "Обновлённая дверь с ровным слоем",
    beforeCaption: "Потёртый профиль",
    afterCaption: "Новое покрытие",
  },
  "corner-balcony": {
    workLabel: "Угловой балкон — остекление в тёмный цвет",
    beforeAlt: "Угловой блок до: светлый профиль",
    afterAlt: "Угловое остекление в тёмном тоне",
    beforeCaption: "Светлый угол",
    afterCaption: "Тёмный угол",
  },
  "double-door": {
    workLabel: "Двустворчатая дверь — смена оттенка",
    beforeAlt: "Двойная дверь до: белый профиль",
    afterAlt: "Две створки в одном новом цвете",
    beforeCaption: "Белая пара",
    afterCaption: "Новый оттенок",
  },
  "glass-doors": {
    workLabel: "Стеклянная входная группа",
    beforeAlt: "Стеклянные двери до: светлая рама",
    afterAlt: "Рама в согласованном тёмном или акцентном цвете",
    beforeCaption: "Светлая рама",
    afterCaption: "Акцентная рама",
  },
  "newbuild-door": {
    workLabel: "Новостройка — входная дверь не в белом",
    beforeAlt: "Входная дверь в новой квартире: белый заводской",
    afterAlt: "Антрацит или другой выбранный цвет",
    beforeCaption: "Заводской белый",
    afterCaption: "Цвет под интерьер",
  },
};

export const HOME_BEFORE_AFTER_ID = "niche-pvc";

export function applyPortfolioRuCopy<T extends PortfolioWithId>(project: T): T {
  const patch = portfolioRuText[project.id];
  return patch ? { ...project, ...patch } : project;
}