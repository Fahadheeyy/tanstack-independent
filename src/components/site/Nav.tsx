import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Departures", href: "#departures" },
  { label: "Community", href: "#community" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all sm:px-6 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full gold-gradient text-[13px] font-bold text-[color:var(--navy)]">
              T
            </span>
            <span className="font-display text-lg tracking-tight text-[color:var(--navy)]">TripBaaz</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[color:var(--navy)]/80 transition-colors hover:text-[color:var(--navy)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="#departures"
              className="hidden rounded-full gold-gradient px-4 py-2 text-sm font-medium text-[color:var(--navy)] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.6)] md:inline-flex"
            >
              Book a Trip
            </motion.a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-3xl glass p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-[color:var(--navy)] hover:bg-white/60"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#departures"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full gold-gradient px-4 py-2 text-center text-sm font-medium text-[color:var(--navy)]"
              >
                Book a Trip
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
