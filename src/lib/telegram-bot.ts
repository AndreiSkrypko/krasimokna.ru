/** Параметры бота (без .env, по запросу заказчика). Только server / PHP. */
export const TELEGRAM_BOT_TOKEN = "8861334161:AAGdozYZhN6mCf8o0_lAL-4IlbdpmZbWb7U";
export const TELEGRAM_CHAT_ID = "6453142710";

import type { LeadPayload } from "./lead-types";

export function formatLeadTelegramMessage(payload: LeadPayload): string {
  const lines = [
    "🆕 Новая заявка — krasimokna.ru",
    "",
    `Источник: ${payload.source}`,
    payload.service ? `Услуга: ${payload.service}` : null,
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    "",
    "Комментарий:",
    payload.details.trim() || "—",
  ].filter(Boolean);

  return lines.join("\n");
}

export async function sendLeadToTelegram(payload: LeadPayload): Promise<void> {
  const text = formatLeadTelegramMessage(payload);
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Telegram API error: ${response.status} ${body}`);
  }
}
