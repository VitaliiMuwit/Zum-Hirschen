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
  phone: "+39 0471 000000",
  phoneHref: "tel:+390471000000",
  email: "vitalii@muwit.it",
  emailHref: "mailto:vitalii@muwit.it",
  address: {
    street: "Musterstraße 1",
    zip: "39100",
    city: "Bozen",
    region: "Südtirol",
    country: "Italien",
  },
  googleMapsUrl: "https://maps.google.com/?q=Hotel+Muster+Bozen",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Bozen&output=embed",
  openingHours: [
    { days: "Mo–So", hours: "08:00 – 22:00" },
  ],
};
