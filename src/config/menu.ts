/**
 * Multilingual navigation menu (shown in the fullscreen MenuOverlay).
 *
 * `href` is stored WITHOUT a locale prefix. For internal links the locale
 * prefix (/de, /en, /it) is added automatically in BaseLayout; external links
 * (external: true) are used as-is. Defaults point to sections on the home page.
 */
import type { Locale } from "../i18n";

export interface MenuItem {
  label: string;
  href: string;
  /** Link leaves the site / should not get a locale prefix. */
  external?: boolean;
  /** Render as a highlighted button (primary action, e.g. "Buchen"). */
  isButton?: boolean;
  /** Show but make it non-interactive. */
  disabled?: boolean;
}

export const menu: Record<Locale, MenuItem[]> = {
  de: [
    { label: "Home", href: "/" },
    { label: "Zimmer & Preise", href: "/#zimmer" },
    { label: "Genuss & Wellness", href: "/#restaurant" },
    { label: "Galerie", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Lage & Kontakt", href: "/#lage" },
    { label: "Anfragen", href: "/#anfrage", isButton: true },
  ],
  // TODO translate — temporary copy of DE labels.
  it: [
    { label: "Home", href: "/" },
    { label: "Camere & Prezzi", href: "/#zimmer" },
    { label: "Cucina & Wellness", href: "/#restaurant" },
    { label: "Galleria", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Posizione & Contatti", href: "/#lage" },
    { label: "Richiesta", href: "/#anfrage", isButton: true },
  ],
  // TODO translate — temporary copy of DE labels.
  en: [
    { label: "Home", href: "/" },
    { label: "Rooms & Prices", href: "/#zimmer" },
    { label: "Dining & Wellness", href: "/#restaurant" },
    { label: "Gallery", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Location & Contact", href: "/#lage" },
    { label: "Enquiry", href: "/#anfrage", isButton: true },
  ],
};
