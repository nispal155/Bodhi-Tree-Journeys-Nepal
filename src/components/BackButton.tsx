"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/packages");
        }
      }}
      className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-medium bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 cursor-pointer"
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
}
