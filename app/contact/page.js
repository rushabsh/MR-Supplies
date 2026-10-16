import Navbar from "../components/Navbar/Navbar";
import ContactHero from "../components/ContactHero/ContactHero";
import ContactForm from "../components/ContactForm/ContactForm";
import LocationSection from "../components/LocationSection/LocationSection";
import WhyContactBanner from "../components/WhyContactBanner/WhyContactBanner";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Contact Us - MR SUPPLIERS | Industrial Oils & Bitumen Supplier",
  description:
    "Get in touch with MR Suppliers for wholesale inquiries, best quotes, and reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and industrial products.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar activePage="contact" />
      <ContactHero />
      <ContactForm />
      <LocationSection />
      <WhyContactBanner />
      <Footer />
    </main>
  );
}
