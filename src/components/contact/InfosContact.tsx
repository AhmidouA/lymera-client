import { MapPin, Phone, Mail, Clock, Calendar, Instagram } from "lucide-react";
import { SITE, HOURS } from "@/lib/constants";

export default function InfosContact() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Infos gauche ── */}
          <div className="flex flex-col gap-8">
            {/* Adresse + Téléphone côte à côte sur lg+ */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Adresse */}
              <div className="flex gap-4 flex-1">
                <div
                  className="w-10 h-10 rounded-xl shrink-0
                  bg-beige dark:bg-night-surface
                  border border-border dark:border-night-border
                  flex items-center justify-center"
                >
                  <MapPin
                    size={16}
                    className="text-brown dark:text-night-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-2">
                    Adresse
                  </p>
                  <address className="font-sans text-sm text-dark dark:text-night-text not-italic leading-relaxed">
                    {SITE.address.street}
                    <br />
                    {SITE.address.zip} {SITE.address.city}
                    <span className="block text-xs text-gold dark:text-night-muted mt-1">
                      À 10 min de Montpellier
                    </span>
                  </address>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-4 flex-1">
                <div
                  className="w-10 h-10 rounded-xl shrink-0
                  bg-beige dark:bg-night-surface
                  border border-border dark:border-night-border
                  flex items-center justify-center"
                >
                  <Phone
                    size={16}
                    className="text-brown dark:text-night-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-2">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="font-sans text-sm font-medium text-brown dark:text-night-accent
                      hover:opacity-80 transition-opacity duration-200"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            {/* Instagram */}
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-xl shrink-0
    bg-beige dark:bg-night-surface
    border border-border dark:border-night-border
    flex items-center justify-center"
              >
                <Instagram
                  size={16}
                  className="text-brown dark:text-night-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-2">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/lymera.beautystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-brown dark:text-night-accent hover:opacity-80 transition-opacity duration-200"
                >
                  @lymera.beautystudio
                </a>
              </div>
            </div>

            {/* Planity à la place de l'email */}
            <div
              className="flex flex-col items-center text-center py-4
  bg-beige dark:bg-night-surface
  border border-border dark:border-night-border
  rounded-xl"
            >
              <div
                className="w-10 h-10 rounded-xl
    bg-cream dark:bg-night-bg
    border border-border dark:border-night-border
    flex items-center justify-center mb-3"
              >
                <Mail
                  size={16}
                  className="text-brown dark:text-night-accent"
                  strokeWidth={1.5}
                />
              </div>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-2">
                Réservation en ligne
              </p>
              <a
                href={SITE.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-brown dark:text-night-accent
      hover:opacity-80 transition-opacity duration-200"
              >
                planity.com/lymera
              </a>
            </div>

            {/* Horaires */}
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-xl shrink-0
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                flex items-center justify-center"
              >
                <Clock
                  size={16}
                  className="text-brown dark:text-night-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex-1">
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold dark:text-night-muted mb-3">
                  Horaires
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between pb-1.5 border-b border-border dark:border-night-border"
                    >
                      <span className="font-sans text-xs text-muted dark:text-night-text2">
                        {h.day}
                      </span>
                      <span
                        className={`font-sans text-xs ${h.open ? "text-dark dark:text-night-text" : "text-muted dark:text-night-text2 italic"}`}
                      >
                        {h.open ? `${h.open} – ${h.close}` : "Fermé"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouton RDV */}
            <a
              href={SITE.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <Calendar size={16} strokeWidth={1.5} />
              Prendre RDV sur Planity
            </a>
          </div>

          {/* ── Google Maps droite ── */}
          <div className="h-[500px] rounded-2xl overflow-hidden border border-border dark:border-night-border">
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
