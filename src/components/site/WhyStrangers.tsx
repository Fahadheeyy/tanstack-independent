import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Network, Mountain, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const stories = [
  { icon: Heart, title: "Friendships", body: "The kind you don't have to keep up with — you just pick up where you left off, in a different mountain." },
  { icon: Network, title: "Networking", body: "Designers, founders, editors, doctors — all sharing a tent, a table, and a Spotify queue." },
  { icon: Mountain, title: "Adventure", body: "You'll paraglide before breakfast and paint a Buddhist prayer wheel before dinner." },
  { icon: Sparkles, title: "Memories", body: "One reel. Ten portraits. Fifty inside jokes. A group chat that outlives the trip." },
];

export function WhyStrangers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="community" ref={ref} className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-[2rem]">
          <motion.img
            style={{ y }}
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80"
            alt="Friends around a bonfire in the mountains"
            className="h-[560px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-2xl glass px-4 py-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--navy)]/60">Trip 428 · Kasol</div>
            <div className="mt-1 font-display text-sm text-[color:var(--navy)]">"Bonfire, ballads, blizzards."</div>
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">Why travel with strangers?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]">
              Because the best <span className="italic text-gradient-gold">stories</span> start with a "we just met".
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={0.06 * i}>
                <div className="rounded-2xl border border-[color:var(--navy)]/8 bg-white/50 p-5 backdrop-blur-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl gold-gradient text-[color:var(--navy)]">
                    <s.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[color:var(--navy)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
