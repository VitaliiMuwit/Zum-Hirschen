/**
 * Shared (site-wide) texts for the German language.
 *
 * This includes the site "chrome" UI strings that repeat on every page:
 * form labels, footer labels and ARIA labels.
 *
 * Navigation menu and fixed buttons live in src/config/ (menu.ts, fixedButtons.ts).
 *
 * The structure of this object MUST be identical across all languages (de/en/it).
 */
export const common = {
  ui: {
    menuButton: "Menü",
    menuClose: "Schließen",
    menuAria: "Hauptmenü",
    navAria: "Hauptnavigation",
    homeAria: "Startseite",
    langAria: "Sprache wählen",
    socialAria: "Soziale Netzwerke",
    legalAria: "Rechtliches",
    quickActions: "Schnellaktionen",
  },

  form: {
    title: "Anfrage",
    vorname: "Vorname",
    nachname: "Nachname",
    email: "Email",
    telefon: "Telefon",
    anreise: "Anreise",
    abreise: "Abreise",
    erwachsene: "Anzahl Erwachsene",
    kinder: "Anzahl Kinder",
    nachricht: "Nachricht",
    datenschutzBefore: "Ich habe die ",
    datenschutzLink: "Datenschutzbestimmungen",
    datenschutzAfter: " gelesen und akzeptiere sie.",
    submit: "Anfrage senden",
    sending: "Wird gesendet …",
    success: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
    error: "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
  },

  footer: {
    mapsLabel: "Lage & Anfahrt",
    impressum: "Impressum",
    datenschutz: "Datenschutz & Cookies",
  },
};
