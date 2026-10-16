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
