import Navbar from "../components/Navbar/Navbar";
import ProductCatalog from "../components/ProductCatalog/ProductCatalog";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Industrial Oils & Bitumen Products - Wholesale Catalog | MR Suppliers",
  description:
    "Browse MR Suppliers' complete wholesale catalog: Tyre Oil, Diesel Oil, Fuel Oil, Pyrolysis Oil, Bitumen Oil, Industrial Bitumens, Biodiesel Oil, Furnace Oil. Competitive bulk pricing for industries across India. Based in Pune, Maharashtra.",
  keywords: [
    "tyre oil wholesale India",
    "diesel oil bulk supplier",
    "fuel oil wholesale Pune",
    "pyrolysis oil supplier India",
    "bitumen oil wholesale",
    "industrial bitumen supplier",
    "furnace oil Pune Maharashtra",
    "biodiesel oil supplier India",
    "recycled tyre oil wholesale",
    "black light diesel oil",
    "viscosity grade bitumen",
    "heavy fuel oil India",
    "pyrolysis tyre oil wholesale",
    "bulk oil supplier Pune",
    "petroleum products catalog India",
    "industrial fuel oil price",
    "light diesel oil Maharashtra",
    "wash recycled tyre oil",
    "VG-10 VG-30 bitumen",
    "MS grade bitumen supplier",
  ],
  alternates: {
    canonical: "https://www.mrsuppliers.in/products",
  },
  openGraph: {
    title: "Industrial Oils & Bitumen Products - Wholesale Catalog | MR Suppliers Pune",
    description:
      "Complete wholesale catalog of Tyre Oil, Diesel Oil, Fuel Oil, Pyrolysis Oil, Bitumen & more. Bulk pricing, quality assured, pan-India delivery from Pune, Maharashtra.",
    url: "https://www.mrsuppliers.in/products",
    images: [
      {
        url: "/images/Products-background.avif",
        width: 1200,
        height: 630,
        alt: "Industrial oils and bitumen products wholesale catalog - MR Suppliers Pune",
      },
    ],
  },
  twitter: {
    title: "Industrial Oils & Bitumen Products - Wholesale Catalog | MR Suppliers",
    description:
      "Complete wholesale catalog: Tyre Oil, Diesel Oil, Fuel Oil, Pyrolysis Oil, Bitumen & more. Bulk pricing, pan-India delivery.",
    images: ["/images/Products-background.avif"],
  },
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar activePage="products" />
      <ProductCatalog />
      <Footer />
    </main>
  );
}
