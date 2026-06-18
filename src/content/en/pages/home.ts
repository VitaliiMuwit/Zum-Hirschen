/**
 * Home page content (ENGLISH) — Hotel zum Hirschen.
 * TODO: translate. Currently a temporary copy of the German content.
 *
 * The structure of this object MUST be identical across de/en/it.
 * Images are paths in /public/images (TODO: add real photos); CTAs use on-page anchors.
 */
export const home = {
  hero: {
    slides: [
      {
        title: "Willkommen im Hotel zum Hirschen",
        subtitle: "Stegen bei Bruneck – echte Südtiroler Gastlichkeit",
        image: "/images/placeholders/hero-zum-hirschen.svg",
        alt: "Hotel zum Hirschen in Stegen bei Bruneck",
        ctaLabel: "Unverbindlich anfragen",
        ctaHref: "#anfrage",
      },
      {
        title: "Geschichte seit 1414",
        subtitle: "Historische Gewölbe & über 1 m dicke Mauern",
        image: "/images/placeholders/hero-geschichte.svg",
        alt: "Historisches Gewölbe im Hotel zum Hirschen",
        ctaLabel: "Zimmer entdecken",
        ctaHref: "#zimmer",
      },
    ],
  },

  // Hotel intro / history.
  about: {
    eyebrow: "Willkommen",
    title: "Echtes Gasthaus-Feeling seit 1414",
    text: "Im Hotel zum Hirschen in Stegen bei Bruneck erwartet Sie ein herzliches Gasthaus-Feeling: persönlich, bodenständig und geprägt von echter Südtiroler Wärme. Die Geschichte unseres Hauses reicht bis ins Jahr 1414 zurück – über einen Meter dicke Mauern und antike Gewölbe verleihen ihm seinen unverwechselbaren Charakter. Der ideale Ausgangspunkt für Pustertal, Kronplatz und die Stadt Bruneck. Hinweis: Unser Haus verfügt über keinen Aufzug, was den historischen Charakter bewahrt.",
    image: "/images/placeholders/hotel-exterior.svg",
    imageAlt: "Historisches Gebäude des Hotel zum Hirschen",
  },

  rooms: {
    eyebrow: "Übernachten",
    title: "Zimmer & Preise",
    text: "Unsere Zimmer verfügen über Dusche/WC, Safe, SAT-TV, Föhn und größtenteils über einen Balkon. Genießen Sie erholsame Nächte und starten Sie mit unserem reichhaltigen Frühstücksbuffet genussvoll in den Tag – mit frischen, regionalen Produkten und hausgemachten Spezialitäten.",
    image: "/images/placeholders/zimmer-preise.svg",
    imageAlt: "Gemütliches Zimmer im Hotel zum Hirschen",
    ctaLabel: "Preise & Anfrage",
    ctaHref: "#anfrage",
  },

  gallery: {
    title: "Augenblicke",
    images: [
      { src: "/images/placeholders/gallery-garten-pool.svg", alt: "Garten mit Freischwimmbad", caption: "Garten & Pool" },
      { src: "/images/placeholders/gallery-sauna.svg", alt: "Finnische und Bio-Sauna", caption: "Sauna" },
      { src: "/images/placeholders/gallery-zimmer.svg", alt: "Zimmer mit Balkon", caption: "Zimmer" },
      { src: "/images/placeholders/gallery-fruehstueck.svg", alt: "Reichhaltiges Frühstücksbuffet", caption: "Frühstück" },
      { src: "/images/placeholders/gallery-bruneck.svg", alt: "Altstadt von Bruneck", caption: "Bruneck" },
      { src: "/images/placeholders/gallery-gewoelbe.svg", alt: "Historisches Gewölbe", caption: "Gewölbe von 1414" },
    ],
  },

  restaurant: {
    eyebrow: "Genuss & Wellness",
    title: "Wohltuende Wärme & kulinarische Vielfalt",
    text: "Der großzügige Garten mit Freischwimmbad lädt im Sommer zum Entspannen ein. Finnische und Bio-Sauna, Kneipp-Becken, Erlebnisdusche und eine Physiotherm-Infrarotkabine sorgen für Erholung. In Bruneck und Umgebung erwartet Sie zudem eine kulinarische Vielfalt mit rund 220 gastronomischen Betrieben – traditionelle Gasthäuser, moderne Restaurants und gemütliche Pizzerien.",
    image: "/images/placeholders/wellness.svg",
    imageAlt: "Wellnessbereich mit Sauna und Freischwimmbad",
  },

  // TODO: replace with real guest reviews (Google / Booking.com).
  testimonials: {
    title: "Warum Gäste unser Hotel lieben",
    items: [
      { quote: "Echtes Gasthaus-Feeling mit familiärer, herzlicher Atmosphäre.", author: "Gast", source: "Zum Hirschen", rating: 5 },
      { quote: "Historische Mauern aus dem Jahr 1414 – einzigartige Gewölbe und über 1 m dicke Wände.", author: "Gast", source: "Zum Hirschen", rating: 5 },
      { quote: "Nur 800 m zur Altstadt Bruneck und 400 m zum Mobilitätszentrum – ideal für Aktivurlauber und Genießer.", author: "Gast", source: "Zum Hirschen", rating: 5 },
    ],
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Ist das Frühstück inkludiert?",
        answer: "Ja, ein reichhaltiges Frühstücksbuffet mit frischen, regionalen Produkten und hausgemachten Spezialitäten ist inkludiert.",
      },
      {
        question: "Gibt es einen Aufzug?",
        answer: "Nein. Unser historisches Haus verfügt über keinen Aufzug – das erhält den ursprünglichen Charakter und das historische Flair des Gebäudes.",
      },
      {
        question: "Welche Wellness-Einrichtungen gibt es?",
        answer: "Garten mit Freischwimmbad (in der warmen Jahreszeit), finnische und Bio-Sauna, Kneipp-Becken, Erlebnisdusche sowie eine Physiotherm-Infrarotkabine.",
      },
      {
        question: "Wie weit ist es ins Zentrum von Bruneck?",
        answer: "Nur 800 Meter zur historischen Altstadt und 400 Meter zum Mobilitätszentrum Bruneck.",
      },
      {
        question: "Gibt es Kinderermäßigungen?",
        answer: "Ja: bis 1,99 Jahre gratis, bis 5,99 Jahre 50 %, bis 11,99 Jahre 30 %, bis 14,99 Jahre 10 %.",
      },
    ],
  },

  map: {
    title: "Lage & Anfahrt",
    text: "Das Hotel zum Hirschen liegt zentral in Stegen bei Bruneck – nur 800 m von der Altstadt und 400 m vom Mobilitätszentrum entfernt. Der perfekte Ausgangspunkt für Dolomiten, Gadertal, Ahrntal und Hochpustertal.",
    buttonLabel: "Lage & Anfahrt",
    iframeTitle: "Karte: Hotel zum Hirschen, Stegen bei Bruneck",
  },
};
