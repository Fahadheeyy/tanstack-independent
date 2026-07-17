import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews } from "@/lib/trips";
import { Reveal } from "./Reveal";

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const on = () => setIdx(embla.selectedScrollSnap());
    embla.on("select", on);
    on();
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">Traveler reviews</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]">
                Loved by <span className="italic text-gradient-gold">17,000+</span> travelers.
              </h2>
            </Reveal>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full glass hover:-translate-y-0.5 transition-transform">
              <ArrowLeft className="h-4 w-4 text-[color:var(--navy)]" />
            </button>
            <button onClick={next} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full gold-gradient text-[color:var(--navy)] hover:-translate-y-0.5 transition-transform">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="min-w-0 shrink-0 basis-[85%] rounded-3xl glass p-8 sm:basis-[60%] lg:basis-[42%]"
              >
                <div className="mb-4 flex gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-xl leading-snug text-[color:var(--navy)] sm:text-2xl">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-medium text-[color:var(--navy)]">{r.name}</div>
                    <div className="text-xs text-[color:var(--ink)]/60">{r.trip}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 gold-gradient" : "w-4 bg-[color:var(--navy)]/15"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
