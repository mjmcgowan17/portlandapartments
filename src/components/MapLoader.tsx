"use client";

import dynamic from "next/dynamic";
import type { Apartment } from "@/data/apartments";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function MapLoader({ apartments }: { apartments: Apartment[] }) {
  return <Map apartments={apartments} />;
}
