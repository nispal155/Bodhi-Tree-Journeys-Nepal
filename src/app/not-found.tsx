"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-2">
          404
        </h1>
        <div className="text-6xl mb-6 flex justify-center space-x-4">
          <span>🧘‍♂️</span>
          <span>☸️</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          This Path Is Currently Hidden
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          Like a cloud passing over the Himalayas, the page you seek has momentarily vanished. Breathe in, breathe out, and let us guide you back on the journey.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
        >
          Return to the Middle Way
        </Link>
      </motion.div>

      {/* Decorative mountains */}
      <motion.div 
        className="fixed bottom-0 left-0 w-full h-64 -z-10 opacity-20 dark:opacity-10 pointer-events-none"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path fill="#f97316" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ea580c" fillOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,117.3C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </div>
  );
}
