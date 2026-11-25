import { MARKET } from "./site-config";
import { SITE_NAME, SITE_URL } from "./brand";
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164 } from "./contacts";

/** Сведения об операторе персональных данных (уточните ИП/ООО для РФ). */
export const LEGAL_OPERATOR = {
  name: SITE_NAME,
  siteUrl: SITE_URL,
  phoneDisplay: SITE_PHONE_DISPLAY,
  phoneE164: SITE_PHONE_E164,
  country: MARKET.country,
  personalDataLaw: MARKET.personalDataLaw,
  governmentTransferLaw: MARKET.governmentTransferLaw,
  dataRequestsHint: `по телефону ${SITE_PHONE_DISPLAY} или через форму заявки на сайте`,
} as const;