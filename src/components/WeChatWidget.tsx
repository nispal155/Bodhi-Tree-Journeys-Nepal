"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WeChatWidget() {
  // weixin:// URL scheme attempts to open WeChat directly
  // Note: WeChat's ability to deep-link directly to a chat is restricted on some devices,
  // but this will at least launch the WeChat app if installed.
  const wechatId = "Lingyunnepal";
  
  return (
    <motion.a
      href={`weixin://dl/chat?${wechatId}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#07C160] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white hover:bg-[#06ad56] transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Chat with us on WeChat"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
