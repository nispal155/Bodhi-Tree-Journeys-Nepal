"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FounderProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a slight parallax effect while scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Container variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background ambient glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-400/20 dark:bg-orange-600/10 blur-3xl filter"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-red-400/20 dark:bg-red-600/10 blur-3xl filter"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 max-w-6xl relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-5/12 relative flex justify-center"
          >
            <motion.div 
              style={{ y: imageY }}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -2, 2, -1, 0],
                transition: { duration: 0.6 }
              }}
              className="relative w-72 h-72 lg:w-full lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 z-10 cursor-pointer"
            >
              <Image 
                src="/founder_pic.jpeg" 
                alt="Jagadish Adhikari - Founder" 
                fill 
                className="object-cover object-top transition-transform duration-700 hover:scale-110"
              />
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 dark:border-white/10 hidden md:flex items-center gap-3"
              >
                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white leading-tight">Certified</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Tourism Expert</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative spinning element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-full h-full border-2 border-dashed border-orange-300 dark:border-orange-800/50 rounded-[2.5rem] z-[0] hidden lg:block"
            ></motion.div>
          </motion.div>
          
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.p variants={itemVariants} className="text-sm font-bold tracking-widest text-orange-500 mb-3 uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
              Meet Our Founder
            </motion.p>
            
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Jagadish Adhikari
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a deep-rooted passion for the Himalayas and a lifetime of experience exploring Nepal's hidden trails, Jagadish founded <span className="font-semibold text-gray-900 dark:text-white">Bodhi Tree Journeys</span> to share the authentic spirit of his homeland with the world. 
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed border-l-4 border-orange-500 pl-6 italic">
              "My vision is to create travel experiences that are deeply moving and adventurous, strictly committed to uplifting local communities and preserving our sacred environments."
            </motion.p>
            
            {/* Glassmorphism Social Card with stagger animations inside */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 flex flex-col sm:flex-row gap-8 sm:items-center justify-between group cursor-pointer transition-all duration-300"
            >
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Connect with Jagadish</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reach out directly for personalized travel advice.</p>
              </div>
              
              <div className="flex gap-4">
                {[
                  { 
                    href: "https://www.facebook.com/share/18w7ipEZQP/?mibextid=wwXIfr", 
                    bgClass: "bg-blue-50 dark:bg-blue-950 hover:bg-blue-600 dark:hover:bg-blue-600",
                    textClass: "text-blue-600 dark:text-blue-400 hover:text-white",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> 
                  },
                  { 
                    href: "https://www.instagram.com/jagadishadhikari33?utm_source=qr", 
                    bgClass: "bg-pink-50 dark:bg-pink-950 hover:bg-pink-600 dark:hover:bg-pink-600",
                    textClass: "text-pink-600 dark:text-pink-400 hover:text-white",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> 
                  },
                  { 
                    href: "https://www.tiktok.com/@bodhetreeejourneys?_r=1&_t=ZS-97gpqgrA03R", 
                    bgClass: "bg-zinc-100 dark:bg-white/10 hover:bg-black dark:hover:bg-white",
                    textClass: "text-black dark:text-white hover:text-white dark:hover:text-black",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg> 
                  },
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md ${social.bgClass} ${social.textClass}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
                
                <motion.a 
                  href="tel:9851005874"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center shadow-md transition-colors hover:bg-green-600 dark:hover:bg-green-600 hover:text-white"
                >
                  <Phone size={20} />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex items-center gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-900 dark:text-white bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm inline-flex px-6 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-sm cursor-pointer"
              >
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400 animate-pulse">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-lg">+977 9851005874</span>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
