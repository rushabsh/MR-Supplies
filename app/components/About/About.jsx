import Image from "next/image";

export default function About({
  variant = "default",
  tag = "— ABOUT US",
  showBtn = true,
}) {
  const isStory = variant === "story";

  return (
    <section className="py-10 pb-[35px] sm:py-[65px] sm:pb-[55px] bg-white" id="about">
      <div className="container">
        <div className={`flex items-center justify-between gap-10 lg:flex-row flex-col ${isStory ? "lg:gap-[60px]" : "lg:gap-[50px]"}`}>
          {/* Image Block (Left in story variant, Right in default variant) */}
          {isStory && (
            <div className="flex-[0.95] relative flex items-center w-full justify-center lg:justify-start">
              <div className="relative w-full max-w-[460px]">
                <div className="absolute -left-5 top-[25px] bottom-[25px] w-7 bg-primary rounded-[4px] z-1"></div>
                <div className="relative w-full h-[260px] sm:h-[330px] rounded-[6px] overflow-hidden z-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/about-barrels.avif"
                    alt="MR Suppliers oil barrels and refinery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Text Content Column */}
          <div className="flex-[1.1] w-full max-w-full lg:max-w-[530px]">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2.5">
              {isStory ? "— OUR STORY" : tag}
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-black text-[#111111] leading-[1.1] mb-1 tracking-[-0.5px]">MR SUPPLIERS</h2>
            <p className={`text-[13px] sm:text-sm text-[#222222] font-bold mb-4 ${isStory ? "italic font-medium text-[#444444]" : ""}`}>
              Industrial Oils &amp; Bitumen Supplier
            </p>

            <p className="text-[13.5px] text-[#555555] leading-[1.7] mb-6">
              Established in year 2018, MR Suppliers is the leading Wholesale
              Trader of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and many more.
              We are committed to providing quality products, reliable supply
              and timely delivery to meet the diverse needs of industries.
            </p>

            {showBtn && !isStory && (
              <a href="/about" className="inline-flex items-center gap-2 bg-primary text-[#111111] text-xs font-extrabold py-[11px] px-[22px] rounded hover:bg-primary-dark transition-all duration-200 mb-[35px]">
                More About Us <span className="text-[15px] leading-none">→</span>
              </a>
            )}

            {/* 4 Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 border-t border-[#ebebeb] pt-[22px]">
              <div className="flex items-center sm:items-start gap-2.5 min-w-0 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3 sm:p-0 shadow-xs sm:shadow-none">
                <div className="text-[#333333] shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#222" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-extrabold text-[#111111] leading-[1.2]">2018</div>
                  <div className="text-[10.5px] text-[#777777] mt-0.5">Established</div>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-2.5 min-w-0 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3 sm:p-0 shadow-xs sm:shadow-none">
                <div className="text-[#333333] shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#222" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-extrabold text-[#111111] leading-[1.2]">10+</div>
                  <div className="text-[10.5px] text-[#777777] mt-0.5">Employees</div>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-2.5 min-w-0 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3 sm:p-0 shadow-xs sm:shadow-none">
                <div className="text-[#333333] shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#222" strokeWidth="1.8">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-extrabold text-[#111111] leading-[1.2] truncate">Proprietorship</div>
                  <div className="text-[10.5px] text-[#777777] mt-0.5">Legal Status</div>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-2.5 min-w-0 bg-[#f9fafb] sm:bg-transparent border border-[#e5e7eb] sm:border-0 rounded-xl p-3 sm:p-0 shadow-xs sm:shadow-none">
                <div className="text-[#333333] shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#222" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-extrabold text-[#111111] leading-[1.2]">Pune, MH</div>
                  <div className="text-[10.5px] text-[#777777] mt-0.5">Location</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Default layout only) */}
          {!isStory && (
            <div className="flex-[0.9] relative flex w-full justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px] lg:w-[440px]">
                {/* Yellow backdrop placed specifically behind image */}
                <div className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 w-full h-full bg-[#f8be43] rounded-xl z-1"></div>
                <div className="relative w-full h-[260px] sm:h-[340px] rounded-lg overflow-hidden z-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/about-barrels.avif"
                    alt="MR Suppliers oil barrels and refinery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                </div>

                {/* Floating White Since 2018 Card */}
                <div className="absolute -bottom-2.5 sm:-bottom-[15px] -right-2 sm:-right-[15px] bg-white py-2.5 px-3.5 sm:py-3.5 sm:px-5 rounded-lg flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-3">
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#f5a800" strokeWidth="2">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-[15px] font-extrabold text-[#111111] leading-[1.2]">Since 2018</div>
                    <div className="text-[10.5px] text-[#777777]">Trusted Wholesale Supplier</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
