"use client";

import { useState } from "react";

export default function Footer() {
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  return (
    <footer className="w-full bg-gradient-to-b from-red-700 to-red-900 dark:from-black dark:to-zinc-950 text-white pt-20 pb-10 transition-colors duration-300 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-white">Bodhi Tree Journeys Nepal</h2>
            <p className="text-red-100 leading-relaxed mb-6">
              Dedicated to providing authentic, respectful, and safe journeys through the sacred landscapes and ancient cultures of the Himalayas.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              <a href="https://www.facebook.com/share/18w7ipEZQP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-white hover:text-red-700 transition-colors cursor-pointer text-white">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/jagadishadhikari33?utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-white hover:text-red-700 transition-colors cursor-pointer text-white">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@bodhetreeejourneys?_r=1&_t=ZS-97gpqgrA03R" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-white hover:text-red-700 transition-colors cursor-pointer text-white">
                <span className="sr-only">TikTok</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <button 
                onClick={() => setShowWeChatQR(true)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                title="WeChat"
              >
                <span className="sr-only">WeChat</span>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4-9nWCc0hJOQZ2XSkXUtroA1ebd59gLNEJmTGm2XU0yx5d_23o6llik&s=10" 
                  alt="WeChat" 
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-red-500/50 pb-2 inline-block">Journeys</h3>
            <ul className="space-y-4 text-red-100">
              <li><a href="/pilgrimages" className="hover:text-white transition-colors">Pilgrimage Tours</a></li>
              <li><a href="/treks" className="hover:text-white transition-colors">Himalayan Treks</a></li>
              <li><a href="/cultural-tours" className="hover:text-white transition-colors">Cultural Immersions</a></li>
              <li><a href="/monastery-retreats" className="hover:text-white transition-colors">Monastery Retreats</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Custom Itineraries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-red-500/50 pb-2 inline-block">Information</h3>
            <ul className="space-y-4 text-red-100">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact#cultural-guidance" className="hover:text-white transition-colors">Cultural Guidelines</a></li>
              <li><a href="/travel-prep" className="hover:text-white transition-colors">Travel Prep & Gear</a></li>
              <li><a href="/contact#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-red-500/50 pb-2 inline-block">Get In Touch</h3>
            <ul className="space-y-4 text-red-100">
              <li className="flex gap-3">
                <span className="text-yellow-300">📍</span>
                <span>Boharatar-16, Kathmandu, Nepal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-300">📞</span>
                <span>+977-9713883831</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-300">✉️</span>
                <span>contact@bodhitreejourneysnepal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-800 flex flex-col md:flex-row justify-between items-center text-sm text-red-200 gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Bodhi Tree Journeys Nepal. All rights reserved.</p>
            <p>Managed by <a href="https://drive.google.com/file/d/1d7C7H8RELGR9gniBtrgM2aBX6nCUikg2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colors font-medium">Astra Technology Horizon Pvt. Ltd</a></p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Booking</a>
          </div>
        </div>
      </div>

      {/* WeChat QR Modal */}
      {showWeChatQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowWeChatQR(false)}>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-2xl max-w-sm w-full transform transition-all" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4-9nWCc0hJOQZ2XSkXUtroA1ebd59gLNEJmTGm2XU0yx5d_23o6llik&s=10" 
                  alt="WeChat" 
                  className="w-6 h-6 rounded-md"
                />
                WeChat Connect
              </h3>
              <button onClick={() => setShowWeChatQR(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-4 flex flex-col items-center">
              <img src="/We-Chat.jpeg" alt="WeChat QR Code" className="w-full max-w-[250px] h-auto rounded-lg shadow-sm mb-4" />
              <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                Scan to chat directly with<br />
                <strong className="text-red-600 dark:text-red-400">Jagadish Adhikari</strong>
              </p>
              <div className="mt-4 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 w-full text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">WeChat ID</span>
                <span className="font-bold text-gray-900 dark:text-white select-all">Lingyunnepal</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
