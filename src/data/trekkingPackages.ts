import { TourPackage } from "./packages";

export const trekkingPackages: TourPackage[] = [
  {
    slug: "upper-mustang-trek-14-days",
    title: "Upper Mustang Trek – 14 Days Standard Itinerary",
    overview: "Start & End: Kathmandu Arrival to Departure | Difficulty: Moderate | Max Altitude: 4,200 m (Ghami) / 3,810 m (Lo Manthang)",
    image: "/placeholder-tour-1.jpg",
    tourType: "Trekking",
    duration: "13 Nights / 14 Days",
    route: "Kathmandu → Pokhara → Jomsom → Kagbeni → Chele → Ghemi → Tsarang → Lo Manthang → Jomsom → Pokhara → Kathmandu",
    bestSeason: "March–May, September–November",
    highlights: [
      "Hidden Kingdom: Walled city of Lo Manthang, seat of the ancient Mustang kingdom",
      "Unique Landscape: Arid canyons, red cliffs, caves — “Nepal’s Desert”",
      "Living Culture: Unchanged Tibetan traditions, ancient monasteries, wall paintings, royal palace",
      "Sacred Sites: Chhoser caves, Muktinath upper route, traditional villages"
    ],
    inclusions: [
      "Accommodation: Kathmandu/Pokhara hotels + local lodges/teahouses",
      "Full board: Breakfast, lunch, dinner + tea/coffee daily",
      "Transport: Kathmandu ↔ Pokhara; Pokhara ↔ Jomsom (flight/drive); Jomsom ↔ trailheads",
      "Special Permits: Upper Mustang Restricted Area Permit (required for all foreign visitors) + ACAP + TIMS",
      "Licensed government guide + porter service",
      "Welcome khata, first-aid kit, emergency support",
      "Cultural guidance and monastery visit arrangements"
    ],
    exclusions: [
      "International flights, visa, travel/medical insurance",
      "Personal gear, bottled water, hot showers (limited), drinks, tips",
      "Extra offerings, donations, or private ceremonies",
      "Optional side trips like Muktinath entry fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Welcome with khata scarf; transfer to hotel.",
          "Rest and acclimatize.",
          "Evening briefing: route, restricted area rules, permits, safety and cultural etiquette.",
          "Welcome dinner."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        activities: [
          "Scenic 6–7 hr drive or 30 min flight to Pokhara.",
          "Check into lakeside hotel. Finalize gear and meet guide."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 3,
        title: "Pokhara → Jomsom",
        activities: [
          "Drive or fly 35 min to Jomsom (2,710 m), gateway to Mustang.",
          "Complete entry formalities. Drive to Kagbeni (2,800 m) — ancient village at Kali Gandaki river."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kagbeni"
      },
      {
        day: 4,
        title: "Kagbeni → Chele",
        activities: [
          "Trek 5–6 hr up the valley, crossing dry ridges and passing small settlements.",
          "Arrive at Chele (3,050 m). First views of Upper Mustang’s unique red cliffs."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chele"
      },
      {
        day: 5,
        title: "Chele → Syangboche → Ghemi",
        activities: [
          "Trek 5–6 hr past Syangboche pass (3,800 m) with panoramic views.",
          "Continue to Ghemi (3,520 m) — traditional village with ancient mani walls."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Ghemi"
      },
      {
        day: 6,
        title: "Ghemi → Dhakmar → Tsarang",
        activities: [
          "Walk 5–6 hr through eroded canyons to Dhakmar (“Red Village”), then descend to Tsarang (3,560 m).",
          "Visit Tsarang Monastery and old palace ruins."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Tsarang"
      },
      {
        day: 7,
        title: "Tsarang → Lo Manthang",
        activities: [
          "Trek 4–5 hr along the main trade route to Lo Manthang (3,810 m) — the walled capital of the former Kingdom of Lo.",
          "Enter through the historic gates."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lo Manthang"
      },
      {
        day: 8,
        title: "Lo Manthang Exploration",
        activities: [
          "Full day to explore: Royal Palace, Thugchen Monastery, visit the King’s representative.",
          "Walk the city walls, meet local families.",
          "Evening prayer ceremonies."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lo Manthang"
      },
      {
        day: 9,
        title: "Lo Manthang → Chhoser Caves → Lo Manthang",
        activities: [
          "Trek 3–4 hr round-trip to Chhoser (Garphu) Caves — ancient meditation caves carved into cliffs, used for centuries by monks.",
          "Return to Lo Manthang."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lo Manthang"
      },
      {
        day: 10,
        title: "Lo Manthang → Dhi → Tsarang",
        activities: [
          "Retrace path 5–6 hr back through Dhi village to Tsarang."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Tsarang"
      },
      {
        day: 11,
        title: "Tsarang → Ghemi → Kagbeni",
        activities: [
          "Trek 6–7 hr downhill past Ghemi and Syangboche, return to Kagbeni."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kagbeni"
      },
      {
        day: 12,
        title: "Kagbeni → Jomsom → Pokhara",
        activities: [
          "Drive back to Jomsom. Visit Muktinath Temple (optional extra time).",
          "Fly or drive to Pokhara. Evening free."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 13,
        title: "Pokhara → Kathmandu",
        activities: [
          "Drive or fly back to Kathmandu. Transfer to hotel."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 14,
        title: "Final Departure",
        activities: [
          "Transfer to airport for onward journey."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "mardi-himal-trek-8-days",
    title: "Mardi Himal Trek – 8 Days Standard Itinerary",
    overview: "Start & End: Kathmandu Arrival to Departure | Difficulty: Moderate | Max Altitude: 4,500 m (Mardi Himal Base Camp)",
    image: "/placeholder-tour-2.jpg",
    tourType: "Trekking",
    duration: "7 Nights / 8 Days",
    route: "Kathmandu → Pokhara → Kande → Forest Camp → Low Camp → High Camp → Mardi Himal Base Camp → Sidhing → Pokhara → Kathmandu",
    bestSeason: "March–May, September–November",
    highlights: [
      "Unobstructed Views: Machhapuchhre, Annapurna South, Hiunchuli, Dhaulagiri and Mardi Himal peaks",
      "Unique Ridge Walk: Walk along open ridges above the tree line for 360° mountain views",
      "Nature: Rhododendron forests, diverse wildlife, quiet trails with fewer crowds",
      "Practical: Shorter duration, gradual ascent, good facilities"
    ],
    inclusions: [
      "Accommodation: Kathmandu/Pokhara hotels + mountain teahouses (twin share)",
      "Full board: Daily breakfast, lunch, dinner + tea/coffee during trek",
      "Transport: Kathmandu ↔ Pokhara; Pokhara ↔ Kande; Sidhing ↔ Pokhara",
      "Permits: Annapurna Conservation Area (ACAP) + TIMS card",
      "Licensed government trekking guide + porter service (1 porter per 2 guests)",
      "Welcome khata scarf, first-aid kit, emergency support"
    ],
    exclusions: [
      "International airfares, visa fees and travel/medical insurance",
      "Personal gear: sleeping bag, trekking poles, warm layers, boots",
      "Bottled water, hot showers, snacks, drinks and gratuities",
      "Extra side trips or extensions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Welcome with khata scarf; transfer to hotel.",
          "Rest and settle in. Evening trek briefing covering route, safety, gear and permits.",
          "Enjoy welcome dinner."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        activities: [
          "Scenic 6–7 hour drive or 30-minute flight to Pokhara.",
          "Check into lakeside hotel. Explore Phewa Lake area; meet your guide and finalize preparations."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 3,
        title: "Pokhara → Kande → Pothana / Forest Camp",
        activities: [
          "Drive 1.5 hours to Kande (1,700 m). Trek 4–5 hours up to Australian Camp and Pothana, then continue to Forest Camp (2,600 m).",
          "Walk through pine and rhododendron forests with first views of Annapurna range."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Forest Camp"
      },
      {
        day: 4,
        title: "Forest Camp → Low Camp",
        activities: [
          "Trek 4–5 hours steadily uphill through dense forest.",
          "As you climb higher, trees thin out and views open toward Machhapuchhre.",
          "Arrive at Low Camp (2,970–3,050 m). Rest and acclimatize well."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Low Camp"
      },
      {
        day: 5,
        title: "Low Camp → High Camp",
        activities: [
          "Trek 4–5 hours along the ridge above the tree line.",
          "Panoramic views of snow peaks appear all around.",
          "Arrive at High Camp (3,580–3,600 m) — the last permanent settlement before base camp."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "High Camp"
      },
      {
        day: 6,
        title: "High Camp → Mardi Himal Base Camp → High Camp / Low Camp",
        activities: [
          "Early start for the most spectacular section: trek 3–4 hours up to Mardi Himal Base Camp (4,500 m).",
          "Stand directly beneath Mardi Himal, Machhapuchhre and Annapurna South.",
          "After photos and quiet time, descend back to High Camp or continue to Low Camp for overnight stay."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "High Camp or Low Camp"
      },
      {
        day: 7,
        title: "Low Camp → Sidhing → Pokhara",
        activities: [
          "Descend 5–6 hours through forest to Sidhing (1,700 m).",
          "Drive 1.5 hours back to Pokhara.",
          "Evening free to relax or explore lakeside."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 8,
        title: "Pokhara → Kathmandu → Departure",
        activities: [
          "Drive or fly back to Kathmandu.",
          "Transfer directly to airport or hotel for onward journey."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "langtang-valley-trek-10-days",
    title: "Langtang Valley Trek – 10 Days Full itinerary",
    overview: "Start & End: Kathmandu Arrival to Departure | Difficulty: Moderate | Max Altitude: 4,984 m (Tsergo Ri viewpoint) / 3,870 m (Kyanjin Gompa overnight)",
    image: "/placeholder-tour-3.jpg",
    tourType: "Trekking",
    duration: "9 Nights / 10 Days",
    route: "Kathmandu → Syabrubesi → Lama Hotel → Langtang Village → Kyanjin Gompa → Syabrubesi → Kathmandu",
    bestSeason: "March–May, September–November",
    highlights: [
      "Langtang Lirung Views: Close-up sight of 7,234 m Langtang Lirung, Ganesh Himal and other snow peaks",
      "Sacred Sites: Kyanjin Gompa — ancient Tibetan Buddhist monastery; glacial lakes at Kyanjin Ri",
      "Authentic Culture: Traditional Tamang villages, stone houses, local cheese making, warm hospitality",
      "Nature: Ancient forests, waterfalls, alpine meadows, valley carved by glaciers"
    ],
    inclusions: [
      "Accommodation: Kathmandu hotel + mountain teahouses (twin share)",
      "Full board: Daily breakfast, lunch, dinner + tea/coffee during trek",
      "Transport: Kathmandu ↔ Syabrubesi private vehicle",
      "Permits: Langtang National Park entry fee + TIMS card",
      "Licensed government trekking guide + porter service (1 porter per 2 guests)",
      "Welcome khata scarf, first-aid kit, emergency support",
      "Official trek completion certificate"
    ],
    exclusions: [
      "International airfares, visa fees and travel/medical insurance",
      "Personal trekking gear: sleeping bag, poles, warm clothing, boots",
      "Bottled water, hot showers, snacks, drinks and gratuities",
      "Optional side trips or extensions like Gosaikunda Lake"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Receive traditional welcome with khata scarf; transfer to hotel.",
          "Rest and acclimatize.",
          "Evening briefing covering route, permits, safety and acclimatization rules. Enjoy welcome dinner."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Syabrubesi",
        activities: [
          "Scenic 6–7 hour private drive north along Trisuli River valley, passing Dhunche and Rasuwa areas.",
          "Arrive at Syabrubesi (1,460 m) — trailhead of Langtang Trek."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Syabrubesi"
      },
      {
        day: 3,
        title: "Syabrubesi → Lama Hotel",
        activities: [
          "Begin trekking along Langtang River gorge. Walk 5–6 hours through dense subtropical forest, crossing suspension bridges and small villages.",
          "Gradual ascent to Lama Hotel (2,380 m)."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lama Hotel"
      },
      {
        day: 4,
        title: "Lama Hotel → Langtang Village",
        activities: [
          "Continue 5–6 hours steadily uphill through oak, pine and rhododendron forest.",
          "Views open up to snow-capped peaks ahead.",
          "Arrive at Langtang Village (3,430 m) — rebuilt after 2015 earthquake, preserving traditional Tamang culture."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Langtang Village"
      },
      {
        day: 5,
        title: "Langtang Village → Kyanjin Gompa",
        activities: [
          "Trek 4–5 hours higher into the glacial valley. Arrive at Kyanjin Gompa (3,870 m) — spiritual heart of the region.",
          "Visit the monastery, watch monks perform puja, and see the famous local yak cheese factory.",
          "Evening views of Langtang Lirung."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kyanjin Gompa"
      },
      {
        day: 6,
        title: "Kyanjin Gompa – Tsergo Ri / Kyanjin Ri Exploration",
        activities: [
          "Early morning hike 3–4 hours up to Tsergo Ri (4,984 m) — best panoramic viewpoint of the whole valley, Langtang Glacier, and peaks.",
          "Alternatively hike to Kyanjin Ri (4,773 m) for gentler climb.",
          "Return to Kyanjin Gompa by afternoon for rest and reflection."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Kyanjin Gompa"
      },
      {
        day: 7,
        title: "Kyanjin Gompa → Lama Hotel",
        activities: [
          "Descend 5–6 hours back down the valley, enjoying forest views and stopping at villages.",
          "Arrive at Lama Hotel for overnight stay."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lama Hotel"
      },
      {
        day: 8,
        title: "Lama Hotel → Syabrubesi",
        activities: [
          "Trek 4–5 hours downhill along the river, returning to Syabrubesi.",
          "Farewell dinner with your guide and porter team."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Syabrubesi"
      },
      {
        day: 9,
        title: "Syabrubesi → Kathmandu",
        activities: [
          "Drive 6–7 hours back to Kathmandu.",
          "Transfer to hotel; rest and shower. Evening free for shopping or visiting nearby stupas."
        ],
        meals: "Breakfast",
        overnight: "Kathmandu"
      },
      {
        day: 10,
        title: "Final Blessings & Departure",
        activities: [
          "Transfer to Tribhuvan International Airport for your onward journey."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "everest-base-camp-kala-patthar-14-days",
    title: "Everest Base Camp + Kala Patthar – 14 Days full itinerary",
    overview: "Start & End: Kathmandu Arrival to Departure | Difficulty: Moderate–Challenging | Max Altitude: 5,545 m (Kala Patthar) / 5,364 m (Everest Base Camp)",
    image: "/placeholder-tour-4.jpg",
    tourType: "Trekking",
    duration: "13 Nights / 14 Days",
    route: "Kathmandu → Lukla → Namche Bazaar → Tengboche → Dingboche → Lobuche → Gorak Shep → EBC → Kala Patthar → Pheriche → Namche → Lukla → Kathmandu",
    bestSeason: "March–May, September–November",
    highlights: [
      "Kala Patthar Sunrise: The world’s most famous unobstructed view of Mount Everest, plus Lhotse, Nuptse, Ama Dablam, Makalu and Pumori",
      "Everest Base Camp: Walk alongside the Khumbu Glacier, see expedition camps and the legendary Khumbu Icefall",
      "Sherpa Culture: Visit Tengboche – the oldest and most important monastery in the Khumbu region, meet local Sherpa communities",
      "Scenic Wonders: Cross iconic suspension bridges, trek through ancient rhododendron forests, and walk beneath 8,000-meter peaks"
    ],
    inclusions: [
      "Round-trip flight: Kathmandu ↔ Lukla (including airport taxes)",
      "Twin-share accommodation: Kathmandu hotels + mountain teahouses",
      "Full board: Daily breakfast, lunch, dinner + tea/coffee during trek",
      "All official permits: Sagarmatha National Park entry, TIMS card, Khumbu Pasang Lhamu fee",
      "Licensed government trekking guide + porter service (1 porter for every 2 guests)",
      "Welcome khata scarf, trekking map, first-aid kit, emergency rescue coordination",
      "Completion certificate"
    ],
    exclusions: [
      "International airfares, visa fees and travel/medical insurance",
      "Personal trekking gear: sleeping bag, trekking poles, warm layers, boots",
      "Bottled water, hot showers, snacks, alcohol, soft drinks",
      "Gratuities, personal shopping, and extra side trips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Receive a traditional welcome with a sacred khata scarf from our representative.",
          "Transfer to your selected hotel in central Kathmandu. Rest and settle in to the altitude.",
          "In the evening, attend a detailed trek briefing covering route, safety, gear and acclimatization rules.",
          "Enjoy a welcome dinner with authentic Nepali hospitality."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Lukla – Phakding",
        activities: [
          "Early morning transfer to airport for the scenic 30-minute flight to Tenzing-Hillary Airport, Lukla (2,860 m).",
          "After landing, meet your guide and porter team.",
          "Trek downhill and along the Dudh Koshi River for 3–4 hours to Phakding (2,640 m).",
          "The trail passes small Sherpa villages and pine forests."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Phakding"
      },
      {
        day: 3,
        title: "Phakding → Namche Bazaar",
        activities: [
          "Trek 6–7 hours gradually uphill, crossing multiple suspension bridges over rushing rivers.",
          "As you climb higher, the valley narrows and the first views of Mount Everest appear ahead.",
          "Continue up steep winding trails to Namche Bazaar (3,440 m) – the gateway to the Everest region and the main Sherpa trading hub."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Namche Bazaar"
      },
      {
        day: 4,
        title: "Namche Bazaar – Acclimatization Day",
        activities: [
          "No long trekking today – this is a mandatory acclimatization day.",
          "Enjoy a short 3–4 hour hike uphill to the Everest View Hotel (3,880 m) for panoramic close-up views of Everest, Lhotse and Ama Dablam.",
          "Descend back to Namche by afternoon.",
          "Visit the Sherpa Cultural Museum and local markets to learn about Himalayan traditions."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Namche Bazaar"
      },
      {
        day: 5,
        title: "Namche Bazaar → Tengboche",
        activities: [
          "Trek 5–6 hours along a ridge with constant mountain views, descending then climbing gently through dense rhododendron and oak forests.",
          "Arrive at Tengboche Monastery (3,880 m) – the spiritual heart of the Khumbu.",
          "Visit the monastery, join prayers if possible, and hear stories of Sherpa Buddhism."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Tengboche"
      },
      {
        day: 6,
        title: "Tengboche → Dingboche",
        activities: [
          "Continue 5–6 hours across open alpine meadows and river valleys. The landscape becomes more rugged as trees thin out.",
          "Pass through Pangboche village and its ancient monastery, then climb steadily to Dingboche (4,320 m) – a stone settlement surrounded by high peaks."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Dingboche"
      },
      {
        day: 7,
        title: "Dingboche – Second Acclimatization Day",
        activities: [
          "Another rest and preparation day.",
          "Hike 3–4 hours uphill to Nangkartshang Peak (5,083 m) for views of Makalu, Lhotse and Cholatse.",
          "Return to Dingboche for lunch and full rest. This step is essential to avoid altitude sickness at higher elevations."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Dingboche"
      },
      {
        day: 8,
        title: "Dingboche → Lobuche",
        activities: [
          "Trek 5 hours across the barren glacial valley.",
          "Cross Thukla Pass (4,830 m) – stop at the stone memorials honoring climbers lost on Everest.",
          "Continue to Lobuche (4,940 m) – a small settlement located right at the foot of the mountains."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lobuche"
      },
      {
        day: 9,
        title: "Lobuche → Gorak Shep → Everest Base Camp",
        activities: [
          "Start early for the longest day of the trek: 7–8 hours total.",
          "Climb to Gorak Shep (5,180 m) – the last permanent settlement before the ice.",
          "Continue across the Khumbu Glacier to Everest Base Camp (5,364 m).",
          "Walk among expedition tents, see the massive Khumbu Icefall, and stand directly beneath the world’s highest peak. Return to Gorak Shep for overnight stay."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Gorak Shep"
      },
      {
        day: 10,
        title: "Gorak Shep → Kala Patthar Sunrise → Pheriche",
        activities: [
          "Wake at 03:30 for the most unforgettable experience: 1.5-hour steep climb to Kala Patthar (5,545 m) – the highest point on this trek.",
          "Watch the sunrise paint Everest and surrounding peaks in gold and pink.",
          "After photos and quiet reflection, descend back to Gorak Shep for breakfast.",
          "Trek 6 hours downhill to Pheriche (4,371 m) – descending lower overnight is the safest way to recover."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pheriche"
      },
      {
        day: 11,
        title: "Pheriche → Namche Bazaar",
        activities: [
          "Trek 6–7 hours steadily downhill, retracing your path through Tengboche and back to Namche Bazaar.",
          "Enjoy warmer air, forest shade, and celebrate your successful journey."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Namche Bazaar"
      },
      {
        day: 12,
        title: "Namche Bazaar → Lukla",
        activities: [
          "Trek 6–7 hours downhill along the Dudh Koshi valley, passing familiar villages and bridges.",
          "Arrive back in Lukla.",
          "Enjoy a farewell dinner with your guide and porter team to thank them for their support."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Lukla"
      },
      {
        day: 13,
        title: "Lukla → Kathmandu",
        activities: [
          "Morning flight back to Kathmandu.",
          "Transfer to hotel. Rest and shower, or explore Thamel area.",
          "Receive your official Everest trekking completion certificate in the evening."
        ],
        meals: "Breakfast",
        overnight: "Kathmandu"
      },
      {
        day: 14,
        title: "Final Blessings & Departure",
        activities: [
          "Transfer to Tribhuvan International Airport for your onward journey."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "ghorepani-poon-hill-trek-6-days",
    title: "Ghorepani Poon Hill Trek – 6 Days Full Itinerary",
    overview: "Best For: First-time trekkers, families, seniors, short-time travellers, photographers. Difficulty: Easy–Moderate | Max Altitude: 3,210 m (Poon Hill)",
    image: "/placeholder-tour-5.jpg",
    tourType: "Trekking",
    duration: "5 Nights / 6 Days",
    route: "Kathmandu → Pokhara → Nayapul → Tikhedhunga → Ghorepani → Poon Hill → Ghandruk → Pokhara → Kathmandu",
    bestSeason: "March–May, September–November",
    highlights: [
      "World-famous sunrise over Annapurna, Dhaulagiri, Machhapuchhre & Nilgiri ranges",
      "Rhododendron forests, traditional Gurung villages, Himalayan panoramas",
      "Short walking days, rest stops, gentle pace — fully manageable"
    ],
    inclusions: [
      "All accommodation: Kathmandu/Pokhara hotels + mountain teahouses (twin share)",
      "Daily full board: Breakfast, lunch, dinner + tea/coffee during trek",
      "Transport: Kathmandu ↔ Pokhara (drive or flight), Pokhara ↔ Nayapul, Ghandruk ↔ Pokhara",
      "Permits: TIMS card + Annapurna Conservation Area (ACAP) entry",
      "Licensed government trekking guide + porter service",
      "Welcome khata scarf, first-aid support, emergency backup"
    ],
    exclusions: [
      "International airfares, visa fees",
      "Personal trekking gear, bottled water, snacks, drinks, tips",
      "Travel & medical insurance",
      "Extra side trips or extensions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Receive welcome with khata scarf.",
          "Transfer to hotel. Rest and acclimatise.",
          "Evening briefing about the trek. Enjoy traditional welcome dinner."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        activities: [
          "Scenic 6–7 hour drive or 30 min flight to Pokhara.",
          "Check into lakeside hotel. Brief rest; explore Phewa Lake area. Final trek preparation."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 3,
        title: "Pokhara → Nayapul → Tikhedhunga",
        activities: [
          "Drive 1.5 hrs to Nayapul (1,070 m).",
          "Begin trekking along Modi Khola river, through Birethanti and terraced fields.",
          "Walk 3–4 hrs to Tikhedhunga (1,540 m). Overnight at teahouse."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Tikhedhunga"
      },
      {
        day: 4,
        title: "Tikhedhunga → Ulleri → Ghorepani",
        activities: [
          "Climb gentle stone steps to Ulleri (2,070 m), then ascend through oak, pine and rhododendron forest.",
          "Walk 5–6 hrs to Ghorepani (2,860 m). Overnight at hilltop teahouse."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Ghorepani"
      },
      {
        day: 5,
        title: "Ghorepani → Poon Hill Sunrise → Tadapani → Ghandruk",
        activities: [
          "Rise early; short 45–60 min hike up to Poon Hill (3,210 m) for spectacular sunrise over the Himalayas.",
          "Return to Ghorepani for breakfast. Trek 5–6 hrs downhill through forest to Ghandruk (1,950 m) — Nepal’s largest traditional Gurung village.",
          "Visit local museum and monastery. Overnight."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Ghandruk"
      },
      {
        day: 6,
        title: "Ghandruk → Kande → Pokhara → Kathmandu",
        activities: [
          "Descend 3 hrs to Kande. Drive 1 hr back to Pokhara.",
          "Connect with drive or flight to Kathmandu.",
          "Arrive in Kathmandu; transfer to hotel or airport for departure."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "poon-hill-abc-combined-trek-11-days",
    title: "Poon Hill + Annapurna Base Camp Combined Trek – 11 Days Full Itinerary",
    overview: "Start & End: Kathmandu Arrival to Departure | Difficulty: Moderate | Max Altitude: 4,130 m (ABC). Well-connected route, teahouses everywhere, proper acclimatization",
    image: "/placeholder-tour-6.jpg",
    tourType: "Trekking",
    duration: "10 Nights / 11 Days",
    route: "Kathmandu → Pokhara → Ghorepani → Poon Hill → Chhomrong → ABC → Bamboo → Jhinu Danda → Pokhara → Kathmandu",
    bestSeason: "March–May, Sept–Nov",
    highlights: [
      "Poon Hill Sunrise: 360° view of Annapurna, Dhaulagiri, Machhapuchhre, Nilgiri & Himchuli",
      "Annapurna Sanctuary: Ringed by 8,000-meter peaks, quiet glacial basin, close mountain views",
      "Culture: Traditional Gurung villages, monasteries, local hospitality",
      "Nature: Rhododendron forests, waterfalls, natural hot springs at Jhinu",
      "One single permit: ACAP covers entire route — no extra fees for Poon Hill or ABC"
    ],
    inclusions: [
      "Accommodation: Kathmandu/Pokhara hotels + mountain teahouses (twin share)",
      "Full board: Breakfast, lunch, dinner + tea/coffee daily",
      "Transport: Kathmandu ↔ Pokhara; Pokhara ↔ Nayapul; Jhinu ↔ Pokhara",
      "Permits: Single ACAP permit valid for entire route; TIMS card",
      "Licensed government trekking guide + porter service",
      "Welcome khata, first-aid kit, emergency support"
    ],
    exclusions: [
      "International airfares, visa fees",
      "Personal gear: sleeping bag, trekking poles, warm clothes, boots",
      "Bottled water, snacks, soft drinks, alcohol, tips",
      "Travel & medical insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Arrive at Tribhuvan International Airport. Welcome with khata scarf; transfer to hotel.",
          "Rest, acclimatize, attend trek briefing. Enjoy traditional welcome dinner."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        activities: [
          "Scenic 6–7 hr drive or 30 min flight to Pokhara.",
          "Check into lakeside hotel. Finalize gear, meet guide, relax by Phewa Lake."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 3,
        title: "Pokhara → Nayapul → Tikhedhunga → Ghorepani",
        activities: [
          "Drive 1.5 hr to Nayapul (1,070 m).",
          "Trek 5–6 hr through Birethanti, Tikhedhunga, up stone steps to Ghorepani (2,860 m).",
          "Overnight at hilltop teahouse."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Ghorepani"
      },
      {
        day: 4,
        title: "Ghorepani → Poon Hill Sunrise → Tadapani",
        activities: [
          "Rise early; 45–60 min hike to Poon Hill (3,210 m) for world-famous sunrise.",
          "Return to Ghorepani for breakfast; trek 4–5 hr downhill through forest to Tadapani (2,610 m)."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Tadapani"
      },
      {
        day: 5,
        title: "Tadapani → Chhomrong",
        activities: [
          "Trek 5–6 hr along ridges, cross Kimrong Khola, climb to Chhomrong (2,170 m) — gateway to Annapurna Sanctuary."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chhomrong"
      },
      {
        day: 6,
        title: "Chhomrong → Sinuwa → Bamboo",
        activities: [
          "Descend to Modi Khola, climb through bamboo & rhododendron forest.",
          "Walk 5–6 hr to Bamboo (2,310 m)."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Bamboo"
      },
      {
        day: 7,
        title: "Bamboo → Dovan → Himalaya → Deurali",
        activities: [
          "Trek 6–7 hr deeper into the valley past waterfalls to Deurali (3,230 m).",
          "Gradual ascent for good acclimatization."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Deurali"
      },
      {
        day: 8,
        title: "Deurali → Machhapuchhre Base Camp → Annapurna Base Camp",
        activities: [
          "Ascend 6–7 hr past MBC (3,700 m); enter the sanctuary to ABC (4,130 m).",
          "Sunset over the whole Annapurna range."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "ABC"
      },
      {
        day: 9,
        title: "ABC Sunrise → Bamboo",
        activities: [
          "Early sunrise over Annapurna I; photos & reflection.",
          "Descend 6–7 hr back through MBC, Deurali, Himalaya, Dovan to Bamboo."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Bamboo"
      },
      {
        day: 10,
        title: "Bamboo → Jhinu Danda → Pokhara",
        activities: [
          "Trek 4–5 hr to Jhinu Danda; relax in natural hot springs.",
          "Then drive 3 hr to Pokhara. Evening free."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 11,
        title: "Pokhara → Kathmandu → Departure",
        activities: [
          "Drive or fly back to Kathmandu. Transfer directly to airport or hotel for onward journey."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  },
  {
    slug: "annapurna-base-camp-trek-10-days",
    title: "Annapurna Base Camp (ABC) Trek – 10 Days Full Itinerary",
    overview: "Best For: Culture lovers, photographers, moderate trekkers, sanctuary seekers. Difficulty: Moderate | Max Altitude: 4,130 m (ABC)",
    image: "/placeholder-tour-7.jpg",
    tourType: "Trekking",
    duration: "9 Nights / 10 Days",
    route: "Kathmandu → Pokhara → Ghandruk → Chhomrong → Bamboo → Himalaya → ABC → Bamboo → Jhinu Danda → Pokhara → Kathmandu",
    bestSeason: "March–May, Sept–Nov",
    highlights: [
      "Stand inside the Annapurna Sanctuary, ringed by Annapurna I, South, Fang, Dhaulagiri, Machhapuchhre, Hiunchuli",
      "Trek through forests, valleys, and traditional villages; relax at Jhinu hot springs",
      "Well-marked trails, comfortable teahouses, steady acclimatization"
    ],
    inclusions: [
      "All accommodation: Kathmandu/Pokhara hotels + mountain teahouses (twin share)",
      "Full board: Breakfast, lunch, dinner + tea/coffee during trek",
      "Transport: Kathmandu ↔ Pokhara; Pokhara ↔ Nayapul; Jhinu ↔ Pokhara",
      "Permits: ACAP + TIMS card",
      "Licensed government guide + porter service",
      "Welcome khata, first-aid kit, emergency support"
    ],
    exclusions: [
      "International flights, visa fees",
      "Personal gear, bottled water, snacks, drinks, tips",
      "Travel/medical insurance",
      "Extra side trips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: [
          "Receive at airport with khata scarf; transfer to hotel.",
          "Rest, acclimatize, evening trek briefing. Welcome dinner with Nepali hospitality."
        ],
        meals: "Dinner",
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu → Pokhara",
        activities: [
          "Scenic 6–7 hr drive or 30 min flight. Check into lakeside hotel.",
          "Explore Phewa Lake, finalize gear and permits."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 3,
        title: "Pokhara → Nayapul → Ghandruk",
        activities: [
          "Drive 1.5 hr to Nayapul (1,070 m); trek 4–5 hr via Birethanti through terraced fields to Ghandruk — Nepal’s biggest Gurung village.",
          "Visit monastery and museum."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Ghandruk"
      },
      {
        day: 4,
        title: "Ghandruk → Chhomrong",
        activities: [
          "Trek 5–6 hr along ridge with Annapurna South views; descend to Kimrong Khola then climb to Chhomrong, gateway to the Sanctuary."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Chhomrong"
      },
      {
        day: 5,
        title: "Chhomrong → Sinuwa → Bamboo",
        activities: [
          "Cross Modi Khola; climb through bamboo and rhododendron forest.",
          "Walk 5–6 hr to Bamboo."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Bamboo"
      },
      {
        day: 6,
        title: "Bamboo → Dovan → Himalaya",
        activities: [
          "Trek 6–7 hr deeper into the valley, passing waterfalls and oak-pine woods.",
          "Arrive Himalaya settlement."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Himalaya"
      },
      {
        day: 7,
        title: "Himalaya → Deurali → Machhapuchhre Base Camp → ABC",
        activities: [
          "Ascend 6–7 hr past Deurali (3,230 m) and MBC (3,700 m); enter the wide glacial basin to Annapurna Base Camp.",
          "Sunset over the peaks."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "ABC"
      },
      {
        day: 8,
        title: "ABC Sunrise → Bamboo",
        activities: [
          "Early sunrise over Annapurna I; photos and reflection.",
          "Descend 6–7 hr back through MBC, Deurali, Himalaya, Dovan to Bamboo."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Bamboo"
      },
      {
        day: 9,
        title: "Bamboo → Jhinu Danda → Pokhara",
        activities: [
          "Trek 4–5 hr to Jhinu Danda; relax in natural hot springs.",
          "Then drive 3 hr to Pokhara. Evening free at lakeside."
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Pokhara"
      },
      {
        day: 10,
        title: "Pokhara → Kathmandu",
        activities: [
          "Drive or fly back to Kathmandu.",
          "Transfer to hotel or airport for departure."
        ],
        meals: "Breakfast",
        overnight: "N/A"
      }
    ]
  }
];
