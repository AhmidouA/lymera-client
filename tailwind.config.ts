// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // On écrase les screens pour être explicite et précis
    screens: {
      sm:  "640px",   // ≥ 640px  — grand mobile / paysage
      md:  "768px",   // ≥ 768px  — tablette portrait
      lg:  "1024px",  // ≥ 1024px — tablette paysage / laptop
      xl:  "1280px",  // ≥ 1280px — desktop
      "2xl": "1536px",// ≥ 1536px — grand écran
    },
    extend: {
      colors: {
        // ── Light mode ──────────────────────────
        cream:  "#FAF7F2",
        beige:  "#F0E8DC",
        brown:  "#8B6347",
        gold:   "#C4A882",
        dark:   "#2C1A0E",
        muted:  "#6B4C35",
        border: "#E0D4C3",
        // ── Dark mode ───────────────────────────
        "night-bg":      "#1A1208",
        "night-surface": "#2A1E12",
        "night-accent":  "#D4AF7A",
        "night-muted":   "#A07850",
        "night-text":    "#F5EFE6",
        "night-text2":   "#C4B49A",
        "night-border":  "#3D2E1E",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans:  ["DM Sans", "sans-serif"],
      },
      fontSize: {
        // Échelle typographique cohérente
        "display": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1" }],
        "h1":      ["clamp(2rem, 4vw, 3.5rem)",   { lineHeight: "1.15" }],
        "h2":      ["clamp(1.6rem, 3vw, 2.75rem)", { lineHeight: "1.2" }],
        "h3":      ["clamp(1.25rem, 2vw, 1.75rem)",{ lineHeight: "1.3" }],
      },
      spacing: {
        // Espacements sémantiques réutilisables
        "section-y":    "5rem",    // padding vertical des sections
        "section-y-sm": "3rem",    // idem mobile
        "container-x":  "1.5rem",  // padding horizontal mobile
      },
      maxWidth: {
        "container": "1200px",     // largeur max du contenu
        "container-sm": "720px",   // pour les pages texte (contact, mentions)
      },
      borderRadius: {
        "xl":  "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        "card":  "0 4px 24px rgba(44, 26, 14, 0.07)",
        "card-hover": "0 8px 40px rgba(44, 26, 14, 0.13)",

        /* dark mode */
        "card-dark":  "0 4px 24px rgba(10, 6, 2, 0.6)",
        "card-hover-dark":  "0 8px 40px rgba(107, 76, 53, 0.4)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;