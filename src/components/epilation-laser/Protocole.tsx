import Image from "next/image";
import { steps } from "@/lib/epilation-laser/constants";

export default function Protocole() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image — sous le texte sur mobile, à gauche sur lg ── */}
          <div className="w-full order-2 lg:order-1 relative
            bg-cream dark:bg-night-bg
            border border-border dark:border-night-border
            rounded-3xl h-[300px] lg:h-[460px] overflow-hidden">
            <Image
              src="/images/epilation-laser/epilation-laser.webp"
              alt="Machine épilation laser Lascera — Technologie V2 Corpoderm Institut Lymera Jacou"
              fill
              className="object-cover object-[15%_center]"
            />
          </div>

          {/* ── Texte — toujours en premier sur mobile ── */}
          <div className="w-full order-1 lg:order-2">
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
              Comment ça marche
            </p>
            <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-6">
              Un protocole sur-mesure<br />en 6 à 8 séances
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />

            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <div key={step.num}
                  className="flex items-start gap-4 p-5
                    bg-beige dark:bg-night-surface
                    border border-border dark:border-night-border
                    rounded-xl transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full shrink-0 mt-0.5
                    bg-brown dark:bg-night-accent
                    flex items-center justify-center
                    text-white dark:text-night-bg text-xs font-medium font-sans">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-dark dark:text-night-text mb-1">{step.title}</p>
                    <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}