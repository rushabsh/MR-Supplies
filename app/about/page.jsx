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
  title: "About Us - MR SUPPLIERS | Industrial Oils & Bitumen Supplier",
  description:
    "Since 2018, MR Suppliers has been a leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and various industrial oils.",
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
