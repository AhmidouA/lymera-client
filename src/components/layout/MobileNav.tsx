// src/components/layout/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="
          lg:hidden p-2 rounded-full
          text-muted dark:text-night-text2
          hover:bg-beige dark:hover:bg-night-surface
          transition-all duration-200
        "
      >
        <Menu size={20} strokeWidth={1.5} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-dark/30 dark:bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[300px]
          bg-cream dark:bg-night-bg
          border-l border-border dark:border-night-border
          shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header du drawer */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-border dark:border-night-border">
          <span className="font-serif text-lg font-light text-dark dark:text-night-text tracking-widest">
            LYMERA
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="
              p-2 rounded-full
              text-muted dark:text-night-text2
              hover:bg-beige dark:hover:bg-night-surface
              transition-all duration-200
            "
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Liens nav */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                font-sans text-sm tracking-widest uppercase
                text-muted dark:text-night-text2
                hover:text-brown dark:hover:text-night-accent
                py-3 border-b border-border/50 dark:border-night-border/50
                transition-colors duration-200
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA bas du drawer */}
        <div className="px-6 pb-8 flex flex-col gap-3">
          <a
            href={SITE.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="
              flex items-center justify-center gap-2
              w-full py-3.5 rounded-full
              bg-brown text-white dark:bg-night-accent dark:text-night-bg
              font-sans text-sm font-medium tracking-wide
              transition-all duration-200 hover:opacity-90
            "
          >
            <Calendar size={16} strokeWidth={1.5} />
            Prendre RDV en ligne
          </a>

          <a
            href={`tel:${SITE.phone}`}
            onClick={() => setOpen(false)}
            className="
              flex items-center justify-center gap-2
              w-full py-3.5 rounded-full
              border border-brown text-brown
              dark:border-night-accent dark:text-night-accent
              font-sans text-sm font-medium tracking-wide
              transition-all duration-200 hover:bg-brown hover:text-white
              dark:hover:bg-night-accent dark:hover:text-night-bg
            "
          >
            <Phone size={16} strokeWidth={1.5} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}