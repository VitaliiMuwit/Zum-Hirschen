/**
 * Contact details — the SINGLE place for phone, email, address and maps.
 *
 * Every component that shows a phone, email, address or Google Map
 * (Footer, Impressum, MapSection, ...) must read from here only.
 *
 * Note: `address` is kept structured (not a single string) because the
 * Impressum and the footer need the individual parts. `*Href` fields are
 * ready-to-use so components never have to build tel:/mailto: links.
 *
 * The form submission recipient is configured separately in .env
 * (CONTACT_FORM_TO_EMAIL), since it is a server-side secret.
 */

export interface Address {
  street: string;
  zip: string;
  city: string;
  region: string;
  country: string;
}

export interface OpeningHours {
  /** Localized label, e.g. "Mo–Fr" / "Lun–Ven". */
  days: string;
  /** e.g. "08:00 – 22:00". */
  hours: string;
}

export interface ContactConfig {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: Address;
  /** Link that opens the location in Google Maps. */
  googleMapsUrl: string;
  /** Embed URL for the <iframe> in MapSection (Google Maps → Share → Embed). */
  googleMapsEmbedUrl: string;
  openingHours: OpeningHours[];
}

export const contact: ContactConfig = {
  phone: "+39 0474 552285",
  phoneHref: "tel:+390474552285",
  email: "info@zumhirschen.it",
  emailHref: "mailto:info@zumhirschen.it",
  address: {
    street: "Sylvesterstraße 33",
    zip: "39031",
    city: "Stegen / Bruneck (BZ)",
    region: "Südtirol",
    country: "Italien",
  },
  googleMapsUrl: "https://maps.google.com/?q=Hotel+zum+Hirschen+Sylvesterstra%C3%9Fe+33+Stegen+Bruneck",
  // TODO: replace with the real "Embed a map" URL from Google Maps (Share → Embed).
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Sylvesterstra%C3%9Fe+33+39031+Stegen+Bruneck&output=embed",
  openingHours: [],
};
