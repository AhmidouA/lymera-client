"use client";
import { useState } from "react";
import { Zap, Sparkles, Waves } from "lucide-react";
import {
  tarifsZonesFemme, forfaitsFemme,
  tarifsZonesHomme, forfaitsHomme,
  tarifsOnglerie, tarifDrainage,
  type TarifItem,
} from "@/lib/tarifs/constants";

type Tab = "femme" | "homme" | "onglerie" | "drainage";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "femme",    label: "Épilation Femme", icon: <Zap size={14} strokeWidth={1.5} /> },
  { id: "homme",   label: "Épilation Homme", icon: <Zap size={14} strokeWidth={1.5} /> },
  { id: "onglerie", label: "Onglerie",        icon: <Sparkles size={14} strokeWidth={1.5} /> },
  { id: "drainage", label: "Drainage",        icon: <Waves size={14} strokeWidth={1.5} /> },
];

function TarifRow({ name, duration, price }: TarifItem) {
  return (
    <div className="flex items-center justify-between
      bg-beige dark:bg-night-surface
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

function CategoryTitle({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-serif font-light text-dark dark:text-night-text text-2xl lg:text-3xl shrink-0">
        {label}
      </h2>
      <div className="flex-1 h-px bg-border dark:bg-night-border" />
    </div>
  );
}

export default function TabsTarifs() {
  const [activeTab, setActiveTab] = useState<Tab>("femme");

  return (
    <section className="bg-cream dark:bg-night-bg transition-colors duration-300 ">

      {/* Tabs sticky   bg-cream/95 dark:bg-night-bg/95  border-b border-border dark:border-night-border*/}
      <div className="sticky top-[72px] z-40   
        backdrop-blur-md    
        py-4">
        <div className="max-w-container mx-auto px-6 lg:px-0">
          <div className="flex gap-2 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  font-sans text-xs tracking-[0.08em] uppercase
                  border transition-all duration-200
                  ${activeTab === tab.id
                    ? "bg-brown dark:bg-night-accent text-white dark:text-night-bg border-brown dark:border-night-accent"
                    : "bg-transparent text-muted dark:text-night-text2 border-border dark:border-night-border hover:border-brown dark:hover:border-night-accent hover:text-brown dark:hover:text-night-accent"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-container mx-auto px-6 py-12 lg:px-4 xl:px-0">

        {/* FEMME */}
        {activeTab === "femme" && (
          <div>
            <CategoryTitle label="Épilation Laser — Femme" />
            <SectionDivider label="Zones par zone" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {tarifsZonesFemme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
            <SectionDivider label="Forfaits combinés" />
            <div className="flex flex-col gap-3 ">
              {forfaitsFemme.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
          </div>
        )}

        {/* HOMME */}
        {activeTab === "homme" && (
          <div>
            <CategoryTitle label="Épilation Laser — Homme" />
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

        {/* ONGLERIE */}
        {activeTab === "onglerie" && (
          <div>
            <CategoryTitle label="Onglerie" />
            <SectionDivider label="Poses & soins" />
            <div className="grid sm:grid-cols-2 gap-3">
              {tarifsOnglerie.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
          </div>
        )}

        {/* DRAINAGE */}
        {activeTab === "drainage" && (
          <div>
            <CategoryTitle label="Drainage Lymphatique" />
            <SectionDivider label="Soin" />
            <div className="max-w-[600px]">
              {tarifDrainage.map((t) => <TarifRow key={t.name} {...t} />)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}