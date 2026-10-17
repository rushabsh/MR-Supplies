import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="py-5 pb-10 sm:py-[30px] sm:pb-[60px] bg-white" id="location">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[30px] items-stretch">
          {/* Left Column: Interactive Styled Map Visual */}
          <div className="rounded-[10px] border border-[#e5e5e5] overflow-hidden relative min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] bg-[#f4f6f8]">
            {/* Styled Map Canvas Visual with Pune landmarks */}
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[400px]">
              {/* Roads / Grid Background vectors */}
              <svg className="w-full h-full block" viewBox="0 0 600 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e8ecf0" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="#f4f6f8" />
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Major Highways / Arteries */}
                <path d="M 0 100 Q 180 140, 320 180 T 600 240" fill="none" stroke="#ffffff" strokeWidth="10" />
                <path d="M 0 100 Q 180 140, 320 180 T 600 240" fill="none" stroke="#d5dde5" strokeWidth="6" />

                <path d="M 120 0 Q 180 180, 240 260 T 360 400" fill="none" stroke="#ffffff" strokeWidth="8" />
                <path d="M 120 0 Q 180 180, 240 260 T 360 400" fill="none" stroke="#d8e1ea" strokeWidth="4" />

                <path d="M 280 0 L 320 400" fill="none" stroke="#ffffff" strokeWidth="6" />
                <path d="M 280 0 L 320 400" fill="none" stroke="#d8e1ea" strokeWidth="3" />

                <path d="M 0 280 Q 200 250, 400 310 T 600 340" fill="none" stroke="#ffffff" strokeWidth="6" />
                <path d="M 0 280 Q 200 250, 400 310 T 600 340" fill="none" stroke="#e2e8f0" strokeWidth="3" />

                {/* River / Waterbody */}
                <path
                  d="M 0 350 Q 80 320, 160 360 T 300 330 T 450 370 T 600 340"
                  fill="none"
                  stroke="#d7e8f7"
                  strokeWidth="14"
                />

                {/* Area Labels */}
                <text x="210" y="60" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">CHINCHWAD</text>
                <text x="160" y="140" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">PIMPRI</text>
                <text x="60" y="210" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">HINJAWADI</text>
                <text x="170" y="270" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">MIDC</text>
                <text x="360" y="300" className="text-2xl font-black fill-[#243b53] tracking-[-0.5px]">Pune</text>
                <text x="500" y="240" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">VIMAN NAGAR</text>
                <text x="230" y="370" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">KOTHRUD</text>
                <text x="470" y="370" className="text-[10px] font-bold fill-[#8a9ba8] tracking-[1px]">HADAPSAR</text>
              </svg>

              {/* Pin Location Badge */}
              <a
                href="https://maps.google.com/?q=MIDC+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[48%] left-1/2 sm:left-[45%] -translate-x-1/2 -translate-y-1/2 sm:-translate-x-[30%] sm:-translate-y-[60%] bg-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.16)] flex items-center gap-3 no-underline border border-[#e8e8e8] transition-all duration-200 z-10 hover:-translate-y-[63%] hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)]"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-[#111111] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-black text-[#111111] leading-[1.2]">MR Suppliers</span>
                  <span className="text-[10.5px] text-[#666666]">MIDC, Pune, Maharashtra</span>
                </div>
                <div className="text-sm font-bold text-[#777777] ml-1">↗</div>
              </a>
            </div>
          </div>

          {/* Right Column: Visit Our Facility */}
          <div className="rounded-[10px] overflow-hidden flex flex-col shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
            <div className="relative w-full h-[200px] bg-[#111111]">
              <Image
                src="/images/about-barrels.jpg"
                alt="MR Suppliers barrels and refinery facility"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            <div className="bg-[#111111] p-5 sm:p-[26px_28px] flex-1 flex flex-col">
              <span className="inline-block text-[10.5px] font-bold tracking-[1.5px] uppercase text-primary mb-1.5">— OUR LOCATION</span>
              <h3 className="text-xl sm:text-[22px] font-black text-white tracking-[-0.5px] mb-2">Visit Our Facility</h3>
              <p className="text-[12.5px] text-[#bbbbbb] leading-[1.6] mb-[22px]">
                You are welcome to visit our office and meet our team to discuss
                your requirements in detail.
              </p>
              <a
                href="https://maps.google.com/?q=MIDC+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 border-[1.5px] border-white text-white text-[12.5px] font-bold py-[9px] px-5 rounded-md no-underline transition-all duration-200 self-stretch sm:self-start mt-auto hover:bg-white hover:text-[#111111]"
              >
                Get Directions <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
