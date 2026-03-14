import Image from "next/image";
import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HeroDrainage() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drainage/hero.webp"
          alt="Drainage lymphatique — Institut Lymera Jacou"
          fill
          className="object-cover object-center blur-[8px] scale-105 brightness-110 opacity-55 dark:opacity-80 dark:brightness-50"
          priority
        />
      </div>

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
          Drainage Lymphatique à Jacou —{" "}
          <em className="italic text-brown dark:text-night-accent">Stimulez votre circulation</em>
        </h1>

        <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed mb-10 max-w-[520px]">
          Soin doux qui stimule la circulation, élimine les toxines et apporte une sensation de légèreté. Résultats visibles dès la première séance.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-12">
          <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Calendar size={16} strokeWidth={1.5} />
            Prendre RDV
          </a>
          <a href="#tarif" className="btn-outline">
            Voir le tarif
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {["Résultats dès la 1ère séance", "Soin doux & relaxant", "Par Nassima"].map((badge) => (
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