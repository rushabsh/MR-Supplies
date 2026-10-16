import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/AboutHero/AboutHero";
import ProductList from "../components/ProductList/ProductList";
import BulkSupply from "../components/BulkSupply/BulkSupply";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Our Products - MR SUPPLIERS | Industrial Oils & Bitumen Supplier",
  description:
    "A wide range of premium industrial oils, bitumen and related products to meet the diverse needs of industries across India.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar activePage="products" />

      {/* Hero Section */}
      <AboutHero
        tag="— OUR PRODUCTS"
        headline={
          <>
            HIGH QUALITY
            <br />
            INDUSTRIAL OILS &amp;
            <br />
            <span style={{ color: "var(--color-primary)" }}>BITUMEN</span> PRODUCTS
          </>
        }
        description="A wide range of premium industrial oils, bitumen and related products to meet the diverse needs of industries across India."
        showActions={false}
        showBadge={false}
      />

      {/* Category Tabs & Product Showcase with 01-05 Watermarks */}
      <ProductList />

      {/* Looking for Bulk Supply Banner */}
      <BulkSupply
        bgImage="/images/quality-bg.jpg"
        tag="— LOOKING FOR BULK SUPPLY?"
        title="Get the Best Prices for Industrial Oils & Bitumen"
        desc="Contact us today for quotes, product details and bulk supply options. We are here to help you with the right solution for your business."
        btnText="Contact Us"
        btnLink="/#contact"
      />

      <Footer />
    </main>
  );
}
