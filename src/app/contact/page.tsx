import type { Metadata } from "next";
import HeroContact from "@/components/contact/HeroContact";
import InfosContact from "@/components/contact/InfosContact";
import CTAContact from "@/components/contact/CTAContact";

export const metadata: Metadata = {
  title: "Contact — Institut Lymera Jacou",
  description:
    "Contactez l'Institut Lymera à Jacou (34830). Adresse, téléphone, horaires et réservation en ligne sur Planity. À 10 min de Montpellier.",
  keywords: ["contact Lymera", "adresse Institut Lymera Jacou", "téléphone Lymera"],
  openGraph: {
    title: "Contact — Institut Lymera Jacou",
    description: "Contactez l'Institut Lymera à Jacou. Adresse, téléphone et réservation en ligne.",
    images: ["/og/default.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://lymera.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
      <InfosContact />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTAContact />
    </>
  );
}