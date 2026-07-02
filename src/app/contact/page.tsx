import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Navigation />
      {/* Unified Header Section */}
      <div className="w-full bg-white pt-32 pb-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-900 leading-relaxed">
            Get in touch with our team to start planning your perfect Himalayan journey.
          </p>
        </div>
      </div>
      <div className="w-full">
        <ContactForm />
        <FAQAccordion />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
