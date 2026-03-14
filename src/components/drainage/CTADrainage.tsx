import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTADrainage() {
  return (
    <section className="py-14 px-6 bg-brown dark:bg-night-surface flex flex-col items-center text-center gap-4 transition-colors duration-300">
      <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-white/50">
        Prête à vous sentir légère ?
      </p>
      <h2 className="font-serif font-light text-white text-2xl sm:text-3xl lg:text-4xl leading-snug">
        Réservez votre séance drainage
      </h2>
      <p className="font-sans text-sm text-white/60 max-w-[360px] leading-relaxed">
        Prenez rendez-vous en quelques clics sur Planity, 24h/24.
      </p>
      <a
        href={SITE.planityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-1
          px-7 py-3.5 rounded-full
          bg-white text-brown
          font-sans text-sm font-medium
          hover:opacity-90 transition-all duration-200"
      >
        <Calendar size={15} strokeWidth={1.5} />
        Prendre RDV sur Planity
      </a>
      <p className="font-sans text-xs text-white/40">
        Ou appelez :{" "}
        <a href={`tel:${SITE.phone}`} className="font-bold text-white/95 hover:text-white transition-colors duration-200">
          {SITE.phoneDisplay}
        </a>
      </p>
    </section>
  );
}