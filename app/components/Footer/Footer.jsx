import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/75 pt-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[26px] sm:gap-8 lg:gap-10 pb-[30px] sm:pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="bg-primary text-[#1a1a1a] font-black text-base py-1 px-2 rounded-[3px]">MR</span>
              <div>
                <span className="block text-[13px] font-extrabold text-white">MR SUPPLIERS</span>
                <span className="block text-[10px] text-white/50">Industrial Oils &amp; Bitumen Supply</span>
              </div>
            </div>
            <p className="text-xs text-white/55 leading-[1.7] max-w-full sm:max-w-[260px]">
              Reliable supply of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and various industrial oils.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold text-white tracking-[0.5px] mb-3.5 uppercase">Quick Links</h4>
            <Link href="/" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Home</Link>
            <Link href="/products" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Our Products</Link>
            <Link href="/about" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">About Us</Link>
            <Link href="/contact" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold text-white tracking-[0.5px] mb-3.5 uppercase">Our Products</h4>
            <Link href="/products#tyre-oil" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Tyre Oil</Link>
            <Link href="/products#diesel-oil" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Diesel Oil</Link>
            <Link href="/products#fuel-oil" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Fuel Oil</Link>
            <Link href="/products#pyrolysis-oil" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Pyrolysis Oil</Link>
            <Link href="/products#bitumen" className="text-xs text-white/60 transition-all duration-200 hover:text-primary">Bitumen Oil</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold text-white tracking-[0.5px] mb-3.5 uppercase">Contact Us</h4>
            <p className="text-xs text-white/60 leading-[1.5]">📍 Pune, Maharashtra, India</p>
            <p className="text-xs text-white/60 leading-[1.5]">📞 +91 98765 43210</p>
            <p className="text-xs text-white/60 leading-[1.5]">✉ info@mrsuppliers.com</p>
          </div>
        </div>
        <div className="py-4 text-center text-[11px] text-white/35">
          <p>© 2024 MR Suppliers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
