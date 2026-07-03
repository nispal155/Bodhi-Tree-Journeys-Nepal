import { TourPackage } from "./packages";

export const morePackages: TourPackage[] = [
  {
    slug: "pilgrimage-to-lumbini",
    title: "Pilgrimage to Lumbini",
    overview: "Follow the footsteps of Buddha in this sacred journey to his birthplace, exploring ancient monasteries and peaceful gardens.",
    image: "/lumbini_temple.png",
    tourType: "Pilgrimage Tour",
    duration: "4 Nights / 5 Days",
    route: "Kathmandu → Lumbini → Kathmandu",
    bestSeason: "Oct–Mar",
    highlights: [
      "Visit the exact birthplace of Lord Buddha at Maya Devi Temple",
      "Explore international monasteries in the Monastic Zone",
      "Experience peaceful meditation sessions",
      "Discover the ancient ruins of Kapilavastu"
    ],
    inclusions: [
      "Airport transfers",
      "3-star or 4-star accommodation",
      "Daily breakfast",
      "Professional guide",
      "All entrance fees"
    ],
    exclusions: [
      "International flights",
      "Nepal entry visa",
      "Travel insurance",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Welcome at airport and transfer to hotel", "Evening briefing about the pilgrimage"], meals: "Dinner", overnight: "Kathmandu" },
      { day: 2, title: "Kathmandu to Lumbini", activities: ["Scenic flight or drive to Bhairahawa", "Transfer to Lumbini and check-in"], meals: "Breakfast", overnight: "Lumbini" },
      { day: 3, title: "Lumbini Sacred Garden Tour", activities: ["Visit Maya Devi Temple and the Ashoka Pillar", "Explore various international monasteries"], meals: "Breakfast", overnight: "Lumbini" },
      { day: 4, title: "Return to Kathmandu", activities: ["Drive or fly back to Kathmandu", "Free time for shopping in Thamel"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 5, title: "Final Departure", activities: ["Transfer to the airport for your onward journey"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "mustang-monastery-circuit",
    title: "Mustang Monastery Circuit",
    overview: "Discover the hidden kingdom of Lo, visiting remote cliff-side monasteries and experiencing preserved Tibetan Buddhist culture.",
    image: "/placeholder-tour-4.jpg",
    tourType: "Pilgrimage Tour",
    duration: "12 Nights / 13 Days",
    route: "Kathmandu → Pokhara → Jomsom → Lo Manthang",
    bestSeason: "Mar–Nov",
    highlights: [
      "Explore the ancient walled city of Lo Manthang",
      "Visit ancient sky caves and cliff-side monasteries",
      "Experience untouched Tibetan Buddhist culture",
      "Scenic flights between Pokhara and Jomsom"
    ],
    inclusions: [
      "Special Upper Mustang restricted area permit",
      "ACAP permit",
      "All domestic flights",
      "Experienced guide and porter",
      "Teahouse accommodation during trek"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Emergency evacuation"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Fly to Pokhara", activities: ["Morning flight to Pokhara", "Afternoon sightseeing in Pokhara"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 3, title: "Fly to Jomsom & Trek to Kagbeni", activities: ["Early morning flight to Jomsom", "Trek to the gateway of Upper Mustang, Kagbeni"], meals: "Breakfast, Lunch, Dinner", overnight: "Kagbeni" },
      { day: 4, title: "Trek to Chele", activities: ["Enter the restricted area and trek alongside the Kali Gandaki river"], meals: "Breakfast, Lunch, Dinner", overnight: "Chele" },
      { day: 5, title: "Trek to Syangboche", activities: ["Cross several high passes with stunning views"], meals: "Breakfast, Lunch, Dinner", overnight: "Syangboche" },
      { day: 6, title: "Trek to Ghami", activities: ["Descend to Ghami village, passing traditional chortens"], meals: "Breakfast, Lunch, Dinner", overnight: "Ghami" },
      { day: 7, title: "Trek to Charang", activities: ["Walk past the longest Mani wall in Mustang"], meals: "Breakfast, Lunch, Dinner", overnight: "Charang" },
      { day: 8, title: "Trek to Lo Manthang", activities: ["Arrive at the capital of the former Kingdom of Lo"], meals: "Breakfast, Lunch, Dinner", overnight: "Lo Manthang" },
      { day: 9, title: "Explore Lo Manthang", activities: ["Visit ancient monasteries like Jampa Lhakhang and Thubchen Gompa"], meals: "Breakfast, Lunch, Dinner", overnight: "Lo Manthang" },
      { day: 10, title: "Trek back to Ghar Gompa", activities: ["Begin the return journey via a different route"], meals: "Breakfast, Lunch, Dinner", overnight: "Ghar Gompa" },
      { day: 11, title: "Trek to Chuksang", activities: ["Descend further down the valley"], meals: "Breakfast, Lunch, Dinner", overnight: "Chuksang" },
      { day: 12, title: "Trek to Jomsom & Fly to Pokhara", activities: ["Final trek to Jomsom and fly back to Pokhara"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 13, title: "Fly to Kathmandu & Departure", activities: ["Morning flight to Kathmandu and onward departure"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "muktinath-sacred-journey",
    title: "Muktinath Sacred Journey",
    overview: "A spiritual journey to the sacred temple of Muktinath, revered by both Hindus and Buddhists.",
    image: "/placeholder-tour-2.jpg",
    tourType: "Pilgrimage Tour",
    duration: "5 Nights / 6 Days",
    route: "Kathmandu → Pokhara → Jomsom → Muktinath",
    bestSeason: "Mar–Jun, Sep–Nov",
    highlights: [
      "Bathe in the 108 sacred water spouts of Muktinath",
      "Visit the eternal flame at Jwala Mai Temple",
      "Enjoy breathtaking views of the Annapurna and Dhaulagiri ranges",
      "Explore the lakeside city of Pokhara"
    ],
    inclusions: [
      "All domestic transport (flights/jeeps)",
      "ACAP and TIMS permits",
      "Accommodation",
      "Professional guide"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide/driver"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Drive or Fly to Pokhara", activities: ["Travel to Pokhara and enjoy the lakeside evening"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 3, title: "Fly to Jomsom & Drive to Muktinath", activities: ["Early flight to Jomsom", "Jeep drive to Muktinath"], meals: "Breakfast", overnight: "Muktinath (Ranipauwa)" },
      { day: 4, title: "Muktinath Darshan & Return to Jomsom", activities: ["Morning pooja and holy bath at Muktinath Temple", "Drive back to Jomsom"], meals: "Breakfast", overnight: "Jomsom" },
      { day: 5, title: "Fly to Pokhara & Kathmandu", activities: ["Morning flight to Pokhara, connecting flight to Kathmandu"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 6, title: "Departure", activities: ["Transfer to the airport for final departure"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "annapurna-base-camp-classic",
    title: "Annapurna Base Camp Classic",
    overview: "A breathtaking trek through diverse landscapes, leading you to the heart of the Himalayas surrounded by towering peaks.",
    image: "/placeholder-tour-3.jpg",
    tourType: "Trek",
    duration: "13 Nights / 14 Days",
    route: "Kathmandu → Pokhara → Nayapul → ABC",
    bestSeason: "Mar–May, Sep–Nov",
    highlights: [
      "Stand at the base of the 10th highest mountain in the world",
      "Experience the vibrant Gurung culture in Ghandruk and Chhomrong",
      "Relax in the natural hot springs at Jhinu Danda",
      "Watch the sunrise over the Annapurna massif"
    ],
    inclusions: [
      "ACAP and TIMS permits",
      "Experienced trekking guide and porter",
      "Teahouse accommodation during the trek",
      "All meals during the trek"
    ],
    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel insurance including heli-rescue",
      "Personal trekking gear"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Drive to Pokhara", activities: ["Scenic tourist bus drive to Pokhara"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 3, title: "Drive to Nayapul & Trek to Tikhedhunga", activities: ["Drive to trek start point", "Trek to Tikhedhunga"], meals: "Breakfast, Lunch, Dinner", overnight: "Tikhedhunga" },
      { day: 4, title: "Trek to Ghorepani", activities: ["Climb the famous Ulleri steps and trek through rhododendron forests"], meals: "Breakfast, Lunch, Dinner", overnight: "Ghorepani" },
      { day: 5, title: "Poon Hill Sunrise & Trek to Tadapani", activities: ["Early hike to Poon Hill for sunrise", "Trek to Tadapani"], meals: "Breakfast, Lunch, Dinner", overnight: "Tadapani" },
      { day: 6, title: "Trek to Chhomrong", activities: ["Descend and ascend to the beautiful Gurung village of Chhomrong"], meals: "Breakfast, Lunch, Dinner", overnight: "Chhomrong" },
      { day: 7, title: "Trek to Dovan", activities: ["Trek through bamboo and rhododendron forests"], meals: "Breakfast, Lunch, Dinner", overnight: "Dovan" },
      { day: 8, title: "Trek to Machhapuchhre Base Camp (MBC)", activities: ["Ascend the Modi Khola valley to MBC"], meals: "Breakfast, Lunch, Dinner", overnight: "MBC" },
      { day: 9, title: "Trek to Annapurna Base Camp (ABC)", activities: ["Short trek into the Annapurna Sanctuary to ABC"], meals: "Breakfast, Lunch, Dinner", overnight: "ABC" },
      { day: 10, title: "Explore ABC & Trek to Bamboo", activities: ["Morning exploration of ABC", "Descend back to Bamboo"], meals: "Breakfast, Lunch, Dinner", overnight: "Bamboo" },
      { day: 11, title: "Trek to Jhinu Danda", activities: ["Trek to Jhinu Danda and enjoy the natural hot springs"], meals: "Breakfast, Lunch, Dinner", overnight: "Jhinu Danda" },
      { day: 12, title: "Trek to Nayapul & Drive to Pokhara", activities: ["Final trek to Nayapul and drive back to Pokhara"], meals: "Breakfast, Lunch", overnight: "Pokhara" },
      { day: 13, title: "Drive back to Kathmandu", activities: ["Tourist bus drive to Kathmandu"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 14, title: "Departure", activities: ["Transfer to airport"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "everest-panorama-trek",
    title: "Everest Panorama Trek",
    overview: "A shorter alternative to base camp, offering stunning views of Everest and interactions with local Sherpa communities.",
    image: "/placeholder-tour-5.jpg",
    tourType: "Trek",
    duration: "8 Nights / 9 Days",
    route: "Kathmandu → Lukla → Namche Bazaar → Tengboche",
    bestSeason: "Mar–May, Sep–Nov",
    highlights: [
      "Thrilling flight to Lukla's Tenzing-Hillary Airport",
      "Visit the famous Tengboche Monastery",
      "Enjoy panoramic views of Mt. Everest, Lhotse, and Ama Dablam",
      "Explore the bustling Sherpa capital of Namche Bazaar"
    ],
    inclusions: [
      "Kathmandu-Lukla-Kathmandu flights",
      "Sagarmatha National Park permit",
      "Experienced guide and porter",
      "Teahouse accommodation"
    ],
    exclusions: [
      "International flights",
      "Travel insurance with high altitude rescue",
      "Personal expenses",
      "Hot showers and charging electronics on trek"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Fly to Lukla & Trek to Phakding", activities: ["Scenic flight to Lukla", "Begin trek to Phakding"], meals: "Breakfast, Lunch, Dinner", overnight: "Phakding" },
      { day: 3, title: "Trek to Namche Bazaar", activities: ["Trek along the Dudh Kosi river and ascend to Namche"], meals: "Breakfast, Lunch, Dinner", overnight: "Namche Bazaar" },
      { day: 4, title: "Acclimatization Day in Namche", activities: ["Hike to Everest View Hotel for first views of Everest"], meals: "Breakfast, Lunch, Dinner", overnight: "Namche Bazaar" },
      { day: 5, title: "Trek to Tengboche", activities: ["Trek to Tengboche and visit the famous monastery"], meals: "Breakfast, Lunch, Dinner", overnight: "Tengboche" },
      { day: 6, title: "Trek back to Monjo", activities: ["Descend back down the valley"], meals: "Breakfast, Lunch, Dinner", overnight: "Monjo" },
      { day: 7, title: "Trek to Lukla", activities: ["Final day of trekking back to Lukla"], meals: "Breakfast, Lunch, Dinner", overnight: "Lukla" },
      { day: 8, title: "Fly to Kathmandu", activities: ["Morning flight back to Kathmandu"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 9, title: "Departure", activities: ["Transfer to airport"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "langtang-valley-trek",
    title: "Langtang Valley Trek",
    overview: "Experience the unique culture and beautiful glacial valleys just a short drive from Kathmandu.",
    image: "/placeholder-tour-7.jpg",
    tourType: "Trek",
    duration: "9 Nights / 10 Days",
    route: "Kathmandu → Syabrubesi → Kyanjin Gompa",
    bestSeason: "Mar–May, Sep–Nov",
    highlights: [
      "Trek through lush rhododendron and bamboo forests",
      "Experience the unique Tamang culture",
      "Visit the stunning Kyanjin Gompa and local cheese factory",
      "Hike up Kyanjin Ri for panoramic Himalayan views"
    ],
    inclusions: [
      "Langtang National Park permit & TIMS",
      "Transportation to and from Syabrubesi",
      "Guide and porter",
      "Teahouse accommodation"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Drinks and snacks"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Drive to Syabrubesi", activities: ["Scenic drive through mountain roads"], meals: "Breakfast", overnight: "Syabrubesi" },
      { day: 3, title: "Trek to Lama Hotel", activities: ["Trek through forests along the Langtang Khola"], meals: "Breakfast, Lunch, Dinner", overnight: "Lama Hotel" },
      { day: 4, title: "Trek to Langtang Village", activities: ["Ascend past the tree line into the glacial valley"], meals: "Breakfast, Lunch, Dinner", overnight: "Langtang Village" },
      { day: 5, title: "Trek to Kyanjin Gompa", activities: ["Short trek to the highest settlement in the valley"], meals: "Breakfast, Lunch, Dinner", overnight: "Kyanjin Gompa" },
      { day: 6, title: "Explore Kyanjin Gompa & Hike Kyanjin Ri", activities: ["Acclimatization hike to Kyanjin Ri for spectacular views"], meals: "Breakfast, Lunch, Dinner", overnight: "Kyanjin Gompa" },
      { day: 7, title: "Trek back to Lama Hotel", activities: ["Descend back down the valley"], meals: "Breakfast, Lunch, Dinner", overnight: "Lama Hotel" },
      { day: 8, title: "Trek to Syabrubesi", activities: ["Final day of trekking"], meals: "Breakfast, Lunch, Dinner", overnight: "Syabrubesi" },
      { day: 9, title: "Drive to Kathmandu", activities: ["Return drive to the capital"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 10, title: "Departure", activities: ["Transfer to airport"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "boudhanath-kathmandu-temple",
    title: "Boudhanath & Kathmandu Temple",
    overview: "Immerse yourself in the vibrant spiritual life of Kathmandu, visiting UNESCO heritage sites and experiencing local rituals.",
    image: "/placeholder-tour-2.jpg",
    tourType: "Cultural Tour",
    duration: "3 Nights / 4 Days",
    route: "Kathmandu Valley",
    bestSeason: "All Year",
    highlights: [
      "Walk around the massive Boudhanath Stupa with Tibetan monks",
      "Witness the holy rituals at Pashupatinath Temple",
      "Explore the ancient Kathmandu Durbar Square",
      "Enjoy panoramic views from Swayambhunath (Monkey Temple)"
    ],
    inclusions: [
      "Airport transfers",
      "Hotel accommodation",
      "Private sightseeing with local guide",
      "All monument entrance fees"
    ],
    exclusions: [
      "International flights",
      "Nepal visa",
      "Lunches and dinners",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Kathmandu Heritage Tour", activities: ["Visit Kathmandu Durbar Square and Swayambhunath"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 3, title: "Spiritual Kathmandu", activities: ["Visit Pashupatinath Temple and Boudhanath Stupa"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 4, title: "Departure", activities: ["Transfer to airport for departure"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "patan-bhaktapur-artisan-tour",
    title: "Patan & Bhaktapur Artisan Tour",
    overview: "Explore the ancient cities known for their intricate wood carvings, metalwork, and deep-rooted traditional artistry.",
    image: "/placeholder-tour-6.jpg",
    tourType: "Cultural Tour",
    duration: "4 Nights / 5 Days",
    route: "Kathmandu → Patan → Bhaktapur",
    bestSeason: "All Year",
    highlights: [
      "Marvel at the fine arts of Patan Durbar Square",
      "Watch traditional pottery making in Bhaktapur",
      "Stay in a heritage boutique hotel",
      "Taste authentic Newari cuisine"
    ],
    inclusions: [
      "Heritage hotel accommodation",
      "Private transport",
      "Cultural guide",
      "All entrance fees"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Gratuities"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Patan City of Arts", activities: ["Explore Patan Durbar Square, Golden Temple, and Patan Museum"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 3, title: "Drive to Bhaktapur", activities: ["Transfer to Bhaktapur, explore the timeless city and Pottery Square"], meals: "Breakfast", overnight: "Bhaktapur" },
      { day: 4, title: "Changu Narayan & Return", activities: ["Visit the ancient Changu Narayan Temple, return to Kathmandu"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 5, title: "Departure", activities: ["Transfer to airport"], meals: "Breakfast", overnight: "N/A" }
    ]
  },
  {
    slug: "pokhara-valley-exploration",
    title: "Pokhara Valley Exploration",
    overview: "Discover the peaceful lakeside city of Pokhara, visit the World Peace Pagoda, and explore local museums.",
    image: "/placeholder-tour-1.jpg",
    tourType: "Cultural Tour",
    duration: "4 Nights / 5 Days",
    route: "Kathmandu → Pokhara → Kathmandu",
    bestSeason: "All Year",
    highlights: [
      "Boating on the serene Phewa Lake",
      "Hike to the World Peace Pagoda for stunning views",
      "Visit the International Mountain Museum",
      "Experience sunrise from Sarangkot"
    ],
    inclusions: [
      "Kathmandu-Pokhara flights",
      "Hotel accommodation",
      "Sightseeing with private transport",
      "Guide services"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Adventure activities (paragliding, zipline, etc.)"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", activities: ["Arrival and transfer to hotel"], meals: "None", overnight: "Kathmandu" },
      { day: 2, title: "Fly to Pokhara & Sightseeing", activities: ["Morning flight to Pokhara", "Visit Davis Falls, Gupteshwor Cave, and boating on Phewa Lake"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 3, title: "Sarangkot Sunrise & Peace Pagoda", activities: ["Early morning drive to Sarangkot for sunrise", "Afternoon hike to World Peace Pagoda"], meals: "Breakfast", overnight: "Pokhara" },
      { day: 4, title: "Fly to Kathmandu", activities: ["Visit International Mountain Museum, then fly back to Kathmandu"], meals: "Breakfast", overnight: "Kathmandu" },
      { day: 5, title: "Departure", activities: ["Transfer to airport"], meals: "Breakfast", overnight: "N/A" }
    ]
  }
];
