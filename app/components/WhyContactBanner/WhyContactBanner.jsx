import Image from "next/image";

const partnerFeatures = [
  {
    title: "Bulk Supply Support",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Timely Delivery",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
  {
    title: "Trusted Partner",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M10.59 13.41c.41.39 1.08.39 1.49 0l4.59-4.59c.78-.78.78-2.05 0-2.83a1.996 1.996 0 0 0-2.83 0l-3.25 3.25-1.5-1.5 2.12-2.12c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L7.67 6.33a3.008 3.008 0 0 0 0 4.24l2.92 2.84zm7.07-7.07c1.56 1.56 1.56 4.09 0 5.66l-5.66 5.66a3.99 3.99 0 0 1-5.66 0l-.71-.71 1.41-1.41.71.71c.78.78 2.05.78 2.83 0l5.66-5.66c.78-.78.78-2.05 0-2.83l-1.41-1.41 1.41-1.41 1.42 1.4zM5.5 10.5L2 14l6 6 3.5-3.5-6-6zm13 3L15 17l6 6 3.5-3.5-6-6z" />
      </svg>
    ),
  },
];

export default function WhyContactBanner() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      {/* Background with contactsection-bottom.avif */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactsection-bottom.avif"
          alt="Industrial Refinery Supply Partnership"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        {/* Desktop Gradient: shows sharp refinery pipes on the left, smooth fade to pure white on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 via-45% to-white to-60% hidden lg:block"></div>
        {/* Mobile/Tablet Overlay: balanced readability overlay */}
        <div className="absolute inset-0 bg-white/94 sm:bg-white/90 lg:hidden"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column Spacer on desktop to showcase the refinery pipelines photo */}
          <div className="hidden lg:block lg:flex-[0.85] xl:flex-[0.95] pointer-events-none"></div>

          {/* Right Column: Heading, Description & 4 Badges */}
          <div className="w-full lg:flex-[1.15] xl:flex-[1.25]">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-7 h-[3px] bg-[#fcc509] rounded-sm"></span>
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#777777]">
                WHY CONTACT US
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#111111] tracking-[-0.5px] leading-[1.18] mb-3.5">
              Let&apos;s Build a Long-Term Supply Partnership
            </h2>

            <p className="text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.7] mb-8 max-w-[620px]">
              At MR Suppliers, we focus on providing reliable products, competitive pricing and timely delivery. Whether you need small quantities or bulk orders, our team is ready to support your industrial fuel and bitumen requirements.
            </p>

            {/* 4 Feature Badges with custom bg: #fef6e4 and icon color: #fcc509 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {partnerFeatures.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center group bg-white sm:bg-transparent border border-[#ededed] sm:border-0 rounded-2xl p-4 sm:p-0 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:shadow-none">
                  <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#fef6e4] text-[#fcc509] flex items-center justify-center shadow-[0_4px_16px_rgba(252,197,9,0.12)] mb-2.5 transition-transform duration-200 group-hover:scale-105">
                    {f.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-extrabold text-[#111111] leading-[1.3] max-w-[120px]">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
