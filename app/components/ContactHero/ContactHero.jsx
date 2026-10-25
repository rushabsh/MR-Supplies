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

export default function ContactHero({
  bgImage = "/images/Contact-background.avif",
  showImage = false,
}) {
  return (
    <section className="relative py-10 pb-12 sm:py-14 sm:pb-16 lg:py-16 lg:pb-20 overflow-hidden bg-[#0d1117] text-white">
      {/* Background Image & Dark Overlay matching Products Page */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="MR Suppliers Contact Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Same dark gradient overlay as Products page */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/92 via-[#0d1117]/70 to-[#0d1117]/25"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto">
          {/* Main Content - Centered */}
          <span className="inline-block text-[11px] font-bold tracking-[2px] uppercase text-[#fcc509] mb-3">
            — GET IN TOUCH
          </span>

          <h1 className="text-3xl max-[600px]:leading-[1.18] sm:text-4xl lg:text-[48px] font-black text-white leading-[1.12] tracking-[-0.5px] mb-4">
            LET&apos;S WORK <span className="text-[#fcc509]">TOGETHER</span>
          </h1>

          <p className="text-sm leading-[1.7] text-[#cccccc] mb-6 max-w-[540px]">
            Contact us for the best quotes and reliable supply of Diesel Oil,
            Fuel Oil, Tyre Oil, Bitumen and various industrial oils. Our team
            is ready to assist you with your requirements.
          </p>

          {/* 4 Feature Badges centered */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-7 w-full">
            {heroFeatures.map((f, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 py-2.5 px-4 rounded-xl backdrop-blur-xs transition-all duration-200 hover:border-[#fcc509] hover:bg-white/15 shadow-xs"
              >
                <span className="flex items-center justify-center text-[#fcc509] leading-none">
                  {f.icon}
                </span>
                <span className="text-xs font-bold text-white tracking-[0.2px]">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* Immediate Assistance Call Card Centered */}
          <div className="w-full flex justify-center">
            <a
              href="tel:+919876543210"
              className="group bg-white p-4 sm:p-5 px-6 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.2)] z-10 flex items-center justify-between gap-4 no-underline transition-all duration-200 border border-[#f0f0f0] hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(0,0,0,0.25)] w-full max-w-[420px] text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-[#111111] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,168,0,0.3)]">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10.5px] text-[#777777] font-bold uppercase tracking-[0.5px]">Need Immediate Assistance?</span>
                <span className="text-xs font-bold text-[#333333]">Call Us Directly</span>
                <span className="text-base sm:text-lg font-black text-[#111111] tracking-[0.3px] leading-[1.2]">+91 98765 43210</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#444444] text-sm transition-all duration-200 group-hover:bg-primary group-hover:border-primary group-hover:text-[#111111]">
                <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
