/**
 * Home page content (English). Structure must match de/it.
 */
export const home = {
  hero: {
    slides: [
      {
        title: "Welcome to Hotel Muster",
        subtitle: "Your holiday in South Tyrol",
        image: "/images/hero-1.jpg",
        alt: "View of Hotel Muster in front of the Dolomites",
        ctaLabel: "Send an enquiry",
        ctaHref: "#anfrage",
      },
      {
        title: "Pleasure & relaxation",
        subtitle: "Alpine charm",
        image: "/images/hero-2.jpg",
        alt: "Sun terrace with mountain panorama",
        ctaLabel: "Discover rooms",
        ctaHref: "#zimmer",
      },
    ],
  },

  rooms: {
    eyebrow: "Stay",
    title: "Our rooms & suites",
    text: "Comfortable rooms and suites combine alpine charm with modern comfort — the ideal retreat after a day in the mountains.",
    image: "/images/zimmer.jpg",
    imageAlt: "Cosy double room with wooden furniture",
    ctaLabel: "Enquire",
    ctaHref: "#anfrage",
  },

  restaurant: {
    eyebrow: "Dine",
    title: "Restaurant & South Tyrolean cuisine",
    text: "Regional South Tyrolean cuisine made with local products — fresh, seasonal and prepared with love.",
    image: "/images/restaurant.jpg",
    imageAlt: "Set table in the restaurant",
  },

  gallery: {
    title: "Impressions",
    images: [
      { src: "/images/gallery/1.jpg", alt: "Exterior view of the hotel", caption: "Our house" },
      { src: "/images/gallery/2.jpg", alt: "Wellness area with sauna", caption: "Wellness" },
      { src: "/images/gallery/3.jpg", alt: "Suite with balcony", caption: "Suite" },
      { src: "/images/gallery/4.jpg", alt: "Breakfast buffet", caption: "Breakfast" },
      { src: "/images/gallery/5.jpg", alt: "Garden in summer", caption: "Garden" },
      { src: "/images/gallery/6.jpg", alt: "Mountain panorama", caption: "View" },
    ],
  },

  testimonials: {
    title: "What our guests say",
    items: [
      { quote: "A wonderful stay with warm hospitality.", author: "The Huber family", source: "Google", rating: 5 },
      { quote: "Great food, friendly staff and a wonderful location.", author: "M. Rossi", source: "Booking.com", rating: 5 },
      { quote: "We come back every year — simply perfect.", author: "S. Bauer", source: "Google", rating: 5 },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "From what time can I check in?",
        answer: "Check-in is possible from 3:00 pm. If you arrive earlier, we are happy to store your luggage.",
      },
      {
        question: "Is there free parking?",
        answer: "Yes, free parking is available for our guests right next to the building.",
      },
      {
        question: "Are pets allowed?",
        answer: "Small pets are welcome by prior arrangement. Please contact us before booking.",
      },
      {
        question: "Is breakfast included?",
        answer: "A rich breakfast buffet with regional South Tyrolean products is included in the price.",
      },
    ],
  },

  map: {
    title: "Location & Directions",
    text: "You will find us in the heart of South Tyrol — ideally located for a mountain and gourmet holiday.",
    buttonLabel: "Location & Directions",
    iframeTitle: "Map: hotel location",
  },
};
