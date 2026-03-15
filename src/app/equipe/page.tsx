import type { Metadata } from "next";
import HeroTeam from "@/components/team/HeroTeam";
import MembreFarah from "@/components/team/MembreFarah";
import MembreNassima from "@/components/team/MembreNassima";
import TeamValues from "@/components/team/TeamValues";
import CTATeam from "@/components/team/CTATeam";

export const metadata: Metadata = {
  title: "Notre Équipe — Institut Lymera Jacou",
  description:
    "Farah Arras et Nassima, deux expertes passionnées au service de votre beauté à Jacou. Épilation laser, onglerie haute précision et drainage lymphatique.",
  keywords: ["équipe Lymera", "Farah Arras esthéticienne Jacou", "prothésiste ongulaire Jacou"],
  openGraph: {
    title: "Notre Équipe — Institut Lymera Jacou",
    description: "Farah et Nassima, deux expertes passionnées à Jacou.",
    images: ["/og/default.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/equipe" },
};

export default function EquipePage() {
  return (
    <>
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