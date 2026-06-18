/**
 * Home page content (German). Page TEXT only — SEO lives in config/seo.ts,
 * chrome (menu/footer/form labels) in common.ts.
 *
 * The structure of this object MUST be identical across de/en/it.
 * Images are paths in /public; CTAs use on-page anchors (no locale prefix).
 */
export const home = {
  hero: {
    slides: [
      {
        title: "Willkommen im Hotel Muster",
        subtitle: "Ihr Urlaub in Südtirol",
        image: "/images/hero-1.jpg",
        alt: "Blick auf das Hotel Muster vor den Dolomiten",
        ctaLabel: "Unverbindlich anfragen",
        ctaHref: "#anfrage",
      },
      {
        title: "Genuss & Erholung",
        subtitle: "Alpiner Charme",
        image: "/images/hero-2.jpg",
        alt: "Sonnenterrasse mit Bergpanorama",
        ctaLabel: "Zimmer entdecken",
        ctaHref: "#zimmer",
      },
    ],
  },

  rooms: {
    eyebrow: "Übernachten",
    title: "Unsere Zimmer & Suiten",
    text: "Komfortable Zimmer und Suiten verbinden alpinen Charme mit modernem Komfort – der ideale Rückzugsort nach einem Tag in den Bergen.",
    image: "/images/zimmer.jpg",
    imageAlt: "Gemütliches Doppelzimmer mit Holzmöbeln",
    ctaLabel: "Anfragen",
    ctaHref: "#anfrage",
  },

  restaurant: {
    eyebrow: "Genießen",
    title: "Restaurant & Südtiroler Küche",
    text: "Regionale Südtiroler Küche mit Produkten aus der Umgebung – frisch, saisonal und mit Liebe zubereitet.",
    image: "/images/restaurant.jpg",
    imageAlt: "Gedeckter Tisch im Restaurant",
  },

  gallery: {
    title: "Impressionen",
    images: [
      { src: "/images/gallery/1.jpg", alt: "Außenansicht des Hotels", caption: "Unser Haus" },
      { src: "/images/gallery/2.jpg", alt: "Wellnessbereich mit Sauna", caption: "Wellness" },
      { src: "/images/gallery/3.jpg", alt: "Suite mit Balkon", caption: "Suite" },
      { src: "/images/gallery/4.jpg", alt: "Frühstücksbuffet", caption: "Frühstück" },
      { src: "/images/gallery/5.jpg", alt: "Garten im Sommer", caption: "Garten" },
      { src: "/images/gallery/6.jpg", alt: "Bergpanorama", caption: "Aussicht" },
    ],
  },

  testimonials: {
    title: "Das sagen unsere Gäste",
    items: [
      { quote: "Ein traumhafter Aufenthalt mit herzlicher Gastfreundschaft.", author: "Familie Huber", source: "Google", rating: 5 },
      { quote: "Tolles Essen, freundliches Personal und eine wunderbare Lage.", author: "M. Rossi", source: "Booking.com", rating: 5 },
      { quote: "Wir kommen jedes Jahr wieder – einfach perfekt.", author: "S. Bauer", source: "Google", rating: 5 },
    ],
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Ab welcher Uhrzeit kann ich einchecken?",
        answer: "Der Check-in ist ab 15:00 Uhr möglich. Bei früherer Anreise bewahren wir Ihr Gepäck gerne auf.",
      },
      {
        question: "Gibt es kostenlose Parkplätze?",
        answer: "Ja, unseren Gästen stehen kostenlose Parkplätze direkt am Haus zur Verfügung.",
      },
      {
        question: "Sind Haustiere erlaubt?",
        answer: "Kleine Haustiere sind nach vorheriger Absprache willkommen. Bitte kontaktieren Sie uns vor der Buchung.",
      },
      {
        question: "Ist das Frühstück inkludiert?",
        answer: "Ein reichhaltiges Frühstücksbuffet mit regionalen Südtiroler Produkten ist im Preis enthalten.",
      },
    ],
  },

  map: {
    title: "Lage & Anfahrt",
    text: "Sie finden uns im Herzen Südtirols – ideal gelegen für Berg- und Genussurlaub.",
    buttonLabel: "Lage & Anfahrt",
    iframeTitle: "Karte: Standort des Hotels",
  },
};
