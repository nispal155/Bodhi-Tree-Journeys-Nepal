"use client";

import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const contactSchema = z.object({
  name: z.string()
    .min(2, "Your name should be at least 2 characters long.")
    .max(100, "Please use a shorter name (max 100 characters).")
    .regex(/^[a-zA-Z\s\.\-']{2,}$/, "Please use only letters, spaces, or hyphens in your name."),
  
  email: z.string()
    .min(1, "We need your email to reply to your inquiry.")
    .email("Please provide a valid email address (e.g., traveler@example.com)."),
    
  phone: z.string().optional(),
  
  interest: z.string()
    .min(1, "Please select what you're most interested in."),
    
  additionalService: z.string().optional(),
  
  fromDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "Oops! Your travel start date cannot be in the past." }),
  
  toDate: z.string().optional().refine((date) => {
    if (!date) return true;
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: "Oops! Your travel end date cannot be in the past." }),
  
  message: z.string()
    .min(10, "Please provide a bit more detail (at least 10 characters).")
    .max(5000, "Your message is a bit too long (maximum 5000 characters)."),
});

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState("");
  const [customPackage, setCustomPackage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [apiErrors, setApiErrors] = useState<Record<string, string[]>>({});
  const [submitError, setSubmitError] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const additionalServicesList = [
    "Photography & Festival",
    "Day Sightseeing",
    "Private Vehicle",
    "Airport Transfers",
    "Helicopter Flights",
    "Permits & Docs",
    "Visa & Travel Support",
    "Flight & Hotel Booking",
    "Guide & Porter",
    "Gear Rental",
    "Event Organization"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pkg = params.get("package");
      if (pkg) {
        setCustomPackage(pkg);
        setInterest(pkg);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setApiErrors({});
    setSubmitError("");

    // Honeypot check
    if (data.botcheck) {
      // Silently succeed for bots
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setSelectedServices([]);
      setIsSubmitting(false);
      return;
    }

    // Client-side Zod validation
    const validationResult = contactSchema.safeParse(data);
    
    if (!validationResult.success) {
      setApiErrors(validationResult.error.flatten().fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit directly to Web3Forms from the client
      const web3FormsPayload = {
        ...data,
        "h-captcha-response": captchaToken,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
        subject: "New Inquiry from Bodhi Tree Journeys Nepal",
      };

      const w3fResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormsPayload),
      });

      const w3fResult = await w3fResponse.json();

      if (w3fResponse.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
      } else {
        setSubmitError(w3fResult.message || "Failed to submit form to Web3Forms");
      }
    } catch (error) {
      console.error("An error occurred during submission", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Form & Info Card */}
        <div className="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] overflow-hidden grid grid-cols-1 lg:grid-cols-5 mb-16">

          <div className="bg-red-700 text-white p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Our Kathmandu Office</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p className="text-red-50 text-base leading-relaxed">
                  <strong className="block text-white mb-1 font-semibold text-lg">Bodhi Tree Journeys Nepal</strong>
                  Boharatar-16, Kathmandu, Nepal<br />
                  Kathmandu 44600, Nepal
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <a href="tel:+9779713883831" className="text-red-50 text-base font-medium hover:text-white transition-colors">+977 971-3883831</a>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <a href="mailto:contact@bodhitreejourneysnepal.com" className="text-red-50 text-base font-medium hover:text-white transition-colors flex-wrap break-all">contact@bodhitreejourneysnepal.com</a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-red-600/50">
              <h4 className="text-lg font-bold mb-2 text-white">Direct Founder Connection</h4>
              <p className="text-sm text-red-100 leading-relaxed mb-4">
                <strong>Jagadish Adhikari</strong><br />
                Connect directly for personalized guidance and custom travel plans.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/18w7ipEZQP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-red-800/80 hover:bg-white hover:text-red-750 transition-colors flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/jagadishadhikari33?utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-red-800/80 hover:bg-white hover:text-red-750 transition-colors flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://www.tiktok.com/@bodhetreeejourneys?_r=1&_t=ZS-97gpqgrA03R" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-red-800/80 hover:bg-white hover:text-red-750 transition-colors flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <a href="tel:9713883831" className="w-9 h-9 rounded-full bg-red-800/80 hover:bg-white hover:text-red-750 transition-colors flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <button 
                  type="button"
                  onClick={() => alert('WeChat ID: Lingyunnepal\n\nYou can also click the floating WeChat icon at the bottom right corner of the screen to scan our QR code!')}
                  className="w-9 h-9 rounded-full bg-red-800/80 hover:bg-white hover:text-red-750 transition-colors flex items-center justify-center text-white"
                  title="WeChat ID: Lingyunnepal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" fill="currentColor">
                    <path d="M682.667 384c-34.133 0-64 8.533-89.6 17.067a360.533 360.533 0 00-209.067-187.734c-12.8-4.266-29.867-8.533-46.933-8.533-149.334 0-277.334 115.2-277.334 256s119.467 243.2 268.8 256h25.6l-29.866 59.733a18.773 18.773 0 0021.333 25.6l81.066-29.866h4.267a312.32 312.32 0 0055.467 4.266 211.2 211.2 0 00-4.267-34.133c0-149.333 132.267-273.067 298.667-273.067h8.533v-17.066c-17.066-38.4-55.466-68.267-106.666-68.267zM320 384a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267zm213.333 0a34.133 34.133 0 110-68.267 34.133 34.133 0 010 68.267z"/><path d="M938.667 554.667c0-115.2-115.2-213.334-256-213.334s-256 98.134-256 213.334 115.2 213.333 256 213.333a277.333 277.333 0 0046.933-4.267l64 25.6a18.773 18.773 0 0021.334-21.333l-21.334-46.933a233.813 233.813 0 00145.067-166.4zM640 533.333a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266zm170.667 0a34.133 34.133 0 110-68.266 34.133 34.133 0 010 68.266z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 lg:col-span-3">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. Our travel experts will get back to you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-red-600 font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="Tenzin Gyatso" />
                    {apiErrors.name && <p className="text-red-500 text-xs mt-1">{apiErrors.name[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="contact@example.com" />
                    {apiErrors.email && <p className="text-red-500 text-xs mt-1">{apiErrors.email[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="+1 234 567 8900" />
                    {apiErrors.phone && <p className="text-red-500 text-xs mt-1">{apiErrors.phone[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Area of Interest *</label>
                    <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all">
                      <option value="" disabled>Select a Tour Package</option>
                      {customPackage && (
                        <option value={customPackage}>Interested in: {customPackage}</option>
                      )}
                      <option value="Regular Tour Program">🇳🇵REGULAR TOUR PROGRAM</option>
                      <option value="Wellness and Spiritual Tours">🕉 Wellness and Spiritual Tours</option>
                      <option value="Pilgrimage Tours">☯️ Pilgrimage Tours</option>
                      <option value="Himalayan Trekking">🏔Himalayan Trekking</option>
                      <option value="Educational Tour Programs">📜Educational Tour Programs</option>
                      <option value="Nature and Wildlife">🎒Nature and Wildlife</option>
                      <option value="Custom Private & Luxury Journeys">🏨 Custom Private & Luxury Journeys</option>
                      <option value="Cultural & Heritage Journeys">🌋Cultural & Heritage Journeys</option>
                      <option value="Additional Offerings">♾️ Additional Offerings</option>
                    </select>
                    {apiErrors.interest && <p className="text-red-500 text-xs mt-1">{apiErrors.interest[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Travel Dates (From)</label>
                    <input type="date" id="fromDate" name="fromDate" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
                    {apiErrors.fromDate && <p className="text-red-500 text-xs mt-1">{apiErrors.fromDate[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Travel Dates (To)</label>
                    <input type="date" id="toDate" name="toDate" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
                    {apiErrors.toDate && <p className="text-red-500 text-xs mt-1">{apiErrors.toDate[0]}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Additional Services (Select multiple)</label>
                  <input type="hidden" name="additionalService" value={selectedServices.join(", ")} />
                  <div className="flex flex-wrap gap-2">
                    {additionalServicesList.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${isSelected
                            ? 'bg-red-600 border-red-600 text-white shadow-md'
                            : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-red-400 hover:text-red-500'
                            }`}
                        >
                          {isSelected && (
                            <span className="inline-block mr-1.5 font-bold">✓</span>
                          )}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your travel aspirations..."></textarea>
                  {apiErrors.message && <p className="text-red-500 text-xs mt-1">{apiErrors.message[0]}</p>}
                </div>

                {/* Honeypot field for spam prevention */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-200 dark:border-zinc-700">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Security Check *
                  </label>
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError(false);
                    }}
                  />
                  {captchaError && <p className="text-red-500 text-sm mt-2 font-medium">Please complete the CAPTCHA.</p>}
                </div>

                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400 p-4 rounded-lg flex items-center gap-3 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p>{submitError}</p>
                  </div>
                )}
                {Object.keys(apiErrors).length > 0 && !submitError && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 text-amber-700 dark:text-amber-400 p-4 rounded-lg flex items-start gap-3 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <p><strong>Just a quick check!</strong> It looks like a few details need your attention. Please review the highlighted fields above so we can send your message successfully.</p>
                  </div>
                )}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes buttonGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  @keyframes flyAway {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    40% { transform: translate(15px, -15px) scale(1.1); opacity: 0; }
                    41% { transform: translate(-15px, 15px) scale(0.9); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                  }
                  .anim-gradient {
                    background-size: 200% 200%;
                    animation: buttonGradient 2s ease infinite;
                  }
                  .anim-fly {
                    animation: flyAway 2s ease-in-out infinite;
                  }
                `}} />
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className={`w-full font-bold py-4 rounded-lg transition-all duration-300 relative overflow-hidden flex justify-center items-center group ${
                    isSubmitting 
                      ? "bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 anim-gradient shadow-[0_0_20px_rgba(249,115,22,0.6)] text-white scale-[0.98] disabled:opacity-100" 
                      : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/30 disabled:opacity-70"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="tracking-widest animate-pulse font-bold">SENDING...</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="anim-fly text-white">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Submit Inquiry</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.5531751443488!2d85.29057130926905!3d27.736936356355255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900482d0fad%3A0x4c15a7edd9515df!2sBodhi%20Tree%20Journeys%20Nepal!5e0!3m2!1sen!2snp!4v1782969256436!5m2!1sen!2snp"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
