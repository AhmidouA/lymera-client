// src/types/content.ts

export type NavLink = {
  label: string;
  href: string;
};

export type HoursEntry = {
  day: string;
  open: string | null;
  close: string | null;
};

export type Address = {
  street: string;
  city: string;
  zip: string;
  country: string;
  full: string;
  googleMapsUrl: string;
  lat: number;
  lng: number;
};

export type Rating = {
  score: number;
  count: number;
  platform: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: Address;
  planityUrl: string;
  rating: Rating;
};

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Review = {
  author: string;
  platform: "Google" | "Planity";
  rating: number;
  text: string;
};

export type WhyItem = {
  label: string;
};