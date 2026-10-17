import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-8 pb-10 sm:py-12 sm:pb-12 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[30px]">
          {/* Left Column */}
          <div className="flex-[1.1] w-full max-w-full lg:max-w-[580px] pt-2.5">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-4">
              — TRUSTED WHOLESALE SUPPLIER
            </span>

            <h1 className="text-[28px] max-[560px]:leading-[1.18] sm:text-[clamp(28px,6.5vw,40px)] lg:text-[46px] font-black text-[#111111] leading-[1.08] mb-[18px] tracking-[-0.5px]">
              INDUSTRIAL
              <br />
              <span className="text-primary">OILS &amp; BITUMEN</span>
              <br />
              SOLUTIONS
            </h1>

            <p className="text-[13px] sm:text-[13.5px] text-[#555555] leading-[1.65] mb-5 sm:mb-[26px] max-w-[480px]">
              Reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and
              various industrial oils for diverse industry requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-7 sm:mb-10">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-[#111111] text-xs font-extrabold tracking-[0.5px] py-3 px-[22px] rounded hover:bg-primary-dark transition-all duration-200 shadow-[0_3px_10px_rgba(245,168,0,0.3)] w-full sm:w-auto text-center"
              >
                <span className="text-sm font-black">↗</span>
                EXPLORE OUR WHOLESALE PRODUCTS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#222222] text-xs font-bold py-[11px] px-[22px] border-[1.5px] border-[#d8d8d8] rounded hover:border-[#111111] hover:text-[#111111] transition-all duration-200 w-full sm:w-auto text-center"
              >
                Contact Us <span className="text-[15px] leading-none">›</span>
              </a>
            </div>

            {/* Feature strip at bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 border-t border-[#ebebeb] pt-6">
              <div className="flex items-start gap-2.5">
                <div className="text-[#111111] shrink-0 mt-0.5">
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
                  <h4 className="text-xs font-bold text-[#111111] mb-0.5 leading-[1.3]">
                    Wide Product Range
                  </h4>
                  <p className="text-[10.5px] text-[#777777] leading-[1.35]">
                    Diesel, Fuel, Tyre Oil, Bitumen &amp; More
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-[#111111] shrink-0 mt-0.5">
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
                  <h4 className="text-xs font-bold text-[#111111] mb-0.5 leading-[1.3]">
                    Quality Assurance
                  </h4>
                  <p className="text-[10.5px] text-[#777777] leading-[1.35]">
                    Reliable &amp; Consistent Supply
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-[#111111] shrink-0 mt-0.5">
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
                  <h4 className="text-xs font-bold text-[#111111] mb-0.5 leading-[1.3]">
                    Bulk &amp; Wholesale
                  </h4>
                  <p className="text-[10.5px] text-[#777777] leading-[1.35]">
                    For Industrial Use
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-[#111111] shrink-0 mt-0.5">
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
                  <h4 className="text-xs font-bold text-[#111111] mb-0.5 leading-[1.3]">
                    Timely Delivery
                  </h4>
                  <p className="text-[10.5px] text-[#777777] leading-[1.35]">
                    Across India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Plant Image and Stats */}
          <div className="flex-[0.9] relative flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] h-[270px] sm:h-[380px] lg:h-[440px] lg:w-[520px]">
              <div className="absolute top-0 right-0 w-[90%] h-full bg-primary [clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] z-1"></div>
              <div className="absolute top-3 right-3 w-[86%] h-[94%] [clip-path:polygon(23%_0%,100%_0%,100%_100%,0%_100%)] z-2 overflow-hidden">
                <Image
                  src="/images/hero-plant.jpg"
                  alt="Industrial refinery plant"
                  width={580}
                  height={480}
                  className="w-full h-full object-cover block"
                  priority
                />
              </div>

              {/* Floating Stat Widgets */}
              <div className="absolute right-1 sm:-right-2.5 top-2.5 sm:top-[30px] flex flex-col gap-2 sm:gap-3.5 z-10">
                {/* 1. Supply Temperature */}
                <div className="bg-white py-2 px-3 sm:py-3 sm:px-4 rounded-lg shadow-[0_4px_18px_rgba(0,0,0,0.12)] min-w-[110px] sm:min-w-[140px]">
                  <div className="text-[8.5px] font-bold tracking-[1px] text-[#777777] uppercase mb-1">
                    SUPPLY TEMPERATURE
                  </div>
                  <div className="flex items-start leading-none">
                    <span className="text-2xl sm:text-[34px] font-black text-primary leading-none">
                      67
                    </span>
                    <span className="text-base font-bold text-primary mt-0.5">
                      °C
                    </span>
                  </div>
                  <div className="text-[8px] font-bold text-[#999999] tracking-[0.8px] mt-0.5">
                    OPTIMAL RANGE
                  </div>
                </div>

                {/* 2. Supply Stability */}
                <div className="bg-white py-2 px-3 sm:py-3 sm:px-4 rounded-lg shadow-[0_4px_18px_rgba(0,0,0,0.12)] min-w-[110px] sm:min-w-[140px]">
                  <div className="text-[8.5px] font-bold tracking-[1px] text-[#777777] uppercase mb-1">
                    SUPPLY STABILITY
                  </div>
                  <div>
                    <svg viewBox="0 0 140 40" className="w-[120px] h-8">
                      <path
                        d="M 5 25 Q 25 10, 45 22 T 85 15 T 120 20 T 135 12"
                        fill="none"
                        stroke="#f5a800"
                        strokeWidth="2.5"
                      />
                      <circle cx="135" cy="12" r="3" fill="#f5a800" />
                    </svg>
                    <div className="flex justify-between text-[7.5px] text-[#999999] mt-0.5">
                      <span>12:00</span>
                      <span>14:00</span>
                      <span>16:00</span>
                      <span>18:00</span>
                    </div>
                  </div>
                </div>

                {/* 3. Product Quality */}
                <div className="bg-white py-2 px-3 sm:py-3 sm:px-4 rounded-lg shadow-[0_4px_18px_rgba(0,0,0,0.12)] min-w-[110px] sm:min-w-[140px]">
                  <div className="text-[8.5px] font-bold tracking-[1px] text-[#777777] uppercase mb-1">
                    PRODUCT QUALITY
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                        stroke="#f5a800"
                        strokeWidth="2.2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-black text-[#111111] leading-[1.1]">
                        100%
                      </div>
                      <div className="text-[8px] font-bold text-[#777777] tracking-[0.8px]">
                        ASSURED
                      </div>
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
