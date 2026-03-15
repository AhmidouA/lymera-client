import Image from "next/image";

export default function HeroTeam() {
  return (
    <section className="relative py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team/hero.webp"
          alt="Institut Lymera — Notre équipe à Jacou"
          fill
          className="object-cover object-center blur-[8px] scale-y-125 brightness-110 opacity-55 dark:opacity-80 dark:brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-0 flex flex-col items-center text-center">

        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold " />
          <span className="font-sans font-bold text-xs tracking-[0.25em] uppercase text-brown dark:text-night-accent">
            Institut Lymera — Jacou, 34830
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        <h1 className="font-serif font-light text-dark dark:text-night-text leading-[1.1] mb-6
          text-[2.2rem] sm:text-[3rem] lg:text-[4rem]">
          Notre{" "}
          <em className="italic text-brown dark:text-night-accent">équipe</em>
        </h1>

        <p className="font-sans text-muted dark:text-night-text2 text-base leading-relaxed max-w-[560px]">
          Deux expertes passionnées au service de votre beauté. Une ambiance familiale et professionnelle, à deux pas de Montpellier.
        </p>

      </div>
    </section>
  );
}