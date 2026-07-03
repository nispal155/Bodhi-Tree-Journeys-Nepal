"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Coffee, Moon } from "lucide-react";
import { ItineraryDay } from "@/data/packages";

interface Props {
  itinerary: ItineraryDay[];
}

export default function ItineraryAccordion({ itinerary }: Props) {
  const [openDay, setOpenDay] = useState<number | null>(1); // Default open first day

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="space-y-4">
      {itinerary.map((day) => (
        <div 
          key={day.day} 
          className="border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm"
        >
          <button
            onClick={() => toggleDay(day.day)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 flex items-center justify-center font-bold">
                D{day.day}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{day.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: openDay === day.day ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-gray-400" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openDay === day.day && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-zinc-900">
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"></div>
                          <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-dashed border-gray-200 dark:border-zinc-800">
                      {day.meals && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Coffee size={16} className="text-orange-400" />
                          <span className="font-medium text-gray-700 dark:text-gray-300">Meals:</span> {day.meals}
                        </div>
                      )}
                      {day.overnight && day.overnight !== "N/A" && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Moon size={16} className="text-indigo-400" />
                          <span className="font-medium text-gray-700 dark:text-gray-300">Overnight:</span> {day.overnight}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
