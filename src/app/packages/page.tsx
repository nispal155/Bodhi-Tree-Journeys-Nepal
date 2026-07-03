import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourCategories from "@/components/TourCategories";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      {/* Unified Header Section */}
      <div className="w-full bg-white dark:bg-slate-900 pt-32 pb-16 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white dark:text-white mb-6">Tour Packages</h1>
          <p className="text-xl text-gray-900 dark:text-gray-300 leading-relaxed">
            Carefully crafted itineraries for deep cultural immersion and breathtaking adventure.
          </p>
        </div>
      </div>
      <div className="w-full pb-16">
        <TourCategories hideHeader={true} />
        
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
