"use client";

import { motion } from "framer-motion";

export function Skeleton({ className }: { className?: string }) {
  return (
    <motion.div
      className={`bg-slate-800/50 rounded-xl overflow-hidden relative ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}

export function TourCardSkeleton() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-4 border border-slate-800/50 shadow-xl flex flex-col h-full gap-4">
      <Skeleton className="w-full h-48 rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/2 h-4" />
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800">
        <Skeleton className="w-1/3 h-6" />
        <Skeleton className="w-24 h-10 rounded-full" />
      </div>
    </div>
  );
}
