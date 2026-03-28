import Link from "next/link";

const tarifs = [
  { name: "Aisselles", duration: "15 min · Laser femme", price: "40€" },
  { name: "Jambes complètes", duration: "30 min · Laser femme", price: "150€" },
  { name: "Forfait AX + Maillot + DJ", duration: "1h · Laser femme", price: "140€" },
  { name: "Pose complète mains", duration: "2h · Onglerie", price: "50€" },
  { name: "Drainage lymphatique", duration: "1H30 · Soin corps", price: "90€" },
  { name: "Dos entier", duration: "30 min · Laser homme", price: "130€" },
];

export default function TarifsApercu() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 md:px-2 lg:px-0">

        <div className="mb-12 text-center ">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Nos tarifs
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-4">
            Prestations phares
          </h2>
          <p className="font-sans text-muted dark:text-night-text2 text-sm max-w-[400px] leading-relaxed mx-auto">
            Quelques exemples. Retrouvez la grille complète sur la page tarifs.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {tarifs.map((t) => (
            <div key={t.name}
              className="flex items-center justify-between
                bg-beige dark:bg-night-surface
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

        <div className="text-center">
          <Link href="/tarifs" className="btn-outline">Voir tous les tarifs</Link>
        </div>
      </div>
    </section>
  );
}