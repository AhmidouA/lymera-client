import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-20 lg:py-24 bg-cream dark:bg-night-bg transition-colors duration-300 flex justify-center">
      <div className="max-w-container mx-auto px-6 lg:px-0">

        <div className="mb-14 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Notre équipe
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            Des mains expertes,<br />un regard attentionné
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-[1000px]">
          {TEAM.map((member) => (
            <div key={member.name}
              className="flex gap-6 items-center p-7
                bg-beige dark:bg-night-surface
                border border-border dark:border-night-border
                rounded-2xl transition-colors duration-300">

              {/* Photo en bulle */}
              <div className="w-20 h-20 rounded-full shrink-0 overflow-hidden
                border-2 border-border dark:border-night-border relative">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} Institut Lymera`}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-serif font-light text-dark dark:text-night-text text-lg mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-brown dark:text-night-accent mb-2">
                  {member.role}
                </p>
                <p className="font-sans text-xs text-muted dark:text-night-text2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/equipe" className="btn-outline w-fit">
            Voir l&apos;équipe complète →
          </Link>
        </div>

      </div>
    </section>
  );
}