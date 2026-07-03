"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "How should I dress when visiting monasteries?",
      answer: "Modest dress is strictly required. Shoulders and knees must be covered for both men and women. We recommend loose, comfortable clothing. Removing shoes before entering shrines is mandatory."
    },
    {
      question: "Do I need prior trekking experience?",
      answer: "It depends on the specific trek. For our cultural tours and lower-elevation treks, no prior experience is needed. For advanced base camp treks, previous hiking experience and good cardiovascular fitness are highly recommended."
    },
    {
      question: "What is the best time of year to visit?",
      answer: "The best times to visit Nepal are during the spring (March to May) and autumn (September to November) seasons when the weather is clear and temperatures are moderate. These periods offer the best mountain views."
    },
    {
      question: "How do you handle dietary restrictions?",
      answer: "We accommodate all dietary requirements including vegetarian, vegan, gluten-free, and specific allergies. Please inform us during the booking process so we can make proper arrangements with our partner lodges and restaurants."
    },
    {
      question: "Is altitude sickness a concern?",
      answer: "Altitude sickness can affect anyone above 2,500 meters. Our itineraries are specifically designed with proper acclimatization days built-in. Our guides are trained in wilderness first aid and always carry oxygen and pulse oximeters on high-altitude treks."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Answers to help you prepare for a mindful and culturally respectful journey.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-red-200 dark:border-red-800 shadow-md bg-white dark:bg-zinc-950' : 'border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-red-700 dark:text-red-400' : 'text-gray-900 dark:text-gray-100'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div id="cultural-guidance" className="mt-12 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 rounded-xl p-6 md:p-8 scroll-mt-24">
          <h3 className="flex items-center gap-2 font-bold text-red-800 dark:text-red-400 mb-4 text-xl">
            <span className="text-2xl">♥</span> Cultural Respect Guidance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <ul className="space-y-3 text-red-900/85 dark:text-red-200 list-disc list-outside ml-5">
              <li>Always walk clockwise around stupas, prayer wheels, and mani walls.</li>
              <li>Ask permission before photographing local people, monks, or inside temples.</li>
              <li>Do not point the soles of your feet at shrines, people, or religious objects.</li>
              <li>Use both hands when giving or receiving items to show respect.</li>
            </ul>
            <ul className="space-y-3 text-red-900/85 dark:text-red-200 list-disc list-outside ml-5">
              <li>Dress modestly (cover shoulders and knees), especially in sacred areas.</li>
              <li>Remove your shoes and hats before entering monasteries, temples, or homes.</li>
              <li>Do not touch people on the head, as it is considered the most sacred part of the body.</li>
              <li>Avoid public displays of affection, which are frowned upon in traditional areas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
