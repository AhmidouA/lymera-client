// src/lib/constants.ts

export const SITE = {
  name: "Lymera",
  tagline: "Institut d'esthétique",
  description:
    "Institut Lymera à Jacou (34830) — Épilation laser définitive V2 Corpoderm, onglerie haute précision, drainage lymphatique. Note 5/5 sur 39 avis Planity.",
  url: "https://lymera.fr",
  phone: "0767185745",          // ⚠️ À remplacer par le vrai numéro
  phoneDisplay: "07 67 18 57 45",
  email: "",                       // à compléter si besoin
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
  rating: { score: 5, count: 39, platform: "Planity" },
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
  { label: "Protocole personnalisé" },
  { label: "Technologie V2 Corpoderm dernière génération" },
  { label: "Bilan laser offert" },
  { label: "Équipe certifiée" },
  { label: "Femmes ET Hommes" },
];

export const TEAM = [
  {
    name: "Farah Arras",
    role: "Fondatrice & Esthéticienne",
    bio: "Spécialiste en épilation laser, Farah a fondé Lymera avec la conviction que chaque client mérite un accompagnement sur-mesure et des résultats durables.",
    image: "/images/farah.jpg",    // à remplacer par la vraie photo
  },
  {
    name: "Nassima",
    role: "Prothésiste Ongulaire & Esthéticienne",
    bio: "Experte en onglerie, Nassima crée des ongles qui allient technicité et élégance naturelle, adaptés à chaque morphologie.",
    image: "/images/nassima.jpg",  // à remplacer
  },
];

export const REVIEWS = [
  {
    author: "Marie T.",
    platform: "Google",
    rating: 5,
    text: "Super expérience ! Farah est très professionnelle et douce. J'ai vu des résultats dès la 3e séance. Je recommande vivement.",
  },
  {
    author: "Inès B.",
    platform: "Planity",
    rating: 5,
    text: "Salon magnifique, ambiance zen. Nassima est une artiste pour les ongles. On se sent vraiment chouchoutée.",
  },
  {
    author: "Laura M.",
    platform: "Google",
    rating: 5,
    text: "Excellente prestataire, très à l'écoute. Le bilan laser offert m'a vraiment aidée à comprendre le protocole. Merci Farah !",
  },
];