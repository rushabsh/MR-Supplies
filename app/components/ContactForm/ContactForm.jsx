"use client";
import { useState } from "react";

const contactDetails = [
  {
    title: "Phone",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    lines: ["+91 98765 43210", "+91 98765 43211"],
    isLink: "tel:",
  },
  {
    title: "Email",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    lines: ["info@mrsuppliers.com", "sales@mrsuppliers.com"],
    isLink: "mailto:",
  },
  {
    title: "Our Office",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    lines: [
      "Pune, Maharashtra, India",
      "Plot No. 123, MIDC Area, Pune - 411001",
    ],
  },
  {
    title: "Working Hours",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    lines: ["Mon - Sat : 9:00 AM - 6:00 PM", "Sunday : Closed"],
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
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
    <section className="py-[35px] pb-[45px] sm:py-[60px] sm:pb-[70px] bg-white" id="contact-form">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[50px]">
          {/* Left Column: Contact Details */}
          <div className="w-full flex-[0.95] lg:max-w-[440px]">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— OUR CONTACT DETAILS</span>
            <h2 className="text-[26px] sm:text-[34px] font-black text-[#111111] tracking-[-0.5px] mb-2.5 leading-[1.15]">Reach Out to Us</h2>
            <p className="text-[13.5px] text-[#555555] leading-[1.7] mb-7">
              We are here to help you with product inquiries, pricing, bulk orders
              and any other information. Feel free to get in touch with us.
            </p>

            <div className="flex flex-col gap-3.5">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3.5 sm:p-[18px_20px] rounded-lg border border-[#eeeeee] bg-white transition-all duration-200 hover:border-primary/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                  <div className="w-[42px] h-[42px] rounded-full bg-primary text-[#111111] flex items-center justify-center shrink-0 mt-0.5">{item.icon}</div>
                  <div className="flex flex-col">
                    <h3 className="text-[13.5px] font-extrabold text-[#111111] mb-1">{item.title}</h3>
                    {item.lines.map((line, lIdx) =>
                      item.isLink ? (
                        <a
                          key={lIdx}
                          href={`${item.isLink}${line}`}
                          className="text-[13px] text-[#555555] leading-[1.45] no-underline hover:text-primary-dark hover:underline"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={lIdx} className="text-[13px] text-[#555555] leading-[1.45]">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Get a Quote Form */}
          <div className="w-full flex-[1.25]">
            <div className="bg-white border border-[#eeeeee] rounded-[10px] p-4 sm:p-[34px_32px] shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
              <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-2">— SEND US A MESSAGE</span>
              <h2 className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-[-0.5px] mb-1.5 leading-[1.2]">
                Get a Quote or More Information
              </h2>
              <p className="text-[13px] text-[#666666] mb-6">
                Fill out the form and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="text-center py-[30px] px-2.5">
                  <div className="w-[54px] h-[54px] rounded-full bg-[#e6f7eb] text-[#27ae60] text-[26px] font-extrabold flex items-center justify-center mx-auto mb-4">✓</div>
                  <h3 className="text-[22px] font-extrabold text-[#111111] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[13.5px] text-[#666666] leading-[1.6] mb-[22px]">
                    Thank you, <strong>{formData.name || "Customer"}</strong>.
                    Our technical sales team has received your inquiry and will
                    reach out to you shortly.
                  </p>
                  <button
                    className="bg-[#111111] text-white py-2.5 px-6 rounded-md border-none cursor-pointer text-[13px] font-bold transition-all duration-200 hover:bg-primary hover:text-[#111111]"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        product: "",
                        quantity: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="name" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Your Name *</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#888888] flex items-center justify-center pointer-events-none">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full py-2.5 pr-3.5 pl-9 border border-[#d9d9d9] rounded-md text-[13px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="company" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Company Name</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#888888] flex items-center justify-center pointer-events-none">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="2" width="16" height="20" rx="2" />
                            <line x1="9" y1="22" x2="9" y2="2" />
                            <line x1="8" y1="6" x2="8.01" y2="6" />
                            <line x1="8" y1="10" x2="8.01" y2="10" />
                            <line x1="8" y1="14" x2="8.01" y2="14" />
                            <line x1="8" y1="18" x2="8.01" y2="18" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter company name"
                          className="w-full py-2.5 pr-3.5 pl-9 border border-[#d9d9d9] rounded-md text-[13px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="email" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Email Address *</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#888888] flex items-center justify-center pointer-events-none">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full py-2.5 pr-3.5 pl-9 border border-[#d9d9d9] rounded-md text-[13px] outline-none transition-all duration-200 focus:border-primary focus:ring-3 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="phone" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Phone Number *</label>
                      <div className="flex border border-[#d9d9d9] rounded-md overflow-hidden transition-all duration-200 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/20">
                        <span className="flex items-center gap-1 bg-[#f8f8f8] px-2.5 text-xs font-bold text-[#333333] border-r border-[#d9d9d9] select-none">
                          <span className="text-sm">🇮🇳</span> +91 ▾
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your number"
                          className="flex-1 border-none py-2.5 px-3 text-[13px] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Product Interest & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="product" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Product Interest</label>
                      <div className="relative">
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13px] bg-white outline-none transition-all duration-200 cursor-pointer focus:border-primary focus:ring-3 focus:ring-primary/20"
                        >
                          <option value="">Select a product</option>
                          <option value="Tyre Oil">Tyre Oil</option>
                          <option value="Diesel Oil">Diesel Oil</option>
                          <option value="Fuel Oil">Fuel Oil</option>
                          <option value="Pyrolysis Oil">Pyrolysis Oil</option>
                          <option value="Bitumen">Bitumen</option>
                          <option value="Other Industrial Oils">
                            Other Industrial Oils
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="quantity" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Quantity Requirement</label>
                      <div className="relative">
                        <select
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13px] bg-white outline-none transition-all duration-200 cursor-pointer focus:border-primary focus:ring-3 focus:ring-primary/20"
                        >
                          <option value="">Select quantity</option>
                          <option value="< 5 KL">&lt; 5 KL</option>
                          <option value="5 - 20 KL">5 - 20 KL</option>
                          <option value="20 - 50 KL">20 - 50 KL</option>
                          <option value="50+ KL / Bulk Order">
                            50+ KL / Bulk Order
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Your Message */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor="message" className="text-[11.5px] font-bold text-[#222222] tracking-[0.2px]">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full py-2.5 px-3.5 border border-[#d9d9d9] rounded-md text-[13px] outline-none transition-all duration-200 resize-y focus:border-primary focus:ring-3 focus:ring-primary/20"
                    ></textarea>
                  </div>

                  <button type="submit" className="group inline-flex items-center justify-center gap-2 bg-primary text-[#111111] text-[13px] font-extrabold py-3 px-7 rounded-md border-none cursor-pointer transition-all duration-200 self-stretch sm:self-start mt-1.5 shadow-[0_4px_12px_rgba(245,168,0,0.25)] hover:bg-primary-dark hover:-translate-y-px">
                    Send Message <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
