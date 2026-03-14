"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {faqs} from "@/lib/epilation-laser/constants";



export default function FAQLaser() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 lg:px-0">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Tout savoir sur
            <br />
            l&apos;épilation laser
          </h2>
        </div>

        <div className="flex flex-col gap-3 max-w-[800px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-beige dark:bg-night-surface
        border border-border dark:border-night-border
        rounded-2xl overflow-hidden transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4
          px-6 py-5 text-center"
              >
                <span className="font-sans text-sm font-medium text-dark dark:text-night-text w-full text-center">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-brown dark:text-night-accent shrink-0 transition-transform duration-300
            ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-muted dark:text-night-text2 leading-relaxed px-6 pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
