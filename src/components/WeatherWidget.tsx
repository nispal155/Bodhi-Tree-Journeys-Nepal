"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Loader2, Mountain } from "lucide-react";

// Same mapping dict for simplicity
const LOCATION_DICT: Record<string, [number, number]> = {
  "Kathmandu": [27.7172, 85.3240],
  "Pokhara": [28.2096, 83.9856],
  "Chitwan": [27.5291, 84.4552],
  "Lumbini": [27.4840, 83.2761],
  "Nagarkot": [27.7175, 85.5222],
  "Bandipur": [27.9388, 84.4124],
  "Everest Base Camp": [28.0026, 86.8526],
  "Annapurna Base Camp": [28.5300, 83.8780],
};

const ALTITUDE_DICT: Record<string, number> = {
  "Kathmandu": 1400,
  "Pokhara": 822,
  "Chitwan": 415,
  "Lumbini": 150,
  "Nagarkot": 2195,
  "Bandipur": 1030,
  "Everest Base Camp": 5364,
  "Annapurna Base Camp": 4130,
};

const AVERAGE_TEMP_DICT: Record<string, number> = {
  "Kathmandu": 20,
  "Pokhara": 22,
  "Chitwan": 28,
  "Lumbini": 30,
  "Nagarkot": 15,
  "Bandipur": 18,
  "Everest Base Camp": -5,
  "Annapurna Base Camp": -2,
};

type WeatherData = {
  temperature: number;
  isSunny: boolean;
  isRaining: boolean;
  isSnowing: boolean;
};

export default function WeatherWidget({ routeString }: { routeString: string }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Extract the primary destination (usually the first or most prominent)
  const locations = routeString.split("→").map(s => s.trim());
  let targetLocation = locations[0];
  
  // If it starts with Kathmandu, maybe pick the second one as the main destination if it exists
  if (targetLocation === "Kathmandu" && locations.length > 1) {
    targetLocation = locations[1];
  }

  // Find max altitude among all listed locations
  const maxAltitude = locations.reduce((max, loc) => {
    return Math.max(max, ALTITUDE_DICT[loc] || 0);
  }, 0);

  useEffect(() => {
    const fetchWeather = async () => {
      const coords = LOCATION_DICT[targetLocation];
      if (!coords) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m,weather_code`);
        const data = await res.json();
        const temp = data.current.temperature_2m;
        const code = data.current.weather_code;

        setWeather({
          temperature: temp,
          isSunny: code <= 3,
          isRaining: code >= 50 && code <= 67,
          isSnowing: code >= 70,
        });
      } catch (e) {
        console.error("Failed to fetch weather, using fallback average temperature.", e);
        // Fallback to average temperature
        const avgTemp = AVERAGE_TEMP_DICT[targetLocation] || 15;
        setWeather({
          temperature: avgTemp,
          isSunny: true,
          isRaining: false,
          isSnowing: avgTemp < 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [targetLocation]);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 mb-8">
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1 uppercase tracking-wider">Current Conditions</h3>
        <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
          {targetLocation}
        </p>
      </div>

      <div className="flex gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full text-blue-500">
            {loading ? <Loader2 className="animate-spin" size={24} /> :
             !weather ? <Cloud size={24} /> :
             weather.isSnowing ? <CloudSnow size={24} /> :
             weather.isRaining ? <CloudRain size={24} /> :
             weather.isSunny ? <Sun className="text-yellow-500" size={24} /> :
             <Cloud size={24} />
            }
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Temperature</div>
            <div className="font-bold text-xl dark:text-white">
              {loading ? "--" : weather ? `${Math.round(weather.temperature)}°C` : "N/A"}
            </div>
          </div>
        </div>

        {maxAltitude > 0 && (
          <div className="flex items-center gap-3 border-l border-gray-200 dark:border-zinc-700 pl-8">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-full text-orange-500">
              <Mountain size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Max Altitude</div>
              <div className="font-bold text-xl dark:text-white">{maxAltitude.toLocaleString()}m</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
