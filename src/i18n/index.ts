/**
 * Central translation loader + i18n helpers.
 *
 * All translations are imported here and accessed via translations[locale].
 * Reusable components do NOT import language files directly — they receive
 * content via props. Loading and passing the data is handled by the
 * pages and the layout.
 */
import { home as deHome } from "../content/de/pages/home";
import { common as deCommon } from "../content/de/common";
import { legal as deLegal } from "../content/de/legal";

import { home as enHome } from "../content/en/pages/home";
import { common as enCommon } from "../content/en/common";
import { legal as enLegal } from "../content/en/legal";

import { home as itHome } from "../content/it/pages/home";
import { common as itCommon } from "../content/it/common";
import { legal as itLegal } from "../content/it/legal";

/** Supported locales. German is the default. */
export const locales = ["de", "en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

/** Native display names per locale (used by the LanguageSwitcher). */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  it: "Italiano",
  en: "English",
};

export const translations = {
  de: { home: deHome, common: deCommon, legal: deLegal },
  en: { home: enHome, common: enCommon, legal: enLegal },
  it: { home: itHome, common: itCommon, legal: itLegal },
} as const;

/** Get the full translation bundle for a locale. */
export function getTranslations(locale: Locale) {
  return translations[locale];
}

/** Type guard: is the given string a supported locale? */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Build a localized path.
 * localizePath("de", "/")          -> "/de/"
 * localizePath("de", "/#zimmer")   -> "/de/#zimmer"
 * localizePath("en", "/impressum") -> "/en/impressum"
 */
export function localizePath(locale: Locale, path: string): string {
  if (path === "/" || path === "") return `/${locale}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

/**
 * Remove a leading locale segment from a pathname.
 * stripLocale("/de/impressum/") -> "/impressum/"
 * stripLocale("/de/")           -> "/"
 */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|en|it)(\/.*)?$/);
  if (match) return match[2] || "/";
  return pathname || "/";
}
