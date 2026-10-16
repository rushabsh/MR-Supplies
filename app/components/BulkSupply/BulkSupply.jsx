import Image from "next/image";

export default function BulkSupply({
  tag = "— GET IN TOUCH",
  title = "Looking for Bulk Supply?",
  desc = "Contact us for the best quotes and reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and industrial products.",
  btnText = "Contact Us",
  btnLink = "/#contact",
  bgImage = "/images/bulk-bg.jpg",
}) {
  return (
    <section className="relative py-11 sm:py-[70px] overflow-hidden bg-[#fbf8f2]" id="contact">
      <div className="absolute inset-0 z-1">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover object-[right_center] opacity-90"
        />
        <div className="absolute inset-0 bg-white/92 md:bg-gradient-to-r md:from-white/96 md:via-white/88 md:to-white/10"></div>
      </div>

      <div className="container">
        <div className="relative z-2 max-w-full md:max-w-[520px]">
          <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2.5">{tag}</span>
          <h2 className="text-[26px] sm:text-[34px] font-black text-[#111111] mb-3.5 leading-[1.15] tracking-[-0.5px]">{title}</h2>
          <p className="text-[13.5px] text-[#444444] leading-[1.65] mb-6">{desc}</p>
          <a href={btnLink} className="inline-flex items-center gap-2 bg-primary text-[#111111] text-[12.5px] font-extrabold py-3 px-6 rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(245,168,0,0.3)] hover:bg-primary-dark">
            {btnText} <span className="text-[15px] leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
