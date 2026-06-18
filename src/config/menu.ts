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
    { label: "Zimmer", href: "/#zimmer" },
    { label: "Restaurant", href: "/#restaurant" },
    { label: "Galerie", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Anfrage", href: "/#anfrage" },
    { label: "Buchen", href: "/#anfrage", isButton: true },
  ],
  it: [
    { label: "Home", href: "/" },
    { label: "Camere", href: "/#zimmer" },
    { label: "Ristorante", href: "/#restaurant" },
    { label: "Galleria", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Richiesta", href: "/#anfrage" },
    { label: "Prenota", href: "/#anfrage", isButton: true },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/#zimmer" },
    { label: "Restaurant", href: "/#restaurant" },
    { label: "Gallery", href: "/#galerie" },
    { label: "FAQ", href: "/#faq" },
    { label: "Enquiry", href: "/#anfrage" },
    { label: "Book", href: "/#anfrage", isButton: true },
  ],
};
