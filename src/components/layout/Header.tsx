// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./Header/ThemeToggle";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Header desktop uniquement (lg+) ── */}
      <header
        className={`
          hidden lg:flex
          sticky top-0 z-50
          bg-cream/90 dark:bg-night-bg/90
          backdrop-blur-md
          border-b border-border dark:border-night-border
          transition-all duration-300
          ${scrolled ? "shadow-sm" : ""}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] w-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Logo dark={theme === "dark"} />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  font-sans text-xs tracking-widest uppercase
                  text-muted dark:text-night-text2
                  hover:text-brown dark:hover:text-night-accent
                  transition-colors duration-200
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={`tel:${SITE.phone}`}
              className="
                hidden xl:flex items-center gap-2
                font-sans text-xs tracking-wide
                text-muted dark:text-night-text2
                hover:text-brown dark:hover:text-night-accent
                transition-colors duration-200 font-semibold
              "
            >
              {SITE.phoneDisplay}
            </a>

            <a
              href={SITE.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-full
                bg-brown text-white dark:bg-night-accent dark:text-night-bg
                font-sans text-xs font-medium tracking-wide
                hover:opacity-90 hover:-translate-y-0.5
                transition-all duration-200 whitespace-nowrap
              "
            >
              <Calendar size={14} strokeWidth={1.5} />
              Prendre RDV
            </a>
          </div>

        </div>
      </header>

      {/* ── Spacer mobile pour compenser le header fixe ── */}
      <div className="lg:hidden h-[72px]" />
    </>
  );
}