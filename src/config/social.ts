/**
 * Social network links. Used by the Footer (and anywhere social icons appear).
 * Leave `href` empty to hide a network.
 */

export interface SocialLink {
  /** Display label / accessible name. */
  label: string;
  href: string;
}

// TODO: replace with the hotel's real Instagram / Facebook profile URLs.
export const social: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];
