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
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4-9nWCc0hJOQZ2XSkXUtroA1ebd59gLNEJmTGm2XU0yx5d_23o6llik&s=10" 
                      alt="WeChat Logo" 
                      className="w-5 h-5 object-contain rounded-full"
                    />
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
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4-9nWCc0hJOQZ2XSkXUtroA1ebd59gLNEJmTGm2XU0yx5d_23o6llik&s=10" 
            alt="WeChat Logo" 
            className="w-10 h-10 object-contain rounded-full shadow-sm"
          />
        </motion.button>
      </div>
    </>
  );
}
