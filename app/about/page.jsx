import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/AboutHero/AboutHero";
import About from "../components/About/About";
import QualityBanner from "../components/QualityBanner/QualityBanner";
import Gallery from "../components/Gallery/Gallery";
import Values from "../components/Values/Values";
import Industries from "../components/Industries/Industries";
import BulkSupply from "../components/BulkSupply/BulkSupply";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "About Us - Industrial Oils & Bitumen Supplier Since 2018 | Pune",
  description:
    "MR Suppliers – Established in 2018, we are Pune's leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil & Bitumen. Learn about our story, values, infrastructure and commitment to quality industrial supply.",
  keywords: [
    "about MR Suppliers",
    "industrial oil company Pune",
    "bitumen supplier since 2018",
    "wholesale oil company Maharashtra",
    "established petroleum trader Pune",
    "industrial oil wholesale company India",
    "MR Suppliers company profile",
    "trusted oil supplier India",
    "bulk petroleum supplier Maharashtra",
    "quality industrial oils Pune",
  ],
  alternates: {
    canonical: "https://www.mrsuppliers.in/about",
  },
  openGraph: {
    title: "About MR Suppliers - Industrial Oils & Bitumen Supplier Since 2018 | Pune",
    description:
      "Established in 2018, MR Suppliers is Pune's leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil & Bitumen. Quality products, timely delivery, pan-India supply.",
    url: "https://www.mrsuppliers.in/about",
    images: [
      {
        url: "/images/about-barrels.avif",
        width: 1200,
        height: 630,
        alt: "MR Suppliers oil barrels - Industrial oil wholesale company Pune",
      },
    ],
  },
  twitter: {
    title: "About MR Suppliers - Industrial Oils & Bitumen Supplier Since 2018",
    description:
      "Established in 2018, Pune's leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil & Bitumen. Quality products, pan-India delivery.",
    images: ["/images/about-barrels.avif"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar activePage="about" />
      <AboutHero />
      <About variant="story" />
      <QualityBanner
        tag="— OUR COMMITMENT"
        desc="We ensure quality, availability and timely delivery of industrial oils, bitumen and related products to support the continuous growth of our clients across multiple industries."
      />
      <Gallery
        label="— OUR INFRASTRUCTURE"
        subtitle="Our office and operational setup enables us to provide efficient service and timely supply to our clients."
      />
      <Values />
      <Industries />
      <BulkSupply
        tag="— GET IN TOUCH"
        title="Let's Work Together"
        desc="Contact us for the best quotes and reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and industrial products."
      />
      <Footer />
    </main>
  );
}
