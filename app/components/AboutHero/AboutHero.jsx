import Image from "next/image";
import Link from "next/link";

export default function AboutHero({
  tag = "— ABOUT US",
  headline = (
    <>
      A Trusted Partner in<br />
      Industrial Oils &amp; <span className="text-[#fcc509]">Bitumen</span>
    </>
  ),
  description = "Since 2018, MR Suppliers has been a leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and various industrial oils, catering to diverse industry requirements.",
  bgImage = "/images/Products-background.avif",
}) {
  return (
    <>
      {/* 1. About Hero Section matching Products Page Hero */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#0d1117] text-white">
        {/* Background Image & Gradient Overlay identical to Products Page */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="About MR Suppliers Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
          {/* Subtle gradient ensuring 100% text contrast on the left side */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0d1117]/90 via-[#0d1117]/60 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-190 mx-auto">
            <span className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-[#fcc509] mb-3">
              {tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-[-0.5px] leading-[1.12] mb-4">
              {headline}
            </h1>
            <p className="text-sm sm:text-[15px] text-[#cccccc] leading-[1.65] mb-6 max-w-140">
              {description}
            </p>
            <div className="flex items-center justify-center gap-3.5 mb-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-black py-3.5 px-7 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(252,197,9,0.35)]"
              >
                Get Quote <span className="text-sm">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-6 border border-white/20 rounded-lg backdrop-blur-xs transition-all duration-200"
              >
                Contact Us <span className="text-[15px] leading-none">›</span>
              </Link>
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
    </>
  );
}
