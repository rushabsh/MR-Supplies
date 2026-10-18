"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-10 pb-12 sm:py-14 sm:pb-16 lg:py-16 lg:pb-20 bg-[#fafafa] overflow-hidden" id="contact-form">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.32fr] gap-8 lg:gap-10 xl:gap-12 items-start">

          {/* Left Column: Request a Quote Form Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-[#ebebeb] shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[3px] bg-[#fcc509] rounded-sm"></span>
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#777777]">
                SEND US A MESSAGE
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-black text-[#111111] tracking-[-0.5px] leading-tight mb-2.5">
              Request a Quote
            </h2>

            <p className="text-[13px] sm:text-[13.5px] text-[#666666] leading-[1.6] mb-7">
              Fill out the form below and our team will get back to you shortly with the best prices and product details.
            </p>

            {submitted ? (
              <div className="bg-[#fef9eb] border border-[#fcc509]/50 rounded-xl p-6 text-center my-6">
                <div className="w-12 h-12 rounded-full bg-[#fcc509] text-[#111111] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-base font-extrabold text-[#111111] mb-1">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-[#555555]">
                  Thank you for reaching out. Our representative will contact you shortly with the quotation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#111111] underline hover:text-primary transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1: Your Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#222222] mb-1.5">
                      Your Name <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 text-[13px] bg-white border border-[#e5e7eb] rounded-lg text-[#111111] placeholder-[#9ca3af] focus:border-[#fcc509] focus:ring-2 focus:ring-[#fcc509]/20 outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#222222] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full px-3.5 py-2.5 text-[13px] bg-white border border-[#e5e7eb] rounded-lg text-[#111111] placeholder-[#9ca3af] focus:border-[#fcc509] focus:ring-2 focus:ring-[#fcc509]/20 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#222222] mb-1.5">
                      Email Address <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-2.5 text-[13px] bg-white border border-[#e5e7eb] rounded-lg text-[#111111] placeholder-[#9ca3af] focus:border-[#fcc509] focus:ring-2 focus:ring-[#fcc509]/20 outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#222222] mb-1.5">
                      Mobile Number <span className="text-[#ef4444]">*</span>
                    </label>
                    <div className="flex rounded-lg border border-[#e5e7eb] overflow-hidden focus-within:border-[#fcc509] focus-within:ring-2 focus-within:ring-[#fcc509]/20 transition-all duration-200">
                      <span className="inline-flex items-center px-3.5 bg-white text-[13px] font-bold text-[#111111] border-r border-[#e5e7eb] shrink-0 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-3.5 py-2.5 text-[13px] bg-white text-[#111111] placeholder-[#9ca3af] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Product / Category */}
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1.5">
                    Product / Category <span className="text-[#ef4444]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-white border border-[#e5e7eb] rounded-lg text-[#111111] focus:border-[#fcc509] focus:ring-2 focus:ring-[#fcc509]/20 outline-none appearance-none pr-10 cursor-pointer"
                    >
                      <option value="" disabled>Select product category</option>
                      <option value="Diesel Oil">Diesel Oil</option>
                      <option value="Fuel Oil">Fuel Oil</option>
                      <option value="Tyre Oil">Tyre Oil</option>
                      <option value="Pyrolysis Oil">Pyrolysis Oil</option>
                      <option value="Bitumen">Bitumen</option>
                      <option value="Other Industrial Oils">Other Industrial Oils</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#666666]">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 4: Your Message */}
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1.5">
                    Your Message <span className="text-[#ef4444]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your requirement (quantity, product details, etc.)"
                    className="w-full px-3.5 py-2.5 text-[13px] bg-white border border-[#e5e7eb] rounded-lg text-[#111111] placeholder-[#9ca3af] focus:border-[#fcc509] focus:ring-2 focus:ring-[#fcc509]/20 outline-none resize-y transition-all duration-200"
                  ></textarea>
                </div>

                {/* Row 5: Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-extrabold tracking-[0.3px] py-3.5 px-7 rounded-lg transition-all duration-200 shadow-[0_4px_14px_rgba(252,197,9,0.35)] cursor-pointer"
                  >
                    Submit Enquiry
                    <span className="text-sm font-bold">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Reach Us Contact Information Redesigned */}
          <div className="relative w-full flex flex-col pt-1">

            {/* Header */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[3px] bg-[#fcc509] rounded-sm"></span>
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#777777]">
                CONTACT INFORMATION
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] font-black text-[#111111] tracking-[-0.5px] leading-tight mb-2.5">
              Reach <span className="text-[#f5a800]">Us</span>
            </h2>

            <p className="text-[13px] sm:text-[13.5px] text-[#666666] leading-[1.6] mb-6 max-w-[520px]">
              Feel free to contact us through any of the following channels. Our team is always ready to assist you.
            </p>

            {/* Content & Visual Wrapper */}
            <div className="relative">

              {/* Stack of Cards */}
              <div className="flex flex-col gap-3.5 relative z-10 xl:pr-[105px] 2xl:pr-[120px]">

                {/* 1. OUR LOCATION with Golden Pin on Dotted India Map */}
                <div className="relative rounded-2xl bg-gradient-to-r from-[#fffbf0] via-[#fffdf7] to-[#fffbf0] border border-[#fde68a] p-4 sm:p-5 shadow-[0_4px_20px_rgba(245,168,0,0.06)] overflow-hidden flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3.5 z-10 max-w-[260px] sm:max-w-[310px]">
                    <div className="w-12 h-12 rounded-2xl bg-[#fcc509] text-[#111111] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-0.5">
                        OUR LOCATION
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-[#111111] leading-tight mb-0.5">
                        MR Suppliers
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#555555] font-medium leading-[1.4] mb-3">
                        Pune, Maharashtra, India
                      </p>
                      <a
                        href="https://maps.google.com/?q=MIDC+Pune"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#fcc509] hover:bg-[#e0b008] text-[#111111] text-xs font-black py-2.5 px-4 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md w-fit"
                      >
                        Get Directions <span className="text-sm font-black">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Dotted India Map with Golden Pin */}
                  <div className="relative w-[130px] sm:w-[170px] md:w-[195px] h-[130px] sm:h-[145px] shrink-0 pointer-events-none select-none">
                    <Image
                      src="/images/Golden Pin on Dotted India Map.avif"
                      alt="Golden Pin on Dotted India Map - Pune Location"
                      fill
                      sizes="(max-width: 640px) 130px, 195px"
                      className="object-contain object-right"
                    />
                  </div>
                </div>

                {/* 2 & 3. Row of 2 Cards: Call Us & Email Us */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Call Us */}
                  <div className="flex items-start gap-3.5 bg-white rounded-2xl border border-[#ededed] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fef6e4] text-[#111111] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-1">
                        CALL US
                      </span>
                      <a
                        href="tel:+919876543210"
                        className="text-[15px] sm:text-base font-black text-[#111111] tracking-tight hover:text-primary transition-colors leading-tight"
                      >
                        +91 98765 43210
                      </a>
                      <span className="text-[11px] text-[#777777] font-medium mt-1 leading-tight">
                        Mon - Sat, 9:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start gap-3.5 bg-white rounded-2xl border border-[#ededed] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fef6e4] text-[#111111] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-1">
                        EMAIL US
                      </span>
                      <a
                        href="mailto:info@mrsuppliers.in"
                        className="text-xs sm:text-[13px] font-bold text-[#222222] hover:text-primary transition-colors leading-[1.4]"
                      >
                        info@mrsuppliers.in
                      </a>
                      <a
                        href="mailto:sales@mrsuppliers.in"
                        className="text-xs sm:text-[13px] font-bold text-[#222222] hover:text-primary transition-colors leading-[1.4]"
                      >
                        sales@mrsuppliers.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 4 & 5. Row of 2 Cards: Business Type & Total Employees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Business Type */}
                  <div className="flex items-start gap-3.5 bg-white rounded-2xl border border-[#ededed] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fef6e4] text-[#111111] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-1">
                        BUSINESS TYPE
                      </span>
                      <p className="text-xs sm:text-[12.5px] font-bold text-[#222222] leading-[1.35]">
                        Trader - Wholesaler / Distributor &amp; Retail Business
                      </p>
                    </div>
                  </div>

                  {/* Total Employees */}
                  <div className="flex items-start gap-3.5 bg-white rounded-2xl border border-[#ededed] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fef6e4] text-[#111111] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-1">
                        TOTAL EMPLOYEES
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-[#222222] leading-tight">
                        Upto 10 People
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6. Year of Establishment & 8+ Years of Experience */}
                <div className="bg-white rounded-2xl border border-[#ededed] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#f0f0f0]">
                    {/* Left: Year of Establishment */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fef6e4] text-[#111111] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#777777] uppercase tracking-[1px] mb-0.5">
                          YEAR OF ESTABLISHMENT
                        </span>
                        <span className="text-2xl sm:text-[28px] font-black text-[#111111] leading-none">
                          2018
                        </span>
                      </div>
                    </div>

                    {/* Right: Golden Laurel Wreath with 8+ Years of Experience */}
                    <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-5">
                      <div className="relative flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 64 64" width="50" height="50" fill="none" className="text-[#f5a800]">
                          {/* Left Laurel Branch */}
                          <path d="M30 52 C20 50 14 42 14 30 C14 20 18 12 28 8" stroke="#f5a800" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M15 38 Q9 35 12 32 Q16 33 15 38 Z" fill="#f5a800" />
                          <path d="M14 28 Q8 26 11 22 Q15 24 14 28 Z" fill="#f5a800" />
                          <path d="M16 20 Q11 17 14 13 Q18 16 16 20 Z" fill="#f5a800" />
                          <path d="M21 13 Q17 10 21 6 Q24 10 21 13 Z" fill="#f5a800" />
                          <path d="M28 8 Q26 4 30 2 Q32 6 28 8 Z" fill="#f5a800" />

                          {/* Right Laurel Branch */}
                          <path d="M34 52 C44 50 50 42 50 30 C50 20 46 12 36 8" stroke="#f5a800" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M49 38 Q55 35 52 32 Q48 33 49 38 Z" fill="#f5a800" />
                          <path d="M50 28 Q56 26 53 22 Q49 24 50 28 Z" fill="#f5a800" />
                          <path d="M48 20 Q53 17 50 13 Q46 16 48 20 Z" fill="#f5a800" />
                          <path d="M43 13 Q47 10 43 6 Q40 10 43 13 Z" fill="#f5a800" />
                          <path d="M36 8 Q38 4 34 2 Q32 6 36 8 Z" fill="#f5a800" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl sm:text-[28px] font-black text-[#111111] leading-none">
                          8+
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-[#666666] mt-1 leading-tight">
                          Years of Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Industrial Plant Tower on Desktop (matches reference image) */}
              <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[110px] 2xl:w-[130px] pointer-events-none select-none overflow-hidden rounded-r-3xl">
                {/* Yellow Angled Chevron Border */}
                <div className="absolute inset-0 bg-[#fcc509]" style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}>
                  <div className="absolute inset-[3px] overflow-hidden" style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <Image
                      src="/images/hero-plant.avif"
                      alt="MR Suppliers Industrial Refinery"
                      fill
                      sizes="150px"
                      className="object-cover object-center brightness-95"
                    />
                  </div>
                </div>
                {/* Diagonal yellow accent triangle at top */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#fcc509]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}></div>
                {/* Diagonal yellow accent triangle at bottom */}
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#fcc509]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
