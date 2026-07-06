"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";

export default function WeChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-zinc-800 flex flex-col items-center max-w-[250px]"
          >
            <div className="flex justify-between w-full mb-3 items-center">
              <span className="font-semibold text-sm dark:text-white">WeChat: Lingyunnepal</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-gray-500"
                aria-label="Close WeChat QR Code"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="relative w-48 h-48 bg-gray-50 dark:bg-zinc-800 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-700 flex items-center justify-center p-2">
              <Image 
                src="/wechat-qr.jpg" 
                alt="WeChat QR Code for Lingyunnepal" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">
              Scan QR code to add me as a friend.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#07C160] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white hover:bg-[#06ad56] transition-colors relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        aria-label="Open WeChat QR Code"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}
