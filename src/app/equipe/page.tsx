import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import HeroTeam from "@/components/team/HeroTeam";
import MembreFarah from "@/components/team/MembreFarah";
import MembreNassima from "@/components/team/MembreNassima";
import TeamValues from "@/components/team/TeamValues";
import CTATeam from "@/components/team/CTATeam";

export const metadata = buildMetadata({
  title: "Notre Équipe — Farah & Nassima",
  description: "Farah Arras et Nassima, deux expertes passionnées au service de votre beauté à Jacou. Épilation laser, onglerie et drainage lymphatique.",
  path: "/equipe",
  image: "/og/default.jpg",
  keywords: ["équipe Lymera", "Farah Arras esthéticienne Jacou"],
});



export default function EquipePage() {

  const breadcrumb = getBreadcrumbJsonLd([
  { name: "Accueil", url: "https://lymera.fr" },
  { name: "Équipe", url: "https://lymera.fr/equipe" },
]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeroTeam />
      <div className="h-px bg-border dark:bg-night-border" />
      <MembreFarah />
      <div className="h-px bg-border dark:bg-night-border" />
      <MembreNassima />
      <div className="h-px bg-border dark:bg-night-border" />
      <TeamValues />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTATeam />
    </>
  );
}