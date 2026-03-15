import { SITE } from "@/lib/constants";

interface Props {
  ratingScore?: number;
  ratingCount?: number;
}

export default function SchemaOrg({ ratingScore = 5, ratingCount = 39 }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Institut Lymera",
    "description": SITE.description,
    "image": `${SITE.url}/og/default.jpg`,
    "url": SITE.url,
    "telephone": SITE.phone,
    "priceRange": "€€",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "15:30",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingScore,
      "reviewCount": ratingCount,
      "bestRating": 5,
    },
    "sameAs": [
      SITE.planityUrl,
      "https://www.instagram.com/lymera.beautystudio",  // À ajouter si compte Instagram
      // "https://www.facebook.com/lymera.jacou",   // À ajouter si page Facebook
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}