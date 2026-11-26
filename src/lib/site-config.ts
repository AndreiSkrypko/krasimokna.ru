/**
 * Региональные настройки krasimokna.ru (Москва и МО).
 * Отдельный домен и тексты — не дубль krasimokna.by.
 */
export const SISTER_SITE_URL = "https://krasimokna.by" as const;

export const MARKET = {
  country: "Россия",
  countryShort: "РФ",
  regionLabel: "Москва и Московская область",
  serviceAreaText: "выезд по Москве и Московской области",
  heroKicker: "Мастера из Беларуси · работаем по Москве и области",
  localeOg: "ru_RU",
  hreflangSelf: "ru-RU",
  hreflangSister: "ru-BY",
  /** География для JSON-LD */
  schemaAreaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 55.7558, longitude: 37.6173 },
    geoRadius: "120000",
  },
  schemaDescription:
    "Команда мастеров из Беларуси: реставрация деревянных окон, покраска ПВХ и алюминия без демонтажа, сервис окон — выезд по Москве и Московской области.",
  personalDataLaw:
    "Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и иными нормативными актами РФ",
  governmentTransferLaw: "законодательством Российской Федерации",
} as const;
