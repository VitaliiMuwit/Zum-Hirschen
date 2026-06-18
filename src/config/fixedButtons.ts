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
    { label: "Buchen", href: "/#anfrage", type: "booking" },
    { label: "Anfragen", href: "/#anfrage", type: "inquiry" },
  ],
  it: [
    { label: "Prenota", href: "/#anfrage", type: "booking" },
    { label: "Richiedi", href: "/#anfrage", type: "inquiry" },
  ],
  en: [
    { label: "Book", href: "/#anfrage", type: "booking" },
    { label: "Enquire", href: "/#anfrage", type: "inquiry" },
  ],
};
