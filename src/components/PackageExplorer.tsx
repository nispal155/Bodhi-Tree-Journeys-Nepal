"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Clock, MapPin, Map, Sunrise, Calendar } from "lucide-react";
import { tourPackages } from "@/data/packages";

export default function PackageExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const durations = ["All", "1-5 Days", "6-10 Days", "11+ Days"];
  const types = ["All", "Standard Tour", "Trekking", "Pilgrimage Tour", "Cultural Tour", "Monastery Retreat"];

  const parseDurationDays = (durationStr: string) => {
    // E.g., "7 Nights / 8 Days" -> extracts 8
    const match = durationStr.match(/(\d+)\s*Days?/i);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredPackages = useMemo(() => {
    return tourPackages.filter((pkg) => {
      const matchesSearch = 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pkg.route.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDuration = true;
      const days = parseDurationDays(pkg.duration);
      if (selectedDuration === "1-5 Days") matchesDuration = days >= 1 && days <= 5;
      else if (selectedDuration === "6-10 Days") matchesDuration = days >= 6 && days <= 10;
      else if (selectedDuration === "11+ Days") matchesDuration = days >= 11;

      let matchesType = true;
      if (selectedType !== "All") {
        matchesType = pkg.tourType.toLowerCase().includes(selectedType.toLowerCase());
      }

      return matchesSearch && matchesDuration && matchesType;
    });
  }, [searchQuery, selectedDuration, selectedType]);

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Search and Filters */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-800 mb-12 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by destination or tour name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white transition-all"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select 
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="w-1/2 md:w-40 px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white transition-all appearance-none cursor-pointer"
          >
            {durations.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-1/2 md:w-48 px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white transition-all appearance-none cursor-pointer"
          >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredPackages.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4 flex justify-center"><Filter size={48} /></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No packages found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to see more results.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Link href={`/packages/${pkg.slug}`} key={pkg.slug} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 h-full transform hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                  {pkg.tourType.split('/')[0].trim()}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={16} className="mr-2 text-orange-500" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    <span className="line-clamp-1">{pkg.route}</span>
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
      )}
    </div>
  );
}
