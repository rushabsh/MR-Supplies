import Navbar from "../components/Navbar/Navbar";
import ProductCatalog from "../components/ProductCatalog/ProductCatalog";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Industrial Oils & Bitumen Products - MR SUPPLIERS",
  description:
    "Wide range of quality industrial oils, bitumen and related products for diverse industry requirements across India.",
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
