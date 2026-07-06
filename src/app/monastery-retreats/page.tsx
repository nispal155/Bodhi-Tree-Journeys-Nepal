import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourList from "@/components/TourList";



export default function MonasteryRetreatsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      {/* Unified Header Section */}
      <div className="w-full bg-white dark:bg-black pt-32 pb-16 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white dark:text-white mb-6">Monastery Retreats</h1>
          <p className="text-xl text-gray-900 dark:text-gray-300 leading-relaxed">
            Rejuvenate your mind and body with deeply immersive yoga and meditation retreats in ancient monasteries.
          </p>
        </div>
      </div>
      <div className="w-full pb-16 pt-8">
        <TourList category="Wellness" />
      </div>
      <Footer />
      
    </main>
  );
}
