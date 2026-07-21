"use client";

import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  const whatsappNumber = "9779713883831"; // Number from footer
  const message = encodeURIComponent("Hello, I'm interested in exploring Nepal!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-white hover:bg-[#1ebe57] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo" 
          className="w-8 h-8 object-contain"
        />
      </motion.a>
    </div>
  );
}
