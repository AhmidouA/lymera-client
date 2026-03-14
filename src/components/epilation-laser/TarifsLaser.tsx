"use client";
import { useState } from "react";
import {tarifsZonesFemme, forfaitsFemme, tarifsZonesHomme, forfaitsHomme} from "@/lib/epilation-laser/constants";

function TarifRow({ name, duration, price }: { name: string; duration: string; price: string }) {
  return (
    <div className="flex items-center justify-between
      bg-cream dark:bg-night-bg
      border border-border dark:border-night-border
      rounded-xl px-5 py-4 transition-colors duration-300">
      <div>
        <p className="font-sans text-sm text-dark dark:text-night-text">{name}</p>
        <p className="font-sans text-xs text-muted dark:text-night-text2 mt-0.5">{duration}</p>
      </div>
      <span className="font-serif font-light text-brown dark:text-night-accent text-xl shrink-0 ml-4">
        {price}
      </span>
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-border dark:bg-night-border" />
      <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted dark:text-night-text2 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-border dark:bg-night-border" />
    </div>
  );
}

export default function TarifsLaser() {
  const [tab, setTab] = useState<"femme" | "homme">("femme");

  return (
    <section id="tarifs" className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        {/* Header centré */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Tarifs épilation laser
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl mb-5">
            Zones &amp; forfaits
          </h2>
          <p className="font-sans text-muted dark:text-night-text2 text-sm max-w-[480px] mx-auto leading-relaxed">
            Tous nos tarifs incluent le bilan offert. Forfaits disponibles pour les combinaisons les plus demandées.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-border dark:border-night-border rounded-xl overflow-hidden">
            <button
              onClick={() => setTab("femme")}
              className={`px-8 py-2.5 font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200
                ${tab === "femme"
                  ? "bg-brown dark:bg-night-accent text-white dark:text-night-bg"
                  : "text-muted dark:text-night-text2 hover:text-brown dark:hover:text-night-accent"
                }`}
            >
              Femme
            </button>
            <button
              onClick={() => setTab("homme")}
              className={`px-8 py-2.5 font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200
                ${tab === "homme"
                  ? "bg-brown dark:bg-night-accent text-white dark:text-night-bg"
                  : "text-muted dark:text-night-text2 hover:text-brown dark:hover:text-night-accent"
                }`}
            >
              Homme
            </button>
          </div>
        </div>

        {/* Contenu Femme */}
        {tab === "femme" && (
          <div>
            <SectionDivider label="Zones par zone" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 lg:px-4 xl:px-0">
              {tarifsZonesFemme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
            <SectionDivider label="Forfaits combinés" />
            <div className="flex flex-col gap-3">
              {forfaitsFemme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
          </div>
        )}

        {/* Contenu Homme */}
        {tab === "homme" && (
          <div>
            <SectionDivider label="Zones par zone" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {tarifsZonesHomme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
            <SectionDivider label="Forfaits combinés" />
            <div className="flex flex-col gap-3">
              {forfaitsHomme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}