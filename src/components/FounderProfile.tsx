import Image from "next/image";
import { Phone } from "lucide-react";

export default function FounderProfile() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 relative flex justify-center">
            <div className="relative w-64 h-64 md:w-full md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
              <Image 
                src="/avatar-2.jpg" 
                alt="Jagadish Adhikari - Founder" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-200 dark:border-orange-800 rounded-3xl z-[-1] hidden md:block"></div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-sm font-semibold tracking-widest text-orange-400 mb-2 uppercase">Meet Our Founder</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Jagadish Adhikari</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a deep-rooted passion for the Himalayas and a lifetime of experience exploring Nepal's hidden trails, Jagadish founded Bodhi Tree Journeys to share the authentic spirit of his homeland with the world. 
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              His vision is to create travel experiences that are not only deeply moving and adventurous but also strictly committed to uplifting local communities and preserving the natural sacred environments of Nepal.
            </p>
            
            <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Connect with Jagadish</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reach out directly for personalized travel advice.</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/18w7ipEZQP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/jagadishadhikari33?utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://www.tiktok.com/@bodhetreeejourneys?_r=1&_t=ZS-97gpqgrA03R" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <a href="tel:9851005874" className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Phone size={20} />
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-950 inline-flex px-4 py-2 rounded-lg border border-gray-100 dark:border-zinc-800">
              <Phone size={18} className="text-green-600 dark:text-green-400" />
              <span className="font-semibold">+977 9851005874</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
