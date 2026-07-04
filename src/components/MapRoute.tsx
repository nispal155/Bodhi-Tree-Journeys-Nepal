"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix for default Leaflet marker icons in Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// City to Coordinates mapping dictionary
const LOCATION_DICT: Record<string, [number, number]> = {
  "Kathmandu": [27.7172, 85.3240],
  "Pokhara": [28.2096, 83.9856],
  "Chitwan": [27.5291, 84.4552],
  "Lumbini": [27.4840, 83.2761],
  "Nagarkot": [27.7175, 85.5222],
  "Bandipur": [27.9388, 84.4124],
  "Everest Base Camp": [28.0026, 86.8526],
  "Annapurna Base Camp": [28.5300, 83.8780],
  "Namche Bazaar": [27.8069, 86.7140],
  "Patan": [27.6766, 85.3184],
  "Bhaktapur": [27.6724, 85.4283],
};

export default function MapRoute({ routeString }: { routeString: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[400px] bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-2xl flex items-center justify-center">Loading Map...</div>;
  }

  // Parse the route string (e.g. "Kathmandu → Pokhara → Chitwan")
  const locations = routeString.split("→").map(s => s.trim());
  
  // Extract known coordinates
  const markers: { name: string; coords: [number, number] }[] = [];
  locations.forEach(loc => {
    if (LOCATION_DICT[loc]) {
      markers.push({ name: loc, coords: LOCATION_DICT[loc] });
    }
  });

  const positions = markers.map(m => m.coords);

  // If we don't have enough coordinates to draw a map, fallback gracefully
  if (positions.length === 0) {
    return null;
  }

  // Calculate center to zoom to
  const centerLat = positions.reduce((sum, pos) => sum + pos[0], 0) / positions.length;
  const centerLng = positions.reduce((sum, pos) => sum + pos[1], 0) / positions.length;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 relative z-0">
      <MapContainer 
        center={[centerLat, centerLng]} 
        zoom={7} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.coords} icon={customIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {positions.length > 1 && (
          <Polyline 
            positions={positions} 
            color="#f97316" // Tailwind orange-500
            weight={3}
            dashArray="5, 10"
          />
        )}
      </MapContainer>
    </div>
  );
}
