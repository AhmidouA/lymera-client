import type { Metadata } from "next";
import HeroDrainage from "@/components/drainage/HeroDrainage";
import DescriptionDrainage from "@/components/drainage/DescriptionDrainage";
import TarifDrainage from "@/components/drainage/TarifDrainage";
import ContreIndications from "@/components/drainage/ContreIndications";
import Recommandations from "@/components/drainage/Recommandations";
import CTADrainage from "@/components/drainage/CTADrainage";

export const metadata: Metadata = {
  title: "Drainage Lymphatique à Jacou & Montpellier | Lymera",
  description:
    "Institut Lymera — Drainage lymphatique à Jacou (34830). Soin doux, résultats visibles dès la première séance. Réservez en ligne sur Planity.",
  keywords: ["drainage lymphatique Jacou", "drainage lymphatique Montpellier", "massage lymphatique Jacou"],
  openGraph: {
    title: "Drainage Lymphatique — Lymera Jacou",
    description: "Drainage lymphatique à Jacou. Résultats visibles dès la première séance.",
    images: ["/og/drainage.webp"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/drainage-lymphatique" },
};

export default function DrainagePage() {
  return (
    <>
      <HeroDrainage />
      <div className="h-px bg-border dark:bg-night-border" />
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