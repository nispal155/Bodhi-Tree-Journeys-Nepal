import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      <div className="h-24 w-full bg-white"></div>
      
      <div className="w-full bg-zinc-50 py-16 flex-grow">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white dark:text-white mb-8 text-center">Terms of Booking</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 prose max-w-none text-gray-600">
            <p className="mb-4">Please read these terms carefully before booking a journey with us.</p>
            <h3 className="font-bold text-gray-900 dark:text-white dark:text-white text-xl mt-6 mb-3">Booking and Payment</h3>
            <p className="mb-4">A deposit of 20% is required to secure your booking. The remaining balance must be paid 30 days prior to departure. We accept bank transfers and major credit cards.</p>
            <h3 className="font-bold text-gray-900 dark:text-white dark:text-white text-xl mt-6 mb-3">Cancellations</h3>
            <p className="mb-4">Cancellations made more than 30 days before departure will receive a full refund minus a small administrative fee. Cancellations made within 30 days of departure are subject to partial or no refund depending on incurred costs.</p>
            <h3 className="font-bold text-gray-900 dark:text-white dark:text-white text-xl mt-6 mb-3">Travel Insurance</h3>
            <p className="mb-4">Comprehensive travel insurance covering medical evacuation is mandatory for all trekking itineraries.</p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
