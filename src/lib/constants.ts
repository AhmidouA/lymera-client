// src/lib/constants.ts

export const SITE = {
  name: "Lymera",
  tagline: "Institut d'esthétique",
  description:
    "Institut Lymera à Jacou (34830) — Épilation laser définitive V2 Corpoderm, onglerie haute précision, drainage lymphatique. Note 5/5 sur 39 avis Planity.",
  url: "https://lymera.fr",
  phone: "0767185745",
  phoneDisplay: "07 67 18 57 45",
  email: "Lymera34@gmail.com",
  address: {
    street: "14 Rue de l'Autan",
    city: "Jacou",
    zip: "34830",
    country: "France",
    full: "14 Rue de l'Autan, 34830 Jacou",
    googleMapsUrl:
      "https://maps.google.com/?q=14+Rue+de+l'Autan+34830+Jacou",
    lat: 43.647,
    lng: 3.924,
  },
  planityUrl: "https://www.planity.com/lymera-34830-jacou",
};

export const HOURS = [
  { day: "Lundi",    open: "10h00", close: "19h00" },
  { day: "Mardi",    open: "10h00", close: "19h00" },
  { day: "Mercredi", open: "15h30", close: "19h00" },
  { day: "Jeudi",    open: "10h00", close: "19h00" },
  { day: "Vendredi", open: "10h00", close: "19h00" },
  { day: "Samedi",   open: "10h00", close: "17h00" },
  { day: "Dimanche", open: null,    close: null     },
];

export const NAV_LINKS = [
  { label: "Épilation Laser", href: "/epilation-laser" },
  { label: "Onglerie",        href: "/onglerie" },
  { label: "Drainage",        href: "/drainage-lymphatique" },
  { label: "Tarifs",          href: "/tarifs" },
  { label: "Équipe",          href: "/equipe" },
  { label: "Contact",         href: "/contact" },
];

export const SERVICES = [
  {
    slug: "epilation-laser",
    title: "Épilation Laser Définitive",
    shortDesc:
      "Technologie V2 Corpoderm dernière génération. Bilan offert, protocole personnalisé, résultats durables.",
    icon: "✦",
    href: "/epilation-laser",
  },
  {
    slug: "onglerie",
    title: "Onglerie Haute Précision",
    shortDesc:
      "Prothésie ongulaire par Nassima. Ongles façonnés selon votre morphologie, élégants et naturels.",
    icon: "◇",
    href: "/onglerie",
  },
  {
    slug: "drainage-lymphatique",
    title: "Drainage Lymphatique",
    shortDesc:
      "Soin doux qui stimule la circulation, élimine les toxines. Résultats visibles dès la première séance.",
    icon: "◯",
    href: "/drainage-lymphatique",
  },
];

export const WHY_LYMERA = [
  {
    title: "Protocole personnalisé",
    desc: "Bilan offert avant chaque traitement laser. Adapté à votre carnation et pilosité.",
  },
  {
    title: "Technologie V2 Corpoderm",
    desc: "Dernière génération — résultats durables, confort maximal.",
  },
  {
    title: "Équipe certifiée",
    desc: "Farah & Nassima — esthéticiennes diplômées et passionnées.",
  },
  {
    title: "Femmes & Hommes",
    desc: "Tous profils accueillis, tous phototypes traités.",
  },
];

export const TEAM = [
  {
    name: "Farah Arras",
    role: "Fondatrice & Esthéticienne",
    bio: "Spécialiste en épilation laser, Farah a fondé Lymera avec la conviction que chaque client mérite un accompagnement sur-mesure et des résultats durables.",
    image: "/images/farah.jpg",
  },
  {
    name: "Nassima",
    role: "Prothésiste Ongulaire & Esthéticienne",
    bio: "Experte en onglerie, Nassima crée des ongles qui allient technicité et élégance naturelle, adaptés à chaque morphologie.",
    image: "/images/nassima.jpg",
  },
];
