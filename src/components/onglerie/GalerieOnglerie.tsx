import Image from "next/image";
import { galerieOnglerie } from "@/lib/onglerie/constants";

export default function GalerieOnglerie() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Nos réalisations
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            L&apos;onglerie Lymera<br />en images
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galerieOnglerie.map((img, i) => (
            <div key={i}
              className={`relative overflow-hidden rounded-2xl
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                ${i === 0 ? "row-span-2 min-h-[400px]" : "aspect-square"}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}