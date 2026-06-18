/**
 * Multilingual fixed CTA buttons (sticky on the right / bottom on mobile).
 * Read by FixedButtons.astro. `href` without locale prefix for internal links.
 */
import type { Locale } from "../i18n";

export type FixedButtonType = "booking" | "inquiry" | "phone" | "link";

export interface FixedButton {
  label: string;
  href: string;
  /** Semantic type — also used to style/prioritize the button. */
  type: FixedButtonType;
  /** External link (no locale prefix, opens in a new tab). */
  external?: boolean;
}

export const fixedButtons: Record<Locale, FixedButton[]> = {
  de: [
    { label: "Preise & Buchen", href: "/#anfrage", type: "booking" },
    { label: "Unverbindlich Anfragen", href: "/#anfrage", type: "inquiry" },
  ],
  // TODO translate — temporary copy of DE labels.
  it: [
    { label: "Prezzi & Prenota", href: "/#anfrage", type: "booking" },
    { label: "Richiesta senza impegno", href: "/#anfrage", type: "inquiry" },
  ],
  // TODO translate — temporary copy of DE labels.
  en: [
    { label: "Prices & Booking", href: "/#anfrage", type: "booking" },
    { label: "Non-binding enquiry", href: "/#anfrage", type: "inquiry" },
  ],
};
