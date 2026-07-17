import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, Clock, MessageCircle, Phone, Users, Check } from "lucide-react";
import type { Destination } from "@/lib/trips";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function BookingModal({
  destination,
  open,
  onOpenChange,
}: {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!destination) return null;
  const wa = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi TripBaaz, I'd like to book ${destination.name} on ${destination.nextDeparture}.`,
  )}`;
  const seatsLeft = 6;
  const total = 16;
  const pct = Math.round(((total - seatsLeft) / total) * 100);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(96vw,860px)] max-w-none overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-0 shadow-[0_40px_120px_-30px_rgba(10,35,66,0.5)] backdrop-blur-xl sm:max-w-none">
        <VisuallyHidden>
          <DialogTitle>Book {destination.name}</DialogTitle>
          <DialogDescription>Reserve your seat on the next TripBaaz departure to {destination.name}.</DialogDescription>
        </VisuallyHidden>
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[220px] md:min-h-full">
            <img src={destination.image} alt={destination.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-[color:var(--navy)]/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                Next departure
              </div>
              <div className="mt-4 font-display text-4xl leading-tight">{destination.name}</div>
              <div className="mt-1 text-sm text-white/80">{destination.tagline}</div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" /> {destination.nextDeparture}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[color:var(--gold)]" /> {destination.duration}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50">From</div>
              <div className="flex items-baseline gap-2">
                <div className="font-display text-4xl text-[color:var(--navy)]">₹{destination.price.toLocaleString("en-IN")}</div>
                <div className="text-sm text-[color:var(--ink)]/50">per person</div>
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--navy)]/10 bg-white/60 p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-[color:var(--ink)]/70">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3 w-3" /> {seatsLeft} seats remaining</span>
                <span>{pct}% booked</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--navy)]/10">
                <div className="h-full gold-gradient" style={{ width: `${pct}%` }} />
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50">Trip highlights</div>
              <ul className="mt-3 space-y-2">
                {destination.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[color:var(--ink)]/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50">Included</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Transport", "Stay", "Meals", "Captain", "Photography", "24×7 Support"].map((t) => (
                  <span key={t} className="rounded-full border border-[color:var(--navy)]/10 bg-white/70 px-3 py-1 text-xs text-[color:var(--navy)]/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gold-gradient px-5 py-3 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-24px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Book via WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--navy)]/15 bg-white px-5 py-3 text-sm font-medium text-[color:var(--navy)] hover:-translate-y-0.5 transition-transform"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
