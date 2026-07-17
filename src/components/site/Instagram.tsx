import { Instagram as IgIcon, Play } from "lucide-react";
import { instagramPosts } from "@/lib/trips";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">On Instagram</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-[color:var(--navy)]">
                <span className="italic text-gradient-gold">@tripbaaz</span> — every Friday, a new frame.
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-[color:var(--navy)]"
            >
              <IgIcon className="h-4 w-4" /> Follow
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {instagramPosts.map((src, i) => (
            <Reveal key={src} delay={0.03 * i}>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <img src={src} alt="Reel thumbnail" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[color:var(--navy)] backdrop-blur">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
