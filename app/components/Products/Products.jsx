import Image from "next/image";

const products = [
  {
    name: "Tyre Oil",
    desc: "Tyre shred wire scrap",
    image: "/images/product-tyre-oil.avif",
  },
  {
    name: "Diesel Oil",
    desc: "Industrial fuel oil",
    image: "/images/product-diesel-oil.avif",
  },
  {
    name: "Fuel Oil",
    desc: "Heavy fuel oil",
    image: "/images/product-fuel-oil.avif",
  },
  {
    name: "Pyrolysis Oil",
    desc: "Tyre pyrolysis oil",
    image: "/images/product-pyrolysis-oil.avif",
  },
  {
    name: "Bitumen Oil",
    desc: "Viscosity grade 30 bitumen",
    image: "/images/product-bitumen-oil.avif",
  },
];

export default function Products() {
  return (
    <section className="py-10 pb-[35px] sm:py-[60px] sm:pb-[50px] bg-white" id="products">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-0 mb-[30px]">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— OUR PRODUCTS</span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px]">Product Categories</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="#products" className="text-[13px] font-bold text-[#111111] transition-all duration-200 hover:text-primary">
              View Complete Range
            </a>
            <div className="flex gap-2">
              <button className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]" aria-label="Previous">
                ‹
              </button>
              <button className="w-8 h-8 border-[1.5px] border-[#d5d5d5] bg-white rounded-full cursor-pointer text-base flex items-center justify-center transition-all duration-200 text-[#555555] p-0 hover:border-[#111111] hover:text-[#111111]" aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[481px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-[18px]">
          {products.map((product) => (
            <div key={product.name} className="rounded-lg overflow-hidden border border-[#eeeeee] bg-white transition-all duration-200 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] hover:border-[#e0e0e0]">
              <div className="w-full h-[180px] bg-[#fafafa] flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={180}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-[16px_14px_18px] flex flex-col flex-1">
                <h3 className="text-[15px] font-extrabold text-[#111111] mb-1">{product.name}</h3>
                <p className="text-[11.5px] text-[#777777] leading-[1.4] mb-4 flex-1">{product.desc}</p>
                <a href="#products" className="inline-flex items-center gap-[5px] text-xs font-bold text-primary transition-all duration-200 hover:text-primary-dark">
                  View Products <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
