import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function TravelPrepPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      {/* Unified Header Section */}
      <div className="w-full bg-white dark:bg-black pt-32 pb-16 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Travel Prep & Gear</h1>
          <p className="text-xl text-gray-900 dark:text-gray-300 leading-relaxed mb-10">
            Proper preparation is key to an enjoyable experience in the Himalayas. Here is a general guide to what you should bring.
          </p>
          <div className="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 text-left">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-4">Essential Gear</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-600">
              <li>Sturdy, broken-in trekking boots</li>
              <li>Layered clothing (thermal base layers, fleece, and a waterproof/windproof outer shell)</li>
              <li>A high-quality sleeping bag (if trekking)</li>
              <li>Reusable water bottle and water purification tablets</li>
              <li>Personal first-aid kit and any required medications</li>
              <li>Sun protection (sunglasses, sunscreen, wide-brimmed hat)</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      
    </main>
  );
}
