import Image from "next/image";
import Link from "next/link";

interface TourListProps {
  category: string;
}

export default function TourList({ category }: TourListProps) {
  const allTours = [
    {
      title: "Pilgrimage to Lumbini",
      category: "Pilgrimage",
      image: "/placeholder-tour-1.jpg",
      desc: "Follow the footsteps of Buddha in this sacred journey to his birthplace, exploring ancient monasteries and peaceful gardens."
    },
    {
      title: "Mustang Monastery Circuit",
      category: "Pilgrimage",
      image: "/placeholder-tour-4.jpg",
      desc: "Discover the hidden kingdom of Lo, visiting remote cliff-side monasteries and experiencing preserved Tibetan Buddhist culture."
    },
    {
      title: "Muktinath Sacred Journey",
      category: "Pilgrimage",
      image: "/placeholder-tour-2.jpg",
      desc: "A spiritual journey to the sacred temple of Muktinath, revered by both Hindus and Buddhists."
    },
    {
      title: "Annapurna Base Camp Classic",
      category: "Trek",
      image: "/placeholder-tour-3.jpg",
      desc: "A breathtaking trek through diverse landscapes, leading you to the heart of the Himalayas surrounded by towering peaks."
    },
    {
      title: "Everest Panorama Trek",
      category: "Trek",
      image: "/placeholder-tour-5.jpg",
      desc: "A shorter alternative to base camp, offering stunning views of Everest and interactions with local Sherpa communities."
    },
    {
      title: "Langtang Valley Trek",
      category: "Trek",
      image: "/placeholder-tour-7.jpg",
      desc: "Experience the unique culture and beautiful glacial valleys just a short drive from Kathmandu."
    },
    {
      title: "Boudhanath & Kathmandu Temple",
      category: "Cultural",
      image: "/placeholder-tour-2.jpg",
      desc: "Immerse yourself in the vibrant spiritual life of Kathmandu, visiting UNESCO heritage sites and experiencing local rituals."
    },
    {
      title: "Patan & Bhaktapur Artisan Tour",
      category: "Cultural",
      image: "/placeholder-tour-6.jpg",
      desc: "Explore the ancient cities known for their intricate wood carvings, metalwork, and deep-rooted traditional artistry."
    },
    {
      title: "Pokhara Valley Exploration",
      category: "Cultural",
      image: "/placeholder-tour-1.jpg",
      desc: "Discover the peaceful lakeside city of Pokhara, visit the World Peace Pagoda, and explore local museums."
    }
  ];

  const filteredTours = allTours.filter(tour => tour.category === category);

  return (
    <div className="container mx-auto px-6 pb-24 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {filteredTours.map((tour, i) => (
          <div key={i} className="group bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.7)] border border-white/50 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,100,0,0.4)] hover:border-orange-200 dark:hover:border-orange-500/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {tour.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-xl text-red-600 mb-2 transition-colors duration-300 group-hover:text-orange-500">{tour.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{tour.desc}</p>
              
              <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-zinc-800">
                <Link href="/contact" className="px-5 py-2 bg-orange-500 text-white font-medium rounded-full text-sm transition-all duration-300 group-hover:bg-orange-600 group-hover:shadow-md group-hover:scale-105">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTours.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 py-12">More tours coming soon!</p>
      )}
    </div>
  );
}
