import { Camera, Map, Car, Plane, Ticket, FileText, Globe, Building, Users, Compass, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ValueAddedServices() {
  const addons = [
    { title: "Photography & Festival Tours", icon: Camera },
    { title: "Day Sightseeing", icon: Map },
    { title: "Private Vehicle Service", icon: Car },
    { title: "Airport Transfers & Meet-and-Greet", icon: Plane },
    { title: "Helicopter & Scenic Flights", icon: Ticket },
    { title: "Permit & Documentation Assistance", icon: FileText },
    { title: "Visa & Travel Planning Support", icon: Globe },
    { title: "Flight & Hotel Booking", icon: Building },
    { title: "Licensed Guide & Porter Arrangement", icon: Users },
    { title: "Trekking Gear Rental", icon: Compass },
    { title: "Group & Special Event Organization", icon: Calendar }
  ];

  return (
    <section id="services" className="w-full py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Additional Offerings</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Comprehensive travel support and specialized services to make your journey through Nepal seamless and unforgettable.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
          {addons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-red-200 dark:hover:border-red-500/50 cursor-pointer">
                <div className="p-3 bg-red-50 dark:bg-red-950 text-red-500 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm transition-colors duration-300 group-hover:text-red-600">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
