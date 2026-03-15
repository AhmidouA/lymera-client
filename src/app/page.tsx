import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { getPlanityRating } from "@/lib/getPlanityRating";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyLymera from "@/components/home/WhyLymera";
import Team from "@/components/home/Team";
import Reviews from "@/components/home/Reviews";
import TarifsApercu from "@/components/home/TarifsApercu";
import Localisation from "@/components/home/Localisation";
import CTAFinal from "@/components/home/CTAFinal";

export const metadata: Metadata = buildMetadata({
  title: "Institut Lymera — Épilation Laser, Onglerie & Drainage à Jacou",
  description: "Institut Lymera à Jacou (34830) — Épilation laser définitive V2 Corpoderm, onglerie haute précision et drainage lymphatique. À 10 min de Montpellier. Réservez en ligne sur Planity.",
  path: "/",
  image: "/og/default.jpg",
  keywords: [
    "épilation laser Jacou",
    "épilation laser Montpellier",
    "onglerie Jacou",
    "drainage lymphatique Jacou",
    "institut esthétique Jacou",
    "Lymera",
  ],
});

export default async function HomePage() {
    const rating = await getPlanityRating();
  return (
    <>
      <SchemaOrg ratingScore={rating.score} ratingCount={rating.count} />
      <Hero />
      {/* <div className="h-px bg-border dark:bg-night-border" />*/}
      <Services />
      <div className="h-px bg-border dark:bg-night-border" />
      <WhyLymera />
      <div className="h-px bg-border dark:bg-night-border" />
      <Team />
      <div className="h-px bg-border dark:bg-night-border" />
      <Reviews />
      <div className="h-px bg-border dark:bg-night-border" />
      <TarifsApercu />
      <div className="h-px bg-border dark:bg-night-border" />
      <Localisation />
      <div className="h-px bg-border dark:bg-night-border" />
      <CTAFinal />
    </>
  );
}