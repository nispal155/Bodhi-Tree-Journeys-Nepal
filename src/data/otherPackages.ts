import { TourPackage } from "./packages";

export const otherPackages: TourPackage[] = [
  // Helicopter & Scenic Flights
  {
    slug: "everest-scenic-flight",
    title: "Everest Scenic Flight",
    overview: "Fly Above the Roof of the World. Skip long climbs and crowded viewpoints. Close-up views without trekking; window seat guaranteed.",
    image: "/gallery/gallery-42.jpg",
    tourType: "Scenic Flight",
    duration: "Half Day",
    route: "Kathmandu → Everest region → Return",
    bestSeason: "Operates Year-Round (weather permitting)",
    highlights: [
      "Views: Everest, Lhotse, Makalu, Cho Oyu, Langtang, plus valleys and glaciers",
      "Close-up views without trekking; window seat guaranteed"
    ],
    inclusions: ["Scenic flight", "Window seat"],
    exclusions: ["Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Scenic Flight",
        activities: ["Transfer to airport", "Enjoy the scenic flight over the Himalayas", "Return to hotel"],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "annapurna-range-helicopter-tour",
    title: "Annapurna Range Helicopter Tour",
    overview: "Circle the Fishtail & Giants. Skip long climbs and crowded viewpoints.",
    image: "/gallery/gallery-18.jpg",
    tourType: "Scenic Flight",
    duration: "Half Day",
    route: "Pokhara → Annapurna Sanctuary → Base Camp flyover → Return",
    bestSeason: "Operates Year-Round (weather permitting)",
    highlights: [
      "Views: Annapurna I, South, Dhaulagiri, Machhapuchhre, Tilicho Lake",
      "Optional 15-minute landing at Annapurna Base Camp"
    ],
    inclusions: ["Helicopter flight"],
    exclusions: ["Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Helicopter Tour",
        activities: ["Transfer to helipad", "Helicopter flight over Annapurna range", "Optional landing at ABC", "Return to Pokhara"],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "ebc-heli-tour-landing",
    title: "Everest Base Camp Heli Tour with Landing",
    overview: "Land at the Top of the World. Perfect for VIPs, senior travellers, post-trek extension, proposals/anniversaries.",
    image: "/gallery/gallery-9.jpg",
    images: ["/gallery/gallery-25.jpg","/gallery/gallery-21.jpg"],
    tourType: "Scenic Flight",
    duration: "Half Day",
    route: "Kathmandu/Lukla → EBC/Kala Patthar → Return",
    bestSeason: "Operates Year-Round (weather permitting)",
    highlights: [
      "Views: Full Everest massif, Khumbu Icefall, Sherpa villages",
      "Land at 5,200 m for photos and quiet moments"
    ],
    inclusions: ["Helicopter flight with landing"],
    exclusions: ["Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Heli Tour with Landing",
        activities: ["Transfer to helipad", "Helicopter flight to Everest region", "Landing at Kala Patthar / EBC", "Return flight"],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  // Day Sightseeing Tours
  {
    slug: "kathmandu-valley-unesco-highlights-day-tour",
    title: "Kathmandu Valley UNESCO Highlights (Day Tour)",
    overview: "See 7 World Heritage Sites in One Day. Perfect for first-time visitors, culture lovers, short stay guests.",
    image: "/gallery/gallery-9.jpg",
    tourType: "Day Tour",
    duration: "1 Day",
    route: "Kathmandu Valley",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Swayambhunath",
      "Patan Durbar Square",
      "Bhaktapur Durbar Square"
    ],
    inclusions: ["Private car", "Guide"],
    exclusions: ["Entry fees (unless specified)", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "UNESCO Highlights",
        activities: ["Visit Pashupatinath, Boudhanath, Swayambhunath, Patan, and Bhaktapur."],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "pokhara-nature-spirit-day-tour",
    title: "Pokhara Nature & Spirit Day Tour",
    overview: "Mountains, Lakes & Peace. Golden hour timing, panoramic viewpoints, no walking required.",
    image: "/gallery/gallery-25.jpg",
    tourType: "Day Tour",
    duration: "1 Day",
    route: "Pokhara",
    bestSeason: "Operates Year-Round",
    highlights: [
      "World Peace Stupa sunrise",
      "Phewa Lake boat ride",
      "Tal Barahi Temple",
      "International Mountain Museum",
      "Bindhyabasini Temple"
    ],
    inclusions: ["Private car", "Guide"],
    exclusions: ["Entry fees", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Pokhara Sightseeing",
        activities: ["Sunrise at World Peace Stupa", "Boat ride on Phewa Lake", "Visit museums and temples."],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
slug: "chitwan-jungle-day-safari",
    title: "Chitwan Jungle Day Safari",
    overview: "Wildlife in One Day. All-inclusive, fully guided, easy accessibility.",
    image: "/gallery/gallery-12.jpg",
    images: ["/gallery/gallery-28.jpg","/gallery/gallery-11.jpg","/gallery/gallery-27.jpg"],
    tourType: "Day Tour",
    duration: "1 Day",
    route: "Chitwan",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Jeep safari",
      "Canoe ride",
      "Search for one-horned rhino, deer, crocodiles",
      "Tharu village visit"
    ],
    inclusions: ["Private car", "Guide", "Safari activities"],
    exclusions: ["Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Jungle Safari",
        activities: ["Jeep Safari", "Canoe ride", "Tharu village visit."],
        meals: "Lunch",
        overnight: "N/A"
      }
    ]
  },
  // Photography & Festival Tours
  {
    slug: "himalayan-golden-hour-photo-tour",
    title: "Himalayan Golden Hour Photo Tour",
    overview: "Mountains in Their Best Light. We schedule every stop for GOLDEN HOUR — never rush, always the best light.",
    image: "/gallery/gallery-43.jpg",
    tourType: "Photography Tour",
    duration: "Flexible",
    route: "Various",
    bestSeason: "Best during clear skies",
    highlights: [
      "Sunrise at Poon Hill / Nagarkot",
      "Sunset over Annapurna",
      "Misty valleys, starry skies, rhododendron forests"
    ],
    inclusions: ["Logistics", "Photography guidance"],
    exclusions: ["Camera equipment"],
    itinerary: [
      {
        day: 1,
        title: "Golden Hour Photography",
        activities: ["Capture sunrise/sunset and breathtaking landscapes."],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "authentic-heritage-portrait-tour",
    title: "Authentic Heritage & Portrait Tour",
    overview: "Real Stories, Real People. No crowds, arranged access — capture moments that feel truly yours.",
    image: "/gallery/gallery-29.jpg",
    tourType: "Photography Tour",
    duration: "Flexible",
    route: "Various",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Ancient courtyards and monastery rituals",
      "Artisan workshops and village markets",
      "Respectful portraits of local people"
    ],
    inclusions: ["Logistics", "Arranged access"],
    exclusions: ["Camera equipment"],
    itinerary: [
      {
        day: 1,
        title: "Heritage Photography",
        activities: ["Visit local markets, artisan workshops, and courtyards for portraits."],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "festival-magic-tour",
    title: "Festival Magic Tour",
    overview: "Colour, Joy & Celebration — At the Right Moment. Timed perfectly — we are there for the most colourful, unforgettable moments.",
    image: "/gallery/gallery-20.jpg",
    tourType: "Festival Tour",
    duration: "Flexible",
    route: "Various (Depending on festival)",
    bestSeason: "During specific festivals",
    highlights: [
      "Experience Dashain, Tihar, Holi, Buddha Jayanti, Indra Jatra, Manu Rimdu, or Rato Machhindranath",
      "Front-row vantage points, processions, rare rituals"
    ],
    inclusions: ["Festival access", "Guide"],
    exclusions: ["Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Festival Experience",
        activities: ["Participate in and witness vibrant festival celebrations."],
        meals: "N/A",
        overnight: "N/A"
      }
    ]
  },
  // Custom & Special Interest
  {
    slug: "fully-bespoke-private-trips",
    title: "Fully Bespoke Private Trips",
    overview: "Your Dates, Your Pace, Your Rules. We craft every detail just for you.",
    image: "/gallery/gallery-2.jpg",
    tourType: "Custom Journey",
    duration: "Flexible",
    route: "Custom",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Tailored route, accommodation level, and daily schedule",
      "Mix trekking, wildlife, pilgrimage, or leisure exactly as you wish",
      "Perfect for solo travellers, couples, families, and small private groups"
    ],
    inclusions: ["Fully tailored services"],
    exclusions: ["N/A"],
    itinerary: [
      {
        day: 1,
        title: "Bespoke Journey",
        activities: ["Your journey, tailored exactly to your preferences."],
        meals: "Flexible",
        overnight: "Flexible"
      }
    ]
  },
  {
    slug: "passion-driven-special-themes",
    title: "Passion-Driven Special Themes",
    overview: "Travel For What You Love. Arts & Crafts, Culinary Trails, History & Myth, and more.",
    image: "/gallery/gallery-28.jpg",
    tourType: "Custom Journey",
    duration: "Flexible",
    route: "Custom",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Arts & Crafts: Thanka painting, metalwork, pottery, weaving workshops",
      "Culinary Trails: Traditional cooking, village harvests, ethnic food experiences",
      "History & Myth: Ancient kingdoms, hidden caves, lesser-known heritage sites"
    ],
    inclusions: ["Specialized workshops and tours"],
    exclusions: ["N/A"],
    itinerary: [
      {
        day: 1,
        title: "Themed Experience",
        activities: ["Immerse in your specific passion, guided by experts."],
        meals: "Flexible",
        overnight: "Flexible"
      }
    ]
  },
  {
    slug: "multi-destination-combinations",
    title: "Multi-Destination Combinations",
    overview: "See More, Travel Smoother. Seamlessly link mountains, jungle, cities, and sacred sites.",
    image: "/gallery/gallery-16.jpg",
    tourType: "Custom Journey",
    duration: "Flexible",
    route: "Custom",
    bestSeason: "Operates Year-Round",
    highlights: [
      "Seamlessly link mountains, jungle, cities, and sacred sites",
      "No wasted travel days or unnecessary backtracking",
      "Ideal if you want to experience the very best of Nepal in one visit"
    ],
    inclusions: ["Coordinated logistics"],
    exclusions: ["N/A"],
    itinerary: [
      {
        day: 1,
        title: "Multi-Destination Journey",
        activities: ["A smooth flow between the best locations in Nepal."],
        meals: "Flexible",
        overnight: "Flexible"
      }
    ]
  }
];
