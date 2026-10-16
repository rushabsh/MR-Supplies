const valuesData = [
  {
    title: "Quality First",
    desc: "We supply high-quality industrial oils and bitumen from trusted sources.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3v18" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "We build long-term relationships by understanding and fulfilling our clients' needs.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.8a2 2 0 0 0-2.8-2.8L15 13" />
        <path d="M2 13a4 4 0 0 1 4-4h2" />
        <circle cx="16" cy="6" r="3" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "Consistent supply, competitive pricing and dependable service for business continuity.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Growth Together",
    desc: "We aim to contribute to the success of our clients and industries we serve.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-5 5" />
        <path d="M14 9h5v5" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className="py-[35px] pb-[35px] sm:py-[65px] sm:pb-[55px] bg-white">
      <div className="container">
        <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— OUR VALUES</span>
        <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] mb-5 sm:mb-8">What Drives Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[22px]">
          {valuesData.map((val) => (
            <div key={val.title} className="bg-white border border-[#eeeeee] rounded-lg p-7 sm:p-[28px_22px] transition-all duration-200 flex flex-col hover:-translate-y-[3px] hover:shadow-[0_10px_26px_rgba(0,0,0,0.08)] hover:border-primary/40">
              <div className="w-12 h-12 flex items-center justify-start text-primary mb-4">{val.icon}</div>
              <h3 className="text-base font-extrabold text-[#111111] mb-2.5 leading-[1.3]">{val.title}</h3>
              <p className="text-[13px] text-[#666666] leading-[1.65]">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
