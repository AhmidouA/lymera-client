export default function Recommandations() {
  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Notre recommandation
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Pour des résultats<br />durables
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[900px] mx-auto">

          <div className="bg-cream dark:bg-night-bg
            border border-border dark:border-night-border
            rounded-3xl p-10 text-center
            transition-colors duration-300">
            <div className="font-serif font-light text-brown dark:text-night-accent text-8xl leading-none mb-4">
              1
            </div>
            <p className="font-serif font-light text-dark dark:text-night-text text-xl mb-3">
              séance tous les 3 mois
            </p>
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">
              Pour maintenir les effets et entretenir votre circulation lymphatique sur le long terme.
            </p>
          </div>

          <div>
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-6">
              Une séance de drainage lymphatique tous les 3 mois est idéale pour maintenir une bonne circulation et prévenir la rétention d&apos;eau.
            </p>
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">
              En cure intensive, une séance par semaine pendant 4 à 6 semaines peut être recommandée selon votre profil. Nassima vous conseillera lors de votre première séance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}