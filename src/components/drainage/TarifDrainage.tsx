import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function TarifDrainage() {
  return (
    <section id="tarif" className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-0">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Tarif drainage
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Une séance,<br />un tarif unique
          </h2>
        </div>

        <div className="max-w-[560px] mx-auto mt-12
          bg-cream dark:bg-night-bg
          border border-border dark:border-night-border
          rounded-3xl p-10 text-center
          transition-colors duration-300">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-beige dark:bg-night-surface
            border border-border dark:border-night-border
            font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-8">
            ⭐ Soin signature
          </div>

          <h3 className="font-serif font-light text-dark dark:text-night-text text-2xl mb-2">
            Drainage Lymphatique
          </h3>
          <p className="font-sans text-xs text-muted dark:text-night-text2 mb-8">
            Séance complète · 1H30 heures
          </p>

          <div className="font-serif font-light text-brown dark:text-night-accent text-7xl leading-none mb-2">
            90€
          </div>
          <p className="font-sans text-xs text-muted dark:text-night-text2 mb-10">
            par séance
          </p>

          <div className="flex flex-col gap-3 text-left mb-10">
            {[
              "Bilan et informations importantes inclus",
              "Vérification des contre-indications",
              "Séance de drainage lymphatique complète (2h)",
              "Conseils personnalisés post-séance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-sans text-sm text-muted dark:text-night-text2">
                <span className="text-brown dark:text-night-accent">✓</span>
                {item}
              </div>
            ))}
          </div>

          <a
            href={SITE.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            <Calendar size={16} strokeWidth={1.5} />
            Prendre RDV
          </a>

        </div>
      </div>
    </section>
  );
}