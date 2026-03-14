import { MapPin, Phone, Clock } from "lucide-react";
import { SITE, HOURS } from "@/lib/constants";

export default function Localisation() {
  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 md:px-2 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            {/* ── Titre centré < lg ── */}
            <div className="text-center lg:text-left mb-10">
              <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
                Nous trouver
              </p>
              <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-6">
                À 10 min de<br />Montpellier
              </h2>
              <div className="w-12 h-px bg-gold mx-auto lg:mx-0" />
            </div>

            {/* ── Items ── */}
            <div className="flex flex-col gap-8 items-center lg:items-start">

              {/* Adresse + Téléphone côte à côte < lg */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start w-full">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl shrink-0 bg-cream dark:bg-night-bg border border-border dark:border-night-border flex items-center justify-center">
                    <MapPin size={14} className="text-brown dark:text-night-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-1">Adresse</p>
                    <address className="font-sans text-sm text-dark dark:text-night-text not-italic leading-relaxed">
                      {SITE.address.street}<br />
                      {SITE.address.zip} {SITE.address.city}<br />
                      <span className="text-xs text-gold dark:text-night-muted">À 10 min de Montpellier</span>
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl shrink-0 bg-cream dark:bg-night-bg border border-border dark:border-night-border flex items-center justify-center">
                    <Phone size={14} className="text-brown dark:text-night-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-1">Téléphone</p>
                    <a href={`tel:${SITE.phone}`}
                      className="font-sans text-sm text-dark dark:text-night-text hover:text-brown dark:hover:text-night-accent transition-colors duration-200">
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex gap-4 w-full">
                <div className="w-9 h-9 rounded-xl shrink-0 bg-cream dark:bg-night-bg border border-border dark:border-night-border flex items-center justify-center">
                  <Clock size={14} className="text-brown dark:text-night-accent" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-3">Horaires</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex justify-between pb-1.5 border-b border-border dark:border-night-border">
                        <span className="font-sans text-xs text-muted dark:text-night-text2">{h.day}</span>
                        <span className={`font-sans text-xs ${h.open ? "text-dark dark:text-night-text" : "text-muted dark:text-night-text2 italic"}`}>
                          {h.open ? `${h.open} – ${h.close}` : "Fermé"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[400px] lg:h-[460px] rounded-2xl overflow-hidden border border-border dark:border-night-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d3.924!3d43.647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s14+Rue+de+l%27Autan%2C+34830+Jacou!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Institut Lymera — 14 Rue de l'Autan, 34830 Jacou"
            />
          </div>

        </div>
      </div>
    </section>
  );
}