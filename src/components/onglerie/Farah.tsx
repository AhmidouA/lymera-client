import Image from "next/image";
import { TEAM } from "@/lib/constants";

const farah = TEAM.find((m) => m.name === "Farah Arras")!;

const qualities = [
  "Ongles façonnés selon votre morphologie",
  "Pose gel, semi-permanent et ongles naturels",
  "Remplissage des poses réalisées par Farah",
  "Résultat élégant et naturel",
];

export default function Farah() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative bg-beige dark:bg-night-surface
            border border-border dark:border-night-border
            rounded-3xl h-[480px] overflow-hidden">
            <Image
              src={farah.image}
              alt="Farah — Prothésiste ongulaire Institut Lymera Jacou"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Contenu */}
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
              Votre prothésiste
            </p>
            <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-6">
              Farah,<br />l&apos;art de l&apos;onglerie<br />
              <em className="italic text-brown dark:text-night-accent">haute précision</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-8">
              {farah.bio}
            </p>
            <div className="flex flex-col gap-3">
              {qualities.map((q) => (
                <div key={q} className="flex items-center gap-3 font-sans text-sm text-muted dark:text-night-text2">
                  <span className="text-brown dark:text-night-accent text-xs">✦</span>
                  {q}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}