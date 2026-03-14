import type { Metadata } from "next";
import HeroOnglerie from "@/components/onglerie/HeroOnglerie";
import Farah from "@/components/onglerie/Farah";
import TarifsOnglerie from "@/components/onglerie/TarifsOnglerie";
import GalerieOnglerie from "@/components/onglerie/GalerieOnglerie";
import CTAOnglerie from "@/components/onglerie/CTAOnglerie";

export const metadata: Metadata = {
  title: "Onglerie Haute Précision à Jacou & Montpellier | Lymera",
  description:
    "Institut Lymera — Onglerie haute précision par Farah, prothésiste ongulaire certifiée à Jacou (34830). Pose gel, semi-permanent, remplissage. Réservez en ligne.",
  keywords: ["onglerie Jacou", "prothésiste ongulaire Montpellier", "pose gel Jacou", "ongles Jacou"],
  openGraph: {
    title: "Onglerie Haute Précision — Lymera Jacou",
    description: "Onglerie haute précision par Farah à Jacou. Pose gel, semi-permanent, remplissage.",
    images: ["/og/onglerie.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/onglerie" },
};

export default function OngleriePage() {
  return (
    <>
      <HeroOnglerie />
      <div className="h-px bg-border dark:bg-night-border" />
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