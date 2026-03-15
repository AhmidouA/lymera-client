import Image from "next/image";
import { TEAM } from "@/lib/constants";

const farah = TEAM.find((m) => m.name === "Farah Arras")!;


export default function MembreFarah() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300 lg:px-4 xl:px-0">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="w-full order-2 lg:order-1 relative
            bg-beige dark:bg-night-surface
            border border-border dark:border-night-border
            rounded-3xl h-[360px] lg:h-[560px] overflow-hidden">
            <Image
              src={farah.image}
              alt="Farah Arras — Fondatrice et esthéticienne Institut Lymera Jacou"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Contenu */}
          <div className="w-full order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-beige dark:bg-night-surface
              border border-border dark:border-night-border
              font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-6">
              ✦ Fondatrice
            </div>
            <h2 className="font-serif font-light text-dark dark:text-night-text
              text-3xl md:text-4xl lg:text-5xl mb-3">
              {farah.name}
            </h2>
            <p className="font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-4">
              {farah.role}
            </p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-8">
              {farah.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {farah.expertises.map((e) => (
                <span key={e}
                  className="px-4 py-2 rounded-full
                    bg-beige dark:bg-night-surface
                    border border-border dark:border-night-border
                    font-sans text-xs text-muted dark:text-night-text2">
                  {e}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}