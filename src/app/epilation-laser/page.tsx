import type { Metadata } from "next";
import HeroLaser from "@/components/epilation-laser/HeroLaser";
import Protocole from "@/components/epilation-laser/Protocole";
import Avantages from "@/components/epilation-laser/Avantages";
import TarifsLaser from "@/components/epilation-laser/TarifsLaser";
import FAQLaser from "@/components/epilation-laser/FAQLaser";
import CTALaser from "@/components/epilation-laser/CTALaser";

export const metadata: Metadata = {
  title: "Épilation Laser Définitive à Jacou & Montpellier | Lymera",
  description:
    "Institut Lymera — Épilation laser médicale technologie V2 Corpoderm à Jacou (34830). Bilan offert, résultats durables, femmes et hommes. Réservez en ligne.",
  keywords: ["épilation laser Jacou", "épilation laser Montpellier", "épilation définitive", "V2 Corpoderm"],
  openGraph: {
    title: "Épilation Laser Définitive — Lymera Jacou",
    description: "Institut Lymera — Épilation laser V2 Corpoderm à Jacou. Bilan offert, résultats durables.",
    images: ["/og/epilation-laser.webp"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/epilation-laser" },
};

export default function EpilationLaserPage() {
  return (
    <>
      <HeroLaser />
      <div className="h-px bg-border dark:bg-night-border" />
      <Protocole />
      <div className="h-px bg-border dark:bg-night-border" />
      <Avantages />
      <div className="h-px bg-border dark:bg-night-border" />
      <TarifsLaser />
      <div className="h-px bg-border dark:bg-night-border" />
      <FAQLaser />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTALaser />
    </>
  );
}