import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "./components/LocalBusinessSchema/LocalBusinessSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.mrsuppliers.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune, India",
    template: "%s | MR Suppliers",
  },
  description:
    "MR Suppliers is a leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil, Bitumen and industrial oils since 2018. Serving automotive, construction, manufacturing & processing industries across India. Based in Pune, Maharashtra.",
  keywords: [
    "industrial oils supplier India",
    "bitumen supplier Pune",
    "diesel oil wholesale India",
    "fuel oil supplier Maharashtra",
    "tyre oil wholesale",
    "pyrolysis oil supplier",
    "industrial bitumen supplier",
    "bulk oil supply India",
    "MR Suppliers Pune",
    "wholesale industrial oils Pune",
    "furnace oil supplier India",
    "petroleum products supplier Maharashtra",
    "bulk diesel oil Pune",
    "recycled tyre oil supplier",
    "industrial lubricants wholesale India",
  ],
  authors: [{ name: "MR Suppliers" }],
  creator: "MR Suppliers",
  publisher: "MR Suppliers",
  applicationName: "MR Suppliers",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MR Suppliers",
    title: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune, India",
    description:
      "Leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Pyrolysis Oil & Bitumen since 2018. Bulk supply for automotive, construction, manufacturing industries across India.",
    images: [
      {
        url: "/images/hero-background.avif",
        width: 1200,
        height: 630,
        alt: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier Pune India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Suppliers - Industrial Oils & Bitumen Wholesale Supplier | Pune",
    description:
      "Leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil & Bitumen since 2018. Bulk supply across India. Based in Pune, Maharashtra.",
    images: ["/images/hero-background.avif"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Industrial Petroleum Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
