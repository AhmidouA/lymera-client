// src/components/layout/StickyMobileCTA.tsx
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <div className="
      md:hidden
      fixed bottom-0 left-0 right-0 z-40
      bg-cream/95 dark:bg-night-bg/95
      backdrop-blur-md
      border-t border-border dark:border-night-border
      px-4 py-3
      flex gap-3
      safe-area-inset-bottom
    ">
      {/* Appeler */}
      <a
        href={`tel:${SITE.phone}`}
        className="
          flex-1 flex items-center justify-center gap-2
          py-3 rounded-full
          border border-brown text-brown
          dark:border-night-accent dark:text-night-accent
          font-sans text-sm font-medium tracking-wide
          transition-all duration-200
          hover:bg-brown hover:text-white
          dark:hover:bg-night-accent dark:hover:text-night-bg
        "
      >
        <Phone size={16} strokeWidth={1.5} />
        Appeler
      </a>

      {/* Prendre RDV */}
      <a
        href={SITE.planityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-1 flex items-center justify-center gap-2
          py-3 rounded-full
          bg-brown text-white
          dark:bg-night-accent dark:text-night-bg
          font-sans text-sm font-medium tracking-wide
          transition-all duration-200
          hover:opacity-90
        "
      >
        <Calendar size={16} strokeWidth={1.5} />
        Prendre RDV
      </a>
    </div>
  );
}