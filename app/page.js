import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import QualityBanner from "./components/QualityBanner/QualityBanner";
import Industries from "./components/Industries/Industries";
import Gallery from "./components/Gallery/Gallery";
import HSNTable from "./components/HSNTable/HSNTable";
import BulkSupply from "./components/BulkSupply/BulkSupply";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune, India",
  description:
    "MR Suppliers – Pune's trusted wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil, Bitumen & industrial oils since 2018. Competitive pricing, bulk supply & pan-India delivery for manufacturing, construction, automotive & processing industries.",
  keywords: [
    "industrial oils supplier Pune",
    "bitumen wholesale supplier India",
    "diesel oil supplier Maharashtra",
    "fuel oil wholesale Pune",
    "tyre oil supplier India",
    "pyrolysis oil wholesale",
    "bulk industrial oil supply",
    "petroleum products Pune",
    "MR Suppliers",
    "industrial bitumen Pune",
    "viscosity grade bitumen India",
    "furnace oil Pune",
    "wholesale petroleum Pune",
    "oil supplier near me Pune",
  ],
  alternates: {
    canonical: "https://www.mrsuppliers.in",
  },
  openGraph: {
    title: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune, India",
    description:
      "Pune's trusted wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil & Bitumen since 2018. Bulk supply, competitive prices & pan-India delivery.",
    url: "https://www.mrsuppliers.in",
    images: [
      {
        url: "/images/hero-background.avif",
        width: 1200,
        height: 630,
        alt: "MR Suppliers industrial refinery - Wholesale oil supplier Pune India",
      },
    ],
  },
  twitter: {
    title: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune",
    description:
      "Wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil & Bitumen since 2018. Bulk supply across India.",
    images: ["/images/hero-background.avif"],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <QualityBanner />
      <Industries />
      <Gallery />
      <HSNTable />
      <BulkSupply />
      <Testimonials />
      <Footer />
    </main>
  );
}
