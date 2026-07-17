import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Destinations } from "@/components/site/Destinations";
import { Departures } from "@/components/site/Departures";
import { WhyStrangers } from "@/components/site/WhyStrangers";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Includes } from "@/components/site/Includes";
import { InstagramFeed } from "@/components/site/Instagram";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Loader } from "@/components/site/Loader";
import type { Destination } from "@/lib/trips";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TripBaaz — Travel with strangers. Leave with family." },
      {
        name: "description",
        content:
          "India's premium travel community for Gen Z & Millennials. Weekly group departures to Goa, Spiti, Kashmir, Manali, Udaipur and more. Small groups, verified captains, curated stays.",
      },
      { property: "og:title", content: "TripBaaz — Travel with strangers. Leave with family." },
      {
        property: "og:description",
        content: "Premium group departures every Friday. 17,000+ travelers. 4.9★ rated.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TripBaaz — India's premium travel community" },
      {
        name: "twitter:description",
        content: "Weekly curated departures. Small groups. Verified captains. Leave with family.",
      },
      {
        name: "twitter:image",
        content: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [dest, setDest] = useState<Destination | null>(null);
  const [open, setOpen] = useState(false);
  const openBook = (d: Destination) => {
    setDest(d);
    setOpen(true);
  };
  return (
    <>
      <Loader />
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Destinations onBook={openBook} />
        <Departures onBook={openBook} />
        <WhyStrangers />
        <Gallery />
        <Reviews />
        <Includes />
        <InstagramFeed />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <BookingModal destination={dest} open={open} onOpenChange={setOpen} />
    </>
  );
}
