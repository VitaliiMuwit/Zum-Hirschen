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

// TODO: replace the placeholder SVGs in /public/images/partners/ with the real
// partner logos (same file names, or update the paths below).
export const partners: Partner[] = [
  {
    name: "Südtirol",
    logo: "/images/partners/suedtirol.png",
    alt: "Südtirol",
    href: "https://www.suedtirol.info/",
  },
  {
    name: "Booking Südtirol",
    logo: "/images/partners/booking-suedtirol.png",
    alt: "Booking Südtirol",
    href: "https://www.booking-suedtirol.com/",
  },
  {
    name: "Bruneck / Brunico",
    logo: "/images/partners/bruneck.png",
    alt: "Bruneck / Brunico",
    href: "https://www.bruneck.com/",
  },
];
