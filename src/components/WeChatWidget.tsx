"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function WeChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#07C160] flex items-center justify-center">
                    {/* Small WeChat Icon */}
                    <svg viewBox="0 0 1024 1024" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M682.667 384c-34.133 0-64 8.533-89.6 17.067a360.533 360.533 0 00-209.067-187.734c-12.8-4.266-29.867-8.533-46.933-8.533-149.334 0-277.334 115.2-277.334 256s119.467 243.2 268.8 256h25.6l-29.866 59.733a18.773 18.773 0 0021.333 25.6l81.066-29.866h4.267a312.32 312.32 0 0055.467 4.266 211.2 211.2 0 00-4.267-34.133c0-149.333 132.267-273.067 298.667-273.067h8.533v-17.066c-17.066-38.4-55.466-68.267-106.666-68.267zM320 384a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267zm213.333 0a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267z"/><path d="M938.667 554.667c0-115.2-115.2-213.334-256-213.334s-256 98.134-256 213.334 115.2 213.333 256 213.333a277.333 277.333 0 0046.933-4.267l64 25.6a18.773 18.773 0 0021.334-21.333l-21.334-46.933a233.813 233.813 0 00145.067-166.4zM640 533.333a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266zm170.667 0a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">WeChat</h3>
                    <p className="text-xs text-gray-500">Lingyunnepal</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 flex flex-col items-center justify-center bg-white dark:bg-zinc-900">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gray-50 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 p-2 shadow-inner">
                  <Image 
                    src="/We-Chat.jpeg" 
                    alt="WeChat QR Code" 
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
                
                <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300 font-medium px-4">
                  Open WeChat on your phone and scan the QR code to connect with us.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-[#07C160] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-white hover:bg-[#06ad56] transition-colors focus:outline-none focus:ring-4 focus:ring-[#07C160]/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          aria-label="Open WeChat QR Code"
        >
          {/* Main Floating WeChat Icon */}
          <svg viewBox="0 0 1024 1024" className="w-8 h-8" fill="currentColor">
            <path d="M682.667 384c-34.133 0-64 8.533-89.6 17.067a360.533 360.533 0 00-209.067-187.734c-12.8-4.266-29.867-8.533-46.933-8.533-149.334 0-277.334 115.2-277.334 256s119.467 243.2 268.8 256h25.6l-29.866 59.733a18.773 18.773 0 0021.333 25.6l81.066-29.866h4.267a312.32 312.32 0 0055.467 4.266 211.2 211.2 0 00-4.267-34.133c0-149.333 132.267-273.067 298.667-273.067h8.533v-17.066c-17.066-38.4-55.466-68.267-106.666-68.267zM320 384a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267zm213.333 0a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267z"/><path d="M938.667 554.667c0-115.2-115.2-213.334-256-213.334s-256 98.134-256 213.334 115.2 213.333 256 213.333a277.333 277.333 0 0046.933-4.267l64 25.6a18.773 18.773 0 0021.334-21.333l-21.334-46.933a233.813 233.813 0 00145.067-166.4zM640 533.333a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266zm170.667 0a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266z"/>
          </svg>
        </motion.button>
      </div>
    </>
  );
}
