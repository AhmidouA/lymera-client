const values = [
  {
    icon: "🎯",
    title: "Expertise",
    desc: "Des esthéticiennes certifiées, formées aux dernières technologies et techniques pour vous offrir le meilleur.",
  },
  {
    icon: "💛",
    title: "Bienveillance",
    desc: "Un accueil chaleureux et une écoute attentive. Vous vous sentez chouchoutée dès le premier instant.",
  },
  {
    icon: "✨",
    title: "Sur-mesure",
    desc: "Chaque protocole est adapté à votre profil, votre morphologie et vos envies. Rien de générique.",
  },
];

export default function TeamValues() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Ce qui nous anime
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Les valeurs de Lymera
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:px-4 xl:px-0">
          {values.map((v) => (
            <div key={v.title}
              className="flex flex-col items-center text-center
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                rounded-2xl p-8 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                flex items-center justify-center text-xl mb-5">
                {v.icon}
              </div>
              <h3 className="font-serif font-light text-dark dark:text-night-text text-xl mb-3">
                {v.title}
              </h3>
              <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}