/**
 * Site-level configuration — general data that is not split into a more
 * specific config file. For a new client, edit this plus the other files in
 * src/config/, the content in src/content/, theme in theme.ts and images in public/.
 *
 * Contacts → config/contact.ts · Social → config/social.ts
 * Menu → config/menu.ts · Per-page SEO → config/seo.ts · Theme → config/theme.ts
 *
 * defaultLocale / locales mirror the routing source of truth in src/i18n.
 */
import {
  locales as routingLocales,
  defaultLocale as routingDefaultLocale,
  type Locale,
} from "../i18n";

export interface SiteCompany {
  /** Display / brand name. */
  name: string;
  /** Legal company name (Impressum). */
  legalName: string;
  /** VAT / tax id. */
  vatId: string;
}

export interface SiteMuwit {
  name: string;
  url: string;
  /** Muwit logo path relative to /public. */
  logo: string;
}

export interface SiteTracking {
  /** Google Tag Manager container ID, e.g. "GTM-XXXXXX". Empty = disabled. */
  gtmId: string;
  /** Google Analytics 4 measurement ID, e.g. "G-XXXXXXX". Empty = disabled. */
  gaId: string;
}

/** Fallback SEO used when a page (config/seo.ts) does not provide its own. */
export interface SiteSeoDefaults {
  defaultTitle: string;
  /** "%s" is replaced by the page title. */
  titleTemplate: string;
  defaultDescription: string;
  /** Default social sharing image (path relative to /public). */
  defaultImage: string;
}

export interface SiteConfig {
  /** Brand / display name. */
  name: string;
  /** Production origin, e.g. "https://www.example.com" (no trailing slash). */
  domain: string;
  /** Client/brand logo + favicon (path relative to /public). */
  logo: string;
  /** Footer variant of the logo (different color), path relative to /public. */
  logoFooter: string;
  defaultLocale: Locale;
  locales: Locale[];
  company: SiteCompany;
  muwit: SiteMuwit;
  /** Analytics / tag manager IDs (empty string = disabled). */
  tracking: SiteTracking;
  seo: SiteSeoDefaults;
}

export const site: SiteConfig = {
  name: "Hotel zum Hirschen",
  // TODO: confirm production domain with client.
  domain: "https://www.zumhirschen.it",
  logo: "/images/logo-zum-hirschen.png", // real brand wordmark (supplied PNG, transparent)
  // TODO: add the footer logo asset (different color) to /public/images/.
  logoFooter: "/images/logo-zum-hirschen-footer.png",

  defaultLocale: routingDefaultLocale,
  locales: [...routingLocales],

  company: {
    name: "Hotel Restaurant Zum Hirschen",
    // TODO: confirm exact legal entity.
    legalName: "Hotel zum Hirschen – Fam. Unterberger",
    vatId: "IT00000000000", // TODO: real VAT / Steuernummer
  },

  muwit: {
    name: "Muwit",
    url: "https://muwit.com",
    logo: "/muwit-logo.svg",
  },

  tracking: {
    // Leave empty to disable. Example: "GTM-XXXXXX".
    gtmId: "",
    // Leave empty to disable. Example: "G-XXXXXXX".
    gaId: "",
  },

  seo: {
    defaultTitle: "Hotel Restaurant Zum Hirschen – Stegen bei Bruneck, Südtirol",
    titleTemplate: "%s | Hotel zum Hirschen",
    defaultDescription:
      "Hotel zum Hirschen in Stegen bei Bruneck – herzliches Gasthaus-Feeling, echte Südtiroler Gastlichkeit. Ihr Ausgangspunkt für Pustertal & Kronplatz.",
    defaultImage: "/images/placeholders/og-zum-hirschen.svg", // TODO: real OG image (1200×630 JPG/PNG)
  },
};
