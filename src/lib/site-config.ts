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
  heroKicker: "Москва и Московская область · пн–сб 9:00–19:00",
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
    "Окраска и сервис оконного профиля без демонтажа — мастера выезжают по Москве и Подмосковью.",
  personalDataLaw:
    "Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и иными нормативными актами РФ",
  governmentTransferLaw: "законодательством Российской Федерации",
} as const;