/**
 * Per-page, per-locale SEO overrides.
 *
 * Use `getSeo(page, locale)` to read the SEO for a page. Any field left empty
 * here falls back to the site-wide defaults in config/site.ts (the fallback is
 * applied in BaseLayout, which also wraps the title in `titleTemplate`).
 */
import type { Locale } from "../i18n";

export interface PageSeo {
  title?: string;
  description?: string;
  /** Social image path relative to /public. */
  image?: string;
}

export type SeoPageKey =
  | "home"
  | "rooms"
  | "restaurant"
  | "contact"
  | "faq"
  | "impressum"
  | "datenschutz";

type LocalizedSeo = Partial<Record<Locale, PageSeo>>;

export const seoPages: Record<SeoPageKey, LocalizedSeo> = {
  // Home: no per-page title → uses site.seo.defaultTitle (the full SEO title).
  // Description falls back to site.seo.defaultDescription (DE).
  // TODO: add localized IT/EN home title + description once translated.
  home: {},
  rooms: {},
  restaurant: {},
  contact: {},
  faq: {},
  impressum: {
    de: { title: "Impressum", description: "Impressum und Anbieterkennzeichnung." },
    it: { title: "Note legali", description: "Note legali e identificazione del fornitore." },
    en: { title: "Imprint", description: "Imprint and provider identification." },
  },
  datenschutz: {
    de: { title: "Datenschutz & Cookies", description: "Informationen zum Datenschutz und zur Verwendung von Cookies." },
    it: { title: "Privacy & Cookie", description: "Informazioni sulla protezione dei dati e sull'uso dei cookie." },
    en: { title: "Privacy & Cookies", description: "Information about data protection and the use of cookies." },
  },
};

/**
 * Get the SEO overrides for a page in a given locale.
 * Returns a partial object; missing fields fall back to site defaults in BaseLayout.
 */
export function getSeo(page: SeoPageKey, locale: Locale): PageSeo {
  return seoPages[page]?.[locale] ?? {};
}
