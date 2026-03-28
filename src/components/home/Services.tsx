import Link from "next/link";
import { Zap, Sparkles, Waves } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Épilation Laser Définitive",
    description: "Nouvelle technologie efficace sur tous les types de peaux, avec des résultats visibles dès la première séance. Diagnostic offert & flash test gratuit.",
    href: "/epilation-laser",
  },
  {
    icon: Sparkles,
    title: "Onglerie Haute Précision",
    description: "6 ans d’expérience et formatrice en onglerie, avec des techniques adaptées à chaque nature d’ongle. Baby-boomer et french réalisés avec maîtrise.",
    href: "/onglerie",
  },
  {
    icon: Waves,
    title: "Drainage Lymphatique",
    description: "Un massage tonique qui stimule la lymphe, favorise l’élimination des toxines et améliore la circulation.",
    href: "/drainage-lymphatique",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 md:px-2 lg:px-0">

        <div className="text-center mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Nos expertises
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-5">
            Trois spécialités,<br />une exigence
          </h2>
          <p className="font-sans text-muted dark:text-night-text2 text-base max-w-[480px] mx-auto leading-relaxed">
            Des soins adaptés à votre morphologie, réalisés par des esthéticiennes certifiées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href}
                className="group flex flex-col items-center text-center
                    bg-beige dark:bg-night-surface
                    border border-border dark:border-night-border
                    rounded-2xl p-8 lg:p-10
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-card-hover-dark"
                >
                    <div className="w-12 h-12 rounded-xl bg-cream dark:bg-night-bg
                        border border-border dark:border-night-border
                        flex items-center justify-center mb-6">
                        <Icon size={20} className="text-brown dark:text-night-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif font-light text-dark dark:text-night-text text-xl mb-3">
                        {service.title}
                    </h3>
                    <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed mb-6">
                        {service.description}
                    </p>
                    <span className="font-sans text-xs tracking-[0.1em] uppercase font-medium
                        text-brown dark:text-night-accent flex items-center justify-center gap-2 mt-auto">
                        Découvrir
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}