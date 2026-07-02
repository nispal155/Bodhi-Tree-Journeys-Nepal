"use client";

import useWeb3forms from "@web3forms/react";
import { useState } from "react";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submit } = useWeb3forms({
    access_key: "YOUR_ACCESS_KEY_HERE", // User needs to replace this
    settings: {
      subject: "New Inquiry from Bodhi Tree Journeys Nepal",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setIsSubmitting(false);
    },
    onError: (msg, data) => {
      setIsSubmitting(false);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submit(data);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Form & Info Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 mb-16">
          
          <div className="bg-red-700 text-white p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Our Kathmandu Office</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p className="text-red-50 text-base leading-relaxed">
                  <strong className="block text-white mb-1 font-semibold text-lg">Bodhi Tree Journeys Nepal</strong>
                  Near Boudhanath Stupa, Gate 3<br />
                  Kathmandu 44600, Nepal
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <a href="tel:+9779851005874" className="text-red-50 text-base font-medium hover:text-white transition-colors">+977 985-1005874</a>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-800/50 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-200"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <a href="mailto:namaste@bodhitreejourneys.com" className="text-red-50 text-base font-medium hover:text-white transition-colors flex-wrap break-all">namaste@bodhitreejourneys.com</a>
              </div>
            </div>
          </div>
          
          <div className="p-8 lg:p-12 lg:col-span-3">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. Our travel experts will get back to you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-red-600 font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="Tenzin Gyatso" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="namaste@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                  <select id="interest" name="interest" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Select a category</option>
                    <option value="Pilgrimage">Pilgrimage Tours</option>
                    <option value="Trekking">Himalayan Trekking</option>
                    <option value="Cultural">Cultural & Heritage</option>
                    <option value="Wellness">Wellness & Spiritual</option>
                    <option value="Custom">Custom / Luxury</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your travel aspirations..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white relative">
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
