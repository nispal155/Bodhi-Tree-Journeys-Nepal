import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TourCategories from "@/components/TourCategories";
import ValueAddedServices from "@/components/ValueAddedServices";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import NoticeModal from "@/components/NoticeModal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <NoticeModal />
      <Navigation />
      <Hero />
      <TourCategories limit={3} showViewAll={true} />
      <ValueAddedServices />
      <Testimonials />
      <Footer />
    </main>
  );
}
