"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    id: "all",
    name: "All Products",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v14c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </svg>
    ),
  },
  {
    id: "tyre-oil",
    name: "Tyre Oil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 3h6v4l5 11a2 2 0 0 1-1.8 2.8H5.8A2 2 0 0 1 4 18L9 7V3z" />
        <line x1="9" y1="3" x2="15" y2="3" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    id: "diesel-oil",
    name: "Diesel Oil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <line x1="5" y1="8" x2="19" y2="8" />
        <line x1="5" y1="16" x2="19" y2="16" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "fuel-oil",
    name: "Fuel Oil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M10 2v7.5L5.2 18.2A2 2 0 0 0 7 21h10a2 2 0 0 0 1.8-2.8L14 9.5V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    id: "pyrolysis-oil",
    name: "Pyrolysis Oil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <path d="M9 6h6l2 4v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10l2-4z" />
        <line x1="7" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    id: "bitumen",
    name: "Bitumen",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
];

const productsData = [
  {
    id: "tyre-oil",
    num: "01",
    tag: "— TYRE OIL",
    title: "Tyre Oil",
    subtitle: "High-performance tyre derived oil",
    description:
      "Tyre oil is widely used as an alternative fuel in industries such as cement plants, boilers and furnaces. It delivers high calorific value and consistent performance.",
    points: [
      "High calorific value",
      "Consistent quality",
      "Suitable for industrial use",
      "Reliable bulk supply",
    ],
    image: "/images/product-tyre-oil.avif",
    imageAlt: "Tyre oil beaker",
    layout: "text-left",
  },
  {
    id: "diesel-oil",
    num: "02",
    tag: "— DIESEL OIL",
    title: "Diesel Oil",
    subtitle: "Reliable industrial fuel oil",
    description:
      "Diesel oil is a versatile fuel used in various industrial applications. It is known for its high energy content, efficient combustion and wide usability.",
    points: [
      "High energy content",
      "Clean and efficient combustion",
      "Meets industrial standards",
      "Available in bulk quantities",
    ],
    image: "/images/about-barrels.avif",
    imageAlt: "Diesel oil barrel with MR Suppliers logo",
    layout: "image-left",
  },
  {
    id: "fuel-oil",
    num: "03",
    tag: "— FUEL OIL",
    title: "Fuel Oil",
    subtitle: "Efficient and economical fuel solution",
    description:
      "Fuel oil is commonly used in boilers, furnaces and industrial heating applications. It offers stable performance and cost-effective energy for large scale operations.",
    points: [
      "Stable and efficient performance",
      "Suitable for heavy industrial use",
      "Cost-effective solution",
      "Bulk and wholesale supply",
    ],
    image: "/images/product-fuel-oil.aviff",
    imageAlt: "Fuel oil flask",
    layout: "text-left",
  },
  {
    id: "pyrolysis-oil",
    num: "04",
    tag: "— PYROLYSIS OIL",
    title: "Pyrolysis Oil",
    subtitle: "Sustainable alternative fuel",
    description:
      "Pyrolysis oil is produced from the thermal decomposition of waste materials like tyres and plastic. It is widely used as an alternative fuel in industrial applications.",
    points: [
      "Environment friendly solution",
      "Consistent quality",
      "Suitable for industrial use",
      "Bulk supply available",
    ],
    image: "/images/product-pyrolysis-oil.avifff",
    imageAlt: "Pyrolysis oil container bottle",
    layout: "image-left",
  },
  {
    id: "bitumen",
    num: "05",
    tag: "— BITUMEN",
    title: "Bitumen",
    subtitle: "Premium grade bitumen for multiple applications",
    description:
      "We supply high quality bitumen suitable for road construction, waterproofing and various industrial applications. Our bitumen ensures durability, performance and reliability.",
    points: [
      "High quality and consistency",
      "Suitable for road & construction use",
      "Meets industry standards",
      "Available in bulk supply",
    ],
    image: "/images/product-bitumen-oil.aviff",
    imageAlt: "Bitumen drums and refinery",
    layout: "text-left",
  },
];

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((p) => p.id === selectedCategory);

  const handleEnquire = (product) => {
    setEnquiryProduct(product);
    setSubmitted(false);
  };

  const closeModal = () => {
    setEnquiryProduct(null);
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-[25px] pb-[50px] sm:py-10 sm:pb-[70px] bg-white"
      id="product-list"
    >
      <div className="container">
        {/* Category Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3.5 mb-10 sm:mb-[60px]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 py-3 px-1.5 sm:py-5 sm:px-3 rounded-lg cursor-pointer transition-all duration-200 border text-[#444444] ${isActive
                  ? "bg-primary border-primary text-[#111111] shadow-[0_6px_18px_rgba(245,168,0,0.3)] hover:bg-primary-dark"
                  : "bg-[#fbfbfb] border-[#ebebeb] hover:border-primary hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
                  }`}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={`Filter by ${cat.name}`}
              >
                <span className="flex items-center justify-center leading-none">
                  {cat.icon}
                </span>
                <span className="text-[11.5px] sm:text-[13px] font-bold tracking-[0.2px]">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Items List */}
        <div className="flex flex-col gap-[45px] sm:gap-20">
          {filteredProducts.map((prod) => {
            const isImageLeft = prod.layout === "image-left";

            return (
              <div
                key={prod.id}
                id={prod.id}
                className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px] pb-5 ${isImageLeft ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="flex-[1.05] w-full max-w-full lg:max-w-[520px]">
                  <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
                    {prod.tag}
                  </span>
                  <h2 className="text-2xl sm:text-[30px] lg:text-[38px] font-black text-[#111111] leading-[1.15] tracking-[-0.5px] mb-1">
                    {prod.title}
                  </h2>
                  <p className="text-[13.5px] sm:text-[14.5px] font-bold text-[#222222] mb-3.5">
                    {prod.subtitle}
                  </p>
                  <p className="text-[13.5px] text-[#555555] leading-[1.7] mb-[22px]">
                    {prod.description}
                  </p>

                  <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2.5">
                    {prod.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-[22px] h-[22px] rounded-full bg-[rgba(245,168,0,0.18)] text-[#b87a00] flex items-center justify-center shrink-0">
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-[13.5px] font-semibold text-[#2b2b2b]">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="group inline-flex items-center gap-2 bg-[#111111] text-white text-[12.5px] font-bold py-2.5 px-6 rounded-full border-none cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-primary hover:text-[#111111] hover:-translate-y-px"
                    onClick={() => handleEnquire(prod)}
                  >
                    Enquire Now{" "}
                    <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>

                {/* Visual Side (Number watermark + Angled yellow background + Image) */}
                <div className="flex-[0.95] relative flex items-center justify-center w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[350px]">
                  {/* Huge background number watermark */}
                  <div className="absolute left-0 sm:left-2.5 lg:-left-5 -top-[15px] sm:-top-2.5 text-[70px] sm:text-[100px] lg:text-[140px] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_#e5e5e5] select-none pointer-events-none z-1">
                    {prod.num}
                  </div>

                  <div className="relative w-full max-w-[440px] h-60 sm:h-[320px] flex items-center justify-center">
                    {/* Angled yellow background accent */}
                    <div className="absolute -top-[15px] left-5 -right-5 bottom-5 bg-[#f8be43] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] rounded-[10px] z-2"></div>

                    {/* Foreground Image container */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden z-3 shadow-[0_10px_30px_rgba(0,0,0,0.14)] bg-[#f0f0f0]">
                      <Image
                        src={prod.image}
                        alt={prod.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Enquiry Modal */}
      {enquiryProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl max-w-[460px] w-full p-4 sm:p-[32px_28px] max-h-[90vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-[#f2f2f2] border-none w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-sm text-[#555555] transition-all duration-200 hover:bg-[#111111] hover:text-white"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-5 px-2.5">
                <div className="w-[50px] h-[50px] rounded-full bg-[#e6f7eb] text-[#27ae60] text-2xl flex items-center justify-center mx-auto mb-4 font-extrabold">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold mb-2">Thank You!</h3>
                <p className="text-[13.5px] text-[#666666] leading-[1.6] mb-5">
                  Your inquiry for <strong>{enquiryProduct.title}</strong> has
                  been received. Our team will contact you shortly.
                </p>
                <button
                  className="bg-[#111111] text-white py-2.5 px-6 rounded-md border-none cursor-pointer font-bold text-[13px]"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-bold tracking-[1.5px] text-primary uppercase block mb-1.5">
                  — PRODUCT ENQUIRY
                </span>
                <h3 className="text-[22px] font-black text-[#111111] mb-1.5">
                  Enquire for {enquiryProduct.title}
                </h3>
                <p className="text-[13px] text-[#666666] mb-5 leading-[1.5]">
                  Leave your contact details and our sales team will reach out
                  with pricing and specifications.
                </p>

                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#333333]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13.5px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#333333]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13.5px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#333333]">
                      Estimated Quantity / Requirements
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10 KL, 20 Barrels, Bulk Tanker"
                      className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13.5px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-[#111111] text-[13px] font-extrabold p-3 rounded-md border-none cursor-pointer transition-all duration-200 mt-1.5 hover:bg-primary-dark"
                  >
                    Send Enquiry <span className="text-sm leading-none">→</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
