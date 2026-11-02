import Navbar from "../components/Navbar/Navbar";
import ContactHero from "../components/ContactHero/ContactHero";
import ContactForm from "../components/ContactForm/ContactForm";
import LocationSection from "../components/LocationSection/LocationSection";
import WhyContactBanner from "../components/WhyContactBanner/WhyContactBanner";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Contact Us - Get a Wholesale Quote | MR Suppliers Pune",
  description:
    "Contact MR Suppliers for wholesale quotes on Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil, Bitumen & industrial oils. Quick response, competitive pricing, bulk supply. Call +91 98765 43210 or visit us in Pune, Maharashtra.",
  keywords: [
    "contact MR Suppliers",
    "industrial oil quote Pune",
    "bulk oil inquiry India",
    "bitumen wholesale quote",
    "diesel oil price inquiry",
    "fuel oil supplier contact",
    "tyre oil bulk order India",
    "industrial oil supplier Pune contact",
    "get oil quote Maharashtra",
    "wholesale petroleum inquiry",
    "MR Suppliers phone number",
    "industrial oil enquiry form",
    "oil bulk supply inquiry India",
    "request a quote industrial oil",
  ],
  alternates: {
    canonical: "https://www.mrsuppliers.in/contact",
  },
  openGraph: {
    title: "Contact MR Suppliers - Get a Wholesale Quote | Pune, India",
    description:
      "Get wholesale quotes for Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil, Bitumen & industrial oils. Quick response, competitive pricing. Based in Pune, Maharashtra.",
    url: "https://www.mrsuppliers.in/contact",
    images: [
      {
        url: "/images/Contact-background.avif",
        width: 1200,
        height: 630,
        alt: "Contact MR Suppliers for industrial oil wholesale quotes - Pune India",
      },
    ],
  },
  twitter: {
    title: "Contact MR Suppliers - Get a Wholesale Quote | Pune",
    description:
      "Get wholesale quotes for Diesel Oil, Fuel Oil, Tyre Oil & Bitumen. Quick response, competitive pricing from Pune, Maharashtra.",
    images: ["/images/Contact-background.avif"],
  },
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
