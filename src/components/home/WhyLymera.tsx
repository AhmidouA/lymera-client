import Image from "next/image";
import { WHY_LYMERA } from "@/lib/constants";

export default function WhyLymera() {
  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Texte — toujours en premier sur mobile ── */}
          <div className="w-full text-center lg:text-left order-1 lg:order-2 flex flex-col items-center lg:items-start">
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
              Pourquoi nous choisir
            </p>
            <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-6">
              L&apos;expertise au service<br />de votre beauté
            </h2>
            <div className="w-12 h-px bg-gold mb-8 mx-auto lg:mx-0" />
            <div className="flex flex-col gap-4">
              {WHY_LYMERA.map((item) => (
                <div key={item.title}
                  className="flex items-start gap-4 p-5 text-left
                    bg-cream dark:bg-night-bg
                    border border-border dark:border-night-border
                    rounded-xl transition-colors duration-300">
                  <div className="w-7 h-7 rounded-full shrink-0 mt-0.5
                    bg-brown dark:bg-night-accent
                    flex items-center justify-center
                    text-white dark:text-night-bg text-xs font-medium">
                    ✓
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-dark dark:text-night-text mb-1">{item.title}</p>
                    <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image — sous le texte sur mobile, à gauche sur lg ── */}
          <div className="w-full order-2 lg:order-1 relative mt-0 md:mt-10
            bg-cream dark:bg-night-bg
            border border-border dark:border-night-border
            rounded-3xl h-[300px] lg:h-[500px] overflow-hidden">
            <Image
              src="/images/hero/laser-machine.webp"
              alt="Machine épilation laser Lascera — Technologie V2 Corpoderm Institut Lymera Jacou"
              fill
              className="object-cover object-[15%_center]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}