"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { tourPackages } from "@/data/packages";
import ImageSlider from "@/components/ImageSlider";

const CATEGORIES = [
  {
    id: "regular",
    title: "🇳🇵 REGULAR TOUR PROGRAM",
    matchTypes: ["Standard Tour", "Regular Group / Private Custom"]
  },
  {
    id: "wellness",
    title: "🕉 Wellness and Spiritual Tours",
    matchTypes: ["Wellness and Spiritual Tour"]
  },
  {
    id: "pilgrimage",
    title: "☯️ Pilgrimage Tours",
    matchTypes: ["Pilgrimage Tour", "Monastery Retreat"]
  },
  {
    id: "trekking",
    title: "🏔 Himalayan Trekking",
    matchTypes: ["Trekking"]
  },
  {
    id: "educational",
    title: "📜 Educational Tour Programs",
    matchTypes: ["Educational Tour"]
  },
  {
    id: "wildlife",
    title: "🎒 Nature and Wildlife",
    matchTypes: ["Nature and Wildlife"]
  },
  {
    id: "luxury",
    title: "🏨 Custom Private & Luxury Journeys",
    matchTypes: ["Luxury Journey", "Custom Journey"]
  },
  {
    id: "cultural",
    title: "🌋 Cultural & Heritage Journeys",
    matchTypes: ["Cultural Tour"]
  },
  {
    id: "other",
    title: "♾️ Other Services",
    matchTypes: ["Scenic Flight", "Day Tour", "Photography Tour", "Festival Tour"]
  }
];

export default function PackageExplorer() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getPackagesForCategory = (matchTypes: string[]) => {
    return tourPackages.filter(pkg => 
      matchTypes.some(type => pkg.tourType.toLowerCase().includes(type.toLowerCase()))
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {CATEGORIES.map((category) => {
          const categoryPackages = getPackagesForCategory(category.matchTypes);
          const isExpanded = expandedCategories[category.id];

          if (categoryPackages.length === 0) return null;

          return (
            <div key={category.id} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-left">
                  {category.title}
                </h2>
                <div className="flex-shrink-0 ml-4 p-2 bg-white dark:bg-zinc-700 rounded-full shadow-sm text-orange-500">
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 border-t border-gray-100 dark:border-zinc-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryPackages.map((pkg) => (
                      <Link href={`/packages/${pkg.slug}`} key={pkg.slug} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 h-full transform hover:-translate-y-1">
                        <div className="relative h-56 w-full overflow-hidden group-hover:scale-105 transition-transform duration-700 bg-black/5 dark:bg-black/20">
                          {pkg.images && pkg.images.length > 0 ? (
                            <ImageSlider images={pkg.images} alt={pkg.title} className="object-contain" />
                          ) : (
                            <Image
                              src={pkg.image}
                              alt={pkg.title}
                              fill
                              className="object-contain"
                            />
                          )}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm z-30">
                            {pkg.duration}
                          </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                            {pkg.title}
                          </h3>
                          
                          <div className="space-y-2 mb-6">
                            <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <MapPin size={16} className="mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                              <span className="line-clamp-2">{pkg.route}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                            {pkg.overview}
                          </p>

                          <div className="mt-auto flex items-center justify-between text-orange-500 font-bold group-hover:translate-x-2 transition-transform">
                            <span>View Details</span>
                            <span>→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
