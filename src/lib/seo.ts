// src/lib/seo.ts
import type { Metadata } from "next";
import { SITE } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og/default.jpg",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: `${title} | Lymera`,
    description,
    keywords: [...keywords, "Institut esthétique Jacou", "Lymera Jacou"],
    authors: [{ name: "Institut Lymera" }],
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Lymera`,
      description,
      url,
      siteName: SITE.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: `${SITE.url}${image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Lymera`,
      description,
      images: [`${SITE.url}${image}`],
    },
  };
}

export function getJsonLdBeautySalon(ratingScore: number, ratingCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Thursday","Friday"], opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingScore,
      reviewCount: ratingCount,
      bestRating: 5,
    },
    priceRange: "€€",
    sameAs: [SITE.planityUrl],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceJsonLd({ name, description, url, image }: {
  name: string; description: string; url: string; image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image,
    provider: {
      "@type": "BeautySalon",
      name: "Institut Lymera",
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: "Jacou",
    },
  };
}