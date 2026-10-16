import Image from "next/image";

const industries = [
  {
    name: "Manufacturing Plants & Factories",
    image: "/images/industry-manufacturing.jpg",
  },
  {
    name: "Construction & Infrastructure",
    image: "/images/industry-construction.jpg",
  },
  {
    name: "Automotive & Tyre Industry",
    image: "/images/industry-automotive.jpg",
  },
  {
    name: "Industrial Processing Units",
    image: "/images/industry-processing.jpg",
  },
];

export default function Industries() {
  return (
    <section className="py-[35px] pb-[35px] sm:py-[60px] sm:pb-[50px] bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-7 gap-3 sm:gap-5">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— OUR INDUSTRIES</span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] leading-[1.15]">Serving Diverse Industries</h2>
          </div>
          <p className="text-[13.5px] text-[#666666] max-w-[440px] leading-[1.6]">
            Our products are widely used across multiple sectors, supporting essential industrial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((ind) => (
            <div key={ind.name} className="group rounded-lg overflow-hidden border border-[#eeeeee] bg-white transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[3px]">
              <div className="relative w-full h-[180px] bg-[#f0f0f0]">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white py-3.5 px-4 flex items-center justify-between gap-2">
                <span className="text-[13px] font-extrabold text-[#111111] leading-[1.35]">{ind.name}</span>
                <span className="text-[15px] font-bold text-[#555555] transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
