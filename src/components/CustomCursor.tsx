"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for better performance (bypasses React state for rendering)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics to make it trail smoothly
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // offset by half width (32px / 2)
      cursorY.set(e.clientY - 16); // offset by half height (32px / 2)
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleElementHoverOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleElementHoverIn);
    window.addEventListener("mouseout", handleElementHoverOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleElementHoverIn);
      window.removeEventListener("mouseout", handleElementHoverOut);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Inner dot that follows exactly (Now a Buddha icon) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          // Center the 48x48 icon on the cursor
          x: useTransform(cursorX, v => v - 8),
          y: useTransform(cursorY, v => v - 8),
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      >
        <img 
          src="/buddha-cursor-transparent.png" 
          alt="Buddha Cursor" 
          width={48} 
          height={48}
          className="w-12 h-12 object-contain"
        />
      </motion.div>
    </>
  );
}
