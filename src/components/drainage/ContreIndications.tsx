const items = [
  "Insuffisance cardiaque ou rénale",
  "Thrombose ou phlébite en cours",
  "Infection ou inflammation aiguë",
  "Cancer en cours de traitement",
  "Fièvre ou état grippal",
  "Grossesse (1er trimestre)",
];

export default function ContreIndications() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-8">

        <div className="text-center md:text-left mb-10">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            À savoir avant votre séance
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-5">
            Contre-indications
          </h2>
          <p className="font-sans text-muted dark:text-night-text2 text-sm max-w-[520px] leading-relaxed md:max-w-none">
            Le drainage lymphatique est contre-indiqué dans certaines situations. Merci de nous informer lors de la prise de rendez-vous.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[600px] md:max-w-[1000px]">
          {items.map((item) => (
            <div key={item}
              className="flex items-start gap-3 p-4 
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                rounded-xl transition-colors duration-300">
              <span className="text-brown dark:text-night-accent text-sm shrink-0 mt-0.5">⚠</span>
              <span className="font-sans text-sm text-muted dark:text-night-text2">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}