import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonld";
import HeroDrainage from "@/components/drainage/HeroDrainage";
import DescriptionDrainage from "@/components/drainage/DescriptionDrainage";
import TarifDrainage from "@/components/drainage/TarifDrainage";
import ContreIndications from "@/components/drainage/ContreIndications";
import Recommandations from "@/components/drainage/Recommandations";
import CTADrainage from "@/components/drainage/CTADrainage";

export const metadata = buildMetadata({
  title: "Drainage Lymphatique à Jacou & Montpellier",
  description: "Institut Lymera — Drainage lymphatique à Jacou (34830). Soin doux, résultats visibles dès la première séance. Réservez en ligne sur Planity.",
  path: "/drainage-lymphatique",
  image: "/og/drainage.webp",
  keywords: ["drainage lymphatique Jacou", "drainage lymphatique Montpellier", "massage lymphatique Jacou"],
});

export default function DrainagePage() {
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
      <HeroDrainage />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
      <DescriptionDrainage />
      <div className="h-px bg-border dark:bg-night-border" />
      <TarifDrainage />
      <div className="h-px bg-border dark:bg-night-border" />
      <ContreIndications />
      <div className="h-px bg-border dark:bg-night-border" />
      <Recommandations />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTADrainage />
    </>
  );
}