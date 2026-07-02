import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans bg-[#1a1a1a]">
      <Navigation />
      <div className="w-full pt-24 min-h-screen flex flex-col justify-center">
        <ImageGallery />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
