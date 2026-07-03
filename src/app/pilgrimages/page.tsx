import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourList from "@/components/TourList";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PilgrimagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navigation />
      <div className="w-full pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Pilgrimage Tours</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">Sacred journeys to ancient holy sites across the Himalayas.</p>
        </div>
        <TourList category="Pilgrimage" />
        
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
