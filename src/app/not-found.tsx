"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

// Pétales animés — inspirés du logo Lymera
function Petal({ delay, x, y, rotate, scale }: { delay: number; x: number; y: number; rotate: number; scale: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: rotate - 15 }}
      animate={{ opacity: [0, 0.6, 0], y: [y - 40, y + 80], rotate: [rotate - 15, rotate + 15] }}
      // eslint-disable-next-line react-hooks/purity
      transition={{ duration: 4 + Math.random() * 2, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <svg width={12 * scale} height={20 * scale} viewBox="0 0 12 20">
        <path
          d="M6,0 C3,3 3,8 6,10 C9,8 9,3 6,0 Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}

const petals = [
  { delay: 0,   x: 15, y: 10, rotate: -20, scale: 1.2 },
  { delay: 0.8, x: 75, y: 5,  rotate: 15,  scale: 0.8 },
  { delay: 1.5, x: 40, y: 15, rotate: -5,  scale: 1.0 },
  { delay: 2.2, x: 85, y: 20, rotate: 30,  scale: 0.9 },
  { delay: 0.4, x: 60, y: 8,  rotate: -15, scale: 1.1 },
  { delay: 1.8, x: 25, y: 20, rotate: 10,  scale: 0.7 },
  { delay: 2.8, x: 90, y: 12, rotate: -25, scale: 1.0 },
  { delay: 0.2, x: 50, y: 3,  rotate: 5,   scale: 0.9 },
  { delay: 1.6, x: 80, y: 10, rotate: -10, scale: 1.1 },
  { delay: 2.4, x: 30, y: 15, rotate: 20,  scale: 0.8 },
  { delay: 0.6, x: 70, y: 8,  rotate: -15, scale: 1.0 },
  { delay: 2.0, x: 40, y: 20, rotate: 10,  scale: 0.9 },
  { delay: 1.2, x: 85, y: 5,  rotate: -20, scale: 1.1 },
  { delay: 2.6, x: 55, y: 12, rotate: 15,  scale: 0.7 },
];

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
    }, []);

  return (
    <div className="relative min-h-screen bg-cream dark:bg-night-bg flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-300">

      {/* Pétales flottants */}
      {mounted && petals.map((p, i) => <Petal key={i} {...p} />)}

      {/* Cercle décoratif flou */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] rounded-full
        bg-gold/10 dark:bg-night-accent/5
        blur-[80px] pointer-events-none" />

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-[560px]"
      >
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif font-light text-[120px] sm:text-[160px] leading-none
            text-border dark:text-night-border
            select-none mb-2"
        >
          404
        </motion.div>

        {/* Ligne décorative */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gold mb-8"
        />

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif font-light text-dark dark:text-night-text
            text-3xl sm:text-4xl mb-4 leading-snug"
        >
          Cette page s&apos;est{" "}
          <em className="italic text-brown dark:text-night-accent">évaporée</em>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans text-muted dark:text-night-text2 text-sm leading-relaxed mb-10"
        >
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou réservez directement votre séance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <Link href="/" className="btn-primary">
            ← Retour à l&apos;accueil
          </Link>
          <a 
            href={SITE.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Calendar size={15} strokeWidth={1.5} />
            Prendre RDV
          </a>
        </motion.div>

      </motion.div>

      {/* Logo discret en bas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1"
      >
        <span className="font-serif text-sm font-light tracking-[0.3em] text-muted dark:text-night-text2">
          LYMERA
        </span>
        <span className="font-sans text-xs tracking-[0.2em] text-muted/50 dark:text-night-text2/50">
          BEAUTY STUDIO
        </span>
      </motion.div>

    </div>
  );
}