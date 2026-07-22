"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { tourPackages } from "@/data/packages";
import ImageSlider from "@/components/ImageSlider";

const CATEGORIES = [
  {
    id: "regular",
    title: "Regular Tour Programs",
    matchTypes: ["Standard Tour", "Regular Group / Private Custom"]
  },
  {
    id: "wellness",
    title: "Wellness & Spiritual Tours",
    matchTypes: ["Wellness and Spiritual Tour"]
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage Tours",
    matchTypes: ["Pilgrimage Tour", "Monastery Retreat"]
  },
  {
    id: "trekking",
    title: "Himalayan Trekking",
    matchTypes: ["Trekking"]
  },
  {
    id: "educational",
    title: "Educational Tour Programs",
    matchTypes: ["Educational Tour"]
  },
  {
    id: "wildlife",
    title: "Nature & Wildlife",
    matchTypes: ["Nature and Wildlife"]
  },
  {
    id: "luxury",
    title: "Custom Private & Luxury Journeys",
    matchTypes: ["Luxury Journey", "Custom Journey"]
  },
  {
    id: "cultural",
    title: "Cultural & Heritage Journeys",
    matchTypes: ["Cultural Tour"]
  },
  {
    id: "other",
    title: "Additional Offerings",
    matchTypes: ["Scenic Flight", "Day Tour", "Photography Tour", "Festival Tour"]
  }
];

export default function PackageExplorer() {
  const getPackagesForCategory = (matchTypes: string[]) => {
    return tourPackages.filter(pkg => 
      matchTypes.some(type => pkg.tourType.toLowerCase().includes(type.toLowerCase()))
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {CATEGORIES.map((category) => {
          const categoryPackages = getPackagesForCategory(category.matchTypes);

          if (categoryPackages.length === 0) return null;

          return (
            <div key={category.id} className="pt-8 border-t border-gray-200 dark:border-zinc-800 first:border-0 first:pt-0">
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 tracking-wide">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPackages.map((pkg) => (
                  <Link href={`/packages/${pkg.slug}`} key={pkg.slug} className="group flex flex-col bg-white dark:bg-zinc-900 overflow-hidden border border-gray-200 dark:border-zinc-800 hover:border-red-600 transition-colors duration-300 h-full rounded-sm">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                      <ImageSlider 
                        images={Array.from(new Set([pkg.image, ...(pkg.images || [])]))} 
                        alt={pkg.title} 
                        objectFit="cover"
                        showDots={false}
                        imageClassName="transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs uppercase tracking-wider font-medium z-30">
                        {pkg.duration}
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                        {pkg.title}
                      </h3>
                      
                      <div className="space-y-1 mb-4">
                        <div className="flex items-start text-xs text-gray-500 dark:text-gray-400">
                          <MapPin size={14} className="mr-1 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{pkg.route}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow font-light leading-relaxed">
                        {pkg.overview}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-red-700 dark:text-red-500 text-sm font-medium uppercase tracking-wider">
                        <span>View Details</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
