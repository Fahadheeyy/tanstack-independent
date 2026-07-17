import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";
import { departures, destinations, type Destination } from "@/lib/trips";
import { Reveal } from "./Reveal";

export function Departures({ onBook }: { onBook: (d: Destination) => void }) {
  return (
    <section id="departures" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 navy-gradient" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_80%_0%,rgba(212,175,55,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Every Friday</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-white">
              Upcoming <span className="italic text-gradient-gold">group departures</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-lg text-sm text-white/70">
              Weekend to two-week odysseys. Small groups, verified captains, curated stays.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" />
          <ul className="space-y-5">
            {departures.map((d, i) => {
              const dest = destinations.find((x) => x.slug === d.slug)!;
              const pct = Math.round(((d.total - d.seats) / d.total) * 100);
              return (
                <Reveal key={i} delay={0.04 * i}>
                  <li className="relative sm:pl-14">
                    <span className="absolute left-[9px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full gold-gradient shadow-[0_0_0_4px_rgba(212,175,55,0.15)] sm:block" />
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="grid gap-6 rounded-3xl glass-dark p-6 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center"
                    >
                      <div>
                        <div className="font-display text-2xl text-white">{d.destination}</div>
                        <div className="mt-1 text-xs text-white/60">{dest.tagline}</div>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-white/85">
                        <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" /> {d.date}</span>
                        <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[color:var(--gold)]" /> {d.length}</span>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                          <span className="inline-flex items-center gap-1.5"><Users className="h-3 w-3" /> {d.seats} seats left</span>
                          <span>{pct}% booked</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full gold-gradient" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                        <div className="text-right">
                          <div className="text-[11px] uppercase tracking-widest text-white/50">From</div>
                          <div className="font-display text-2xl text-white">₹{d.price.toLocaleString("en-IN")}</div>
                        </div>
                        <button
                          onClick={() => onBook(dest)}
                          className="rounded-full gold-gradient px-5 py-2 text-xs font-medium text-[color:var(--navy)] transition-transform hover:-translate-y-0.5"
                        >
                          Book Now
                        </button>
                      </div>
                    </motion.div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
