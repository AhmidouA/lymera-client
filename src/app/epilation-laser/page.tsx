import type { Metadata } from "next";
import { buildMetadata, getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";
import HeroLaser from "@/components/epilation-laser/HeroLaser";
import Protocole from "@/components/epilation-laser/Protocole";
import Avantages from "@/components/epilation-laser/Avantages";
import TarifsLaser from "@/components/epilation-laser/TarifsLaser";
import FAQLaser from "@/components/epilation-laser/FAQLaser";
import CTALaser from "@/components/epilation-laser/CTALaser";

export const metadata = buildMetadata({
  title: "Épilation Laser Définitive à Jacou & Montpellier",
  description: "Institut Lymera — Épilation laser médicale technologie V2 Corpoderm à Jacou (34830). Bilan offert, résultats durables, femmes et hommes. Réservez en ligne.",
  path: "/epilation-laser",
  image: "/og/epilation-laser.webp",
  keywords: ["épilation laser Jacou", "épilation laser Montpellier", "épilation définitive", "V2 Corpoderm"],
});

export default function EpilationLaserPage() {

    const jsonLd = getServiceJsonLd({
    name: "Épilation Laser Définitive",
    description: "Épilation laser médicale technologie V2 Corpoderm à Jacou. Bilan offert, résultats durables.",
    url: "https://lymera.fr/epilation-laser",
    image: "https://lymera.fr/og/epilation-laser.jpg",
  });
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Accueil", url: "https://lymera.fr" },
    { name: "Épilation Laser", url: "https://lymera.fr/epilation-laser" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeroLaser />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
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