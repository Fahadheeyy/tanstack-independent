import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";

const chips = [
  { emoji: "🔥", label: "Goa", meta: "3N · from ₹8,999" },
  { emoji: "🏔", label: "Spiti", meta: "7N · from ₹21,999" },
  { emoji: "🏞", label: "Kashmir", meta: "5N · from ₹18,499" },
  { emoji: "🌊", label: "Udaipur", meta: "3N · from ₹12,499" },
];

const stats = [
  { k: "17K+", v: "Travelers" },
  { k: "1000+", v: "Trips run" },
  { k: "4.9★", v: "Avg rating" },
  { k: "Fri", v: "Weekly departures" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/1526909/1526909-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/70 via-[color:var(--navy)]/40 to-[color:var(--navy)]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(212,175,55,0.28),transparent_60%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-40 sm:px-6 sm:pb-24 md:justify-center md:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
          India's Premium Travel Community
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[clamp(2.75rem,7vw,6.25rem)] font-light leading-[0.98] text-white"
        >
          Travel with strangers.
          <br />
          <span className="italic text-gradient-gold">Leave with family.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 max-w-xl text-base text-white/80 sm:text-lg"
        >
          India's fastest-growing premium travel community for Gen Z & Millennials. Curated group departures, every Friday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#destinations"
            className="group inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-20px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Explore Trips
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Join Community
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.v}>
              <div className="flex items-baseline gap-1 font-display text-3xl text-white">
                {s.k}
                {s.k === "4.9★" ? null : null}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating destination chips */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {chips.map((c, i) => {
          const positions = [
            "right-[6%] top-[22%]",
            "right-[18%] top-[52%]",
            "right-[4%] bottom-[22%]",
            "right-[22%] bottom-[10%]",
          ];
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.9 + i * 0.12 },
                y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              }}
              className={`pointer-events-auto absolute ${positions[i]} flex items-center gap-3 rounded-2xl glass px-4 py-3`}
            >
              <span className="text-xl">{c.emoji}</span>
              <div>
                <div className="text-sm font-medium text-[color:var(--navy)]">{c.label}</div>
                <div className="text-[11px] text-[color:var(--navy)]/60">{c.meta}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50">
          <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
