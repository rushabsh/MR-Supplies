export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.mrsuppliers.in/sitemap.xml",
    host: "https://www.mrsuppliers.in",
  };
}

