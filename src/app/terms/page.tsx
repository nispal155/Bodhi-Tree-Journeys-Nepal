import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      <div className="h-24 w-full bg-white dark:bg-black transition-colors duration-300"></div>
      
      <div className="w-full bg-zinc-50 dark:bg-black py-16 flex-grow transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">Terms of Booking</h1>
          <div className="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 prose max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-4">Please read these terms carefully before booking a journey with us.</p>
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mt-6 mb-3">Booking and Payment</h3>
            <p className="mb-4">A deposit of 20% is required to secure your booking. The remaining balance must be paid 30 days prior to departure. We accept bank transfers and major credit cards.</p>
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mt-6 mb-3">Cancellations</h3>
            <p className="mb-4">Cancellations made more than 30 days before departure will receive a full refund minus a small administrative fee. Cancellations made within 30 days of departure are subject to partial or no refund depending on incurred costs.</p>
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mt-6 mb-3">Travel Insurance</h3>
            <p className="mb-4">Comprehensive travel insurance covering medical evacuation is mandatory for all trekking itineraries.</p>
          </div>
        </div>
      </div>

      <Footer />
      
    </main>
  );
}
