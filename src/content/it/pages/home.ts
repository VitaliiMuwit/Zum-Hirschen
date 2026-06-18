/**
 * Home page content (Italian). Structure must match de/en.
 */
export const home = {
  hero: {
    slides: [
      {
        title: "Benvenuti all'Hotel Muster",
        subtitle: "La tua vacanza in Alto Adige",
        image: "/images/hero-1.jpg",
        alt: "Vista dell'Hotel Muster davanti alle Dolomiti",
        ctaLabel: "Invia una richiesta",
        ctaHref: "#anfrage",
      },
      {
        title: "Gusto e relax",
        subtitle: "Fascino alpino",
        image: "/images/hero-2.jpg",
        alt: "Terrazza solarium con panorama montano",
        ctaLabel: "Scopri le camere",
        ctaHref: "#zimmer",
      },
    ],
  },

  rooms: {
    eyebrow: "Soggiornare",
    title: "Le nostre camere e suite",
    text: "Comode camere e suite uniscono il fascino alpino al comfort moderno — il rifugio ideale dopo una giornata in montagna.",
    image: "/images/zimmer.jpg",
    imageAlt: "Accogliente camera doppia con mobili in legno",
    ctaLabel: "Richiedi",
    ctaHref: "#anfrage",
  },

  restaurant: {
    eyebrow: "Gustare",
    title: "Ristorante e cucina altoatesina",
    text: "Cucina regionale altoatesina con prodotti del territorio — fresca, stagionale e preparata con amore.",
    image: "/images/restaurant.jpg",
    imageAlt: "Tavolo apparecchiato nel ristorante",
  },

  gallery: {
    title: "Impressioni",
    images: [
      { src: "/images/gallery/1.jpg", alt: "Vista esterna dell'hotel", caption: "La nostra casa" },
      { src: "/images/gallery/2.jpg", alt: "Area wellness con sauna", caption: "Wellness" },
      { src: "/images/gallery/3.jpg", alt: "Suite con balcone", caption: "Suite" },
      { src: "/images/gallery/4.jpg", alt: "Buffet della colazione", caption: "Colazione" },
      { src: "/images/gallery/5.jpg", alt: "Giardino in estate", caption: "Giardino" },
      { src: "/images/gallery/6.jpg", alt: "Panorama montano", caption: "Vista" },
    ],
  },

  testimonials: {
    title: "Cosa dicono i nostri ospiti",
    items: [
      { quote: "Un soggiorno da sogno con calorosa ospitalità.", author: "Famiglia Huber", source: "Google", rating: 5 },
      { quote: "Ottimo cibo, personale gentile e una posizione meravigliosa.", author: "M. Rossi", source: "Booking.com", rating: 5 },
      { quote: "Torniamo ogni anno — semplicemente perfetto.", author: "S. Bauer", source: "Google", rating: 5 },
    ],
  },

  faq: {
    title: "Domande frequenti",
    items: [
      {
        question: "A che ora posso fare il check-in?",
        answer: "Il check-in è possibile dalle ore 15:00. In caso di arrivo anticipato, custodiamo volentieri i vostri bagagli.",
      },
      {
        question: "Ci sono parcheggi gratuiti?",
        answer: "Sì, i nostri ospiti hanno a disposizione parcheggi gratuiti direttamente presso la struttura.",
      },
      {
        question: "Sono ammessi animali domestici?",
        answer: "I piccoli animali domestici sono benvenuti previo accordo. Vi preghiamo di contattarci prima della prenotazione.",
      },
      {
        question: "La colazione è inclusa?",
        answer: "Una ricca colazione a buffet con prodotti regionali altoatesini è inclusa nel prezzo.",
      },
    ],
  },

  map: {
    title: "Posizione e come arrivare",
    text: "Ci trovate nel cuore dell'Alto Adige — in posizione ideale per una vacanza tra montagna e gusto.",
    buttonLabel: "Posizione e come arrivare",
    iframeTitle: "Mappa: posizione dell'hotel",
  },
};
