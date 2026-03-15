import Image from "next/image";
import { TEAM } from "@/lib/constants";

const nassima = TEAM.find((m) => m.name === "Nassima")!;

export default function MembreNassima() {
  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300 lg:px-4 xl:px-0">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Contenu — gauche sur desktop */}
          <div className="w-full order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-cream dark:bg-night-bg
              border border-border dark:border-night-border
              font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-6">
              ✦ Prothésiste Ongulaire
            </div>
            <h2 className="font-serif font-light text-dark dark:text-night-text
              text-3xl md:text-4xl lg:text-5xl mb-3">
              {nassima.name}
            </h2>
            <p className="font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-4">
              {nassima.role}
            </p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-8">
              {nassima.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {nassima.expertises.map((e) => (
                <span key={e}
                  className="px-4 py-2 rounded-full
                    bg-cream dark:bg-night-bg
                    border border-border dark:border-night-border
                    font-sans text-xs text-muted dark:text-night-text2">
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Photo — droite sur desktop */}
          <div className="w-full order-2 relative
            bg-cream dark:bg-night-bg
            border border-border dark:border-night-border
            rounded-3xl h-[360px] lg:h-[560px] overflow-hidden">
            <Image
              src={nassima.image}
              alt="Nassima — Prothésiste ongulaire Institut Lymera Jacou"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}