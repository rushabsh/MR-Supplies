const testimonials = [
  {
    quote:
      "Reliable supplier with good product quality and timely delivery. Highly recommended for industrial oil requirements.",
    name: "Manufacturing Unit",
    location: "Pune, Maharashtra",
  },
  {
    quote:
      "Consistent quality and professional service. MR Suppliers has been a dependable partner for our business needs.",
    name: "Construction Company",
    location: "Pune, Maharashtra",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[35px] pb-10 sm:py-[60px] sm:pb-[70px] bg-white">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-0 mb-[30px]">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— CLIENTS SAY</span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px]">Trusted by Our Clients</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]" aria-label="Previous">
              ‹
            </button>
            <button className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]" aria-label="Next">
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#eeeeee] rounded-lg p-5 sm:p-[28px_24px_22px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.04)] relative transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-3">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#f5a800">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[13.5px] text-[#555555] leading-[1.65] mb-[22px]">{t.quote}</p>
              <div className="border-t border-[#f2f2f2] pt-3.5">
                <div className="text-[13.5px] font-extrabold text-[#111111]">{t.name}</div>
                <div className="text-[11px] text-[#888888] mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
