"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TourCardSkeleton } from "@/components/Skeleton";
import { tourPackages } from "@/data/packages";

interface TourListProps {
  category: string;
}

export default function TourList({ category }: TourListProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Filter based on the tourType category string (e.g. 'Trek', 'Pilgrimage', 'Cultural')
  const filteredTours = tourPackages.filter(tour => tour.tourType.includes(category));

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Fake network delay to show skeletons
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <div className="container mx-auto px-6 pb-24 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <AnimatePresence mode="wait">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <motion.div
                key={`skeleton-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <TourCardSkeleton />
              </motion.div>
            ))
          ) : (
            filteredTours.map((tour, i) => (
              <motion.div 
                key={`${tour.title}-${i}`} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group h-full bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.4)] hover:border-orange-200 dark:hover:border-orange-500/50"
              >
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
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      
      {!isLoading && filteredTours.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 py-12">More tours coming soon!</p>
      )}
    </div>
  );
}
