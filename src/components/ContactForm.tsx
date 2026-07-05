"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState("Package");
  const [customPackage, setCustomPackage] = useState<string | null>(null);
  const [captchaString, setCaptchaString] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
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

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let str = '';
    for (let i = 0; i < 6; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaString(str);
    setCaptchaInput("");
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();

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
    if (captchaInput.trim().toLowerCase() !== captchaString.toLowerCase()) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setApiErrors({});
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const validationResult = await response.json();

      if (!response.ok || !validationResult.success) {
        if (validationResult.errors?.fieldErrors) {
          setApiErrors(validationResult.errors.fieldErrors);
        } else {
          setSubmitError(validationResult.message || "Validation failed");
        }
        return;
      }

      // Honeypot tripped - silently succeed
      if (!validationResult.access_key && validationResult.message === "Success") {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
        return;
      }

      // Submit directly to Web3Forms from the client to bypass Cloudflare Bot Fight Mode
      const web3FormsPayload = {
        ...data,
        access_key: "bd71c217-841e-4ddf-8681-81584484dca0", // Hardcoded Web3Forms public access key
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
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Area of Interest</label>
                    <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all">
                      {customPackage && (
                        <option value={customPackage}>Interested in: {customPackage}</option>
                      )}
                      <option value="Package">I'm Interested in a Package</option>
                      <option value="Pilgrimage">Pilgrimage Tours</option>
                      <option value="Trekking">Himalayan Trekking</option>
                      <option value="Cultural">Cultural & Heritage</option>
                      <option value="Wellness">Wellness & Spiritual</option>
                      <option value="Custom">Custom / Luxury</option>
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
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Security Check: Please type the characters below *
                  </label>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="relative bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg overflow-hidden select-none flex items-center justify-center min-w-[150px]">
                      {/* Noise filter background */}
                      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                      {/* Random squiggly lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 text-gray-500 dark:text-gray-400">
                        <path d="M 10 20 Q 40 50, 70 10 T 150 30" fill="transparent" stroke="currentColor" strokeWidth="2" />
                        <path d="M 10 40 Q 60 10, 100 40 T 150 10" fill="transparent" stroke="currentColor" strokeWidth="1.5" />
                      </svg>

                      {/* Captcha Text */}
                      <div className="flex gap-2 text-2xl font-bold tracking-widest text-gray-800 dark:text-gray-200 relative z-10" style={{ fontFamily: 'monospace' }}>
                        {captchaString.split('').map((char, i) => {
                          const rotation = (i % 2 === 0 ? 1 : -1) * (10 + (i * 2));
                          const yOffset = i % 2 === 0 ? -2 : 2;
                          return (
                            <span key={i} className="inline-block drop-shadow-sm" style={{ transform: `rotate(${rotation}deg) translateY(${yOffset}px)` }}>
                              {char}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <button type="button" onClick={generateCaptcha} className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline flex items-center gap-1 font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                      Refresh CAPTCHA
                    </button>
                  </div>

                  <input
                    type="text"
                    id="captcha"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      setCaptchaError(false);
                    }}
                    required
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg border ${captchaError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-slate-600 focus:ring-red-600'} bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                    placeholder="Type the characters exactly as shown"
                  />
                  {captchaError && <p className="text-red-500 text-sm mt-2 font-medium">Incorrect characters. Please try again.</p>}
                </div>

                {submitError && <p className="text-red-500 text-sm font-medium text-center">{submitError}</p>}
                {Object.keys(apiErrors).length > 0 && !submitError && (
                  <p className="text-red-500 text-sm font-medium text-center">Please fix the validation errors above before submitting.</p>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
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
