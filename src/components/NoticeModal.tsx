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
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Card Geometry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
          >
            {/* Header / Dismiss Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-colors z-20 text-gray-600 dark:text-gray-300"
              aria-label="Close Notice"
            >
              <X size={20} />
            </button>

            {/* Image reference required verbatim */}
            <div className="relative w-full h-48 sm:h-56 bg-gray-50 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-zinc-800">
              <Image 
                src="/Notice.png" 
                alt="Important Notice" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Extracted Styles from offer.webp: Centered alignment, bold red heading */}
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <h2 
                id="notice-title"
                className="text-3xl sm:text-4xl font-extrabold text-[#C1121F] mb-4 tracking-wide uppercase"
                style={{ letterSpacing: "0.05em" }}
              >
                Special Offer
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-sm">
                Don't miss out on our latest updates and exclusive travel packages. Experience the authentic spirit of Nepal!
              </p>

              {/* Explicit footer closing action button */}
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-10 py-3.5 bg-[#C1121F] hover:bg-[#a00f1a] text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl active:scale-95 uppercase tracking-wide text-sm"
              >
                Close Notice
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
