"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import type { Apartment } from "@/data/apartments";

interface MapProps {
  apartments: Apartment[];
}

export default function Map({ apartments }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      // Fix default marker icons for bundlers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current).setView([45.5152, -122.6784], 12);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      apartments.forEach((apt) => {
        const bedLabel =
          apt.bedrooms === 0 ? "Studio" : `${apt.bedrooms}BR`;
        L.marker([apt.lat, apt.lng])
          .addTo(map)
          .bindPopup(
            `<strong>${apt.name}</strong><br/>${apt.neighborhood}<br/>${bedLabel} &middot; $${apt.price.toLocaleString()}/mo`
          );
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [apartments]);

  return <div ref={mapRef} style={{ height: 450, width: "100%" }} />;
}
