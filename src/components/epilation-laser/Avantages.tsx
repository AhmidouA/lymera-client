const avantages = [
  { icon: "🎯", title: "Bilan offert", desc: "Consultation gratuite avant chaque traitement pour adapter le protocole à votre profil." },
  { icon: "⚡", title: "V2 Corpoderm", desc: "Technologie laser dernière génération. Efficace sur tous les phototypes, femmes et hommes." },
  { icon: "✨", title: "Résultats durables", desc: "Réduction définitive dès les premières séances. Protocole personnalisé pour des résultats optimaux." },
];

export default function Avantages() {
  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Pourquoi choisir Lymera
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Ce qui nous distingue
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {avantages.map((a) => (
            <div key={a.title}
              className="flex flex-col items-center text-center
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                rounded-2xl p-8 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full
                bg-cream dark:bg-night-bg
                border border-border dark:border-night-border
                flex items-center justify-center text-xl mb-5">
                {a.icon}
              </div>
              <h3 className="font-serif font-light text-dark dark:text-night-text text-xl mb-3">{a.title}</h3>
              <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}