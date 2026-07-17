import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { destinations, type Destination } from "@/lib/trips";
import { Reveal } from "./Reveal";

export function Destinations({ onBook }: { onBook: (d: Destination) => void }) {
  return (
    <section id="destinations" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">Featured Destinations</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]">
                Eight escapes we run <span className="italic text-gradient-gold">on repeat</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <a href="#departures" className="hidden shrink-0 text-sm text-[color:var(--navy)]/70 hover:text-[color:var(--navy)] md:inline-flex">
              See all departures →
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={0.03 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-40px_rgba(10,35,66,0.35)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-medium text-[color:var(--navy)]">
                    ₹{d.price.toLocaleString("en-IN")}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <div className="font-display text-2xl leading-tight">{d.name}</div>
                    <div className="mt-1 text-xs text-white/75">{d.tagline}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <div className="flex flex-col gap-1 text-[11px] text-[color:var(--ink)]/60">
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {d.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {d.nextDeparture}</span>
                  </div>
                  <button
                    onClick={() => onBook(d)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--navy)] px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
                  >
                    Book
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
