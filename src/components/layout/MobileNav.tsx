// src/components/layout/MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import ThemeToggle from "./Header/ThemeToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => setIsOpen(false);
  const closeMenuDelayed = () => setTimeout(closeMenu, 350);

  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Cache le header au scroll vers le bas
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ── Header mobile fixe ── */}
      <div
        className={`
          lg:hidden
          fixed top-0 left-0 right-0 z-[100]
          flex items-center justify-between
          h-[72px] px-6
          bg-cream/95 dark:bg-night-bg/95
          backdrop-blur-md
          border-b border-border dark:border-night-border
          transition-transform duration-300
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
        suppressHydrationWarning
      >
        {/* Logo texte */}
        <Link
          href="/"
          onClick={closeMenuDelayed}
          className="font-serif text-xl font-light tracking-[0.2em] text-dark dark:text-night-text hover:opacity-70 transition-opacity"
        >
          LYMERA
        </Link>

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] focus:outline-none"
        >
          <span className={`
            w-6 h-[1.5px] bg-dark dark:bg-night-text
            transition-all duration-300 ease-in-out origin-center
            ${isOpen ? "rotate-45 translate-y-[7.5px]" : ""}
          `} />
          <span className={`
            w-6 h-[1.5px] bg-dark dark:bg-night-text
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 scale-x-0" : ""}
          `} />
          <span className={`
            w-6 h-[1.5px] bg-dark dark:bg-night-text
            transition-all duration-300 ease-in-out origin-center
            ${isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}
          `} />
        </button>
      </div>

      {/* ── Menu fullscreen ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              lg:hidden
              fixed inset-0 top-[72px] z-[90]
              bg-cream dark:bg-night-bg
              flex flex-col items-center justify-center
              px-8 py-12
            "
          >
            {/* Liens nav */}
            <nav className="flex flex-col items-center gap-7 mb-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenuDelayed}
                  className="
                    font-serif text-2xl font-light tracking-[0.15em] uppercase
                    text-dark dark:text-night-text
                    hover:text-brown dark:hover:text-night-accent
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Bouton RDV */}
            <div className="flex items-center gap-6 mb-10">
                <div onClick={closeMenuDelayed}>
              <a
                href={SITE.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-3 rounded-full
                  bg-brown text-white dark:bg-night-accent dark:text-night-bg
                  font-sans text-sm font-medium tracking-wide
                  hover:opacity-90 transition-all duration-200
                "
              >
                <Calendar size={16} strokeWidth={1.5} />
                Prendre RDV
              </a>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}