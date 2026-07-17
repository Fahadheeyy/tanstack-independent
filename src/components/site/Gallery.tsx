import { motion } from "framer-motion";
import { galleryImages } from "@/lib/trips";
import { Reveal } from "./Reveal";

const labels = ["Kasol", "Ladakh", "Goa", "Spiti", "Kashmir", "Manali", "Rajasthan", "Rishikesh", "Udaipur", "Meghalaya", "Coorg", "Andaman"];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">The archive</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]">
                A year of <span className="italic text-gradient-gold">Fridays</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="max-w-sm text-sm text-[color:var(--ink)]/60">
              Real frames from real departures. No stock, no staging — just travelers, captains and cold coffees at 3000m.
            </p>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4 [&>*]:mb-4 sm:[&>*]:mb-5">
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={0.02 * i}>
              <motion.figure
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={src}
                  alt={labels[i % labels.length]}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {labels[i % labels.length]}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
