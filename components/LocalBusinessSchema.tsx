export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Tortimex",
    "url": "https://tortimex.com.mx",
    "logo": "https://tortimex.com.mx/icon-light-32x32.png",
    "image": "https://tortimex.com.mx/images/facility.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jalisco",
      "addressCountry": "MX"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Jalisco"
    },
    "telephone": "+52XXXXXXXXXX"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
