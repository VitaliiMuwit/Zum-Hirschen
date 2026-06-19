/**
 * Home page content (German) — Hotel zum Hirschen.
 * Page TEXT only — SEO lives in config/seo.ts, chrome in common.ts.
 * Structure must be identical across de/en/it. Images live in /public/images.
 */
export const home = {
  hero: {
    slides: [
      {
        title: "Willkommen im Hotel zum Hirschen",
        subtitle: "Stegen bei Bruneck – echte Südtiroler Gastlichkeit",
        image: "/images/head.webp",
        alt: "Hotel zum Hirschen in Stegen bei Bruneck",
        ctaLabel: "Unverbindlich anfragen",
        ctaHref: "#anfrage",
      },
    ],
  },

  // 1) Centered intro + orange Hinweis callout
  about: {
    eyebrow: "Ihrem Zuhause für echte Südtiroler Gastlichkeit",
    title: "Willkommen im Hotel zum Hirschen in Stegen bei Bruneck",
    paragraphs: [
      "Im Hotel zum Hirschen in Stegen bei Bruneck erwartet Sie ein herzliches Gasthaus-Feeling, wie man es heute nur noch selten findet: persönlich, bodenständig und geprägt von echter Südtiroler Wärme.",
      "Die Geschichte unseres Hauses reicht bis ins Jahr 1414 zurück. Besonders eindrucksvoll sind die historischen Bauelemente: Die Mauern im Erdgeschoss sind über einen Meter dick, während antike Gewölbe dem Haus seinen unverwechselbaren Charakter verleihen. Diese traditionelle Bauweise schafft ein einzigartiges, kraftvolles Ambiente und sorgt für ein angenehmes Raumklima – spürbare Geschichte in jedem Winkel.",
      "Ob für einen erholsamen Urlaub im Pustertal, aktive Tage rund um den Kronplatz oder einen Besuch in der nahegelegenen Stadt Bruneck – das Hotel zum Hirschen ist der ideale Ausgangspunkt für Ihre Auszeit in Südtirol. Authentisch. Behaglich. Echt.",
    ],
    hinweis:
      "Hinweis: Unser Haus verfügt über keinen Aufzug, was den ursprünglichen Charakter des Gebäudes erhält und das historische Flair unterstreicht.",
  },

  // 2) Blue-grey feature band (3 columns with vintage illustrations)
  features: [
    {
      title: "Bruneck",
      text: "Zentrumsnaher Ausgangspunkt zum Shoppen, Kultur erleben oder die Umgebung zu erkunden.",
      icon: "/images/illustrations/figur.svg",
    },
    {
      title: "Genuss",
      text: "Wir bieten Zimmer mit reichhaltigem Frühstücksbuffet. Gerne empfehlen wir Ihnen Restaurants in der vielfältigen Südtiroler Gastronomie ganz in unserer Nähe.",
      icon: "/images/illustrations/chef.svg",
    },
    {
      title: "Pool & Wellness",
      text: "Schwimmbad (geöffnet in der warmen Jahreszeit), Finnische und Bio-Sauna, Kneipp-Becken, Erlebnisdusche sowie eine Physiotherm-Infrarotkabine.",
      icon: "/images/illustrations/swimmer.svg",
    },
  ],

  // 3) "Augenblicke" gallery on striped background
  gallery: {
    illustration: "/images/illustrations/photo.png",
    scriptTitle: "Augenblicke",
    images: [
      {
        src: "/images/placeholders/slider_a.png",
        alt: "Garten mit Freischwimmbad",
        caption: "Garten & Pool",
      },
      {
        src: "/images/placeholders/slider_b.png",
        alt: "Gedeckter Tisch im Restaurant",
        caption: "Restaurant",
      },
      {
        src: "/images/placeholders/slider_c.webp",
        alt: "Zimmer mit Balkon",
        caption: "Zimmer",
      },
    ],
  },

  // 4) "Beste Lage" — photo + centered text on orange
  bestLage: {
    image: "/images/city.webp",
    imageAlt: "Hotel zum Hirschen in Stegen bei Bruneck",
    title: "Beste Lage",
    eyebrow: "Zentral gelegen und perfekt angebunden im Pustertal",
    text: "Das Hotel zum Hirschen in Stegen bei Bruneck liegt nur 800 Meter vom historischen Stadtzentrum von Bruneck entfernt – ideal für entspannte Spaziergänge durch die Altstadt, kleine Einkäufe und kulturelle Entdeckungen. Das Mobilitätszentrum Bruneck erreichen Sie in nur 400 Metern und profitieren so von schnellen, bequemen und nachhaltigen Verbindungen im gesamten Pustertal. Dank unserer zentralen Lage in Südtirol sind wir zudem der perfekte Ausgangspunkt für zahlreiche Aktivitäten: Erkunden Sie die beeindruckenden Dolomiten, genießen Sie Wanderungen im Gadertal, entdecken Sie das ursprüngliche Ahrntal oder erleben Sie die Vielfalt des Hochpustertals – alles bequem erreichbar.",
  },

  // 5) "Wohnen mit Wohlgefühl" — room photo + caption + price accordion
  wohnen: {
    illustration: "/images/illustrations/blume.png",
    scriptTitle: "Wohnen mit Wohlgefühl",
    images: [
      {
        src: "/images/placeholders/slider_a_b_c.webp",
        alt: "Komfortables Zimmer im Hotel zum Hirschen",
        caption: "Zimmer",
      },
      {
        src: "/images/placeholders/slider_a_b_c.webp",
        alt: "Komfortables Zimmer im Hotel zum Hirschen",
        caption: "Zimmer",
      },
      {
        src: "/images/placeholders/slider_a_b_c.webp",
        alt: "Komfortables Zimmer im Hotel zum Hirschen",
        caption: "Zimmer",
      },
    ],
    caption:
      "Unsere Zimmer verfügen über Dusche/WC, Safe, SAT-TV, Föhn und größtenteils über einen Balkon. Einige Zimmer sind zudem mit Teppichboden ausgestattet.",
    accordion: [
      { question: "Kurzaufenthalt", answer: "+ 5,00 € pro Person und Tag" },
      { question: "Einbettzimmerzuschlag", answer: "+ 20,00 €" },
      {
        question: "Kinderermäßigungen",
        answer:
          "Kinder bis 1,99 Jahre: GRATIS · bis 5,99 Jahre: 50 % · bis 11,99 Jahre: 30 % · bis 14,99 Jahre: 10 %",
      },
      {
        question: "Allgemeine Vertragsbedingungen",
        answer: "TODO: Inhalt ergänzen.",
      },
      {
        question: "Reise-Storno-Schutz Versicherung",
        answer: "TODO: Inhalt ergänzen.",
      },
    ],
  },

  // 6) "Genuss & Wellness" — two columns with photo on top
  genuss: {
    image: "/images/placeholders/genuss-dining.svg",
    imageAlt: "Frühstück im Hotel zum Hirschen",
    title: "Genuss",
    eyebrow: "Starten Sie gut in den Tag",
    text: "Im Hotel zum Hirschen genießen Sie erholsame Nächte und starten genussvoll in den Tag mit unserem reichhaltigen Frühstücksbuffet. Frische, regionale Produkte, knuspriges Gebäck, hausgemachte Spezialitäten und eine Auswahl an herzhaften und süßen Köstlichkeiten sorgen für einen perfekten Start in Ihren Urlaub. Unsere Zimmer verbinden Komfort und Gemütlichkeit und bieten den idealen Rückzugsort nach einem erlebnisreichen Tag in der Region. Ob Aktivurlaub oder entspannte Auszeit – im Hotel zum Hirschen erleben Sie authentische Gastfreundschaft.",
  },
  wellness: {
    image: "/images/placeholders/wellness-pool.svg",
    imageAlt: "Garten mit Freischwimmbad und Wellness",
    title: "Wellness",
    eyebrow: "Wohltuende Wärme, sanfte Entspannung",
    text: "Der großzügige Garten mit Freischwimmbad lädt im Sommer zum Entspannen, Sonnenbaden und Abkühlen ein.",
    list: [
      "Finnische Sauna / Bio-Sauna",
      "Kneipp-Becken",
      "Erlebnisdusche",
      "Physiotherm-Infrarotkabine",
    ],
    text2:
      "Ob nach einem Tag auf dem Berg, einem Stadtbummel oder einer Wanderung oder nach der Arbeit – hier finden Sie Ruhe, Wärme und Entspannung für Körper und Geist.",
  },

  // Dashed note block under the Genuss & Wellness slider.
  genussNote: {
    title: "Gut zu wissen", // TODO: Titel anpassen
    text: "TODO: Inhalt für den Hinweis-Block (Genuss & Wellness) ergänzen.",
  },

  // 7) "Gastronomie in der Umgebung" — blue-grey callout on stripes
  gastronomie: {
    title: "Gastronomie in der Umgebung",
    text: "Nur wenige Schritte vom Hotel entfernt erwartet Sie außerdem eine beeindruckende kulinarische Vielfalt: In Bruneck und Umgebung gibt es rund 220 gastronomische Betriebe, darunter traditionelle Gasthäuser, moderne Restaurants und gemütliche Pizzerien. Nicht alle befinden sich direkt im Stadtzentrum, doch die Auswahl in unmittelbarer Nähe ist groß und vielfältig.",
    buttonLabel: "Südtirol Info",
    buttonHref: "https://www.suedtirol.info/",
  },

  // 8) "Erleben" — compass + 3 activity cards
  erleben: {
    illustration: "/images/illustrations/compass.svg",
    scriptTitle: "Erleben",
    intro:
      "Die Umgebung rund um Bruneck bietet zu jeder Jahreszeit unzählige Möglichkeiten: Wandern, Radfahren, Skifahren, Ausflüge und entspanntes Flanieren. Durch die Nähe zu Bus und Bahn erreichen Sie viele Ziele schnell und ohne Auto.",
    cards: [
      {
        title: "Wandern",
        text: "Vom gemütlichen Talweg bis zur hochalpinen Tour – unzählige Routen starten direkt vor der Tür.",
        image: "/images/placeholders/erleben-wandern.svg",
        imageAlt: "Wandern rund um Bruneck",
      },
      {
        title: "Skifahren",
        text: "Der Kronplatz, Südtirols Top-Skiberg, liegt nur wenige Minuten entfernt – Pistenspaß für die ganze Familie.",
        image: "/images/placeholders/erleben-skifahren.svg",
        imageAlt: "Skifahren am Kronplatz",
      },
      {
        title: "Biken",
        text: "Genussradeln im Tal oder anspruchsvolle Trails am Berg – das Pustertal ist ein Paradies für Radfahrer.",
        image: "/images/placeholders/erleben-biken.svg",
        imageAlt: "Biken im Pustertal",
      },
    ],
    buttonLabel: "Mehr erfahren / Guestnet",
    buttonHref: "#",
  },

  // 9) "Warum Gäste unser Hotel lieben" — orange reasons list
  warum: {
    title: "Warum Gäste unser Hotel lieben",
    reasons: [
      "Echtes Gasthaus-Feeling",
      "Historische Mauern aus dem Jahr 1414",
      "Einzigartige Gewölbe & über 1 m dicke Wände",
      "Familiäre, herzliche Atmosphäre",
      "800 m zur Altstadt Bruneck",
      "400 m zum Mobilitätszentrum",
      "Ideal für Aktivurlauber & Genießer und Work and Travel",
    ],
  },
};
