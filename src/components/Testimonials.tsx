import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      country: "UK",
      quote: "The monastery circuit was transformative. Our guide Tashi was incredibly knowledgeable and shared his culture with such warmth and respect. It felt less like a tour and more like an initiation.",
      avatar: "/avatar-1.jpg"
    },
    {
      name: "David Chen",
      country: "SINGAPORE",
      quote: "Impeccable organization from start to finish. The Annapurna trek was challenging, but the constant support and care from the team made it the achievement of a lifetime. Highly recommend!",
      avatar: "/avatar-2.jpg"
    },
    {
      name: "Elena Rossi",
      country: "ITALY",
      quote: "Visiting Lumbini with Bodhi Tree Journeys was deeply moving. The small group size allowed for quiet reflection, and the added meditation sessions in the evenings were perfectly arranged.",
      avatar: "/avatar-3.jpg"
    }
  ];

  return (
    <section className="w-full py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-orange-400 mb-4 uppercase text-center">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Stories from the Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-100 cursor-pointer">
              <div className="flex gap-1 mb-6 text-orange-400 transition-transform duration-300 group-hover:scale-110 group-hover:origin-left">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed h-32 transition-colors duration-300 group-hover:text-gray-900">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative transition-transform duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-orange-200">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">{testimonial.name}</h4>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
