import Link from "next/link";
import { MapPin, Phone, Clock, Star, Instagram } from "lucide-react";
import { SITE, HOURS, NAV_LINKS } from "@/lib/constants";

import { getPlanityRating } from "@/lib/getPlanityRating";

export default async function Footer() {
    
    const rating = await getPlanityRating();
  return (
    <footer className="bg-beige dark:bg-night-surface border-t border-border dark:border-night-border mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-6 md:px-2 xl:px-0 py-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col info : Logo + tagline ── */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-dark dark:text-night-text">
                LYMERA
              </span>
              <p className="font-sans text-xs tracking-[0.3em] text-muted dark:text-night-text2 mt-1">
                BEAUTY STUDIO
              </p>
            </Link>
            <p className="font-sans text-sm text-muted dark:text-night-text2 mt-4 leading-relaxed">
              Institut d&apos;esthétique spécialisé en épilation laser, onglerie haute précision et drainage lymphatique à Jacou.
            </p>
                <a
                href={SITE.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group mt-5 inline-flex items-center gap-2 
                    px-3 py-2 rounded-xl 
                    bg-cream dark:bg-night-bg 
                    border border-border dark:border-night-border 
                    hover:border-brown dark:hover:border-night-accent
                    hover:scale-105 
                    transition-all duration-200
                "
                >
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-brown text-brown dark:fill-night-accent dark:text-night-accent" />
                    ))}
                </div>
              <span className="font-sans text-xs text-muted dark:text-night-text2">
                {rating.score}/5 · {rating.count} avis Planity
              </span>
            </a>
             {/* Instagram */}
<div className="mt-4 pt-4 border-t border-border dark:border-night-border">
  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted dark:text-night-text2 mb-3">
    Suivez-nous
  </p>
  <a
    href="https://www.instagram.com/lymera.beautystudio"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2
      text-muted dark:text-night-text2
      hover:text-brown dark:hover:text-night-accent
      transition-colors duration-200"
  >
    <Instagram size={16} strokeWidth={1.5} />
    <span className="font-sans text-sm">@lymera.beautystudio</span>
  </a>
</div>
          </div>
         

          {/* ── Navigation ── */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-brown dark:text-night-accent mb-5
              text-center sm:text-left">
              Navigation
            </h4>
            {/* < 640px : centré en grille 2 col | ≥ 640px : grille 3 col alignée gauche */}
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted dark:text-night-text2
                    hover:text-brown dark:hover:text-night-accent transition-colors duration-200
                    text-center sm:text-left"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Horaires ── */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-brown dark:text-night-accent mb-5">
              <Clock size={12} className="inline mr-2" />
              Horaires
            </h4>
            <div className="flex flex-col gap-2">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between items-center">
                  <span className="font-sans text-xs text-muted dark:text-night-text2 w-24">
                    {h.day}
                  </span>
                  <span className={`font-sans text-xs ${h.open ? "text-dark dark:text-night-text" : "text-muted dark:text-night-text2 italic"}`}>
                    {h.open ? `${h.open} – ${h.close}` : "Fermé"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-brown dark:text-night-accent mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">

              {/* Adresse + téléphone sur la même ligne */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <MapPin size={14} className="text-brown dark:text-night-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <address className="font-sans text-sm text-muted dark:text-night-text2 not-italic leading-relaxed">
                    {SITE.address.street}<br />
                    {SITE.address.zip} {SITE.address.city}<br />
                    <span className="text-xs text-gold dark:text-night-muted">À 10 min de Montpellier</span>
                  </address>
                </div>

                {/* Téléphone à droite de l'adresse */}
                <div className="flex gap-2 items-center shrink-0">
                  <Phone size={14} className="text-brown dark:text-night-accent" strokeWidth={1.5} />
                 <a 
                    href={`tel:${SITE.phone}`}
                    className="font-sans text-sm text-muted dark:text-night-text2 hover:text-brown dark:hover:text-night-accent transition-colors duration-200"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>

              <a
                href={SITE.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center justify-center gap-2
                    mt-2 py-3 rounded-full
                    bg-brown text-white dark:bg-night-accent dark:text-night-bg
                    font-sans text-xs font-medium tracking-wide
                    hover:opacity-90 transition-all duration-200
                "
              >
                Prendre RDV
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-border dark:border-night-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted dark:text-night-text2">
            © {new Date().getFullYear()} Lymera — Institut d&apos;esthétique Jacou
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="font-sans text-xs text-muted dark:text-night-text2 hover:text-brown dark:hover:text-night-accent transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="font-sans text-xs text-muted dark:text-night-text2 hover:text-brown dark:hover:text-night-accent transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}