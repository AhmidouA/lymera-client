"use client";
import { Calendar, Phone } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid lg:grid-cols-2 overflow-hidden">

  {/* ── Image fond mobile/tablet (< lg) ── */}
  <div className="lg:hidden absolute inset-0 z-0">
    <Image
      src="/images/hero/hero.webp"
      alt="Salon Lymera"
      fill
      className="object-cover blur-[6px] "
      priority
    />
    {/* Overlay pour lisibilité du texte */}
    <div className="absolute inset-0 bg-cream/40 dark:bg-night-bg/80" />
  </div>

  {/* ── Contenu ── */}
  <div className="relative z-10 flex flex-col justify-center
    px-6 py-20 lg:py-24 lg:pl-8 lg:pr-16
    items-center text-center lg:items-start lg:text-left
    max-w-[620px] mx-auto lg:mx-0 lg:max-w-none">

    <div className="flex items-center gap-3 mb-8">
      <span className="w-8 h-px bg-gold" />
      <span className="font-sans text-xs tracking-[0.25em] uppercase text-brown dark:text-night-accent">
        Institut d&apos;esthétique — Jacou, Occitanie
      </span>
      <span className="w-8 h-px bg-gold lg:hidden" /> {/* trait droit aussi sur mobile */}
    </div>

    <h1 className="font-serif font-light text-dark dark:text-night-text leading-[1.1] mb-6
      text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.5rem]">
      Épilation Laser,<br />
      Onglerie &amp;{" "}
      <em className="italic text-brown dark:text-night-accent">Drainage</em>
      <br />à Jacou
    </h1>

    <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed mb-10
      max-w-[440px] lg:max-w-none">
      Un espace d&apos;expertise et de bien-être au féminin, à deux pas de Montpellier.
      Protocole personnalisé, technologie V2 Corpoderm.
    </p>

    <div className="flex items-center gap-4 flex-wrap mb-12 justify-center lg:justify-start">
      <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <Calendar size={16} strokeWidth={1.5} />
        Prendre RDV
      </a>
      <a href={`tel:${SITE.phone}`} className="btn-outline">
        <Phone size={16} strokeWidth={1.5} />
        Appeler
      </a>
    </div>

    <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl w-fit
        bg-beige/80 dark:bg-night-surface/80 backdrop-blur-sm
        border border-border dark:border-night-border
        hover:border-brown dark:hover:border-night-accent
        hover:scale-105 transition-all duration-200">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brown dark:text-night-accent text-xs">★</span>
        ))}
      </div>
      <span className="font-sans text-xs text-muted dark:text-night-text2 group-hover:text-brown dark:group-hover:text-night-accent transition-colors duration-200">
        5/5 · 39 avis Planity
      </span>
    </a>
  </div>

  {/* ── Image colonne droite desktop (lg+) ── */}
  <div className="hidden lg:block relative bg-beige dark:bg-night-surface overflow-hidden transition-colors duration-300">
    <Image
      src="/images/hero/hero.webp"
      alt="Salon Lymera — Institut d'esthétique à Jacou"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream dark:from-night-bg to-transparent z-10" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream dark:from-night-bg to-transparent z-10" />
  </div>

</section>
  );
}