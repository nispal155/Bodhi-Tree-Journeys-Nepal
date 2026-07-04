"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/landing-3d.png",
  "/lumbini_temple.png",
  "/hero-placeholder.jpg",
  "/placeholder-tour-1.jpg"
];
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="w-full min-h-screen bg-slate-900 flex items-center justify-center text-white text-center relative pt-20 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt="Bodhi Tree Journeys Nepal"
              fill
              className="object-cover opacity-60"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-20 px-6 max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] text-orange-400 mb-4 uppercase animate-fade-in-up delay-100">Pilgrimage & Himalayan Journeys — Travel with Heart.</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">Bodhi Tree Journeys Nepal</h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 animate-fade-in-up delay-300">Experience the authentic spirit of Nepal with our licensed local guides. Safe, respectful, and deeply moving cultural and adventure tours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a href="/contact" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors">Book a Journey</a>
          <a href="#packages" className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-medium rounded-full transition-colors">View Packages</a>
        </div>
      </div>
    </section>
  );
}
