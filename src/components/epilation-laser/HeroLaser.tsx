import Image from "next/image";
import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HeroLaser() {
  return (
    <section className="relative py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      {/* ── Image de fond avec blur ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/epilation-laser/laser-machine.webp"
          alt="Salon Lymera — Institut d'esthétique Jacou"
          fill
          className="object-cover object-bottom blur-[8px] scale-[1.009] brightness-110 opacity-55 dark:opacity-80 dark:brightness-50"
          priority
        />   
      </div>

      {/* ── Contenu au dessus ── */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-0 flex flex-col items-center text-center">

        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-brown dark:text-night-accent">
            Institut Lymera — Jacou, 34830
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        <h1 className="font-serif font-light text-dark dark:text-night-text leading-[1.1] mb-6
          text-[2.2rem] sm:text-[3rem] lg:text-[4rem] max-w-[800px]">
          Épilation Laser Définitive à Jacou —{" "}
          <em className="italic text-brown dark:text-night-accent">Technologie V2 Corpoderm</em>
        </h1>

        <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed mb-10 max-w-[560px]">
          Résultats durables, protocole personnalisé et bilan offert. À deux pas de Montpellier, pour les femmes et les hommes.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-12 ">
          <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Calendar size={16} strokeWidth={1.5} />
            Prendre RDV
          </a>
          <a href="#tarifs" className="btn-outline">
            Voir les tarifs
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center font-bold">
          {["Bilan offert", "Femmes & Hommes", "Technologie V2 Corpoderm", "Résultats durables"].map((badge) => (
            <div key={badge}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl
                bg-beige/80 dark:bg-night-surface/80 backdrop-blur-sm
                border border-border dark:border-night-border
                font-sans text-xs text-muted dark:text-night-text2">
              <span className="text-brown dark:text-night-accent">✓</span>
              {badge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}