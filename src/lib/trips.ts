export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  duration: string;
  nextDeparture: string;
  highlights: string[];
};

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "goa",
    name: "Goa",
    tagline: "Sunsets, shacks & susegad",
    image: U("photo-1512343879784-a960bf40e7f2"),
    price: 8999,
    duration: "3N / 4D",
    nextDeparture: "Fri, 24 Jul",
    highlights: ["Beachfront resort", "Sunset cruise", "Café hopping in Assagao", "Silent disco night"],
  },
  {
    slug: "spiti",
    name: "Spiti",
    tagline: "Middle-land of the Himalayas",
    image: U("photo-1626621341517-bbf3d9990a23"),
    price: 21999,
    duration: "7N / 8D",
    nextDeparture: "Fri, 09 Aug",
    highlights: ["Chandratal camping", "Key Monastery sunrise", "Hikkim post office", "Starlit bonfire"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Paradise on earth",
    image: U("photo-1566837945700-30057527ade0"),
    price: 18499,
    duration: "5N / 6D",
    nextDeparture: "Fri, 02 Aug",
    highlights: ["Shikara on Dal Lake", "Gulmarg gondola", "Betaab valley", "Wazwan feast"],
  },
  {
    slug: "kasol",
    name: "Kasol",
    tagline: "Mini Israel of Parvati",
    image: U("photo-1583752028088-91e3e9880dfd"),
    price: 6999,
    duration: "2N / 3D",
    nextDeparture: "Fri, 25 Jul",
    highlights: ["Kheerganga trek", "Riverside camps", "Café Evergreen", "Bonfire jam"],
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Apple orchards & alpine air",
    image: U("photo-1626015449321-a08c47c8b4c5"),
    price: 9499,
    duration: "3N / 4D",
    nextDeparture: "Fri, 01 Aug",
    highlights: ["Solang paragliding", "Old Manali cafés", "Snow point at Rohtang", "Riverside bonfire"],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    tagline: "City of lakes & palaces",
    image: U("photo-1599661046289-e31897846e41"),
    price: 12499,
    duration: "3N / 4D",
    nextDeparture: "Fri, 30 Jul",
    highlights: ["Lake Pichola boat", "City Palace tour", "Rooftop dining", "Old-city walk"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Desert kingdoms & camel dunes",
    image: U("photo-1477587458883-47145ed94245"),
    price: 15999,
    duration: "5N / 6D",
    nextDeparture: "Fri, 16 Aug",
    highlights: ["Jaisalmer dunes", "Camel safari", "Fort sunset", "Cultural night in the desert"],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    tagline: "Yoga capital & river rush",
    image: U("photo-1591018207812-1e75d3cc75f5"),
    price: 5999,
    duration: "2N / 3D",
    nextDeparture: "Fri, 25 Jul",
    highlights: ["White-water rafting", "Cliff jumping", "Ganga aarti", "Beatles Ashram"],
  },
];

export const departures = [
  { destination: "Spiti", date: "Fri, 09 Aug", length: "7N / 8D", price: 21999, seats: 4, total: 14, slug: "spiti" },
  { destination: "Kashmir", date: "Fri, 02 Aug", length: "5N / 6D", price: 18499, seats: 7, total: 16, slug: "kashmir" },
  { destination: "Goa", date: "Fri, 24 Jul", length: "3N / 4D", price: 8999, seats: 2, total: 18, slug: "goa" },
  { destination: "Udaipur", date: "Fri, 30 Jul", length: "3N / 4D", price: 12499, seats: 9, total: 16, slug: "udaipur" },
  { destination: "Rajasthan", date: "Fri, 16 Aug", length: "5N / 6D", price: 15999, seats: 11, total: 16, slug: "rajasthan" },
  { destination: "Rishikesh", date: "Fri, 25 Jul", length: "2N / 3D", price: 5999, seats: 5, total: 20, slug: "rishikesh" },
];

export const reviews = [
  {
    name: "Ananya Rao",
    trip: "Spiti Valley · June '26",
    avatar: U("photo-1544005313-94ddf0286df2", 400),
    quote:
      "Booked solo, came back with fifteen friends and a full camera roll. TripBaaz doesn't do vacations — they do memories.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    trip: "Kashmir · May '26",
    avatar: U("photo-1502685104226-ee32379fefbe", 400),
    quote: "Everything from the shikara to the wazwan was thought through. Felt like a private trip with the entire group.",
    rating: 5,
  },
  {
    name: "Zoya Khan",
    trip: "Goa Sunset Edition",
    avatar: U("photo-1489424731084-a5d8b219a5bb", 400),
    quote: "The captains, the villa, the bonfires. Every hour was Instagram. Zero moments felt like a package tour.",
    rating: 5,
  },
  {
    name: "Aditya Verma",
    trip: "Jaisalmer Dunes",
    avatar: U("photo-1531123897727-8f129e1688ce", 400),
    quote: "I have never partied under a bigger sky. Ten out of ten would ghost real life for another TripBaaz trip.",
    rating: 5,
  },
];

export const galleryImages = [
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
  U("photo-1501785888041-af3ef285b470"),
];

export const instagramPosts = galleryImages.slice(0, 9);
