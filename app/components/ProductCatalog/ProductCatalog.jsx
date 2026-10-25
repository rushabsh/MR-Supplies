"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", name: "All Products", count: 20 },
  { id: "tyre-oil", name: "Tyre Oil", count: 6, image: "/images/product-fuel-oil.avif" },
  { id: "diesel-oil", name: "Diesel Oil", count: 4, image: "/images/product-diesel-oil.avif" },
  { id: "fuel-oil", name: "Fuel Oil", count: 4, image: "/images/product-fuel-oil.avif" },
  { id: "pyrolysis-oil", name: "Pyrolysis Oil", count: 3, image: "/images/product-diesel-oil.avif" },
  { id: "bitumen-oil", name: "Bitumen Oil", count: 2, image: "/images/product-bitumen-oil.avif" },
  { id: "industrial-bitumens", name: "Industrial Bitumens", count: 2, image: "/images/product-bitumen-oil.avif" },
  { id: "biodiesel-oil", name: "Biodiesel Oil", count: 1, image: "/images/product-diesel-oil.avif" },
  { id: "furnace-oil", name: "Furnace Oil", count: 1, image: "/images/product-fuel-oil.avif" },
];

const allProductsData = [
  // 1. Tyre Oil (6 products)
  {
    id: "tyre-1",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "Wash Recycled Tyre Oil",
    tags: "Tyre steel wire scrap boiler/fuel",
    image: "/images/product-fuel-oil.avif",
    desc: "Premium grade recycled tyre oil suitable for industrial boilers and furnaces with high thermal efficiency.",
    specs: ["Density: 0.91 - 0.93 g/cm³", "Flash Point: > 45°C", "Calorific Value: ~10,200 kcal/kg"],
  },
  {
    id: "tyre-2",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "Black Light Diesel Oil",
    tags: "Industrial Fuel Oil, Imported Light Grease oil",
    image: "/images/product-diesel-oil.avif",
    desc: "Light diesel grade blended tyre oil with low moisture and clean combustion profile.",
    specs: ["Density: 0.86 - 0.88 g/cm³", "Flash Point: > 55°C", "Viscosity: 3.5 cSt"],
  },
  {
    id: "tyre-3",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "Light Fuel Oil",
    tags: "Heavy Fuel Oil, Industrial Fuel Oil",
    image: "/images/product-fuel-oil.avif",
    desc: "Filtered light fuel oil variant for continuous furnace and heating applications.",
    specs: ["Viscosity: 15 - 25 cSt", "Water Content: < 0.5%", "High thermal output"],
  },
  {
    id: "tyre-4",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "Pure Pyrolysis Oil",
    tags: "Pyrolysis Tyre Oil, Tyre Pyrolysis Oil",
    image: "/images/product-diesel-oil.avif",
    desc: "Direct tyre pyrolysis distillation fraction ideal as an economical alternative to furnace oil.",
    specs: ["Calorific Value: ~9,800 kcal/kg", "Ash: < 0.05%", "Low pour point"],
  },
  {
    id: "tyre-5",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "High Flash Tyre Oil",
    tags: "Safe storage, high temperature heating",
    image: "/images/product-fuel-oil.avif",
    desc: "Engineered high flash point tyre oil for safety compliance in heavy manufacturing boilers.",
    specs: ["Flash Point: > 66°C", "Low sulfur", "Stable storage viscosity"],
  },
  {
    id: "tyre-6",
    categoryId: "tyre-oil",
    categoryName: "Tyre Oil",
    title: "Industrial Tyre Fuel Oil",
    tags: "Cost-effective, bulk heating supply",
    image: "/images/product-diesel-oil.avif",
    desc: "Bulk supply fuel oil for ceramic, cement, glass, and steel melting factories.",
    specs: ["Bulk tankers available", "Consistent calorific batching"],
  },

  // 2. Diesel Oil (4 products)
  {
    id: "diesel-1",
    categoryId: "diesel-oil",
    categoryName: "Diesel Oil",
    title: "Black Light Diesel Oil",
    tags: "Industrial Fuel Oil, Imported Light Grease oil",
    image: "/images/product-diesel-oil.avif",
    desc: "Specially processed light diesel oil for heavy stationary generators and industrial engines.",
    specs: ["Flash Point: > 50°C", "Cetane Index: 45+", "Sulfur: < 0.15%"],
  },
  {
    id: "diesel-2",
    categoryId: "diesel-oil",
    categoryName: "Diesel Oil",
    title: "Industrial Fuel Oil",
    tags: "Industrial Fuel Oil, consistent burning rate",
    image: "/images/product-fuel-oil.avif",
    desc: "High energy diesel alternative suitable for kilns, furnaces, and asphalt batching plants.",
    specs: ["Viscosity: 4 - 8 cSt", "Gross Calorific: 10,400 kcal/kg"],
  },
  {
    id: "diesel-3",
    categoryId: "diesel-oil",
    categoryName: "Diesel Oil",
    title: "Imported Light Diesel Oil",
    tags: "Low sulfur, high thermal efficiency",
    image: "/images/product-diesel-oil.avif",
    desc: "Refined imported diesel grade with consistent viscosity and high thermal efficiency.",
    specs: ["Imported quality assurance", "Zero sludge sedimentation"],
  },
  {
    id: "diesel-4",
    categoryId: "diesel-oil",
    categoryName: "Diesel Oil",
    title: "Red Light Diesel Oil",
    tags: "Agricultural & industrial generator fuel",
    image: "/images/product-fuel-oil.avif",
    desc: "Treated red light diesel oil for off-road industrial machinery and backup power units.",
    specs: ["Smooth start-up", "Low emissions profile"],
  },

  // 3. Fuel Oil (4 products)
  {
    id: "fuel-1",
    categoryId: "fuel-oil",
    categoryName: "Fuel Oil",
    title: "Light Fuel Oil",
    tags: "Heavy Fuel Oil, Industrial Fuel Oil",
    image: "/images/product-fuel-oil.avif",
    desc: "Widely used in boilers and furnaces for high heat output and cost effectiveness.",
    specs: ["Density: 0.92 g/cm³", "Kinematic Viscosity: 30 - 50 cSt", "Sediment: < 0.1%"],
  },
  {
    id: "fuel-2",
    categoryId: "fuel-oil",
    categoryName: "Fuel Oil",
    title: "Heavy Fuel Oil",
    tags: "High viscosity furnace fuel",
    image: "/images/product-diesel-oil.avif",
    desc: "Heavy industrial residual fuel with maximum BTU value for massive industrial boilers.",
    specs: ["Viscosity: 180 - 380 cSt", "High calorific density"],
  },
  {
    id: "fuel-3",
    categoryId: "fuel-oil",
    categoryName: "Fuel Oil",
    title: "Industrial Fuel Oil",
    tags: "Stable combustion, cost effective",
    image: "/images/product-fuel-oil.avif",
    desc: "Cost effective standard industrial fuel oil for daily manufacturing plant operations.",
    specs: ["Consistent batch supply", "Pre-heating compatible"],
  },
  {
    id: "fuel-4",
    categoryId: "fuel-oil",
    categoryName: "Fuel Oil",
    title: "High Flash Fuel Oil",
    tags: "Safety compliant, high temperature",
    image: "/images/product-diesel-oil.avif",
    desc: "Engineered fuel oil meeting rigorous industrial plant safety guidelines.",
    specs: ["Flash Point: > 70°C", "Stable burning characteristics"],
  },

  // 4. Pyrolysis Oil (3 products)
  {
    id: "pyro-1",
    categoryId: "pyrolysis-oil",
    categoryName: "Pyrolysis Oil",
    title: "Raw Pyrolysis Oil",
    tags: "Pyrolysis Tyre Oil, Tyre Pyrolysis Oil",
    image: "/images/product-fuel-oil.avif",
    desc: "Pure thermal decomposition fuel oil derived from tyre recycling with strong heating value.",
    specs: ["Alternative clean fuel", "Calorific Value: 9,700 kcal/kg"],
  },
  {
    id: "pyro-2",
    categoryId: "pyrolysis-oil",
    categoryName: "Pyrolysis Oil",
    title: "Pyrolysis Tyre Oil",
    tags: "Alternative fuel for industrial heating",
    image: "/images/product-diesel-oil.avif",
    desc: "Fractionally distilled pyrolysis fuel with reduced moisture and particulate filtration.",
    specs: ["Moisture: < 0.5%", "Low ash residue", "Ready-to-use in burners"],
  },
  {
    id: "pyro-3",
    categoryId: "pyrolysis-oil",
    categoryName: "Pyrolysis Oil",
    title: "Tyre Pyrolysis Oil",
    tags: "Distilled grade, low residue",
    image: "/images/product-fuel-oil.avif",
    desc: "Filtered grade suitable for brick kilns, rolling mills, and asphalt mixing plants.",
    specs: ["Competitive bulk pricing", "Pan-India delivery"],
  },

  // 5. Bitumen Oil (2 products)
  {
    id: "bit-1",
    categoryId: "bitumen-oil",
    categoryName: "Bitumen Oil",
    title: "Imported Bitumen Oil",
    tags: "Paving & road construction grade",
    image: "/images/product-bitumen-oil.avif",
    desc: "High quality imported bitumen grade for superior durability and road tensile strength.",
    specs: ["Penetration: 60/70 & 80/100", "Softening point: 45 - 55°C"],
  },
  {
    id: "bit-2",
    categoryId: "bitumen-oil",
    categoryName: "Bitumen Oil",
    title: "Viscosity Grade 30 Bitumen",
    tags: "VG-30 standard road bitumen",
    image: "/images/product-bitumen-oil.avif",
    desc: "Standard VG-30 bitumen meeting Bureau of Indian Standards (BIS) specifications for paving.",
    specs: ["Absolute Viscosity @ 60°C: 2400 - 3600 Poise", "Ductility: > 40 cm"],
  },

  // 6. Industrial Bitumens (2 products)
  {
    id: "ind-bit-1",
    categoryId: "industrial-bitumens",
    categoryName: "Industrial Bitumens",
    title: "Bitumen Emulsion RS 1",
    tags: "Rapid setting waterproofing emulsion",
    image: "/images/product-bitumen-oil.avif",
    desc: "Cationic rapid setting bitumen emulsion ideal for tack coat, surface dressing, and penetration macadam.",
    specs: ["Rapid setting formula", "Waterproof bonding layer", "Easy cold application"],
  },
  {
    id: "ind-bit-2",
    categoryId: "industrial-bitumens",
    categoryName: "Industrial Bitumens",
    title: "Paving Grade Bitumen VG-10",
    tags: "High penetration road bitumen",
    image: "/images/product-bitumen-oil.avif",
    desc: "VG-10 grade bitumen specifically formulated for cold climates and surface dressing.",
    specs: ["High penetration resistance", "BIS certified quality"],
  },

  // 7. Biodiesel Oil (1 product)
  {
    id: "bio-1",
    categoryId: "biodiesel-oil",
    categoryName: "Biodiesel Oil",
    title: "Mixed Hydrocarbon Oil",
    tags: "Bio-blended industrial alternative",
    image: "/images/product-diesel-oil.avif",
    desc: "Clean burning bio-hydrocarbon blend with low particulate emissions and consistent calorific output.",
    specs: ["Eco-friendly profile", "Flash Point: > 60°C", "Zero engine gumming"],
  },

  // 8. Furnace Oil (1 product)
  {
    id: "furn-1",
    categoryId: "furnace-oil",
    categoryName: "Furnace Oil",
    title: "Light Furnace Oil",
    tags: "Direct firing furnace & boiler fuel",
    image: "/images/product-fuel-oil.avif",
    desc: "High calorific liquid fuel engineered for direct firing in metal smelting, casting, and reheating furnaces.",
    specs: ["Gross Calorific Value: 10,200 kcal/kg", "Low pour point", "Continuous steady firing"],
  },
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("category");
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [bottomQuoteSuccess, setBottomQuoteSuccess] = useState(false);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = allProductsData;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.tags.toLowerCase().includes(q)
      );
    }

    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Group products by category when in 'all' view without active search
  const groupedProducts = useMemo(() => {
    if (selectedCategory !== "all" || searchQuery.trim() !== "") {
      return null;
    }
    const groups = {};
    allProductsData.forEach((p) => {
      if (!groups[p.categoryId]) {
        groups[p.categoryId] = {
          name: p.categoryName,
          items: [],
        };
      }
      groups[p.categoryId].items.push(p);
    });
    return groups;
  }, [selectedCategory, searchQuery]);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setEnquiryProduct(null);
    }, 2500);
  };

  const handleBottomQuoteSubmit = (e) => {
    e.preventDefault();
    setBottomQuoteSuccess(true);
    setTimeout(() => setBottomQuoteSuccess(false), 3500);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHash = () => {
        const hash = window.location.hash.replace("#", "");
        if (hash && categories.some((c) => c.id === hash)) {
          setSelectedCategory(hash);
        }
      };
      handleHash();
      window.addEventListener("hashchange", handleHash);
      return () => window.removeEventListener("hashchange", handleHash);
    }
  }, []);

  return (
    <div className="bg-[#fcfcfc] text-[#111111]">

      {/* 1. Products Hero Section (Dark refinery image with NO white overlay) */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#0d1117] text-white">
        {/* Real image without white overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Products-background.avif"
            alt="Industrial Oils & Bitumen Products"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
          {/* Subtle gradient to ensure 100% text contrast on the left side */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0d1117]/90 via-[#0d1117]/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-190 mx-auto">
            <span className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-[#fcc509] mb-3">
              — OUR PRODUCTS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-[-0.5px] leading-[1.12] mb-4">
              Industrial Oils<br />&amp; Bitumen Products
            </h1>
            <p className="text-sm sm:text-[15px] text-[#cccccc] leading-[1.65] mb-6 max-w-140">
              Wide range of quality industrial oils, bitumen and related products for diverse industry requirements.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <a
                href="#catalog-section"
                className="inline-flex items-center gap-2.5 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-black py-3.5 px-7 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(252,197,9,0.35)]"
              >
                Get Quote <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Strip with cards ONLY on mobile */}
      <section className="bg-white border-y border-[#eeeeee] py-5">
        <div className="container">
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 items-center">

            <div className="flex items-center gap-3 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3.5 sm:p-0 shadow-xs sm:shadow-none">
              <div className="text-primary shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-2 leading-tight">Wide Range of Products</span>
            </div>

            <div className="flex items-center gap-3 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3.5 sm:p-0 shadow-xs sm:shadow-none">
              <div className="text-primary shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-2 leading-tight">Quality Assurance</span>
            </div>

            <div className="flex items-center gap-3 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3.5 sm:p-0 shadow-xs sm:shadow-none">
              <div className="text-primary shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-2 leading-tight">Bulk &amp; Wholesale Supply</span>
            </div>

            <div className="flex items-center gap-3 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3.5 sm:p-0 shadow-xs sm:shadow-none">
              <div className="text-primary shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-2 leading-tight">Timely Delivery</span>
            </div>

            <div className="flex items-center gap-3 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3.5 sm:p-0 shadow-xs sm:shadow-none min-[480px]:col-span-2 sm:col-span-1 justify-center sm:justify-start">
              <div className="text-primary shrink-0">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-2 leading-tight">Trusted Supplier</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Catalog Section (Sidebar + Content) */}
      <section className="py-10 pb-16 bg-[#fafafa]" id="catalog-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

            {/* Left Sidebar */}
            <aside className="w-full">
              <div className="bg-white rounded-xl border border-[#ebebeb] p-4 sm:p-5 shadow-xs mb-6">
                <h3 className="text-sm font-extrabold text-[#111111] mb-3.5 tracking-tight">
                  Product Categories
                </h3>
                <div className="flex flex-col gap-1.5">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${isActive
                          ? "bg-[#fcc509] text-[#111111] shadow-xs"
                          : "bg-transparent text-text-body hover:bg-[#f5f5f5] hover:text-[#111111]"
                          }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold shrink-0 ${isActive ? "bg-black/10 text-[#111111]" : "bg-[#f0f0f0] text-[#777777]"
                            }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-white rounded-xl border border-[#ebebeb] p-5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#fef6e4] text-[#fcc509] flex items-center justify-center mb-3">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z" />
                  </svg>
                </div>
                <h4 className="text-sm font-extrabold text-[#111111] mb-1">Need Help?</h4>
                <p className="text-xs text-[#666666] leading-normal mb-4">
                  Get product recommendations and best quotes for bulk orders.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-extrabold py-2.5 px-4 rounded-lg transition-all duration-200 w-full"
                >
                  Contact Us <span className="text-sm">→</span>
                </Link>
              </div>
            </aside>

            {/* Right Main Content */}
            <div className="w-full">

              {/* Search Bar */}
              <div className="flex items-center gap-2 mb-8 bg-white rounded-xl border border-gray-200 p-1.5 shadow-xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
                <span className="pl-3 text-gray-400">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, categories or grades..."
                  className="w-full px-2 py-2 text-[13px] bg-transparent text-dark placeholder:text-gray-400 outline-none"
                />
                <button
                  onClick={() => { }}
                  className="bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] p-2.5 px-4 rounded-lg transition-colors cursor-pointer shrink-0 font-bold text-xs"
                  aria-label="Search"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>

              {/* Section 1: Product Categories Grid (shown when on 'all' and no active search) */}
              {selectedCategory === "all" && searchQuery === "" && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                      Product Categories
                    </h2>
                    <button
                      onClick={() => {
                        const el = document.getElementById("all-products-heading");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      View Complete Range <span>→</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.filter((c) => c.id !== "all").map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className="group bg-white rounded-xl border border-[#ededed] p-4 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#fcc509]"
                      >
                        <div className="w-full h-28 relative flex items-center justify-center mb-3 bg-[#fafafa] rounded-lg overflow-hidden">
                          <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <h4 className="text-[13px] font-extrabold text-[#111111] leading-tight mb-1">
                          {cat.name}
                        </h4>
                        <span className="text-[11px] text-[#777777] font-semibold flex items-center gap-1 group-hover:text-primary transition-colors">
                          {cat.count} products <span>→</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 2: Products Listing */}
              <div id="all-products-heading">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                      {selectedCategory === "all" ? "All Products" : categories.find((c) => c.id === selectedCategory)?.name}
                    </h2>
                    <span className="text-xs text-[#777777]">
                      Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#666666] font-medium">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-bold text-dark outline-none cursor-pointer focus:border-primary"
                    >
                      <option value="category">Category</option>
                      <option value="name-asc">Name (A-Z)</option>
                      <option value="name-desc">Name (Z-A)</option>
                    </select>
                  </div>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-xl border border-[#ededed] p-12 text-center my-6">
                    <p className="text-sm font-bold text-[#555555] mb-2">No products found matching &quot;{searchQuery}&quot;</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="text-xs font-extrabold text-primary underline cursor-pointer"
                    >
                      Clear search &amp; filters
                    </button>
                  </div>
                ) : groupedProducts ? (
                  // Grouped View matching screenshot
                  <div className="flex flex-col gap-10">
                    {Object.entries(groupedProducts).map(([catId, group]) => (
                      <div key={catId} id={catId} className="scroll-mt-24">
                        <div className="flex items-center justify-between border-b border-[#eeeeee] pb-2.5 mb-4">
                          <h3 className="text-base sm:text-lg font-black text-[#111111] flex items-center gap-2">
                            {group.name}
                            <span className="text-xs text-[#777777] font-semibold">
                              ({group.items.length} Products)
                            </span>
                          </h3>
                          <button
                            onClick={() => setSelectedCategory(catId)}
                            className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer"
                          >
                            View All <span>→</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {group.items.map((prod) => (
                            <div
                              key={prod.id}
                              className="group bg-white rounded-xl border border-[#ededed] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#fcc509]"
                            >
                              <div className="w-full h-36 relative bg-[#fafafa] flex items-center justify-center p-3">
                                <Image
                                  src={prod.image}
                                  alt={prod.title}
                                  fill
                                  sizes="(max-width: 640px) 50vw, 25vw"
                                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                                />
                              </div>
                              <div className="p-3.5 flex flex-col flex-1">
                                <h4 className="text-xs sm:text-[13px] font-extrabold text-[#111111] leading-tight mb-1">
                                  {prod.title}
                                </h4>
                                <p className="text-[11px] text-[#777777] line-clamp-2 leading-[1.35] mb-3 flex-1">
                                  {prod.tags}
                                </p>
                                <button
                                  onClick={() => setEnquiryProduct(prod)}
                                  className="text-xs font-extrabold text-primary hover:text-primary-dark flex items-center gap-1 mt-auto cursor-pointer"
                                >
                                  View Details <span>→</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Grid View when filtered or searched
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="group bg-white rounded-xl border border-[#ededed] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#fcc509]"
                      >
                        <div className="w-full h-36 relative bg-[#fafafa] flex items-center justify-center p-3">
                          <Image
                            src={prod.image}
                            alt={prod.title}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="p-3.5 flex flex-col flex-1">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">
                            {prod.categoryName}
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-[#111111] leading-tight mb-1">
                            {prod.title}
                          </h4>
                          <p className="text-[11px] text-[#777777] line-clamp-2 leading-[1.35] mb-3 flex-1">
                            {prod.tags}
                          </p>
                          <button
                            onClick={() => setEnquiryProduct(prod)}
                            className="text-xs font-extrabold text-primary hover:text-primary-dark flex items-center gap-1 mt-auto cursor-pointer"
                          >
                            View Details <span>→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Section: Looking for Bulk Supply? & Embedded Request a Quote Card matching screenshot */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-[#0e1217] text-white">
        {/* Right background barrel illustration */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[45%] opacity-35 sm:opacity-50 pointer-events-none z-0">
          <Image
            src="/images/about-barrels.avif"
            alt="MR Suppliers barrels"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-right"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">

            {/* Left Column */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-0.75 bg-[#fcc509] rounded-sm"></span>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#fcc509]">
                  LOOKING FOR BULK SUPPLY?
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-[-0.5px] leading-[1.15] mb-4">
                Get the Best Quotes for Industrial Oils &amp; Bitumen
              </h2>

              <p className="text-sm sm:text-[14px] text-[#bbbbbb] leading-[1.65] mb-8 max-w-125">
                Contact us for bulk orders, customized requirements and timely delivery across India.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-extrabold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(252,197,9,0.35)]"
              >
                Contact Us <span>→</span>
              </Link>
            </div>

            {/* Right Column: Embedded Request a Quote Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-[#111111] shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/20 max-w-115">
              <h3 className="text-lg font-black text-[#111111] mb-4">Request a Quote</h3>

              {bottomQuoteSuccess ? (
                <div className="bg-[#fef9eb] border border-[#fcc509] rounded-xl p-5 text-center">
                  <div className="text-[#fcc509] text-2xl font-bold mb-1">✓</div>
                  <h4 className="text-sm font-extrabold text-[#111111] mb-1">Quote Request Sent!</h4>
                  <p className="text-xs text-[#666666]">Our team will get back to you with competitive bulk rates shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleBottomQuoteSubmit} className="flex flex-col gap-3.5">
                  <div>
                    <label className="block text-[11.5px] font-bold text-dark-2 mb-1">
                      Product / Category <span className="text-[#ef4444]">*</span>
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg text-dark outline-none focus:border-primary cursor-pointer"
                    >
                      <option value="" disabled>Select Product</option>
                      <option value="Tyre Oil">Tyre Oil</option>
                      <option value="Diesel Oil">Diesel Oil</option>
                      <option value="Fuel Oil">Fuel Oil</option>
                      <option value="Pyrolysis Oil">Pyrolysis Oil</option>
                      <option value="Bitumen">Bitumen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11.5px] font-bold text-dark-2 mb-1">
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      placeholder="Enter quantity (e.g. 10 Ton, 20 Barrels)"
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg text-dark placeholder:text-gray-400 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11.5px] font-bold text-dark-2 mb-1">
                      Your Mobile Number <span className="text-[#ef4444]">*</span>
                    </label>
                    <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:border-primary">
                      <span className="inline-flex items-center px-3 bg-[#f9fafb] text-xs font-bold text-[#333333] border-r border-[#e5e7eb]">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your number"
                        className="w-full px-3 py-2 text-xs bg-white text-dark placeholder:text-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] font-extrabold text-xs py-3 px-4 rounded-lg transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    Submit Enquiry <span>→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Product Details / Enquiry Modal */}
      {enquiryProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 relative shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEnquiryProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb] hover:text-[#111111] flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            {modalSuccess ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#fcc509] text-[#111111] flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  ✓
                </div>
                <h3 className="text-lg font-black text-[#111111] mb-1">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-[#666666]">Our technical sales team will contact you with batch test reports and quotation.</p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">
                  {enquiryProduct.categoryName}
                </span>
                <h3 className="text-xl font-black text-[#111111] mb-2 leading-tight">
                  {enquiryProduct.title}
                </h3>
                <p className="text-xs text-[#666666] leading-[1.6] mb-4">
                  {enquiryProduct.desc}
                </p>

                {enquiryProduct.specs && (
                  <div className="bg-[#fafafa] rounded-xl p-3.5 mb-5 border border-[#eeeeee]">
                    <h5 className="text-[11px] font-bold text-[#111111] uppercase tracking-wider mb-2">Specifications &amp; Highlights:</h5>
                    <ul className="text-xs text-text-body space-y-1">
                      {enquiryProduct.specs.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary font-bold">✓</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleModalSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#111111] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#111111] mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile number"
                        className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#111111] mb-1">Quantity Needed</label>
                    <input
                      type="text"
                      placeholder="e.g. 50 Barrels / 20 Tons"
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg outline-none focus:border-primary"
                    />
                  </div>

                  <div className="flex gap-2.5 mt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] font-extrabold text-xs py-3 px-4 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      Send Inquiry Now →
                    </button>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#25d366] text-white px-3.5 py-3 rounded-lg text-xs font-bold hover:bg-[#20ba59] transition-colors"
                      title="WhatsApp Quote"
                    >
                      WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
