"use client";
import { useState, useRef } from "react";

const testimonials = [
  {
    quote:
      "Reliable supplier with consistent product quality and timely delivery. Highly recommended for industrial oil requirements across Maharashtra.",
    name: "Manufacturing Unit",
    location: "Pune, Maharashtra",
    rating: 5,
    tag: "Bulk Diesel & Fuel Oil",
  },
  {
    quote:
      "Consistent quality and professional service. MR Suppliers has been a dependable partner for our bitumen and road infrastructure project supplies.",
    name: "Construction & Infrastructure Ltd.",
    location: "Pune, Maharashtra",
    rating: 5,
    tag: "VG-30 Bitumen Supply",
  },
  {
    quote:
      "Exceptional service on bulk wholesale orders. Competitive rates and transparent logistics have made them our trusted fuel oil supplier for over 3 years.",
    name: "Heavy Engineering Plant",
    location: "Chakan Industrial Zone",
    rating: 5,
    tag: "Heavy Fuel Oil",
  },
  {
    quote:
      "Prompt response times and reliable fleet delivery. Their pyrolysis oil and tyre oil specifications match our factory heating standards perfectly.",
    name: "Industrial Processing Works",
    location: "Ahmednagar, Maharashtra",
    rating: 5,
    tag: "Tyre Pyrolysis Oil",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.querySelector(".testimonial-card")?.offsetWidth || 380;
    const scrollAmount = (cardWidth + 24) * (direction === "next" ? 1 : -1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const idx = Math.round((scrollLeft / maxScroll) * (testimonials.length - 1));
    setCurrentIndex(Math.min(testimonials.length - 1, Math.max(0, idx)));
  };

  return (
    <section className="py-[35px] pb-10 sm:py-[60px] sm:pb-[70px] bg-[#fafafa]">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[30px]">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
              — CLIENTS SAY
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px]">
              Trusted by Our Clients
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              className="w-10 h-10 border border-[#d5d5d5] bg-white rounded-full cursor-pointer text-xl flex items-center justify-center transition-all duration-200 text-[#333333] shadow-xs hover:border-primary hover:bg-primary hover:text-[#111111] active:scale-95"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="w-10 h-10 border border-[#d5d5d5] bg-white rounded-full cursor-pointer text-xl flex items-center justify-center transition-all duration-200 text-[#333333] shadow-xs hover:border-primary hover:bg-primary hover:text-[#111111] active:scale-95"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card shrink-0 w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] snap-start border border-[#e8e8e8] rounded-xl p-6 sm:p-7 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.04)] relative transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <svg
                        key={rIdx}
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="#f5a800"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10.5px] font-bold text-primary bg-[#fdf6e7] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.tag}
                  </span>
                </div>

                <div className="mb-3 text-primary opacity-80">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-[13.5px] text-[#444444] leading-[1.7] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#f2f2f2] pt-4 flex items-center justify-between">
                <div>
                  <div className="text-[13.5px] font-extrabold text-[#111111]">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[#888888] mt-0.5">
                    {t.location}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-primary font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-2 rounded-full border-0 cursor-pointer transition-all duration-300 p-0 ${
                idx === currentIndex ? "w-6 bg-primary" : "w-2 bg-[#d5d5d5]"
              }`}
              onClick={() => {
                if (!containerRef.current) return;
                const cards = containerRef.current.querySelectorAll(".testimonial-card");
                if (cards[idx]) {
                  cards[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                  setCurrentIndex(idx);
                }
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
