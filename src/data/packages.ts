export type ItineraryDay = {
  day: number;
  title: string;
  activities: string[];
  meals: string;
  overnight: string;
};

export type TourPackage = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  tourType: string;
  bestSeason: string;
  overview: string;
  highlights: string[];
  image: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
};

import { morePackages } from './morePackages';

export const tourPackages: TourPackage[] = [
  {
    slug: "8-nights-standard-nepal-tour",
    title: "8 Nights / 9 Days – Most Popular Standard Nepal Tour",
    overview: "Our most popular balanced itinerary covering all major highlights without rushed long drives. Exactly what most travelers choose for their first Nepal experience.",
    image: "/gallery/gallery-36.jpg",
    tourType: "Standard Tour",
    duration: "8 Nights / 9 Days",
    route: "Kathmandu → Nagarkot → Pokhara → Chitwan → Kathmandu",
    bestSeason: "Oct–Nov, Feb–May",
    highlights: [
      "Kathmandu Valley UNESCO Heritage Sites (Pashupatinath, Boudhanath, Swayambhunath)",
      "Sunrise over the Himalayas from Nagarkot",
      "Serene boating on Phewa Lake and views of Annapurna from Pokhara",
      "Thrilling jungle safari in Chitwan National Park spotting rhinos and wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport; our representative welcomes you with traditional swagat and welcome drink",
          "Transfer to hotel; check-in and rest",
          "Evening: Brief tour introduction; free time to walk around nearby areas"
        ],
        meals: "Welcome Drink, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu Valley Main Heritage Tour",
        activities: [
          "Morning: Pashupatinath Temple (holy Hindu site) → Boudhanath Stupa (world’s largest Buddhist stupas)",
          "Afternoon: Swayambhunath (Monkey Temple) → Kathmandu Durbar Square & Kumari Living Goddess House"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 3,
        title: "Patan & Bhaktapur Heritage Cities",
        activities: [
          "Morning: Patan Durbar Square, Krishna Mandir, Golden Temple & Patan Museum",
          "Afternoon: Bhaktapur Durbar Square, 55-Window Palace, Nyatapola Temple & Pottery Square"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 4,
        title: "Kathmandu → Nagarkot (Sunset View)",
        activities: [
          "Late afternoon: Drive to Nagarkot (approx. 1.5 hours, 2,195m altitude)",
          "Check-in at hill resort",
          "Evening: Relax and enjoy panoramic sunset views over Everest, Langtang, Ganesh and Annapurna ranges"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Nagarkot"
      },
      {
        day: 5,
        title: "Nagarkot Sunrise → Drive to Pokhara",
        activities: [
          "Early morning: Sunrise view over the entire Himalayan range",
          "Return to hotel for breakfast",
          "Scenic drive to Pokhara via Prithvi Highway (approx. 5–6 hours); stop for lunch and photos en route",
          "Arrive Pokhara; check-in; relax by Phewa Lake"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 6,
        title: "Pokhara – Sarangkot & City Tour",
        activities: [
          "Early: Drive to Sarangkot for sunrise over Annapurna, Machapuchare & Dhaulagiri peaks",
          "After breakfast: Visit Devi’s Fall, Gupteshwor Cave, Bindhyabasini Temple & Peace Pagoda",
          "Evening: Free time for lakeside walk or boat ride (own cost)"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 7,
        title: "Pokhara → Chitwan National Park",
        activities: [
          "Drive to Chitwan (approx. 4–5 hours)",
          "Check-in at jungle resort",
          "Afternoon: Canoe ride on Rapti River → short guided jungle walk → Tharu village visit",
          "Evening: Traditional Tharu cultural dance performance"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chitwan"
      },
      {
        day: 8,
        title: "Chitwan Safari → Return to Kathmandu",
        activities: [
          "Early morning: Jeep Safari inside Chitwan National Park; spot rhino, deer, birds and other wildlife",
          "Visit Elephant Breeding Center",
          "After lunch: Drive back to Kathmandu (approx. 5–6 hours)",
          "Arrive Kathmandu; check-in",
          "Evening: Farewell dinner with cultural program"
        ],
        meals: "Breakfast, Lunch, Farewell Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 9,
        title: "Final Departure",
        activities: [
          "Breakfast at hotel",
          "Transfer to airport 3 hours before your international flight",
          "Tour ends with warm farewell"
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ],
    inclusions: [
      "All airport and inter-city transfers by private air-conditioned vehicle",
      "8 nights accommodation on twin-sharing basis: 3 Kathmandu, 1 Nagarkot, 2 Pokhara, 2 Chitwan",
      "Full meals: Daily breakfast, lunch and dinner throughout the tour",
      "Licensed English-speaking tour guide for full duration",
      "All entrance fees, permits and activity charges for listed sites",
      "Chitwan activities: Jeep safari, canoe ride, village visit, cultural show",
      "All government taxes and service charges"
    ],
    exclusions: [
      "International air tickets",
      "Nepal visa fee",
      "Personal expenses: shopping, laundry, calls",
      "Mineral water, soft drinks, alcohol and other beverages",
      "Tips for guide, driver and hotel staff",
      "Travel insurance",
      "Optional extra activities: Everest flight, paragliding, cable car, upgrades"
    ]
  },
  {
    slug: "7-nights-classic-nepal-tour",
    title: "7 Nights 8 Days Classic Nepal Tour",
    duration: "7 Nights / 8 Days",
    route: "Kathmandu → Pokhara → Chitwan → Kathmandu",
    tourType: "Regular Group / Private Custom",
    bestSeason: "October–November, February–May (Operates Year-Round)",
    overview: "A classic week-long adventure covering UNESCO heritage sites, stunning Himalayan views, mountain lakes, wildlife safaris, and authentic local culture.",
    highlights: ["Kathmandu Valley UNESCO heritage", "Sarangkot sunrise over the Annapurna range", "Phewa Lake in Pokhara", "Chitwan National Park Safari"],
    image: "/gallery/gallery-36.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport; our representative welcomes you with a traditional greeting and welcome drink",
          "Transfer to your hotel; check-in and rest",
          "Evening: Short tour briefing; free time to explore nearby areas"
        ],
        meals: "Welcome Drink, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu Valley UNESCO Heritage Tour",
        activities: [
          "Morning: Visit Pashupatinath Temple – one of the holiest Hindu pilgrimage sites",
          "Next: Explore Boudhanath Stupa – one of the largest Buddhist stupas in the world",
          "Afternoon: Visit Swayambhunath (Monkey Temple) – ancient hilltop shrine with valley views",
          "Continue to Kathmandu Durbar Square – medieval royal palace complex and home to the Living Goddess Kumari"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 3,
        title: "Travel to Pokhara",
        activities: [
          "Scenic drive along the Prithvi Highway (approx. 5–6 hours)",
          "Stop for refreshments and photo opportunities en route",
          "Arrive in Pokhara; check-in to hotel",
          "Evening: Leisure walk around Phewa Lake; optional boat ride to Tal Barahi Temple"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 4,
        title: "Pokhara – Sunrise & Full City Tour",
        activities: [
          "Early morning: Drive up to Sarangkot for panoramic sunrise views over the Annapurna, Machapuchare and Dhaulagiri mountain ranges",
          "Return to hotel for breakfast",
          "Afternoon: Visit Devi’s Fall, Gupteshwor Mahadev Cave, and Bindhyabasini Temple",
          "Free evening to relax or explore the lakeside market"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 5,
        title: "Travel to Chitwan National Park",
        activities: [
          "Drive to Chitwan (approx. 4–5 hours)",
          "Arrive at jungle resort; check-in",
          "Afternoon: Canoe ride on the Rapti River to spot water birds and crocodiles",
          "Followed by a guided short jungle walk and visit to a traditional Tharu village",
          "Evening: Enjoy a cultural show of traditional Tharu dance"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chitwan"
      },
      {
        day: 6,
        title: "Full Day Chitwan Jungle Safari",
        activities: [
          "Early morning: Open Jeep Safari inside Chitwan National Park – UNESCO World Heritage Site",
          "Chance to spot one-horned rhinoceros, royal Bengal tiger, deer, wild elephants and over 500 bird species",
          "Visit the Elephant Breeding Center",
          "Afternoon: Nature walk around the resort or free time to relax"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chitwan"
      },
      {
        day: 7,
        title: "Return to Kathmandu",
        activities: [
          "Drive back to Kathmandu (approx. 5–6 hours) with lunch stop en route",
          "Arrive in Kathmandu; check-in",
          "Evening: Special farewell dinner with traditional Nepali cultural performance"
        ],
        meals: "Breakfast, Lunch, Farewell Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 8,
        title: "Final Departure",
        activities: [
          "Breakfast at hotel",
          "Transfer to Tribhuvan International Airport 3 hours before your flight",
          "Tour concludes with warm wishes for your onward journey"
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ],
    inclusions: [
      "All airport and inter-city transfers by private air-conditioned vehicle",
      "7 nights accommodation on twin-sharing basis: 3 nights Kathmandu, 2 nights Pokhara, 2 nights Chitwan",
      "Full board meals: Daily breakfast, lunch and dinner throughout the tour",
      "Services of licensed, English-speaking tour guide for the full duration",
      "All entrance fees and permits for listed heritage sites and national park",
      "Chitwan activities: Jeep safari, canoe ride, village visit, Tharu cultural show",
      "All applicable government taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Nepal tourist visa fee",
      "Personal expenses such as laundry, telephone bills, souvenirs and shopping",
      "Mineral water, soft drinks, alcohol and other beverages",
      "Tips for guide, driver and hotel staff",
      "Travel insurance",
      "Optional activities: Everest scenic flight, helicopter tour, paragliding, cable car, and extra upgrades"
    ]
  },
  {
    slug: "10-nights-complete-nepal-tour",
    title: "10 Nights / 11 Days – Complete Nepal Tour",
    duration: "10 Nights / 11 Days",
    route: "Kathmandu → Bandipur → Pokhara → Lumbini → Chitwan → Kathmandu",
    tourType: "Regular Group / Private Custom",
    bestSeason: "Oct–Nov, Feb–May (Operates Year-Round)",
    overview: "The most practical and famous standard route offering a perfect mix of culture, heritage, mountain views, spiritual sites, and wildlife without any backtracking.",
    highlights: ["Kathmandu Valley UNESCO sites", "Bandipur heritage hill town", "Pokhara mountain views and Sarangkot sunrise", "Lumbini (birthplace of Buddha)", "Chitwan jungle safari"],
    image: "/gallery/gallery-18.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport; welcome with traditional greeting & welcome drink",
          "Transfer to hotel; check-in & rest",
          "Evening: Brief tour briefing; free time to explore nearby areas"
        ],
        meals: "Welcome Drink, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu Valley UNESCO Heritage Tour",
        activities: [
          "Morning: Pashupatinath Temple → Boudhanath Stupa",
          "Afternoon: Swayambhunath (Monkey Temple) → Kathmandu Durbar Square & Kumari House"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 3,
        title: "Drive to Bandipur",
        activities: [
          "Scenic drive to Bandipur (approx. 4–5 hrs) – well-preserved Newari hill town",
          "Check-in; walk through cobblestone lanes, old bazaar & traditional architecture",
          "Evening: Sunset view from Tani Mai Temple over Manaslu & Ganesh Himal ranges"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Bandipur"
      },
      {
        day: 4,
        title: "Bandipur Exploration → Drive to Pokhara",
        activities: [
          "Morning: Early walk to Khadga Devi Temple; experience quiet local life",
          "Drive to Pokhara (approx. 2–3 hrs)",
          "Arrive Pokhara; check-in; relax by Phewa Lake"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 5,
        title: "Pokhara – Sarangkot Sunrise & City Tour",
        activities: [
          "Early: Drive to Sarangkot for sunrise over Annapurna, Machapuchare & Dhaulagiri",
          "After breakfast: Visit Devi’s Fall, Gupteshwor Cave, Bindhyabasini Temple & Peace Pagoda",
          "Free evening for lakeside walk or optional boat ride"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 6,
        title: "Pokhara → Drive to Lumbini",
        activities: [
          "Drive to Lumbini (approx. 4–5 hrs) – UNESCO World Heritage Site",
          "Check-in; rest",
          "Evening: Guided walk around Sacred Garden, Maya Devi Temple & Ashoka Pillar"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lumbini"
      },
      {
        day: 7,
        title: "Full Day Lumbini Pilgrimage Tour",
        activities: [
          "Morning: Explore International Monastic Zone – monasteries from many nations",
          "Visit World Peace Pagoda & Lumbini Museum",
          "Afternoon: Free time for quiet reflection or meditation"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lumbini"
      },
      {
        day: 8,
        title: "Lumbini → Drive to Chitwan National Park",
        activities: [
          "Drive to Chitwan (approx. 3–4 hrs)",
          "Check-in at jungle resort",
          "Afternoon: Canoe ride on Rapti River → short jungle walk → Tharu village visit",
          "Evening: Traditional Tharu cultural dance show"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chitwan"
      },
      {
        day: 9,
        title: "Full Day Chitwan Jungle Safari",
        activities: [
          "Early morning: Open Jeep Safari inside the national park – spot rhino, deer, birds & more",
          "Visit Elephant Breeding Center",
          "Afternoon: Nature walk or relax at resort"
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chitwan"
      },
      {
        day: 10,
        title: "Return to Kathmandu",
        activities: [
          "Drive back to Kathmandu (approx. 5–6 hrs) with lunch stop en route",
          "Arrive Kathmandu; check-in",
          "Evening: Farewell dinner with Nepali cultural performance"
        ],
        meals: "Breakfast, Lunch, Farewell Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 11,
        title: "Final Departure",
        activities: [
          "Breakfast at hotel",
          "Transfer to airport 3 hours before flight",
          "Tour ends with warm wishes"
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ],
    inclusions: [
      "All airport & inter-city transfers by private AC vehicle",
      "10 nights accommodation (twin share): 2 Kathmandu, 1 Bandipur, 2 Pokhara, 2 Lumbini, 2 Chitwan",
      "Full board meals: Daily breakfast, lunch & dinner throughout",
      "Licensed English-speaking guide for full duration",
      "All entrance fees, permits & listed activities",
      "All government taxes & service charges"
    ],
    exclusions: [
      "International airfare",
      "Nepal visa fee",
      "Personal expenses, shopping, laundry",
      "Drinks, mineral water, alcohol",
      "Tips & travel insurance",
      "Optional: Everest flight, heli-tour, paragliding, upgrades"
    ]
  },
  ...morePackages
];
