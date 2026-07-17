import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const items = [
  { q: "Who joins TripBaaz trips?", a: "80% solo travelers aged 22–34: founders, designers, doctors, editors, consultants. Every trip is vetted and gender-balanced." },
  { q: "Are the trips safe for solo women?", a: "Yes. Female captains on request, women-only rooms, verified stays, 24×7 backend, and a strict no-nonsense group policy." },
  { q: "What's the group size?", a: "Never more than 16 travelers per departure. Small enough to become a family, big enough for a great party." },
  { q: "How do payments work?", a: "Reserve your seat with 25% now, pay the rest a week before departure. Full refund up to 21 days out." },
  { q: "Can I customise a private trip?", a: "Absolutely. WhatsApp us and our concierge team will design a private departure for your crew, honeymoon or corporate offsite." },
  { q: "What if I want to extend my stay?", a: "Just tell your captain — we'll help arrange your extended stay, transport back, and any add-on activities." },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">Answers</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.05] text-[color:var(--navy)]">
              Frequently <span className="italic text-gradient-gold">asked</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm text-sm text-[color:var(--ink)]/65">
              Something else? Message our concierge on WhatsApp — most travelers get a reply in under 5 minutes.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="border-[color:var(--navy)]/10">
                <AccordionTrigger className="py-6 text-left font-display text-lg text-[color:var(--navy)]">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-[color:var(--ink)]/70">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
