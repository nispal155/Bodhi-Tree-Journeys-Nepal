import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Map, Calendar, Sun, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";

import MapRouteWrapper from "@/components/MapRouteWrapper";
import WeatherWidget from "@/components/WeatherWidget";
import { tourPackages } from "@/data/packages";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ItineraryAccordion from "@/components/ItineraryAccordion";

export function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const tour = tourPackages.find((p) => p.slug === resolvedParams.slug);

  if (!tour) return {};

  return {
    title: `${tour.title} | Bodhi Tree Journeys Nepal`,
    description: tour.overview,
    openGraph: {
      title: `${tour.title} | Bodhi Tree Journeys Nepal`,
      description: tour.overview,
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
  };
}

export default async function PackageDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = tourPackages.find((p) => p.slug === resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.overview,
    "image": `https://bodhitreejourneysnepal.com${tour.image}`,
    "provider": {
      "@type": "TravelAgency",
      "name": "Bodhi Tree Journeys Nepal"
    },
    "itinerary": tour.itinerary.map(day => ({
      "@type": "City",
      "name": day.title
    }))
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans bg-white dark:bg-black transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col items-start gap-4 mb-4">
              <BackButton />
              <div className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                {tour.tourType.split('/')[0].trim()}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {tour.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full container mx-auto px-6 max-w-5xl -mt-8 relative z-10 pb-24">
        {/* Quick Facts Grid */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-xl text-orange-600 dark:text-orange-400">
              <Clock size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Duration</div>
              <div className="font-bold text-gray-900 dark:text-white">{tour.duration.split('–')[0]}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-blue-600 dark:text-blue-400">
              <Map size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Route</div>
              <div className="font-bold text-gray-900 dark:text-white line-clamp-1" title={tour.route}>{tour.route}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-xl text-green-600 dark:text-green-400">
              <Sun size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Best Season</div>
              <div className="font-bold text-gray-900 dark:text-white line-clamp-1" title={tour.bestSeason}>{tour.bestSeason}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-xl text-purple-600 dark:text-purple-400">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Tour Type</div>
              <div className="font-bold text-gray-900 dark:text-white line-clamp-1" title={tour.tourType}>{tour.tourType}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Overview & Itinerary */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {tour.overview}
              </p>
              
              <WeatherWidget routeString={tour.route} />

              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/30">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-gray-700 dark:text-gray-200">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Route Map</h2>
              <MapRouteWrapper routeString={tour.route} />
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Day by Day Itinerary</h2>
              <ItineraryAccordion itinerary={tour.itinerary} />
            </section>
          </div>

          {/* Sidebar: Inclusions, Exclusions & CTA */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-zinc-800 sticky top-32">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Package Details</h3>
              
              <div className="mb-8">
                <h4 className="font-bold text-green-600 dark:text-green-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} /> What's Included
                </h4>
                <ul className="space-y-3">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                  <XCircle size={20} /> What's Excluded
                </h4>
                <ul className="space-y-3">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={`/contact?package=${encodeURIComponent(tour.title)}`} 
                className="block w-full py-4 px-6 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl"
              >
                Book This Tour
              </Link>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                Need customizations? Let us know in your inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </main>
  );
}
