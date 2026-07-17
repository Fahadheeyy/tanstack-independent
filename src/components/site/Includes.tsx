import { Bus, Hotel, Coffee, UtensilsCrossed, MapPin, Flame, UserCheck, Camera, LifeBuoy, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Bus, label: "Transport" },
  { icon: Hotel, label: "Hotels" },
  { icon: Coffee, label: "Breakfast" },
  { icon: UtensilsCrossed, label: "Dinner" },
  { icon: MapPin, label: "Sightseeing" },
  { icon: Flame, label: "Campfire" },
  { icon: UserCheck, label: "Trip Captain" },
  { icon: Camera, label: "Photography" },
  { icon: LifeBuoy, label: "24×7 Support" },
  { icon: HeartPulse, label: "Medical Support" },
];

export function Includes() {
  return (
    <section id="includes" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60">Every trip includes</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-[color:var(--navy)]">
              Nothing to think about. <span className="italic text-gradient-gold">Except the view.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.03 * i}>
              <div className="group flex flex-col items-center rounded-2xl border border-[color:var(--navy)]/8 bg-white/60 p-6 text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gold-gradient text-[color:var(--navy)]">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-medium text-[color:var(--navy)]">{it.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
