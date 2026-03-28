import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonld";
import HeroOnglerie from "@/components/onglerie/HeroOnglerie";
import Farah from "@/components/onglerie/Farah";
import TarifsOnglerie from "@/components/onglerie/TarifsOnglerie";
import GalerieOnglerie from "@/components/onglerie/GalerieOnglerie";
import CTAOnglerie from "@/components/onglerie/CTAOnglerie";

export const metadata = buildMetadata({
  title: "Onglerie Haute Précision à Jacou & Montpellier",
  description: "Institut Lymera — Onglerie haute précision par Farah à Jacou (34830). Pose gel, semi-permanent, remplissage. Réservez en ligne sur Planity.",
  path: "/onglerie",
  image: "/og/onglerie.webp",
  keywords: ["onglerie Jacou", "prothésiste ongulaire Montpellier", "pose gel Jacou"],
});

export default function OngleriePage() {
  const jsonLd = getServiceJsonLd({
    name: "Onglerie Haute Précision",
    description: "Onglerie haute précision par Farah à Jacou. Pose gel, semi-permanent, remplissage.",
    url: "https://lymera.fr/onglerie",
    image: "https://lymera.fr/og/onglerie.jpg",
  });
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Accueil", url: "https://lymera.fr" },
    { name: "Onglerie", url: "https://lymera.fr/onglerie" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <HeroOnglerie />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
        <Farah />
      <div className="h-px bg-border dark:bg-night-border" />
        <TarifsOnglerie />
      <div className="h-px bg-border dark:bg-night-border" />
        <GalerieOnglerie />
      <div className="h-px bg-border dark:bg-night-border" />
        <CTAOnglerie />
    </>
  );
}