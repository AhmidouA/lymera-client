import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import HeroTarifs from "@/components/tarifs/HeroTarifs";
import TabsTarifs from "@/components/tarifs/TabsTarifs";
import CTATarifs from "@/components/tarifs/CTATarifs";

export const metadata = buildMetadata({
  title: "Tarifs — Épilation Laser, Onglerie & Drainage",
  description: "Tous les tarifs de l'Institut Lymera à Jacou : épilation laser femme et homme, onglerie, drainage lymphatique. Bilan laser offert.",
  path: "/tarifs",
  keywords: ["tarifs épilation laser Jacou", "prix onglerie Jacou", "tarifs drainage Jacou"],
});

export default function TarifsPage() {
  const breadcrumb = getBreadcrumbJsonLd([
  { name: "Accueil", url: "https://lymera.fr" },
  { name: "Tarifs", url: "https://lymera.fr/tarifs" },
]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeroTarifs />
      {/* <div className="h-px bg-border dark:bg-night-border" /> */}
      <TabsTarifs />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTATarifs />
    </>
  );
}