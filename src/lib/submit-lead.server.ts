import { createServerFn } from "@tanstack/react-start";

import type { LeadPayload } from "./lead-types";
import { sendLeadToTelegram } from "./telegram-bot";

export const submitLeadServer = createServerFn({ method: "POST" })
  .validator((data: LeadPayload) => data)
  .handler(async ({ data }) => {
    await sendLeadToTelegram(data);
    return { ok: true as const };
  });
