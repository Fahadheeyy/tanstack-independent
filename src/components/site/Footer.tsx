import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";

const cols = [
  { title: "Destinations", links: ["Goa", "Spiti", "Kashmir", "Kasol", "Manali", "Udaipur", "Rajasthan", "Rishikesh"] },
  { title: "Company", links: ["About", "Our Captains", "Careers", "Blog", "Press"] },
  { title: "Community", links: ["Weekend Meetups", "Ambassadors", "Refer & Earn", "Corporate Offsites", "Private Trips"] },
  { title: "Support", links: ["Contact", "FAQ", "Cancellation", "Terms", "Privacy"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden navy-gradient text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_0%,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-14 md:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full gold-gradient text-sm font-bold text-[color:var(--navy)]">T</span>
              <span className="font-display text-xl tracking-tight">TripBaaz</span>
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl font-light leading-tight text-white/85">
              Travel with strangers. <span className="italic text-gradient-gold">Leave with family.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999" },
                { icon: Phone, label: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: Mail, label: "hey@tripbaaz.com", href: "mailto:hey@tripbaaz.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs text-white/85 hover:bg-white/10"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-white/75 transition-colors hover:text-[color:var(--gold)]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} TripBaaz Travel Pvt. Ltd. Bengaluru, India.</div>
          <div>Made for the ones who don't sit still.</div>
        </div>
      </div>
    </footer>
  );
}
