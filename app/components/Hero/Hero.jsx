import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-10 pb-12 sm:py-14 sm:pb-16 lg:py-16 lg:pb-20 overflow-hidden bg-[#0d1117] text-white">
      {/* Background Image & Dark Overlay matching Products Page */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.avif"
          alt="MR Suppliers Industrial Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Same dark gradient overlay as Products page */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1117]/92 via-[#0d1117]/70 to-[#0d1117]/25"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Column - Centered on mobile */}
          <div className="flex-1 w-full max-w-full lg:max-w-145 text-center lg:text-left flex flex-col items-center lg:items-start pt-2">
            <span className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-[#fcc509] mb-3 sm:mb-4">
              — TRUSTED WHOLESALE SUPPLIER
            </span>

            <h1 className="text-3xl max-[560px]:leading-[1.18] sm:text-4xl lg:text-[46px] font-black text-white leading-[1.08] mb-4.5 tracking-[-0.5px]">
              INDUSTRIAL
              <br />
              <span className="text-[#fcc509]">OILS &amp; BITUMEN</span>
              <br />
              SOLUTIONS
            </h1>

            <p className="text-[13.5px] sm:text-[14px] text-[#cccccc] leading-[1.65] mb-6 sm:mb-7 max-w-120">
              Reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and
              various industrial oils for diverse industry requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-7 sm:mb-9 w-full sm:w-auto">
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-black tracking-[0.5px] py-3.5 px-6 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(252,197,9,0.35)] w-full sm:w-auto text-center"
              >
                <span className="text-sm font-black">↗</span>
                EXPLORE OUR WHOLESALE PRODUCTS
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3.25 px-6 border border-white/20 rounded-lg backdrop-blur-xs transition-all duration-200 w-full sm:w-auto text-center"
              >
                Contact Us <span className="text-[15px] leading-none">›</span>
              </a>
            </div>

            {/* Mobile Stats 2x2 Grid matching 2nd image (Mobile Only) */}
            <div className="w-full grid grid-cols-2 gap-2.5 sm:gap-3.5 border-t border-white/15 pt-5 text-left lg:hidden">
              {/* 1. Established 2018 */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ededed] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center gap-3">
                <div className="text-dark-2 shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] font-black text-[#111111] leading-tight">Wide Product Range</div>
                  <div className="text-[11px] sm:text-xs text-[#666666] font-medium mt-0.5">Diesel, Fuel, Tyre Oil, Bitumen & More</div>
                </div>
              </div>

              {/* 2. 10+ Employees */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ededed] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center gap-3">
                <div className="text-dark-2 shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] font-black text-[#111111] leading-tight">Quality Assurance</div>
                  <div className="text-[11px] sm:text-xs text-[#666666] font-medium mt-0.5">Reliable & Verified Products</div>
                </div>
              </div>

              {/* 3. Proprietorship */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ededed] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center gap-3">
                <div className="text-dark-2 shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13.5px] font-black text-[#111111] leading-tight truncate">Bulk & Wholesale</div>
                  <div className="text-[11px] sm:text-xs text-[#666666] font-medium mt-0.5">For Industrial Use

                  </div>
                </div>
              </div>

              {/* 4. Pune, MH */}
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ededed] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center gap-3">
                <div className="text-dark-2 shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] font-black text-[#111111] leading-tight">Timely Delivery
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#666666] font-medium mt-0.5">Across India

                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Feature strip at bottom (Desktop Only) */}
            <div className="w-full hidden lg:grid grid-cols-4 gap-4 border-t border-white/15 pt-6 text-left">
              <div className="flex items-start gap-3">
                <div className="text-[#fcc509] shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5 leading-[1.3]">
                    Wide Product Range
                  </h4>
                  <p className="text-[10.5px] text-[#aaaaaa] leading-[1.35]">
                    Diesel, Fuel, Tyre Oil, Bitumen &amp; More
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#fcc509] shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5 leading-[1.3]">
                    Quality Assurance
                  </h4>
                  <p className="text-[10.5px] text-[#aaaaaa] leading-[1.35]">
                    Reliable &amp; Consistent Supply
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#fcc509] shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5 leading-[1.3]">
                    Bulk &amp; Wholesale
                  </h4>
                  <p className="text-[10.5px] text-[#aaaaaa] leading-[1.35]">
                    For Industrial Use
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#fcc509] shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5 leading-[1.3]">
                    Timely Delivery
                  </h4>
                  <p className="text-[10.5px] text-[#aaaaaa] leading-[1.35]">
                    Across India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Stats (Hidden on Mobile Devices) */}
          <div className="hidden lg:flex flex-[0.9] w-full justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-130 flex justify-center lg:justify-end">
              {/* Single Unified Telemetry Widget matching reference image */}
              <div className="relative lg:absolute lg:right-0 lg:top-[-150] z-10 bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl 
              shadow-[0_12px_36px_rgba(0,0,0,0.16)] border border-[#eeeeee] w-43.75 sm:w-46.25 
              mx-auto lg:mx-0">

                {/* 1. SUPPLY TEMPERATURE */}
                <div>
                  <div className="text-[8px] sm:text-[9px] font-bold tracking-[1.2px] text-[#777777] 
                  uppercase mb-1">
                    SUPPLY TEMPERATURE
                  </div>
                  <div className="flex items-baseline leading-none">
                    <span className="text-[42px] sm:text-[50px] font-black text-primary tracking-[-1px] leading-none">
                      67°
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#111111] ml-1 leading-none">
                      C
                    </span>
                  </div>
                  <div className="text-[7.5px] sm:text-[8.5px] font-bold text-text-light tracking-[0.8px] uppercase mt-1.5 mb-1.5">
                    OPTIMAL RANGE
                  </div>
                  <div className="w-full h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                    <div className="h-full w-[56%] bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Divider 1 */}
                <div className="w-full h-px bg-[#f0f0f0] my-3 sm:my-3.5"></div>

                {/* 2. SUPPLY STABILITY */}
                <div>
                  <div className="text-[8px] sm:text-[9px] font-bold tracking-[1.2px] text-[#777777] uppercase mb-1.5">
                    SUPPLY STABILITY
                  </div>
                  <div className="relative w-full">
                    <svg viewBox="0 0 150 48" className="w-full h-auto overflow-visible">
                      <defs>
                        <linearGradient id="heroStabilityGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f5a800" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#f5a800" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      {/* Subtle horizontal grid lines */}
                      <line x1="0" y1="8" x2="126" y2="8" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="24" x2="126" y2="24" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="40" x2="126" y2="40" stroke="#f3f4f6" strokeWidth="1" />

                      {/* Y-axis labels */}
                      <text x="132" y="11" fill="#9ca3af" fontSize="7.5" fontWeight="600">60°</text>
                      <text x="132" y="27" fill="#9ca3af" fontSize="7.5" fontWeight="600">40°</text>
                      <text x="132" y="43" fill="#9ca3af" fontSize="7.5" fontWeight="600">20°</text>

                      {/* Translucent Area Fill */}
                      <path
                        d="M 2 36 Q 12 28, 20 25 T 38 33 T 54 26 T 68 31 T 82 28 Q 96 14, 106 14 Q 116 14, 122 28 L 126 30 L 126 44 L 2 44 Z"
                        fill="url(#heroStabilityGrad)"
                      />

                      {/* Golden Wave Line */}
                      <path
                        d="M 2 36 Q 12 28, 20 25 T 38 33 T 54 26 T 68 31 T 82 28 Q 96 14, 106 14 Q 116 14, 122 28 L 126 30"
                        fill="none"
                        stroke="#f5a800"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Time labels below chart */}
                    <div className="flex justify-between text-[7px] sm:text-[7.5px] font-semibold text-text-light pr-5 mt-0.5">
                      <span>12:00</span>
                      <span>13:00</span>
                      <span>14:00</span>
                      <span>15:00</span>
                    </div>
                  </div>
                </div>

                {/* Divider 2 */}
                <div className="w-full h-px bg-[#f0f0f0] my-3 sm:my-3.5"></div>

                {/* 3. PRODUCT QUALITY */}
                <div>
                  <div className="text-[8px] sm:text-[9px] font-bold tracking-[1.2px] text-[#777777] uppercase mb-2">
                    PRODUCT QUALITY
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {/* Golden circular ring with top notch */}
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[3px] border-primary flex items-center justify-center shrink-0">
                      <span className="absolute top-[-3.5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full border border-white"></span>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#111111"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>

                    {/* Stat Text */}
                    <div className="flex flex-col">
                      <span className="text-[20px] sm:text-[23px] font-black text-[#111111] leading-none">
                        100%
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-extrabold text-[#555555] tracking-[1px] uppercase mt-1">
                        ASSURED
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
