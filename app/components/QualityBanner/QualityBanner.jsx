import Image from "next/image";

const features = [
  {
    title: "Quality Products",
    desc: "Assured quality and standards",
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#f5a800" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Bulk Supply",
    desc: "Competitive pricing for wholesale orders",
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#f5a800" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "Reliable and timely logistics",
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#f5a800" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Trusted by Industries",
    desc: "Serving diverse industrial needs",
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#f5a800" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function QualityBanner({
  tag = "— WHY CHOOSE US",
  title = (
    <>
      Reliable Supply.<br />
      Consistent Quality.
    </>
  ),
  desc = (
    <>
      Your trusted partner for industrial oils, bitumen and related products.<br />
      We ensure quality, availability and timely delivery for your business needs.
    </>
  ),
}) {
  return (
    <section className="relative bg-[#0f1318] py-10 pb-[35px] sm:py-[60px] sm:pb-[50px] overflow-hidden text-white">
      <div className="absolute inset-0 z-1">
        <Image
          src="/images/quality-bg.avif"
          alt="Golden industrial oil pouring"
          fill
          sizes="100vw"
          className="object-cover object-[right_center] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1318]/98 via-[#0f1318]/92 to-[#0f1318]/40"></div>
      </div>

      <div className="container">
        <div className="relative z-2 max-w-full">
          <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-3">{tag}</span>
          <h2 className="text-[26px] sm:text-4xl font-black text-white leading-[1.15] mb-4 tracking-[-0.5px]">{title}</h2>
          <p className="text-[13px] sm:text-[13.5px] text-[#c4c4c4] leading-[1.65] mb-6 sm:mb-[38px] max-w-[650px]">{desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3.5 bg-white/10 sm:bg-transparent border border-white/15 sm:border-0 rounded-xl p-4 sm:p-0 backdrop-blur-xs"
              >
                <div className="shrink-0 mt-0.5">{f.svg}</div>
                <div className="flex flex-col">
                  <div className="text-sm font-extrabold text-white mb-[3px] leading-[1.25]">{f.title}</div>
                  <div className="text-[11.5px] text-[#9e9e9e] leading-[1.4]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
