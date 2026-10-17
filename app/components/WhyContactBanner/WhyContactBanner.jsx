import Image from "next/image";

const partnerFeatures = [
  {
    title: "Quality Products",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3v18" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    title: "Timely Delivery",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Customized Solutions",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function WhyContactBanner() {
  return (
    <section className="py-2.5 pb-10 sm:py-5 sm:pb-[60px] bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-9 lg:gap-[50px]">
          {/* Left Column: Golden Oil Pouring Image */}
          <div className="flex-[0.9] w-full h-[200px] sm:h-[260px] lg:h-[290px] relative rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] bg-[#111111]">
            <Image
              src="/images/quality-bg.jpg"
              alt="Golden industrial oil pouring"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Text & 4 Badges */}
          <div className="flex-[1.1] w-full max-w-full lg:max-w-[580px]">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— WHY CONTACT US</span>
            <h2 className="text-[25px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] leading-[1.18] mb-2">
              Reliable Partner for Your Supply Needs
            </h2>
            <p className="text-[13.5px] text-[#666666] leading-[1.65] mb-[26px]">
              We ensure quality, timely delivery and the right solutions for
              your business requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {partnerFeatures.map((f) => (
                <div key={f.title} className="flex flex-col items-start gap-2">
                  <div className="text-primary flex items-center justify-center">{f.icon}</div>
                  <span className="text-xs font-extrabold text-[#222222] leading-[1.35]">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
