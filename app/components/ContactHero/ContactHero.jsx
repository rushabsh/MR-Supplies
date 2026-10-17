import Image from "next/image";

const heroFeatures = [
  {
    label: "Quick Response",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Competitive Pricing",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Bulk Supply Available",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Pan India Delivery",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function ContactHero() {
  return (
    <section className="relative bg-white py-[30px] pb-[35px] sm:py-[50px] sm:pb-[60px] overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[50px]">
          {/* Left Column */}
          <div className="flex-[1.15] w-full max-w-full lg:max-w-[580px]">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-3">— GET IN TOUCH</span>

            <h1 className="text-[28px] max-[600px]:leading-[1.18] sm:text-[38px] lg:text-[48px] font-black text-[#111111] leading-[1.12] tracking-[-0.5px] mb-[18px]">
              LET&apos;S WORK
              <br />
              <span className="text-primary">TOGETHER</span>
            </h1>

            <p className="text-sm leading-[1.7] text-[#555555] mb-7 max-w-[500px]">
              Contact us for the best quotes and reliable supply of Diesel Oil,
              Fuel Oil, Tyre Oil, Bitumen and various industrial oils. Our team
              is ready to assist you with your requirements.
            </p>

            {/* 4 Feature Badges */}
            <div className="flex flex-col min-[601px]:flex-row flex-wrap gap-3">
              {heroFeatures.map((f, i) => (
                <div key={i} className="inline-flex items-center gap-2 bg-[#fbfbfb] border border-[#ebebeb] py-2 px-3.5 rounded-md transition-all duration-200 hover:border-primary hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] w-full min-[601px]:w-auto">
                  <span className="flex items-center justify-center text-primary leading-none">{f.icon}</span>
                  <span className="text-xs font-bold text-[#222222] tracking-[0.2px]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column with Plant Image and Floating Call Card */}
          <div className="flex-[0.95] relative flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-full lg:max-w-[500px] h-[250px] sm:h-[340px] lg:h-[400px]">
              <div className="absolute -top-[25px] left-5 -right-[25px] bottom-[25px] bg-gradient-to-br from-[rgba(245,168,0,0.85)] to-[rgba(255,197,51,0.4)] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] rounded-xl z-1"></div>

              <div className="relative w-full h-full rounded-lg overflow-hidden z-2 shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/hero-plant.avif"
                  alt="MR Suppliers refinery infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Immediate Assistance Card */}
              <a href="tel:+919876543210" className="group static min-[601px]:absolute mt-4 min-[601px]:mt-0 min-[601px]:-bottom-2.5 lg:min-[993px]:-bottom-5 right-2.5 lg:min-[993px]:-right-2.5 bg-white p-4 px-5 rounded-[10px] shadow-[0_14px_40px_rgba(0,0,0,0.16)] z-10 flex items-center justify-between min-[601px]:justify-start gap-3.5 no-underline transition-all duration-200 border border-[#f0f0f0] hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(0,0,0,0.2)] w-full min-[601px]:w-auto">
                <div className="w-11 h-11 rounded-full bg-primary text-[#111111] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10.5px] text-[#777777] font-medium">Need Immediate Assistance?</span>
                  <span className="text-[11px] font-bold text-[#333333]">Call Us Now</span>
                  <span className="text-base font-black text-[#111111] tracking-[0.3px] leading-[1.2]">+91 98765 43210</span>
                </div>
                <div className="w-7 h-7 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#444444] text-sm transition-all duration-200 group-hover:bg-primary group-hover:border-primary group-hover:text-[#111111]">
                  <span>→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
