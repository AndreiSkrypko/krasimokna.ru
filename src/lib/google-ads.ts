/** Google Ads (gtag.js) — задайте VITE_GOOGLE_ADS_ID в .env (отдельный аккаунт/конверсия для .ru) */
const adsId = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

export const GOOGLE_ADS_ID = adsId ?? "";

export function googleAdsHeadScripts() {
  if (!GOOGLE_ADS_ID) return [];
  return [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`,
      async: true,
    },
    {
      children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
`.trim(),
    },
  ];
}