import type { LeadPayload } from "./lead-types";

export function readLeadForm(form: HTMLFormElement, source: string, service?: string): LeadPayload {
  const data = new FormData(form);
  return {
    source,
    name: String(data.get("name") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    details: String(data.get("details") ?? "").trim(),
    service: service ?? (String(data.get("service") ?? "").trim() || undefined),
  };
}
