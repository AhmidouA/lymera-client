import Image from "next/image";
import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HeroOnglerie() {
  return (
    <section className="relative py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">

      {/* Image blur fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/onglerie/hero.webp"
          alt="Onglerie haute précision — Prothésiste ongulaire Farah Institut Lymera Jacou"
          fill
          className="object-cover object-center blur-[8px] scale-[1.009] brightness-110 opacity-55 dark:opacity-80 dark:brightness-50"
          priority
        />
      </div>

      {/* Contenu */}
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
          Onglerie Haute Précision à Jacou —{" "}
          <em className="italic text-brown dark:text-night-accent">Prothésiste Ongulaire</em>
        </h1>

        <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed mb-10 max-w-[520px]">
          Des ongles façonnés selon votre morphologie, élégants et naturels. Par Farah, prothésiste ongulaire certifiée.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-12">
          <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Calendar size={16} strokeWidth={1.5} />
            Prendre RDV
          </a>
          <a href="#tarifs" className="btn-outline">
            Voir les tarifs
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {["Pose gel", "Semi-permanent", "Remplissage", "Dépose"].map((badge) => (
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