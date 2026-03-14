import { tarifsOnglerie } from "@/lib/onglerie/constants";

export default function TarifsOnglerie() {
  return (
    <section id="tarifs" className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-10">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Tarifs onglerie
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-5">
            Prestations &amp; tarifs
          </h2>
          <p className="font-sans text-muted dark:text-night-text2 text-sm max-w-[480px] mx-auto leading-relaxed">
            Toutes les prestations sont réalisées par Farah, prothésiste ongulaire certifiée.
          </p>
        </div>

        {/* Divider centré */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border dark:bg-night-border" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted dark:text-night-text2 shrink-0">
            Poses &amp; soins
          </span>
          <div className="flex-1 h-px bg-border dark:bg-night-border" />
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {tarifsOnglerie.map((t) => (
            <div key={t.name}
              className="flex items-center justify-between
                bg-cream dark:bg-night-bg
                border border-border dark:border-night-border
                rounded-xl px-5 py-4 transition-colors duration-300">
              <div>
                <p className="font-sans text-sm text-dark dark:text-night-text">{t.name}</p>
                <p className="font-sans text-xs text-muted dark:text-night-text2 mt-0.5">{t.duration}</p>
              </div>
              <span className="font-serif font-light text-brown dark:text-night-accent text-xl shrink-0 ml-4">
                {t.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}