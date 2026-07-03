"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSolid = pathname !== "/" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pilgrimages", href: "/pilgrimages" },
    { name: "Treks", href: "/treks" },
    { name: "Cultural Tours", href: "/cultural-tours" },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white dark:bg-black shadow-md dark:shadow-black/60 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="flex items-center gap-2">
            <img src="/logoicon.png" alt="Bodhi Tree Journeys Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-sm" />
            <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors flex items-center gap-1 md:gap-1.5 ${isSolid || isMobileMenuOpen ? "text-gray-900 dark:text-white" : "text-white"}`}>
              <span className="truncate">Bodhi Tree Journeys <sup className="text-red-600 font-extrabold text-xs md:text-sm">NP</sup></span>
              <span className="animate-bounce inline-block text-xl md:text-2xl" style={{ animationDuration: '2s' }}>🇳🇵</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-red-600 transition-colors ${
                isSolid ? "text-gray-800 dark:text-gray-200" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className={`ml-2 px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
              isSolid
                ? "border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                : "border-white text-white hover:bg-white/10"
            }`}
          >
            Plan Your Trip
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <ThemeToggle />
          <button
            className={`p-2 rounded-md ${
              isScrolled || isMobileMenuOpen ? "text-gray-900 dark:text-white" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col pt-24 px-6 lg:hidden">
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 px-6 py-3 rounded-full border border-red-600 text-red-600 font-semibold text-center hover:bg-red-50 dark:hover:bg-red-950"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan Your Trip
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
