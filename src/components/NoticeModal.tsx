"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function NoticeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the notice was already dismissed
    const hasDismissed = localStorage.getItem("hasDismissedNotice");
    
    if (!hasDismissed) {
      // 1-second delay upon initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Set a permanent key in the client's localStorage
    localStorage.setItem("hasDismissedNotice", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-6">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Massive Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Header / Dismiss Button (Floating over the image for max space) */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-colors z-20 shadow-lg text-gray-900 dark:text-white"
              aria-label="Close Notice"
            >
              <X size={24} />
            </button>

            {/* Massive Image Container taking up almost all space */}
            <div className="relative w-full h-full bg-gray-100 dark:bg-zinc-800 flex flex-col items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image 
                  src="/offer.webp" 
                  alt="Important Special Offer" 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
