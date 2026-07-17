import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/2711111/2711111-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--navy)]/70 via-[color:var(--navy)]/55 to-[color:var(--navy)]/90" />

      <div className="mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">This Friday</p>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] text-white"
          >
            The Mountains
            <br />
            <span className="italic text-gradient-gold">are Calling.</span>
          </motion.h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-base text-white/75">
            Your seat is one message away. Book online, or talk to a human on WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#departures"
              className="group inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-18px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Book Your Next Adventure
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%20TripBaaz%2C%20I'd%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
