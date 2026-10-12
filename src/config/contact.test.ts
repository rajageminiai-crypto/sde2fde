import { describe, expect, it } from "vitest";
import { contactConfig, getWhatsAppUrl } from "./contact";

describe("whatsapp link", () => {
  it("masked placeholder number is never a valid destination", () => {
    expect(getWhatsAppUrl("970xxxxxx9")).toBeNull();
  });
  it("full international number builds a wa.me link with encoded message", () => {
    const url = getWhatsAppUrl("919876543210");
    expect(url?.startsWith("https://wa.me/919876543210?text=Hi!%20I%20visited")).toBe(true);
  });
  it("instagram defaults to sde2fde profile", () => {
    expect(contactConfig.instagramUrl).toBe("https://instagram.com/sde2fde");
  });
});
