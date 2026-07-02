import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import FounderProfile from "@/components/FounderProfile";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      
      {/* Unified Header Section */}
      <div className="w-full bg-white pt-32 pb-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-900 leading-relaxed">
            Learn more about the team and the passion behind Bodhi Tree Journeys Nepal.
          </p>
        </div>
      </div>

      <AboutUs />
      <FounderProfile />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
