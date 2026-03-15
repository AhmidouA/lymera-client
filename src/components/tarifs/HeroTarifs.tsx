import Image from "next/image";
import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HeroTarifs() {
  return (
    <section className="relative py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.webp"
          alt="Institut Lymera — Tarifs épilation laser, onglerie et drainage Jacou"
          fill
          className="object-cover object-center blur-[8px] scale-[1.2] brightness-110 opacity-55 dark:opacity-80 dark:brightness-50"
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
          text-[2.2rem] sm:text-[3rem] lg:text-[4rem]">
          Nos tarifs
        </h1>

        <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed mb-10 max-w-[480px]">
          Retrouvez l&apos;ensemble de nos prestations et tarifs. Bilan laser offert sur tous les traitements d&apos;épilation.
        </p>

        <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <Calendar size={16} strokeWidth={1.5} />
          Prendre RDV
        </a>

      </div>
    </section>
  );
}