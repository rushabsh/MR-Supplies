"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const albumImages = [
  { src: "/images/gallery-1.avif", alt: "Corporate Facility & Testing Laboratory", caption: "Testing Laboratory & Office" },
  { src: "/images/hero-plant.avif", alt: "Industrial Storage & Refinery Plant", caption: "Refinery & Storage Facility" },
  { src: "/images/about-barrels.avif", alt: "Industrial Drum Storage & Packaging", caption: "Bulk Drum Storage Warehouse" },
  { src: "/images/industry-manufacturing.avif", alt: "Manufacturing Operations & Dispatch", caption: "Manufacturing Operations" },
  { src: "/images/industry-processing.avif", alt: "Quality Processing & Refining Units", caption: "Processing & Quality Hub" },
];

export default function Gallery({
  label = "— OUR COMPANY",
  subtitle = "Take a closer look at our infrastructure, storage facilities, and industrial supply capabilities across India.",
}) {
  const [activeDot, setActiveDot] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const index = Math.round((scrollLeft / maxScroll) * (albumImages.length - 1));
    setActiveDot(Math.min(albumImages.length - 1, Math.max(0, index)));
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector(".gallery-card")?.offsetWidth || 340;
    const scrollAmount = (cardWidth + 20) * (direction === "next" ? 1 : -1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToSlide = (idx) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll(".gallery-card");
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveDot(idx);
    }
  };

  return (
    <section className="py-[35px] pb-[35px] sm:py-[60px] sm:pb-[50px] bg-white" id="photos">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-7 gap-3 sm:gap-5">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
              {label}
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] leading-[1.15]">
              Company Album &amp; Infrastructure
            </h2>
          </div>
          {subtitle && (
            <p className="text-[13.5px] text-[#666666] max-w-[440px] leading-[1.6]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative mb-6">
          {/* Previous Arrow */}
          <button
            type="button"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a1a] text-white border-0 text-xl leading-none flex items-center justify-center cursor-pointer z-20 transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary hover:text-[#111111] hover:scale-105 active:scale-95"
            onClick={() => scroll("prev")}
            aria-label="Previous gallery image"
          >
            ‹
          </button>

          {/* Horizontally scrollable carousel */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar py-2 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {albumImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-card shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] snap-start rounded-[12px] overflow-hidden border border-[#ebebeb] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] group"
              >
                <div className="relative w-full h-[220px] sm:h-[240px] bg-[#f0f0f0] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[13px] font-bold tracking-[0.2px] drop-shadow-sm">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a1a] text-white border-0 text-xl leading-none flex items-center justify-center cursor-pointer z-20 transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-primary hover:text-[#111111] hover:scale-105 active:scale-95"
            onClick={() => scroll("next")}
            aria-label="Next gallery image"
          >
            ›
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {albumImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-[9px] rounded-full border-0 cursor-pointer transition-all duration-300 p-0 ${
                idx === activeDot
                  ? "w-6 bg-primary"
                  : "w-[9px] bg-[#d5d5d5] hover:bg-[#aaaaaa]"
              }`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to image slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
