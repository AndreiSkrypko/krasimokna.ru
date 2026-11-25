import { submitLeadServer } from "./submit-lead.server";
import type { LeadPayload } from "./lead-types";

export type { LeadPayload };

async function submitLeadViaPhp(data: LeadPayload): Promise<void> {
  const response = await fetch("/api/lead.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `HTTP ${response.status}`);
  }
}

/** Dev и Vercel — server function; hoster.by (статика) — fallback на lead.php */
export async function submitLead(data: LeadPayload): Promise<void> {
  try {
    await submitLeadServer({ data });
  } catch {
    await submitLeadViaPhp(data);
  }
}
