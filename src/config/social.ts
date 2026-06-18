/**
 * Social network links. Used by the Footer (and anywhere social icons appear).
 * Leave `href` empty to hide a network.
 */

export interface SocialLink {
  /** Display label / accessible name. */
  label: string;
  href: string;
}

export const social: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];
