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
      "Prothésie ongulaire par Farah. Ongles façonnés selon votre morphologie, élégants et naturels.",
    icon: "◇",
    href: "/onglerie",
  },
  {
    slug: "drainage-lymphatique",
    title: "Drainage Lymphatique",
    shortDesc:
      "Un massage tonique qui stimule la lymphe, favorise l’élimination des toxines et améliore la circulation.",
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
    role: "Fondatrice Lymera",
    bio: "Avec 6 ans d’expérience dans l’univers de la beauté, une expertise en onglerie et une spécialisation en épilation laser définitive, chaque protocole est pensé sur mesure selon les besoins de la cliente.",
    image: "/images/farah.jpg",
    expertises: ["Épilation Laser", "Technologie V2 Corpoderm", "Bilan personnalisé", "Onglerie"],
  },
  {
    name: "Nassima",
    role: "Co-fondatrice",
    bio: "Spécialiste du laser et du drainage lymphatique, elle travaille selon un protocole précis stimulant les points ganglionnaires pour relancer efficacement la circulation lymphatique.",
    image: "/images/nassima.jpg",
    expertises: ["Épilation Laser", "Technologie V2 Corpoderm", "Drainage Lymphatique", "Poses sur Ongles naturels"],
  },
];
