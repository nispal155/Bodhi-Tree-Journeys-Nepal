"use client";

import dynamic from "next/dynamic";

const MapRoute = dynamic(() => import("@/components/MapRoute"), { ssr: false });

export default function MapRouteWrapper({ routeString }: { routeString: string }) {
  return <MapRoute routeString={routeString} />;
}
