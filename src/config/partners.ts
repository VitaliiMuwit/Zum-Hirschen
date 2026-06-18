/**
 * Partner / service logos shown by PartnerLogos.astro (footer or own section).
 * Add an entry per partner; `href` is optional (omit for a non-clickable logo).
 */

export interface Partner {
  name: string;
  /** Logo path relative to /public. */
  logo: string;
  /** Alt text for the logo image. */
  alt: string;
  /** Optional link to the partner's website. */
  href?: string;
}

// Kept empty until real logo assets exist (otherwise broken images would show).
// TODO: add Südtirol Info once /public/images/partners/suedtirol.svg is available:
//   { name: "Südtirol", logo: "/images/partners/suedtirol.svg", alt: "Südtirol", href: "https://www.suedtirol.info/" },
export const partners: Partner[] = [];
