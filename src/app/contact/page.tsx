import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";
import HeroContact from "@/components/contact/HeroContact";
import InfosContact from "@/components/contact/InfosContact";
import CTAContact from "@/components/contact/CTAContact";

export const metadata = buildMetadata({
  title: "Contact — Institut Lymera Jacou",
  description: "Contactez l'Institut Lymera à Jacou (34830). Adresse, téléphone, horaires et réservation en ligne sur Planity. À 10 min de Montpellier.",
  path: "/contact",
  image: "/og/default.jpg",
  keywords: ["contact Lymera", "adresse Institut Lymera Jacou"],
});

export default function ContactPage() {

  const breadcrumb = getBreadcrumbJsonLd([
  { name: "Accueil", url: "https://lymera.fr" },
  { name: "Contact", url: "https://lymera.fr/contact" },
]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeroContact />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
      <InfosContact />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTAContact />
    </>
  );
}