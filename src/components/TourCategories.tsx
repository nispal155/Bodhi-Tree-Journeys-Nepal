import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { tourPackages } from "@/data/packages";

interface TourCategoriesProps {
  limit?: number;
  showViewAll?: boolean;
  hideHeader?: boolean;
}

const CATEGORIES = [
  { matchTypes: ["Standard Tour", "Regular Group / Private Custom"] },
  { matchTypes: ["Wellness and Spiritual Tour"] },
  { matchTypes: ["Pilgrimage Tour", "Monastery Retreat"] },
  { matchTypes: ["Trekking"] },
  { matchTypes: ["Educational Tour"] },
  { matchTypes: ["Nature and Wildlife"] },
  { matchTypes: ["Luxury Journey", "Custom Journey"] },
  { matchTypes: ["Cultural Tour"] },
  { matchTypes: ["Scenic Flight", "Day Tour", "Photography Tour", "Festival Tour"] }
];

export default function TourCategories({ limit, showViewAll = false, hideHeader = false }: TourCategoriesProps) {
  // Get exactly one package per category
  const featuredPackages = CATEGORIES.flatMap(category => {
    const foundPkg = tourPackages.find(pkg => 
      category.matchTypes.some(type => pkg.tourType.toLowerCase().includes(type.toLowerCase()))
    );
    return foundPkg ? [foundPkg] : [];
  });

  const journeys = limit ? featuredPackages.slice(0, limit) : featuredPackages;

  return (
    <section id="packages" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        {!hideHeader && (
          <>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gray-200 dark:bg-zinc-900 w-12" />
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-400">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
              <div className="h-px bg-gray-200 dark:bg-zinc-900 w-12" />
            </div>
            
            <h2 className="text-4xl font-bold text-red-600 mb-4">Featured Packages</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">Carefully crafted itineraries for deep cultural immersion and breathtaking adventure.</p>
          </>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
          {journeys.map((tour, i) => (
            <div key={i} className="group bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.4)] hover:border-orange-200 dark:hover:border-orange-500/50">
              <Link href={`/packages/${tour.slug}`} className="block relative h-64 w-full overflow-hidden cursor-pointer">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {tour.duration}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/packages/${tour.slug}`}>
                  <h3 className="font-bold text-xl text-red-600 mb-2 transition-colors duration-300 group-hover:text-orange-500 line-clamp-2">{tour.title}</h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{tour.overview}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{tour.route.split('→')[0].trim()}...</span>
                  <Link href={`/packages/${tour.slug}`} className="px-5 py-2 bg-orange-500 text-white font-medium rounded-full text-sm transition-all duration-300 group-hover:bg-orange-600 group-hover:shadow-md group-hover:scale-105">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <Link href="/packages" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-orange-200 dark:border-orange-700 text-orange-500 font-bold hover:bg-orange-50 dark:hover:bg-orange-950 transition-colors">
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </section>
  );
}
