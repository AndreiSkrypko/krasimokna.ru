/** Укажите рабочий номер для РФ в .env: VITE_SITE_PHONE_E164 и VITE_SITE_PHONE_DISPLAY */
const phoneE164 =
  (import.meta.env.VITE_SITE_PHONE_E164 as string | undefined)?.replace(/\s/g, "") ?? "+74951234567";
const phoneDisplay =
  (import.meta.env.VITE_SITE_PHONE_DISPLAY as string | undefined) ?? "+7 (495) 123-45-67";

export const SITE_PHONE_E164 = phoneE164;
export const SITE_PHONE_DISPLAY = phoneDisplay;

const telegramHandle =
  (import.meta.env.VITE_TELEGRAM_URL as string | undefined) ??
  `https://t.me/${phoneE164.replace(/\D/g, "")}`;

const instagramUrl =
  (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) ?? "https://www.instagram.com/krasimoknaru/";
const instagramHint =
  (import.meta.env.VITE_INSTAGRAM_HANDLE as string | undefined) ?? "@krasimoknaru";

export type SocialLink = {
  id: "instagram" | "telegram" | "viber";
  label: string;
  href: string;
  hint: string;
};

const viberNumber = encodeURIComponent(phoneE164);

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: instagramUrl,
    hint: instagramHint,
  },
  {
    id: "telegram",
    label: "Telegram",
    href: telegramHandle,
    hint: "Написать в Telegram",
  },
  {
    id: "viber",
    label: "Viber",
    href: `viber://chat?number=${viberNumber}`,
    hint: "Написать в Viber",
  },
];