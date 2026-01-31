export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["FoodManufacturer", "LocalBusiness"],
    "@id": "https://tortimex.com.mx/#localbusiness",
    name: "Tortimex",
    url: "https://tortimex.com.mx",
    logo: "https://tortimex.com.mx/favicon-512x512.png",
    image: "https://tortimex.com.mx/og-image.png",
    description:
      "Tortimex es una empresa mexicana especializada en la producción y distribución de tortillas, masa y totopos de maíz de alta calidad en Jalisco, México.",
    telephone: "+523335452105",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tlaquepaque",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.659698,
      longitude: -103.349609,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jalisco",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/tortimex",
      "https://www.instagram.com/tortimex.mx",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
