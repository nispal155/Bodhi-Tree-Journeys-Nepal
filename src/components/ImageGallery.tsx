import Image from "next/image";
import { Heart } from "lucide-react";
import { tourPackages } from "@/data/packages";

export default function ImageGallery() {
  const allUsedImages = new Set<string>();
  tourPackages.forEach(pkg => {
    if (pkg.image) allUsedImages.add(pkg.image);
    if (pkg.images) pkg.images.forEach(img => allUsedImages.add(img));
  });

  const images = [];
  for (let i = 1; i <= 55; i++) {
    const src = `/gallery/gallery-${i}.jpg`;
    if (!allUsedImages.has(src)) {
      images.push({
        src,
        alt: `Nepal travel gallery image ${i}`,
      });
    }
  }

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
