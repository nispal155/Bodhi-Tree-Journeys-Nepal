import Image from "next/image";
import { Heart } from "lucide-react";

export default function ImageGallery() {
  const images = [
    { src: "/placeholder-tour-1.jpg", alt: "Gallery Image 1" },
    { src: "/placeholder-tour-2.jpg", alt: "Gallery Image 2" },
    { src: "/placeholder-tour-3.jpg", alt: "Gallery Image 3" },
    { src: "/placeholder-tour-4.jpg", alt: "Gallery Image 4" },
    { src: "/placeholder-tour-5.jpg", alt: "Gallery Image 5" },
    { src: "/placeholder-tour-6.jpg", alt: "Gallery Image 6" },
    { src: "/placeholder-tour-7.jpg", alt: "Gallery Image 7" },
    { src: "/hero-placeholder.jpg", alt: "Gallery Image 8" },
    { src: "/placeholder-tour-1.jpg", alt: "Gallery Image 9" },
    { src: "/placeholder-tour-2.jpg", alt: "Gallery Image 10" },
    { src: "/placeholder-tour-3.jpg", alt: "Gallery Image 11" },
    { src: "/placeholder-tour-4.jpg", alt: "Gallery Image 12" },
  ];

  return (
    <section className="w-full py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-gray-600 w-12" />
          <Heart className="w-4 h-4 text-orange-400" />
          <div className="h-px bg-gray-600 w-12" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Glimpses of the Sacred</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Moments of stillness, majestic landscapes, and vibrant festivals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-gray-800">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
