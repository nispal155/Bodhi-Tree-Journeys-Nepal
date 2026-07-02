import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      <div className="h-24 w-full bg-white"></div>
      
      <div className="w-full bg-zinc-50 py-16 flex-grow">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose max-w-none text-gray-600">
            <p className="mb-4">At Bodhi Tree Journeys Nepal, your privacy is of our utmost concern. This policy outlines how we handle your personal information.</p>
            <h3 className="font-bold text-gray-900 text-xl mt-6 mb-3">Information Collection</h3>
            <p className="mb-4">We collect information that you voluntarily provide to us when you book a tour, fill out a contact form, or subscribe to our newsletter. This includes your name, email address, phone number, and passport details (if required for permits).</p>
            <h3 className="font-bold text-gray-900 text-xl mt-6 mb-3">Use of Information</h3>
            <p className="mb-4">Your information is used strictly to process bookings, arrange necessary travel permits, and communicate with you regarding your trip. We do not sell or share your information with third-party marketers.</p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
