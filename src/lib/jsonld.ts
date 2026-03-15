import { SITE, HOURS } from "@/lib/constants";

export function getBeautySalonJsonLd(ratingScore: number, ratingCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Institut Lymera",
    "description": SITE.description,
    "url": SITE.url,
    "telephone": `+33${SITE.phone.substring(1)}`,
    "email": SITE.email,
    "image": `${SITE.url}/og/default.jpg`,
    "logo": `${SITE.url}/icon-512.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.address.street,
      "addressLocality": SITE.address.city,
      "postalCode": SITE.address.zip,
      "addressCountry": "FR",
      "addressRegion": "Occitanie",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.address.lat,
      "longitude": SITE.address.lng,
    },
    "openingHoursSpecification": HOURS
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": getDayOfWeek(h.day),
        "opens": h.open,
        "closes": h.close,
      })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingScore,
      "reviewCount": ratingCount,
      "bestRating": 5,
      "worstRating": 1,
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card",
    "hasMap": SITE.address.googleMapsUrl,
    "sameAs": [SITE.planityUrl],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

export function getServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "provider": {
      "@type": "BeautySalon",
      "name": "Institut Lymera",
      "url": "https://lymera.fr",
    },
    "areaServed": {
      "@type": "City",
      "name": "Jacou",
      "containedInPlace": {
        "@type": "City",
        "name": "Montpellier",
      },
    },
  };
}

function getDayOfWeek(day: string): string {
  const map: Record<string, string> = {
    "Lundi": "Monday",
    "Mardi": "Tuesday",
    "Mercredi": "Wednesday",
    "Jeudi": "Thursday",
    "Vendredi": "Friday",
    "Samedi": "Saturday",
    "Dimanche": "Sunday",
  };
  return map[day] ?? day;
}