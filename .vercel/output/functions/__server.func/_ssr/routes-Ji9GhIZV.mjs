import { __toESM } from "../_runtime.mjs";
import { Content2, Header, Item, Root2, Trigger2, require_jsx_runtime, require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "../_libs/framer-motion.mjs";
import { ArrowLeft, ArrowRight, ArrowUpRight, BedDouble, Bus, Calendar, Camera, Car, Check, ChevronDown, Clock, Coffee, Flame, Heart, HeartHandshake, HeartPulse, Hotel, Instagram, LifeBuoy, Mail, MapPin, Menu, MessageCircle, Mountain, Network, Phone, Play, ShieldCheck, Sparkles, Star, UserCheck, Users, UtensilsCrossed, X } from "../_libs/lucide-react.mjs";
import { useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { clsx } from "../_libs/clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
import { Dialog as Dialog$1, DialogClose, DialogContent as DialogContent$1, DialogDescription as DialogDescription$1, DialogOverlay as DialogOverlay$1, DialogPortal as DialogPortal$1, DialogTitle as DialogTitle$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { VisuallyHidden } from "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import { Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ji9GhIZV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Destinations",
		href: "#destinations"
	},
	{
		label: "Departures",
		href: "#departures"
	},
	{
		label: "Community",
		href: "#community"
	},
	{
		label: "Reviews",
		href: "#reviews"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-full px-4 py-2 transition-all sm:px-6 ${scrolled ? "glass" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-full gold-gradient text-[13px] font-bold text-[color:var(--navy)]",
							children: "T"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg tracking-tight text-[color:var(--navy)]",
							children: "TripBaaz"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 md:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-[color:var(--navy)]/80 transition-colors hover:text-[color:var(--navy)]",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							whileHover: { y: -1 },
							whileTap: { scale: .97 },
							href: "#departures",
							className: "hidden rounded-full gold-gradient px-4 py-2 text-sm font-medium text-[color:var(--navy)] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.6)] md:inline-flex",
							children: "Book a Trip"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Open menu",
							onClick: () => setOpen((v) => !v),
							className: "grid h-9 w-9 place-items-center rounded-full glass md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mt-2 rounded-3xl glass p-4 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm text-[color:var(--navy)] hover:bg-white/60",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#departures",
						onClick: () => setOpen(false),
						className: "mt-1 rounded-full gold-gradient px-4 py-2 text-center text-sm font-medium text-[color:var(--navy)]",
						children: "Book a Trip"
					})]
				})
			})]
		})
	});
}
var chips = [
	{
		emoji: "🔥",
		label: "Goa",
		meta: "3N · from ₹8,999"
	},
	{
		emoji: "🏔",
		label: "Spiti",
		meta: "7N · from ₹21,999"
	},
	{
		emoji: "🏞",
		label: "Kashmir",
		meta: "5N · from ₹18,499"
	},
	{
		emoji: "🌊",
		label: "Udaipur",
		meta: "3N · from ₹12,499"
	}
];
var stats = [
	{
		k: "17K+",
		v: "Travelers"
	},
	{
		k: "1000+",
		v: "Trips run"
	},
	{
		k: "4.9★",
		v: "Avg rating"
	},
	{
		k: "Fri",
		v: "Weekly departures"
	}
];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative min-h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "absolute inset-0 h-full w-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "https://videos.pexels.com/video-files/1526909/1526909-uhd_2560_1440_30fps.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/70 via-[color:var(--navy)]/40 to-[color:var(--navy)]/85" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(212,175,55,0.28),transparent_60%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-40 sm:px-6 sm:pb-24 md:justify-center md:pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mb-6 inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" }), "India's Premium Travel Community"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .25,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "max-w-4xl font-display text-[clamp(2.75rem,7vw,6.25rem)] font-light leading-[0.98] text-white",
						children: [
							"Travel with strangers.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "Leave with family."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .45
						},
						className: "mt-6 max-w-xl text-base text-white/80 sm:text-lg",
						children: "India's fastest-growing premium travel community for Gen Z & Millennials. Curated group departures, every Friday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .6
						},
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#destinations",
							className: "group inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-20px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5",
							children: ["Explore Trips", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#community",
							className: "inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/10",
							children: "Join Community"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .75
						},
						className: "mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 font-display text-3xl text-white",
							children: [s.k, s.k === "4.9★" ? null : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-white/60",
							children: s.v
						})] }, s.v))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 z-10 hidden md:block",
				children: chips.map((c, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: [
								0,
								-8,
								0
							]
						},
						transition: {
							opacity: {
								duration: .6,
								delay: .9 + i * .12
							},
							y: {
								duration: 5 + i,
								repeat: Infinity,
								ease: "easeInOut",
								delay: i * .4
							}
						},
						className: `pointer-events-auto absolute ${[
							"right-[6%] top-[22%]",
							"right-[18%] top-[52%]",
							"right-[4%] bottom-[22%]",
							"right-[22%] bottom-[10%]"
						][i]} flex items-center gap-3 rounded-2xl glass px-4 py-3`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: c.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium text-[color:var(--navy)]",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-[color:var(--navy)]/60",
							children: c.meta
						})] })]
					}, c.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-6 z-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" }), "Scroll to explore"]
				})
			})
		]
	});
}
function Reveal({ children, delay = 0, y = 24, className }) {
	const variants = {
		hidden: {
			opacity: 0,
			y: useReducedMotion() ? 0 : y
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .7,
				delay,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants,
		className,
		children
	});
}
var features = [
	{
		icon: BedDouble,
		title: "Premium Hotels",
		body: "Handpicked boutique stays — never a compromise."
	},
	{
		icon: ShieldCheck,
		title: "Verified Captains",
		body: "Trained trip leads on every departure."
	},
	{
		icon: Users,
		title: "Small Groups",
		body: "Never more than 16. Actual friendships."
	},
	{
		icon: Flame,
		title: "Bonfires",
		body: "Guitars, stories, marshmallows. Every night."
	},
	{
		icon: Mountain,
		title: "Adventure",
		body: "Rafting, trekking, paragliding, snow."
	},
	{
		icon: HeartHandshake,
		title: "Safe Travel",
		body: "Female-friendly, 24×7 backend, medic on call."
	},
	{
		icon: Camera,
		title: "Photography",
		body: "Reels & portraits included. Come back with a feed."
	},
	{
		icon: Car,
		title: "Luxury Transport",
		body: "Volvos, tempo travellers, private SUVs in the hills."
	}
];
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "manifesto",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "The manifesto"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02] text-[color:var(--navy)]",
						children: [
							"Don't book vacations.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "Collect stories."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-base leading-relaxed text-[color:var(--ink)]/70",
						children: "Every TripBaaz departure is designed like a magazine story — with characters, chapters, and a cover shot you'll frame for years. We don't sell itineraries. We sell the feeling of being 27 and free again."
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-3xl glass p-6 transition-transform hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-2xl gold-gradient text-[color:var(--navy)] shadow-[0_10px_30px_-14px_rgba(212,175,55,0.7)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg text-[color:var(--navy)]",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-[color:var(--ink)]/65",
								children: f.body
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
var U = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
var destinations = [
	{
		slug: "goa",
		name: "Goa",
		tagline: "Sunsets, shacks & susegad",
		image: U("photo-1512343879784-a960bf40e7f2"),
		price: 8999,
		duration: "3N / 4D",
		nextDeparture: "Fri, 24 Jul",
		highlights: [
			"Beachfront resort",
			"Sunset cruise",
			"Café hopping in Assagao",
			"Silent disco night"
		]
	},
	{
		slug: "spiti",
		name: "Spiti",
		tagline: "Middle-land of the Himalayas",
		image: U("photo-1626621341517-bbf3d9990a23"),
		price: 21999,
		duration: "7N / 8D",
		nextDeparture: "Fri, 09 Aug",
		highlights: [
			"Chandratal camping",
			"Key Monastery sunrise",
			"Hikkim post office",
			"Starlit bonfire"
		]
	},
	{
		slug: "kashmir",
		name: "Kashmir",
		tagline: "Paradise on earth",
		image: U("photo-1566837945700-30057527ade0"),
		price: 18499,
		duration: "5N / 6D",
		nextDeparture: "Fri, 02 Aug",
		highlights: [
			"Shikara on Dal Lake",
			"Gulmarg gondola",
			"Betaab valley",
			"Wazwan feast"
		]
	},
	{
		slug: "kasol",
		name: "Kasol",
		tagline: "Mini Israel of Parvati",
		image: U("photo-1583752028088-91e3e9880dfd"),
		price: 6999,
		duration: "2N / 3D",
		nextDeparture: "Fri, 25 Jul",
		highlights: [
			"Kheerganga trek",
			"Riverside camps",
			"Café Evergreen",
			"Bonfire jam"
		]
	},
	{
		slug: "manali",
		name: "Manali",
		tagline: "Apple orchards & alpine air",
		image: U("photo-1626015449321-a08c47c8b4c5"),
		price: 9499,
		duration: "3N / 4D",
		nextDeparture: "Fri, 01 Aug",
		highlights: [
			"Solang paragliding",
			"Old Manali cafés",
			"Snow point at Rohtang",
			"Riverside bonfire"
		]
	},
	{
		slug: "udaipur",
		name: "Udaipur",
		tagline: "City of lakes & palaces",
		image: U("photo-1599661046289-e31897846e41"),
		price: 12499,
		duration: "3N / 4D",
		nextDeparture: "Fri, 30 Jul",
		highlights: [
			"Lake Pichola boat",
			"City Palace tour",
			"Rooftop dining",
			"Old-city walk"
		]
	},
	{
		slug: "rajasthan",
		name: "Rajasthan",
		tagline: "Desert kingdoms & camel dunes",
		image: U("photo-1477587458883-47145ed94245"),
		price: 15999,
		duration: "5N / 6D",
		nextDeparture: "Fri, 16 Aug",
		highlights: [
			"Jaisalmer dunes",
			"Camel safari",
			"Fort sunset",
			"Cultural night in the desert"
		]
	},
	{
		slug: "rishikesh",
		name: "Rishikesh",
		tagline: "Yoga capital & river rush",
		image: U("photo-1591018207812-1e75d3cc75f5"),
		price: 5999,
		duration: "2N / 3D",
		nextDeparture: "Fri, 25 Jul",
		highlights: [
			"White-water rafting",
			"Cliff jumping",
			"Ganga aarti",
			"Beatles Ashram"
		]
	}
];
var departures = [
	{
		destination: "Spiti",
		date: "Fri, 09 Aug",
		length: "7N / 8D",
		price: 21999,
		seats: 4,
		total: 14,
		slug: "spiti"
	},
	{
		destination: "Kashmir",
		date: "Fri, 02 Aug",
		length: "5N / 6D",
		price: 18499,
		seats: 7,
		total: 16,
		slug: "kashmir"
	},
	{
		destination: "Goa",
		date: "Fri, 24 Jul",
		length: "3N / 4D",
		price: 8999,
		seats: 2,
		total: 18,
		slug: "goa"
	},
	{
		destination: "Udaipur",
		date: "Fri, 30 Jul",
		length: "3N / 4D",
		price: 12499,
		seats: 9,
		total: 16,
		slug: "udaipur"
	},
	{
		destination: "Rajasthan",
		date: "Fri, 16 Aug",
		length: "5N / 6D",
		price: 15999,
		seats: 11,
		total: 16,
		slug: "rajasthan"
	},
	{
		destination: "Rishikesh",
		date: "Fri, 25 Jul",
		length: "2N / 3D",
		price: 5999,
		seats: 5,
		total: 20,
		slug: "rishikesh"
	}
];
var reviews = [
	{
		name: "Ananya Rao",
		trip: "Spiti Valley · June '26",
		avatar: U("photo-1544005313-94ddf0286df2", 400),
		quote: "Booked solo, came back with fifteen friends and a full camera roll. TripBaaz doesn't do vacations — they do memories.",
		rating: 5
	},
	{
		name: "Rohan Mehta",
		trip: "Kashmir · May '26",
		avatar: U("photo-1502685104226-ee32379fefbe", 400),
		quote: "Everything from the shikara to the wazwan was thought through. Felt like a private trip with the entire group.",
		rating: 5
	},
	{
		name: "Zoya Khan",
		trip: "Goa Sunset Edition",
		avatar: U("photo-1489424731084-a5d8b219a5bb", 400),
		quote: "The captains, the villa, the bonfires. Every hour was Instagram. Zero moments felt like a package tour.",
		rating: 5
	},
	{
		name: "Aditya Verma",
		trip: "Jaisalmer Dunes",
		avatar: U("photo-1531123897727-8f129e1688ce", 400),
		quote: "I have never partied under a bigger sky. Ten out of ten would ghost real life for another TripBaaz trip.",
		rating: 5
	}
];
var galleryImages = [
	U("photo-1493246507139-91e8fad9978e"),
	U("photo-1526772662000-3f88f10405ff"),
	U("photo-1464822759023-fed622ff2c3b"),
	U("photo-1470770841072-f978cf4d019e"),
	U("photo-1533105079780-92b9be482077"),
	U("photo-1500835556837-99ac94a94552"),
	U("photo-1548013146-72479768bada"),
	U("photo-1483728642387-6c3bdd6c93e5"),
	U("photo-1502786129293-79981df4e689"),
	U("photo-1519681393784-d120267933ba"),
	U("photo-1476514525535-07fb3b4ae5f1"),
	U("photo-1501785888041-af3ef285b470")
];
var instagramPosts = galleryImages.slice(0, 9);
function Destinations({ onBook }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "destinations",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "Featured Destinations"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: [
							"Eight escapes we run ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "on repeat"
							}),
							"."
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#departures",
					className: "hidden shrink-0 text-sm text-[color:var(--navy)]/70 hover:text-[color:var(--navy)] md:inline-flex",
					children: "See all departures →"
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: destinations.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .03 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 22
						},
						className: "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-40px_rgba(10,35,66,0.35)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-medium text-[color:var(--navy)]",
									children: ["₹", d.price.toLocaleString("en-IN")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-4 bottom-4 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl leading-tight",
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs text-white/75",
										children: d.tagline
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 text-[11px] text-[color:var(--ink)]/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
										" ",
										d.duration
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
										" ",
										d.nextDeparture
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onBook(d),
								className: "inline-flex items-center gap-1.5 rounded-full bg-[color:var(--navy)] px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5",
								children: ["Book", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							})]
						})]
					})
				}, d.slug))
			})]
		})
	});
}
function Departures({ onBook }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "departures",
		className: "relative overflow-hidden py-28 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 navy-gradient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_80%_0%,rgba(212,175,55,0.25),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-white/60",
							children: "Every Friday"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-white",
								children: [
									"Upcoming ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gradient-gold",
										children: "group departures"
									}),
									"."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-lg text-sm text-white/70",
								children: "Weekend to two-week odysseys. Small groups, verified captains, curated stays."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-5",
						children: departures.map((d, i) => {
							const dest = destinations.find((x) => x.slug === d.slug);
							const pct = Math.round((d.total - d.seats) / d.total * 100);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .04 * i,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative sm:pl-14",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[9px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full gold-gradient shadow-[0_0_0_4px_rgba(212,175,55,0.15)] sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										whileHover: { y: -3 },
										className: "grid gap-6 rounded-3xl glass-dark p-6 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-2xl text-white",
												children: d.destination
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs text-white/60",
												children: dest.tagline
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1 text-sm text-white/85",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
														" ",
														d.date
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
														" ",
														d.length
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-2 flex items-center justify-between text-xs text-white/70",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
														" ",
														d.seats,
														" seats left"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "% booked"] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-1.5 w-full overflow-hidden rounded-full bg-white/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full gold-gradient",
													style: { width: `${pct}%` }
												})
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-4 sm:flex-col sm:items-end",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] uppercase tracking-widest text-white/50",
														children: "From"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "font-display text-2xl text-white",
														children: ["₹", d.price.toLocaleString("en-IN")]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => onBook(dest),
													className: "rounded-full gold-gradient px-5 py-2 text-xs font-medium text-[color:var(--navy)] transition-transform hover:-translate-y-0.5",
													children: "Book Now"
												})]
											})
										]
									})]
								})
							}, i);
						})
					})]
				})]
			})
		]
	});
}
var stories = [
	{
		icon: Heart,
		title: "Friendships",
		body: "The kind you don't have to keep up with — you just pick up where you left off, in a different mountain."
	},
	{
		icon: Network,
		title: "Networking",
		body: "Designers, founders, editors, doctors — all sharing a tent, a table, and a Spotify queue."
	},
	{
		icon: Mountain,
		title: "Adventure",
		body: "You'll paraglide before breakfast and paint a Buddhist prayer wheel before dinner."
	},
	{
		icon: Sparkles,
		title: "Memories",
		body: "One reel. Ten portraits. Fifty inside jokes. A group chat that outlives the trip."
	}
];
function WhyStrangers() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "community",
		ref,
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						style: { y },
						src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80",
						alt: "Friends around a bonfire in the mountains",
						className: "h-[560px] w-full object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 left-6 rounded-2xl glass px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.2em] text-[color:var(--navy)]/60",
							children: "Trip 428 · Kasol"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-sm text-[color:var(--navy)]",
							children: "\"Bonfire, ballads, blizzards.\""
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "Why travel with strangers?"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: [
							"Because the best ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "stories"
							}),
							" start with a \"we just met\"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .06 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[color:var(--navy)]/8 bg-white/50 p-5 backdrop-blur-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl gold-gradient text-[color:var(--navy)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4.5 w-4.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg text-[color:var(--navy)]",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-[color:var(--ink)]/70",
									children: s.body
								})
							]
						})
					}, s.title))
				})
			] })]
		})
	});
}
var labels = [
	"Kasol",
	"Ladakh",
	"Goa",
	"Spiti",
	"Kashmir",
	"Manali",
	"Rajasthan",
	"Rishikesh",
	"Udaipur",
	"Meghalaya",
	"Coorg",
	"Andaman"
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "The archive"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: [
							"A year of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "Fridays"
							}),
							"."
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-[color:var(--ink)]/60",
					children: "Real frames from real departures. No stock, no staging — just travelers, captains and cold coffees at 3000m."
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4 [&>*]:mb-4 sm:[&>*]:mb-5",
				children: galleryImages.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .02 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
						whileHover: { y: -4 },
						className: "group relative overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: labels[i % labels.length],
								loading: "lazy",
								className: "h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100",
								children: labels[i % labels.length]
							})
						]
					})
				}, src))
			})]
		})
	});
}
function Reviews() {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: true,
		align: "start"
	});
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!embla) return;
		const on = () => setIdx(embla.selectedScrollSnap());
		embla.on("select", on);
		on();
	}, [embla]);
	const prev = (0, import_react.useCallback)(() => embla?.scrollPrev(), [embla]);
	const next = (0, import_react.useCallback)(() => embla?.scrollNext(), [embla]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
						children: "Traveler reviews"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[color:var(--navy)]",
							children: [
								"Loved by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gradient-gold",
									children: "17,000+"
								}),
								" travelers."
							]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							"aria-label": "Previous",
							className: "grid h-11 w-11 place-items-center rounded-full glass hover:-translate-y-0.5 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 text-[color:var(--navy)]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							"aria-label": "Next",
							className: "grid h-11 w-11 place-items-center rounded-full gold-gradient text-[color:var(--navy)] hover:-translate-y-0.5 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					ref: emblaRef,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-6",
						children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "min-w-0 shrink-0 basis-[85%] rounded-3xl glass p-8 sm:basis-[60%] lg:basis-[42%]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 flex gap-1 text-[color:var(--gold)]",
									children: Array.from({ length: r.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl leading-snug text-[color:var(--navy)] sm:text-2xl",
									children: [
										"\"",
										r.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.avatar,
										alt: r.name,
										className: "h-12 w-12 rounded-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium text-[color:var(--navy)]",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-[color:var(--ink)]/60",
										children: r.trip
									})] })]
								})
							]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center gap-2",
					children: reviews.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => embla?.scrollTo(i),
						"aria-label": `Go to review ${i + 1}`,
						className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 gold-gradient" : "w-4 bg-[color:var(--navy)]/15"}`
					}, i))
				})
			]
		})
	});
}
var items$1 = [
	{
		icon: Bus,
		label: "Transport"
	},
	{
		icon: Hotel,
		label: "Hotels"
	},
	{
		icon: Coffee,
		label: "Breakfast"
	},
	{
		icon: UtensilsCrossed,
		label: "Dinner"
	},
	{
		icon: MapPin,
		label: "Sightseeing"
	},
	{
		icon: Flame,
		label: "Campfire"
	},
	{
		icon: UserCheck,
		label: "Trip Captain"
	},
	{
		icon: Camera,
		label: "Photography"
	},
	{
		icon: LifeBuoy,
		label: "24×7 Support"
	},
	{
		icon: HeartPulse,
		label: "Medical Support"
	}
];
function Includes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "includes",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "Every trip includes"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: ["Nothing to think about. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "Except the view."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5",
				children: items$1.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .03 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col items-center rounded-2xl border border-[color:var(--navy)]/8 bg-white/60 p-6 text-center backdrop-blur-sm transition-transform hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl gold-gradient text-[color:var(--navy)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-sm font-medium text-[color:var(--navy)]",
							children: it.label
						})]
					})
				}, it.label))
			})]
		})
	});
}
function InstagramFeed() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "instagram",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "On Instagram"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "@tripbaaz"
						}), " — every Friday, a new frame."]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-[color:var(--navy)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " Follow"]
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
				children: instagramPosts.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .03 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "#",
						whileHover: { y: -3 },
						className: "group relative block aspect-square overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "Reel thumbnail",
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[color:var(--navy)] backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5 fill-current" })
								})
							})
						]
					})
				}, src))
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var items = [
	{
		q: "Who joins TripBaaz trips?",
		a: "80% solo travelers aged 22–34: founders, designers, doctors, editors, consultants. Every trip is vetted and gender-balanced."
	},
	{
		q: "Are the trips safe for solo women?",
		a: "Yes. Female captains on request, women-only rooms, verified stays, 24×7 backend, and a strict no-nonsense group policy."
	},
	{
		q: "What's the group size?",
		a: "Never more than 16 travelers per departure. Small enough to become a family, big enough for a great party."
	},
	{
		q: "How do payments work?",
		a: "Reserve your seat with 25% now, pay the rest a week before departure. Full refund up to 21 days out."
	},
	{
		q: "Can I customise a private trip?",
		a: "Absolutely. WhatsApp us and our concierge team will design a private departure for your crew, honeymoon or corporate offsite."
	},
	{
		q: "What if I want to extend my stay?",
		a: "Just tell your captain — we'll help arrange your extended stay, transport back, and any add-on activities."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[color:var(--navy)]/60",
					children: "Answers"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.05] text-[color:var(--navy)]",
						children: [
							"Frequently ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "asked"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm text-[color:var(--ink)]/65",
						children: "Something else? Message our concierge on WhatsApp — most travelers get a reply in under 5 minutes."
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `i-${i}`,
						className: "border-[color:var(--navy)]/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-6 text-left font-display text-lg text-[color:var(--navy)]",
							children: it.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-6 text-[15px] leading-relaxed text-[color:var(--ink)]/70",
							children: it.a
						})]
					}, i))
				})
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[80svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 -z-20 h-full w-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "https://videos.pexels.com/video-files/2711111/2711111-uhd_2560_1440_24fps.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--navy)]/70 via-[color:var(--navy)]/55 to-[color:var(--navy)]/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-white/60",
						children: "This Friday"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .9,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] text-white",
							children: [
								"The Mountains",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gradient-gold",
									children: "are Calling."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-base text-white/75",
							children: "Your seat is one message away. Book online, or talk to a human on WhatsApp."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#departures",
								className: "group inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-18px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5",
								children: ["Book Your Next Adventure", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/919999999999?text=Hi%20TripBaaz%2C%20I'd%20like%20to%20plan%20a%20trip.",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us"]
							})]
						})
					})
				]
			})
		]
	});
}
var cols = [
	{
		title: "Destinations",
		links: [
			"Goa",
			"Spiti",
			"Kashmir",
			"Kasol",
			"Manali",
			"Udaipur",
			"Rajasthan",
			"Rishikesh"
		]
	},
	{
		title: "Company",
		links: [
			"About",
			"Our Captains",
			"Careers",
			"Blog",
			"Press"
		]
	},
	{
		title: "Community",
		links: [
			"Weekend Meetups",
			"Ambassadors",
			"Refer & Earn",
			"Corporate Offsites",
			"Private Trips"
		]
	},
	{
		title: "Support",
		links: [
			"Contact",
			"FAQ",
			"Cancellation",
			"Terms",
			"Privacy"
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden navy-gradient text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_0%,rgba(212,175,55,0.18),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 md:grid-cols-[1.3fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-full gold-gradient text-sm font-bold text-[color:var(--navy)]",
							children: "T"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tracking-tight",
							children: "TripBaaz"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-sm font-display text-2xl font-light leading-tight text-white/85",
						children: ["Travel with strangers. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "Leave with family."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							{
								icon: Instagram,
								label: "Instagram",
								href: "#"
							},
							{
								icon: MessageCircle,
								label: "WhatsApp",
								href: "https://wa.me/919999999999"
							},
							{
								icon: Phone,
								label: "+91 99999 99999",
								href: "tel:+919999999999"
							},
							{
								icon: Mail,
								label: "hey@tripbaaz.com",
								href: "mailto:hey@tripbaaz.com"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.href,
							target: s.href.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs text-white/85 hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" }), s.label]
						}, s.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-8 sm:grid-cols-4",
					children: cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.24em] text-white/50",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-sm text-white/75 transition-colors hover:text-[color:var(--gold)]",
							children: l
						}) }, l))
					})] }, c.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TripBaaz Travel Pvt. Ltd. Bengaluru, India."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Made for the ones who don't sit still." })]
			})]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function BookingModal({ destination, open, onOpenChange }) {
	if (!destination) return null;
	const wa = `https://wa.me/919999999999?text=${encodeURIComponent(`Hi TripBaaz, I'd like to book ${destination.name} on ${destination.nextDeparture}.`)}`;
	const seatsLeft = 6;
	const total = 16;
	const pct = Math.round((total - seatsLeft) / total * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "w-[min(96vw,860px)] max-w-none overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-0 shadow-[0_40px_120px_-30px_rgba(10,35,66,0.5)] backdrop-blur-xl sm:max-w-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VisuallyHidden, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Book ", destination.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"Reserve your seat on the next TripBaaz departure to ",
				destination.name,
				"."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[220px] md:min-h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: destination.image,
							alt: destination.name,
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-[color:var(--navy)]/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full flex-col justify-end p-6 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex w-fit items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
									children: "Next departure"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 font-display text-4xl leading-tight",
									children: destination.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-white/80",
									children: destination.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-4 text-sm text-white/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
											" ",
											destination.nextDeparture
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
											" ",
											destination.duration
										]
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50",
							children: "From"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-4xl text-[color:var(--navy)]",
								children: ["₹", destination.price.toLocaleString("en-IN")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-[color:var(--ink)]/50",
								children: "per person"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[color:var(--navy)]/10 bg-white/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between text-xs text-[color:var(--ink)]/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
										" ",
										seatsLeft,
										" seats remaining"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "% booked"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--navy)]/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full gold-gradient",
									style: { width: `${pct}%` }
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50",
							children: "Trip highlights"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: destination.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm text-[color:var(--ink)]/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" }), h]
							}, h))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-widest text-[color:var(--ink)]/50",
							children: "Included"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: [
								"Transport",
								"Stay",
								"Meals",
								"Captain",
								"Photography",
								"24×7 Support"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-[color:var(--navy)]/10 bg-white/70 px-3 py-1 text-xs text-[color:var(--navy)]/80",
								children: t
							}, t))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-2 pt-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: wa,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full gold-gradient px-5 py-3 text-sm font-medium text-[color:var(--navy)] shadow-[0_20px_60px_-24px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Book via WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919999999999",
								className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--navy)]/15 bg-white px-5 py-3 text-sm font-medium text-[color:var(--navy)] hover:-translate-y-0.5 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
							})]
						})
					]
				})]
			})]
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			scaleX,
			transformOrigin: "0% 50%"
		},
		className: "fixed left-0 right-0 top-0 z-[60] h-[2px] gold-gradient"
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			smoothWheel: true
		});
		let raf = 0;
		const loop = (t) => {
			lenis.raf(t);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
function CursorGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -400,
		y: -400
	});
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!canHover || reduce) return;
		setEnabled(true);
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "pointer-events-none fixed z-[55] h-[420px] w-[420px] rounded-full",
		style: {
			left: pos.x - 210,
			top: pos.y - 210,
			background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
			mixBlendMode: "multiply",
			filter: "blur(20px)"
		},
		animate: {
			left: pos.x - 210,
			top: pos.y - 210
		},
		transition: {
			type: "spring",
			stiffness: 60,
			damping: 15,
			mass: .6
		}
	});
}
function Loader() {
	const [show, setShow] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setShow(false), 900);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-0 z-[80] flex items-center justify-center navy-gradient",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: { duration: .6 },
				className: "font-display text-4xl tracking-tight text-gradient-gold",
				children: "TripBaaz"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[2px] w-40 overflow-hidden rounded bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { x: "-100%" },
					animate: { x: "100%" },
					transition: {
						duration: .9,
						ease: "easeInOut"
					},
					className: "absolute inset-y-0 w-1/2 gold-gradient"
				})
			})]
		})
	}) });
}
function Home() {
	const [dest, setDest] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const openBook = (d) => {
		setDest(d);
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinations, { onBook: openBook }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Departures, { onBook: openBook }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyStrangers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Includes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingModal, {
			destination: dest,
			open,
			onOpenChange: setOpen
		})
	] });
}
//#endregion
export { Home as component };
