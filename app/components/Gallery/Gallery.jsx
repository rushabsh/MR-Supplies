"use client";
import Image from "next/image";
import { useState } from "react";

const albumImages = [
  { src: "/images/gallery-1.jpg", alt: "Office glass corridor" },
  { src: "/images/gallery-logo.jpg", alt: "MR Suppliers company sign" },
  { src: "/images/gallery-3.jpg", alt: "Executive conference room" },
];

export default function Gallery({
  label = "— OUR COMPANY",
  subtitle,
}) {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section className="py-[35px] pb-[35px] sm:py-[60px] sm:pb-[50px] bg-white" id="photos">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-7 gap-3 sm:gap-5">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">{label}</span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] leading-[1.15]">Company Album &amp; Infrastructure</h2>
          </div>
          {subtitle && <p className="text-[13.5px] text-[#666666] max-w-[440px] leading-[1.6]">{subtitle}</p>}
        </div>

        <div className="relative flex items-center mb-6">
          <button
            className="absolute left-2 sm:-left-[18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#222222] text-white border-0 text-[22px] leading-none flex items-center justify-center cursor-pointer z-10 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:bg-primary hover:text-[#111111]"
            onClick={() =>
              setActiveDot((prev) => (prev - 1 + albumImages.length) % albumImages.length)
            }
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {albumImages.map((img, idx) => (
              <div
                key={idx}
                className="rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                <div className="relative w-full h-[200px] sm:h-[220px] bg-[#f0f0f0]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-2 sm:-right-[18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#222222] text-white border-0 text-[22px] leading-none flex items-center justify-center cursor-pointer z-10 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:bg-primary hover:text-[#111111]"
            onClick={() => setActiveDot((prev) => (prev + 1) % albumImages.length)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {albumImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-[9px] h-[9px] rounded-full border-0 cursor-pointer transition-all duration-200 p-0 ${idx === activeDot ? "bg-primary scale-115" : "bg-[#e0e0e0]"}`}
              onClick={() => setActiveDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
