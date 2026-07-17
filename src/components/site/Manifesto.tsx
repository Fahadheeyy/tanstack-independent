import { BedDouble, ShieldCheck, Users, Flame, Mountain, HeartHandshake, Camera, Car } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: BedDouble, title: "Premium Hotels", body: "Handpicked boutique stays — never a compromise." },
  { icon: ShieldCheck, title: "Verified Captains", body: "Trained trip leads on every departure." },
  { icon: Users, title: "Small Groups", body: "Never more than 16. Actual friendships." },
  { icon: Flame, title: "Bonfires", body: "Guitars, stories, marshmallows. Every night." },
  { icon: Mountain, title: "Adventure", body: "Rafting, trekking, paragliding, snow." },
  { icon: HeartHandshake, title: "Safe Travel", body: "Female-friendly, 24×7 backend, medic on call." },
  { icon: Camera, title: "Photography", body: "Reels & portraits included. Come back with a feed." },
  { icon: Car, title: "Luxury Transport", body: "Volvos, tempo travellers, private SUVs in the hills." },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">The manifesto</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02] text-[color:var(--navy)]">
              Don't book vacations.
              <br />
              <span className="italic text-gradient-gold">Collect stories.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[color:var(--ink)]/70">
              Every TripBaaz departure is designed like a magazine story — with characters, chapters, and a cover shot
              you'll frame for years. We don't sell itineraries. We sell the feeling of being 27 and free again.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * i}>
              <div className="group h-full rounded-3xl glass p-6 transition-transform hover:-translate-y-1">
                <div className="grid h-11 w-11 place-items-center rounded-2xl gold-gradient text-[color:var(--navy)] shadow-[0_10px_30px_-14px_rgba(212,175,55,0.7)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-[color:var(--navy)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/65">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
