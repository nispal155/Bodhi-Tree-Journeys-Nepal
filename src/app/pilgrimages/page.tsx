import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourList from "@/components/TourList";



export default function PilgrimagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navigation />
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">Buddhist Pilgrimages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Sacred journeys to ancient holy sites across the Himalayas.
          </p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black py-16">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience deep spiritual immersion at the birthplace of Lord Buddha and other revered monastic sites.
          </p>
        </div>
        <TourList category="Pilgrimage" />
        
      </div>
      <Footer />
      
    </main>
  );
}
