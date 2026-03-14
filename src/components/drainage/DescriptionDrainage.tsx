import Image from "next/image";

const bienfaits = [
  "Stimule la circulation lymphatique",
  "Élimine les toxines et l'excès de liquides",
  "Réduit les sensations de jambes lourdes",
  "Sensation de légèreté dès la première séance",
  "Favorise la relaxation profonde",
];

export default function DescriptionDrainage() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="w-full order-2 lg:order-1 relative
            bg-beige dark:bg-night-surface
            border border-border dark:border-night-border
            rounded-3xl h-[300px] lg:h-[480px] overflow-hidden">
            <Image
              src="/images/drainage/drainage.webp"
              alt="Soin drainage lymphatique — Institut Lymera Jacou"
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Contenu */}
          <div className="w-full order-1 lg:order-2">
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
              Le soin
            </p>
            <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-6">
              Un soin doux<br />aux effets{" "}
              <em className="italic text-brown dark:text-night-accent">visibles</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-8">
              Le drainage lymphatique est une technique de massage doux qui stimule la circulation lymphatique, favorise l&apos;élimination des toxines et réduit les sensations de jambes lourdes. Une séance de 2 heures pour un effet légèreté immédiat.
            </p>
            <div className="flex flex-col gap-3">
              {bienfaits.map((b) => (
                <div key={b} className="flex items-center gap-3 font-sans text-sm text-muted dark:text-night-text2">
                  <span className="text-brown dark:text-night-accent text-xs">◯</span>
                  {b}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}