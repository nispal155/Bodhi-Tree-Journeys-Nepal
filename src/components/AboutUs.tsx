import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const highlights = [
    { title: "Licensed Guides", desc: "Led by knowledgeable locals who provide authentic insights." },
    { title: "Small Groups", desc: "Intimate and mindful travel experiences." },
    { title: "Community Support", desc: "A portion of every booking gives back to local projects." },
    { title: "Safety Assured", desc: "Robust emergency protocols for peace of mind." },
  ];

  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7zzFrk8ZWo5CNviWRAd23eY5qyjhE7A_sjIG7wl21k57ydqPwZw33vk&s=10"
                alt="Beautiful Waterfall in Nepal"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-orange-200 dark:border-orange-800 rounded-2xl z-0 hidden md:block"></div>

            {/* Stats Card Overlay */}
            <div className="absolute -right-4 md:-right-10 top-1/4 bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-xl z-20 border border-gray-100 dark:border-zinc-800 hidden sm:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider leading-tight">Years<br />Experience</div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-red-600">10k+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider leading-tight">Happy<br />Travelers</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-red-600">24</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider leading-tight">Community<br />Projects</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Experience the authentic spirit of Nepal.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Bodhi Tree Journeys Nepal was founded with a single purpose: to connect travelers with the profound spirituality, breathtaking landscapes, and vibrant cultures of the Himalayas in a way that respects and uplifts local communities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We go beyond standard tourism. We offer a bridge to ancient traditions, guided by locals who call these mountains home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="/gallery" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors w-fit shadow-md hover:shadow-lg">
                Explore Our Journeys
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
