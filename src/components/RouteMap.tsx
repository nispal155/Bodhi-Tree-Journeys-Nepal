"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon issue with Next.js/Webpack
import L from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

interface RouteMapProps {
  center: [number, number];
  zoom: number;
  routeCoordinates?: [number, number][];
  markers?: { position: [number, number]; title: string; desc: string }[];
}

export default function RouteMap({ center, zoom, routeCoordinates, markers }: RouteMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Fix default marker icon issue when running in client
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-96 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl" />;

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 z-0">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {routeCoordinates && routeCoordinates.length > 0 && (
          <Polyline positions={routeCoordinates} color="#f97316" weight={4} dashArray="10, 10" />
        )}

        {markers?.map((marker, idx) => (
          <Marker key={idx} position={marker.position}>
            <Popup>
              <div className="font-sans">
                <h4 className="font-bold text-orange-600 m-0">{marker.title}</h4>
                <p className="text-sm m-0 mt-1">{marker.desc}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
