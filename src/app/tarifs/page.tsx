import type { Metadata } from "next";
import HeroTarifs from "@/components/tarifs/HeroTarifs";
import TabsTarifs from "@/components/tarifs/TabsTarifs";
import CTATarifs from "@/components/tarifs/CTATarifs";

export const metadata: Metadata = {
  title: "Tarifs — Épilation Laser, Onglerie & Drainage | Lymera Jacou",
  description:
    "Tous les tarifs de l'Institut Lymera à Jacou : épilation laser femme et homme, onglerie, drainage lymphatique. Bilan laser offert.",
  keywords: ["tarifs épilation laser Jacou", "prix onglerie Jacou", "tarifs drainage lymphatique Jacou"],
  openGraph: {
    title: "Tarifs — Institut Lymera Jacou",
    description: "Tous nos tarifs : épilation laser, onglerie, drainage lymphatique à Jacou.",
    images: ["/og/default.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <HeroTarifs />
      <div className="h-px bg-border dark:bg-night-border" />
      <TabsTarifs />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTATarifs />
    </>
  );
}