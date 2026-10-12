// Central contact configuration. Replace whatsappNumber with the full
// international number (digits only, e.g. "919xxxxxxxxx") to enable WhatsApp.
export const contactConfig = {
  whatsappNumber: "970xxxxxx9", // TEMPORARY masked placeholder — not a valid number
  instagramUrl: "https://instagram.com/sde2fde",
  whatsappMessage:
    "Hi! I visited SDE2FDE.in and I'm interested in the Forward Deployed Engineer program. Please share the curriculum, mentor details, program structure, and enrolment information.",
};

/** Returns a wa.me URL only when the number is a complete international number. */
export function getWhatsAppUrl(number = contactConfig.whatsappNumber): string | null {
  if (!/^\d{11,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
}

export function trackEvent(name: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  (w.dataLayer ??= []).push({ event: name, ...data });
}
