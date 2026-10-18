"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Tyre Oil",
    desc: "Tyre shred wire scrap boiler/furnace fuel",
    image: "/images/product-fuel-oil.avif",
  },
  {
    name: "Diesel Oil",
    desc: "Industrial fuel oil & light diesel",
    image: "/images/product-diesel-oil.avif",
  },
  {
    name: "Fuel Oil",
    desc: "Heavy & light fuel oil for furnaces",
    image: "/images/product-fuel-oil.avif",
  },
  {
    name: "Pyrolysis Oil",
    desc: "Tyre pyrolysis distillation oil",
    image: "/images/product-diesel-oil.avif",
  },
  {
    name: "Bitumen Oil",
    desc: "Viscosity grade 30 & emulsion bitumen",
    image: "/images/product-bitumen-oil.avif",
  },
];

export default function Products() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 pb-[35px] sm:py-[60px] sm:pb-[50px] bg-white" id="products">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-0 mb-[30px]">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— OUR PRODUCTS</span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px]">Product Categories</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-[13px] font-bold text-[#111111] transition-all duration-200 hover:text-primary">
              View Complete Range
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]"
                aria-label="Previous products"
              >
                ‹
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]"
                aria-label="Next products"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 sm:gap-5 pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] snap-start rounded-xl overflow-hidden border border-[#eeeeee] bg-white transition-all duration-200 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] hover:border-primary"
            >
              <div className="w-full h-[180px] bg-[#fafafa] flex items-center justify-center p-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={180}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-[16px_14px_18px] flex flex-col flex-1">
                <h3 className="text-[15px] font-extrabold text-[#111111] mb-1">{product.name}</h3>
                <p className="text-[11.5px] text-[#777777] leading-[1.4] mb-4 flex-1">{product.desc}</p>
                <Link
                  href={`/products#${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-[5px] text-xs font-bold text-primary transition-all duration-200 hover:text-primary-dark"
                >
                  View Products <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
