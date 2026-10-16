"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ activePage = "home" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkBase =
    "text-[13.5px] font-medium py-1.5 px-3 transition-all duration-200 relative hover:text-primary";
  const navLinkActive =
    "text-primary font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-[2.5px] after:bg-primary after:rounded-[2px]";
  const navLinkInactive = "text-[#222222]";

  const mobileLinkBase =
    "block text-sm font-semibold py-2.5 px-3.5 rounded-[6px] transition-all duration-200 hover:bg-[#fdf6e7] hover:text-primary-dark hover:font-bold";
  const mobileLinkActive = "bg-[#fdf6e7] text-primary-dark font-bold";
  const mobileLinkInactive = "text-[#222222]";

  return (
    <header className="w-full sticky top-0 z-[100] bg-white border-b border-[#f0f0f0] py-3.5">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline" onClick={closeMenu}>
            <div className="flex items-center gap-[3px] h-7">
              <span className="w-1 h-full bg-primary rounded-[2px]"></span>
              <span className="w-1 h-[80%] bg-[#111111] rounded-[2px]"></span>
              <span className="w-1 h-full bg-primary rounded-[2px]"></span>
              <span className="w-1 h-[80%] bg-[#111111] rounded-[2px]"></span>
            </div>

            <div className="flex flex-col">
              <span className="text-[15px] sm:text-[17px] font-black text-[#111111] tracking-[0.5px] leading-[1.1]">
                MR SUPPLIERS
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] text-[#666666] font-medium tracking-[0.2px]">
                Industrial Oils &amp; Bitumen Supplier
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[881px]:flex items-center gap-2.5">
            <Link
              href="/"
              className={`${navLinkBase} ${
                activePage === "home" ? navLinkActive : navLinkInactive
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`${navLinkBase} ${
                activePage === "products" ? navLinkActive : navLinkInactive
              }`}
            >
              Our Products
            </Link>

            <Link
              href="/about"
              className={`${navLinkBase} ${
                activePage === "about" ? navLinkActive : navLinkInactive
              }`}
            >
              About Us
            </Link>

            <Link href="/#photos" className={`${navLinkBase} ${navLinkInactive}`}>
              Photos
            </Link>

            <Link
              href="/contact"
              className={`${navLinkBase} ${
                activePage === "contact" ? navLinkActive : navLinkInactive
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden min-[881px]:inline-flex items-center gap-[7px] bg-primary text-[#1a1a1a] font-bold text-[12.5px] py-[9px] px-5 rounded-full transition-all duration-200 no-underline shadow-[0_2px_8px_rgba(245,168,0,0.25)] whitespace-nowrap hover:bg-primary-dark"
            >
              <svg
                className="inline-block shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="flex min-[881px]:hidden flex-col justify-around w-[38px] h-[38px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[6px] p-[8px_7px] cursor-pointer transition-all duration-200 hover:bg-[#eeeeee]"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span
                className={`w-full h-0.5 bg-[#111111] rounded-[2px] transition-all duration-250 [transform-origin:1px_center] ${
                  isOpen ? "rotate-45" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-[#111111] rounded-[2px] transition-all duration-250 [transform-origin:1px_center] ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-[#111111] rounded-[2px] transition-all duration-250 [transform-origin:1px_center] ${
                  isOpen ? "-rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`min-[881px]:hidden overflow-hidden transition-[max-height,opacity,padding,margin] duration-300 ease-in-out border-t ${
            isOpen
              ? "max-h-[400px] opacity-100 pt-4 mt-3.5 border-[#f0f0f0]"
              : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className={`${mobileLinkBase} ${
                activePage === "home" ? mobileLinkActive : mobileLinkInactive
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`${mobileLinkBase} ${
                activePage === "products" ? mobileLinkActive : mobileLinkInactive
              }`}
              onClick={closeMenu}
            >
              Our Products
            </Link>

            <Link
              href="/about"
              className={`${mobileLinkBase} ${
                activePage === "about" ? mobileLinkActive : mobileLinkInactive
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link
              href="/#photos"
              className={`${mobileLinkBase} ${mobileLinkInactive}`}
              onClick={closeMenu}
            >
              Photos
            </Link>

            <Link
              href="/contact"
              className={`${mobileLinkBase} ${
                activePage === "contact" ? mobileLinkActive : mobileLinkInactive
              }`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-3.5 mt-2.5 border-t border-[#f0f0f0]">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full bg-primary text-[#111111] font-extrabold text-[13.5px] p-3 rounded-[6px] no-underline shadow-[0_3px_10px_rgba(245,168,0,0.25)]"
              onClick={closeMenu}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
