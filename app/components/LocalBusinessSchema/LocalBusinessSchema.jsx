export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mrsuppliers.in",
    name: "MR Suppliers",
    alternateName: "MR Suppliers Industrial Oils",
    description:
      "MR Suppliers is a leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil, Bitumen and various industrial oils since 2018. Serving automotive, construction, manufacturing and processing industries across India.",
    url: "https://www.mrsuppliers.in",
    telephone: "+919876543210",
    email: "info@mrsuppliers.com",
    foundingDate: "2018",
    priceRange: "$$",
    image: "https://www.mrsuppliers.in/images/hero-background.avif",
    logo: "https://www.mrsuppliers.in/images/hero-background.avif",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5204",
      longitude: "73.8567",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Oils & Bitumen Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Tyre Oil",
            description:
              "Recycled tyre pyrolysis oil for industrial boilers and furnaces. Available in bulk.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Diesel Oil",
            description:
              "Industrial grade diesel oil for generators, kilns and asphalt plants. Bulk supply available.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Fuel Oil",
            description:
              "Heavy and light fuel oil for furnaces and industrial heating applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Pyrolysis Oil",
            description:
              "Tyre pyrolysis distillation oil, economical alternative to furnace oil.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Bitumen Oil",
            description:
              "VG-10, VG-30 viscosity grade bitumen and emulsion bitumen for road and construction.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

