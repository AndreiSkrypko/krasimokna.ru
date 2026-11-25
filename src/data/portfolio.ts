import apartmentPvcAfter from "../assets/portfolio/apartment-pvc-after.webp?url";
import apartmentPvcBefore from "../assets/portfolio/apartment-pvc-before.webp?url";
import archedTerracottaAfter from "../assets/portfolio/arched-terracotta-after.webp?url";
import archedTerracottaBefore from "../assets/portfolio/arched-terracotta-before.webp?url";
import balconyAnthraciteAfter from "../assets/portfolio/balcony-anthracite-after.webp?url";
import balconyAnthraciteBefore from "../assets/portfolio/balcony-anthracite-before.webp?url";
import balconyPvcAfter from "../assets/portfolio/balcony-pvc-after.webp?url";
import balconyPvcBefore from "../assets/portfolio/balcony-pvc-before.webp?url";
import bayDarkAfter from "../assets/portfolio/bay-dark-after.webp?url";
import bayDarkBefore from "../assets/portfolio/bay-dark-before.webp?url";
import brickWindowAfter from "../assets/portfolio/brick-window-after.webp?url";
import brickWindowBefore from "../assets/portfolio/brick-window-before.webp?url";
import facadeDarkAfter from "../assets/portfolio/facade-dark-after.webp?url";
import facadeDarkBefore from "../assets/portfolio/facade-dark-before.webp?url";
import gableAnthraciteAfter from "../assets/portfolio/gable-anthracite-after.webp?url";
import gableAnthraciteBefore from "../assets/portfolio/gable-anthracite-before.webp?url";
import glassDoorsAfter from "../assets/portfolio/glass-doors-after.webp?url";
import glassDoorsBefore from "../assets/portfolio/glass-doors-before.webp?url";
import groupAnthraciteAfter from "../assets/portfolio/group-anthracite-after.webp?url";
import groupAnthraciteBefore from "../assets/portfolio/group-anthracite-before.webp?url";
import framesAnthraciteAfter from "../assets/portfolio/frames-anthracite-after.webp?url";
import framesAnthraciteBefore from "../assets/portfolio/frames-anthracite-before.webp?url";
import houseFacadeDarkAfter from "../assets/portfolio/house-facade-dark-after.webp?url";
import houseFacadeDarkBefore from "../assets/portfolio/house-facade-dark-before.webp?url";
import houseStuccoAfter from "../assets/portfolio/house-stucco-after.webp?url";
import houseStuccoBefore from "../assets/portfolio/house-stucco-before.webp?url";
import newbuildDoorAfter from "../assets/portfolio/newbuild-door-after.webp?url";
import newbuildDoorBefore from "../assets/portfolio/newbuild-door-before.webp?url";
import nichePvcAfter from "../assets/portfolio/niche-pvc-after.webp?url";
import nichePvcBefore from "../assets/portfolio/niche-pvc-before.webp?url";
import panoramaAnthraciteAfter from "../assets/portfolio/panorama-anthracite-after.webp?url";
import panoramaAnthraciteBefore from "../assets/portfolio/panorama-anthracite-before.webp?url";
import cafeTealAfter from "../assets/portfolio/cafe-teal-after.webp?url";
import cafeTealBefore from "../assets/portfolio/cafe-teal-before.webp?url";
import cornerBalconyAfter from "../assets/portfolio/corner-balcony-after.webp?url";
import cornerBalconyBefore from "../assets/portfolio/corner-balcony-before.webp?url";
import doubleDoorAfter from "../assets/portfolio/double-door-after.webp?url";
import doubleDoorBefore from "../assets/portfolio/double-door-before.webp?url";
import entranceAnthraciteAfter from "../assets/portfolio/entrance-anthracite-after.webp?url";
import entranceAnthraciteBefore from "../assets/portfolio/entrance-anthracite-before.webp?url";
import patioAnthraciteAfter from "../assets/portfolio/patio-anthracite-after.webp?url";
import patioAnthraciteBefore from "../assets/portfolio/patio-anthracite-before.webp?url";
import porchAnthraciteAfter from "../assets/portfolio/porch-anthracite-after.webp?url";
import porchAnthraciteBefore from "../assets/portfolio/porch-anthracite-before.webp?url";
import renovationWindowsAfter from "../assets/portfolio/renovation-windows-after.webp?url";
import renovationWindowsBefore from "../assets/portfolio/renovation-windows-before.webp?url";
import repairUnitPvcAfter from "../assets/portfolio/repair-unit-pvc-after.webp?url";
import repairUnitPvcBefore from "../assets/portfolio/repair-unit-pvc-before.webp?url";
import roomPvcAfter from "../assets/portfolio/room-pvc-after.webp?url";
import roomPvcBefore from "../assets/portfolio/room-pvc-before.webp?url";
import sashAnthraciteAfter from "../assets/portfolio/sash-anthracite-after.webp?url";
import sashAnthraciteBefore from "../assets/portfolio/sash-anthracite-before.webp?url";
import stairwellDoorAfter from "../assets/portfolio/stairwell-door-after.webp?url";
import stairwellDoorBefore from "../assets/portfolio/stairwell-door-before.webp?url";
import sidingWindowAfter from "../assets/portfolio/siding-window-after.webp?url";
import sidingWindowBefore from "../assets/portfolio/siding-window-before.webp?url";
import terraceDoorAfter from "../assets/portfolio/terrace-door-after.webp?url";
import terraceDoorBefore from "../assets/portfolio/terrace-door-before.webp?url";
import tripleBrickAfter from "../assets/portfolio/triple-brick-after.webp?url";
import tripleBrickBefore from "../assets/portfolio/triple-brick-before.webp?url";
import woodBrownAfter from "../assets/portfolio/wood-brown-after.webp?url";
import woodBrownBefore from "../assets/portfolio/wood-brown-before.webp?url";
import woodRestoreAfter from "../assets/portfolio/wood-restore-after.webp?url";
import woodRestoreBefore from "../assets/portfolio/wood-restore-before.webp?url";
import windowAnthraciteAfter from "../assets/portfolio/window-anthracite-after.webp?url";
import windowAnthraciteBefore from "../assets/portfolio/window-anthracite-before.webp?url";

import {
  applyPortfolioRuCopy,
  HOME_BEFORE_AFTER_ID,
} from "./portfolio-ru-overrides";

export type PortfolioProject = {
  id: string;
  workLabel: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeCaption: string;
  afterCaption: string;
};

/** Пары лежат в src/assets/portfolio как `<id>-before.webp` и `<id>-after.webp`. */
const woodBrown: PortfolioProject = {
  id: "wood-brown",
  workLabel: "Покраска деревянного профиля",
  beforeSrc: woodBrownBefore,
  afterSrc: woodBrownAfter,
  beforeAlt: "Деревянное окно до покраски — старое покрытие",
  afterAlt: "Деревянное окно после покраски — тёмно-коричневый профиль",
  beforeCaption: "Старое покрытие",
  afterCaption: "Тёмно-коричневый профиль",
};

const patioAnthracite: PortfolioProject = {
  id: "patio-anthracite",
  workLabel: "Покраска дверей",
  beforeSrc: patioAnthraciteBefore,
  afterSrc: patioAnthraciteAfter,
  beforeAlt: "Двери до покраски — коричневый профиль",
  afterAlt: "Двери после покраски — антрацит",
  beforeCaption: "Коричневый профиль",
  afterCaption: "Антрацит",
};

const cafeTeal: PortfolioProject = {
  id: "cafe-teal",
  workLabel: "Покраска входной группы",
  beforeSrc: cafeTealBefore,
  afterSrc: cafeTealAfter,
  beforeAlt: "Входная группа до покраски — серый профиль",
  afterAlt: "Входная группа после покраски — бирюзовый профиль",
  beforeCaption: "Серый профиль",
  afterCaption: "Бирюзовый профиль",
};

const facadeDark: PortfolioProject = {
  id: "facade-dark",
  workLabel: "Покраска окон на фасаде",
  beforeSrc: facadeDarkBefore,
  afterSrc: facadeDarkAfter,
  beforeAlt: "Окна на фасаде до покраски — белый профиль",
  afterAlt: "Окна на фасаде после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const houseStucco: PortfolioProject = {
  id: "house-stucco",
  workLabel: "Покраска окон на доме",
  beforeSrc: houseStuccoBefore,
  afterSrc: houseStuccoAfter,
  beforeAlt: "Окна частного дома до покраски — белый профиль",
  afterAlt: "Окна частного дома после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const entranceAnthracite: PortfolioProject = {
  id: "entrance-anthracite",
  workLabel: "Покраска входной двери",
  beforeSrc: entranceAnthraciteBefore,
  afterSrc: entranceAnthraciteAfter,
  beforeAlt: "Входная дверь до покраски — белый профиль",
  afterAlt: "Входная дверь после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const porchAnthracite: PortfolioProject = {
  id: "porch-anthracite",
  workLabel: "Покраска окон и дверей",
  beforeSrc: porchAnthraciteBefore,
  afterSrc: porchAnthraciteAfter,
  beforeAlt: "Вход с окнами до покраски — белые и коричневые профили",
  afterAlt: "Вход после покраски — антрацит",
  beforeCaption: "Белый и коричневый профиль",
  afterCaption: "Антрацит",
};

const framesAnthracite: PortfolioProject = {
  id: "frames-anthracite",
  workLabel: "Покраска оконных рам",
  beforeSrc: framesAnthraciteBefore,
  afterSrc: framesAnthraciteAfter,
  beforeAlt: "Оконные рамы до покраски — белый профиль",
  afterAlt: "Оконные рамы после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const balconyAnthracite: PortfolioProject = {
  id: "balcony-anthracite",
  workLabel: "Покраска окон на балконе",
  beforeSrc: balconyAnthraciteBefore,
  afterSrc: balconyAnthraciteAfter,
  beforeAlt: "Окна на балконе до покраски — тёмно-серый профиль",
  afterAlt: "Окна на балконе после покраски — антрацит",
  beforeCaption: "Тёмно-серый профиль",
  afterCaption: "Антрацит",
};

const windowAnthracite: PortfolioProject = {
  id: "window-anthracite",
  workLabel: "Покраска окна",
  beforeSrc: windowAnthraciteBefore,
  afterSrc: windowAnthraciteAfter,
  beforeAlt: "Окно до покраски — тёмно-коричневый профиль",
  afterAlt: "Окно после покраски — антрацит",
  beforeCaption: "Тёмно-коричневый профиль",
  afterCaption: "Антрацит",
};

const balconyPvc: PortfolioProject = {
  id: "balcony-pvc",
  workLabel: "Покраска ПВХ на балконе",
  beforeSrc: balconyPvcBefore,
  afterSrc: balconyPvcAfter,
  beforeAlt: "Балконное остекление до покраски — белый профиль",
  afterAlt: "Балконное остекление после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const apartmentPvc: PortfolioProject = {
  id: "apartment-pvc",
  workLabel: "Покраска ПВХ в квартире",
  beforeSrc: apartmentPvcBefore,
  afterSrc: apartmentPvcAfter,
  beforeAlt: "Пластиковое окно до покраски — белый профиль",
  afterAlt: "Пластиковое окно после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const nichePvc: PortfolioProject = {
  id: "niche-pvc",
  workLabel: "Покраска оконного блока",
  beforeSrc: nichePvcBefore,
  afterSrc: nichePvcAfter,
  beforeAlt: "Оконный блок до покраски — белый профиль",
  afterAlt: "Оконный блок после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const roomPvc: PortfolioProject = {
  id: "room-pvc",
  workLabel: "Покраска окна и балконной двери",
  beforeSrc: roomPvcBefore,
  afterSrc: roomPvcAfter,
  beforeAlt: "Окно и балконная дверь до покраски — белый профиль",
  afterAlt: "Окно и балконная дверь после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const repairUnitPvc: PortfolioProject = {
  id: "repair-unit-pvc",
  workLabel: "Покраска окна и балконной двери",
  beforeSrc: repairUnitPvcBefore,
  afterSrc: repairUnitPvcAfter,
  beforeAlt: "Окно и балконная дверь до покраски — белый ПВХ-профиль",
  afterAlt: "Окно и балконная дверь после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const sashAnthracite: PortfolioProject = {
  id: "sash-anthracite",
  workLabel: "Покраска створки",
  beforeSrc: sashAnthraciteBefore,
  afterSrc: sashAnthraciteAfter,
  beforeAlt: "Оконная створка до покраски — светлый профиль",
  afterAlt: "Оконная створка после покраски — антрацит",
  beforeCaption: "Светлый профиль",
  afterCaption: "Антрацит",
};

const panoramaAnthracite: PortfolioProject = {
  id: "panorama-anthracite",
  workLabel: "Покраска панорамных окон",
  beforeSrc: panoramaAnthraciteBefore,
  afterSrc: panoramaAnthraciteAfter,
  beforeAlt: "Панорамные окна до покраски — белый профиль",
  afterAlt: "Панорамные окна после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const groupAnthracite: PortfolioProject = {
  id: "group-anthracite",
  workLabel: "Покраска оконной группы",
  beforeSrc: groupAnthraciteBefore,
  afterSrc: groupAnthraciteAfter,
  beforeAlt: "Оконная группа до покраски — белый профиль",
  afterAlt: "Оконная группа после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const woodRestore: PortfolioProject = {
  id: "wood-restore",
  workLabel: "Реставрация деревянного окна",
  beforeSrc: woodRestoreBefore,
  afterSrc: woodRestoreAfter,
  beforeAlt: "Деревянное окно до реставрации — изношенное покрытие",
  afterAlt: "Деревянное окно после реставрации — обновлённый коричневый профиль",
  beforeCaption: "Изношенное покрытие",
  afterCaption: "Обновлённый профиль",
};

const gableAnthracite: PortfolioProject = {
  id: "gable-anthracite",
  workLabel: "Покраска оконной стены",
  beforeSrc: gableAnthraciteBefore,
  afterSrc: gableAnthraciteAfter,
  beforeAlt: "Оконная стена до покраски — светлый профиль",
  afterAlt: "Оконная стена после покраски — антрацит",
  beforeCaption: "Светлый профиль",
  afterCaption: "Антрацит",
};

const bayDark: PortfolioProject = {
  id: "bay-dark",
  workLabel: "Покраска окон в эркере",
  beforeSrc: bayDarkBefore,
  afterSrc: bayDarkAfter,
  beforeAlt: "Окна в эркере до покраски — светлый деревянный профиль",
  afterAlt: "Окна в эркере после покраски — тёмный профиль",
  beforeCaption: "Светлый профиль",
  afterCaption: "Тёмный профиль",
};

const houseFacadeDark: PortfolioProject = {
  id: "house-facade-dark",
  workLabel: "Покраска окон на коттедже",
  beforeSrc: houseFacadeDarkBefore,
  afterSrc: houseFacadeDarkAfter,
  beforeAlt: "Окна на фасаде до покраски — светлый деревянный профиль",
  afterAlt: "Окна на фасаде после покраски — тёмно-коричневый профиль",
  beforeCaption: "Светлый профиль",
  afterCaption: "Тёмно-коричневый профиль",
};

const terraceDoor: PortfolioProject = {
  id: "terrace-door",
  workLabel: "Реставрация двери и окна",
  beforeSrc: terraceDoorBefore,
  afterSrc: terraceDoorAfter,
  beforeAlt: "Дверь и окно на террасе до реставрации — изношенное покрытие",
  afterAlt: "Дверь и окно на террасе после реставрации — обновлённый профиль",
  beforeCaption: "Изношенное покрытие",
  afterCaption: "Обновлённый профиль",
};

const sidingWindow: PortfolioProject = {
  id: "siding-window",
  workLabel: "Реставрация окна",
  beforeSrc: sidingWindowBefore,
  afterSrc: sidingWindowAfter,
  beforeAlt: "Окно до реставрации — облезшее покрытие",
  afterAlt: "Окно после реставрации — обновлённый тёмный профиль",
  beforeCaption: "Изношенное покрытие",
  afterCaption: "Обновлённый профиль",
};

const archedTerracotta: PortfolioProject = {
  id: "arched-terracotta",
  workLabel: "Покраска арочных окон",
  beforeSrc: archedTerracottaBefore,
  afterSrc: archedTerracottaAfter,
  beforeAlt: "Арочные окна до покраски — тёмно-коричневый профиль",
  afterAlt: "Арочные окна после покраски — терракотовый профиль",
  beforeCaption: "Тёмно-коричневый профиль",
  afterCaption: "Терракотовый профиль",
};

const brickWindow: PortfolioProject = {
  id: "brick-window",
  workLabel: "Реставрация окна в кирпичном доме",
  beforeSrc: brickWindowBefore,
  afterSrc: brickWindowAfter,
  beforeAlt: "Окно до реставрации — изношенное покрытие на деревянном профиле",
  afterAlt: "Окно после реставрации — обновлённый тёмно-коричневый профиль",
  beforeCaption: "Изношенное покрытие",
  afterCaption: "Обновлённый профиль",
};

const tripleBrick: PortfolioProject = {
  id: "triple-brick",
  workLabel: "Реставрация трёхстворчатого окна",
  beforeSrc: tripleBrickBefore,
  afterSrc: tripleBrickAfter,
  beforeAlt: "Трёхстворчатое окно до реставрации — изношенное покрытие",
  afterAlt: "Трёхстворчатое окно после реставрации — тёмно-коричневый профиль",
  beforeCaption: "Изношенное покрытие",
  afterCaption: "Тёмно-коричневый профиль",
};

const renovationWindows: PortfolioProject = {
  id: "renovation-windows",
  workLabel: "Покраска окон при ремонте",
  beforeSrc: renovationWindowsBefore,
  afterSrc: renovationWindowsAfter,
  beforeAlt: "Окна до покраски — белый профиль",
  afterAlt: "Окна после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const stairwellDoor: PortfolioProject = {
  id: "stairwell-door",
  workLabel: "Покраска металлической двери",
  beforeSrc: stairwellDoorBefore,
  afterSrc: stairwellDoorAfter,
  beforeAlt: "Металлическая дверь до покраски — светло-коричневый профиль",
  afterAlt: "Металлическая дверь после покраски — антрацит",
  beforeCaption: "Светло-коричневый профиль",
  afterCaption: "Антрацит",
};

const cornerBalcony: PortfolioProject = {
  id: "corner-balcony",
  workLabel: "Покраска угловых окон на балконе",
  beforeSrc: cornerBalconyBefore,
  afterSrc: cornerBalconyAfter,
  beforeAlt: "Угловые окна на балконе до покраски — белый профиль",
  afterAlt: "Угловые окна на балконе после покраски — тёмный профиль",
  beforeCaption: "Белый профиль",
  afterCaption: "Тёмный профиль",
};

const doubleDoor: PortfolioProject = {
  id: "double-door",
  workLabel: "Покраска входных дверей",
  beforeSrc: doubleDoorBefore,
  afterSrc: doubleDoorAfter,
  beforeAlt: "Двустворчатая входная дверь до покраски — повреждённое покрытие",
  afterAlt: "Двустворчатая входная дверь после покраски — тёмно-серый профиль",
  beforeCaption: "Повреждённое покрытие",
  afterCaption: "Тёмно-серый профиль",
};

const glassDoors: PortfolioProject = {
  id: "glass-doors",
  workLabel: "Покраска стеклянных входных дверей",
  beforeSrc: glassDoorsBefore,
  afterSrc: glassDoorsAfter,
  beforeAlt: "Стеклянные входные двери до покраски — коричневый профиль",
  afterAlt: "Стеклянные входные двери после покраски — антрацит",
  beforeCaption: "Коричневый профиль",
  afterCaption: "Антрацит",
};

const newbuildDoor: PortfolioProject = {
  id: "newbuild-door",
  workLabel: "Покраска входной двери",
  beforeSrc: newbuildDoorBefore,
  afterSrc: newbuildDoorAfter,
  beforeAlt: "Входная дверь до покраски — белый профиль",
  afterAlt: "Входная дверь после покраски — антрацит",
  beforeCaption: "Белый профиль",
  afterCaption: "Антрацит",
};

const portfolioProjectsBase: PortfolioProject[] = [
  woodBrown,
  patioAnthracite,
  cafeTeal,
  facadeDark,
  houseStucco,
  entranceAnthracite,
  porchAnthracite,
  framesAnthracite,
  balconyAnthracite,
  windowAnthracite,
  balconyPvc,
  apartmentPvc,
  nichePvc,
  roomPvc,
  repairUnitPvc,
  sashAnthracite,
  panoramaAnthracite,
  groupAnthracite,
  woodRestore,
  gableAnthracite,
  bayDark,
  houseFacadeDark,
  terraceDoor,
  sidingWindow,
  archedTerracotta,
  brickWindow,
  tripleBrick,
  renovationWindows,
  stairwellDoor,
  cornerBalcony,
  doubleDoor,
  glassDoors,
  newbuildDoor,
];

export const portfolioProjects = portfolioProjectsBase.map(applyPortfolioRuCopy);

const homeBeforeAfterBase =
  portfolioProjectsBase.find((p) => p.id === HOME_BEFORE_AFTER_ID) ?? apartmentPvc;

export const homeBeforeAfter = applyPortfolioRuCopy(homeBeforeAfterBase);
