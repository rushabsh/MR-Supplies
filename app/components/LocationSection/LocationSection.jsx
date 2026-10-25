"use client";

import { useState } from "react";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState("styled"); // "styled" or "live"

  return (
    <section className="py-8 pb-14 sm:py-12 sm:pb-20 bg-[#fafafa]" id="location">
      <div className="container">
        {/* Outer unified card matching reference image */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-[#e5e7eb] bg-[#f8fafc] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.06)] min-h-135 lg:min-h-145 flex flex-col lg:flex-row items-center justify-end">
          
          {/* Map Layer (spanning full background on desktop, top section on mobile) */}
          <div className="relative w-full h-90 sm:h-105 lg:h-full lg:absolute lg:inset-0 z-0 overflow-hidden bg-[#edf2f7]">
            
            {/* View Switcher Controls (Styled Graphic Map vs Live Interactive Google Map) */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl shadow-md border border-gray-200/80">
              <button
                type="button"
                onClick={() => setActiveTab("styled")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                  activeTab === "styled"
                    ? "bg-primary text-[#111111] shadow-xs"
                    : "text-[#64748b] hover:text-[#111111] hover:bg-gray-100"
                }`}
                title="Design Map View"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                <span>Styled Map</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("live")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                  activeTab === "live"
                    ? "bg-primary text-[#111111] shadow-xs"
                    : "text-[#64748b] hover:text-[#111111] hover:bg-gray-100"
                }`}
                title="Interactive Google Map"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                <span>Live Google Map</span>
              </button>
            </div>

            {/* TAB 1: STYLED MAP (Exact match with reference image) */}
            {activeTab === "styled" && (
              <div className="w-full h-full relative select-none">
                <svg
                  className="w-full h-full block"
                  viewBox="0 0 1000 580"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    {/* Subtle map grid pattern */}
                    <pattern id="pune-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                    </pattern>

                    {/* Pulse animation for map pin */}
                    <radialGradient id="pin-pulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f5a800" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#f5a800" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#f5a800" stopOpacity="0.0" />
                    </radialGradient>
                  </defs>

                  {/* Base Map Tone */}
                  <rect width="100%" height="100%" fill="#edf2f7" />
                  <rect width="100%" height="100%" fill="url(#pune-grid)" />

                  {/* Soft Green Park / Hill Patches */}
                  {/* Western Hills / Pashan Bavdhan */}
                  <path d="M 30 350 Q 80 290, 150 330 T 130 430 Z" fill="#dcfce7" opacity="0.8" />
                  <path d="M 120 410 Q 170 390, 150 470 Z" fill="#e2f5ea" opacity="0.9" />
                  
                  {/* Baner - Aundh Greens */}
                  <path d="M 270 170 Q 320 150, 300 210 Z" fill="#dcfce7" opacity="0.75" />
                  
                  {/* Koregaon Park / Kalyani Nagar Greens */}
                  <path d="M 470 330 Q 520 310, 500 370 T 460 360 Z" fill="#dcfce7" opacity="0.9" />
                  <path d="M 520 180 Q 560 150, 580 210 Z" fill="#e2f5ea" opacity="0.7" />

                  {/* Secondary Street Grid (Light Grey network) */}
                  <path d="M 0 70 L 420 110" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 70 0 L 130 240" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 0 230 L 360 250" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 170 110 L 210 340" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 270 70 L 350 290" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 310 170 L 540 190" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 410 110 L 450 370" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 490 230 L 720 250" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 570 150 L 610 390" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 90 350 L 290 370" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 230 390 L 440 410" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 0 410 L 190 440" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 320 440 L 520 470" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 400 370 L 650 390" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 560 300 L 780 320" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />
                  <path d="M 640 220 L 720 440" stroke="#cbd5e1" strokeWidth="1.4" fill="none" />

                  {/* Secondary White Roads */}
                  <path d="M 0 160 Q 200 185, 400 235 T 750 315 T 1000 335" fill="none" stroke="#ffffff" strokeWidth="7" />
                  <path d="M 0 160 Q 200 185, 400 235 T 750 315 T 1000 335" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />

                  <path d="M 380 235 Q 550 215, 750 245 T 1000 265" fill="none" stroke="#ffffff" strokeWidth="7" />
                  <path d="M 380 235 Q 550 215, 750 245 T 1000 265" fill="none" stroke="#d5dde5" strokeWidth="2.5" />

                  <path d="M 190 490 Q 340 400, 470 340 T 790 440" fill="none" stroke="#ffffff" strokeWidth="6" />
                  <path d="M 190 490 Q 340 400, 470 340 T 790 440" fill="none" stroke="#d5dde5" strokeWidth="2" />

                  {/* ============================================================== */}
                  {/* MULA-MUTHA RIVER SYSTEM (Curving Sky-Blue Waterways) */}
                  {/* ============================================================== */}
                  {/* 1. Main River flowing from Wakad/Shivajinagar through to Kharadi */}
                  <path
                    d="M 0 460 Q 110 375, 230 375 T 410 355 Q 480 340, 520 270 T 580 140 Q 600 70, 560 0"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 460 Q 110 375, 230 375 T 410 355 Q 480 340, 520 270 T 580 140 Q 600 70, 560 0"
                    fill="none"
                    stroke="#90cdf4"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 460 Q 110 375, 230 375 T 410 355 Q 480 340, 520 270 T 580 140 Q 600 70, 560 0"
                    fill="none"
                    stroke="#bbee66"
                    strokeWidth="4"
                    strokeOpacity="0.1"
                  />

                  {/* 2. River branch swinging around Yerawada & down past Koregaon Park / Kharadi */}
                  <path
                    d="M 480 340 Q 550 280, 600 230 T 630 310 Q 650 360, 720 370 T 1000 360"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 480 340 Q 550 280, 600 230 T 630 310 Q 650 360, 720 370 T 1000 360"
                    fill="none"
                    stroke="#90cdf4"
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* ============================================================== */}
                  {/* MAJOR YELLOW ARTERIAL HIGHWAYS (NH 48 & NH 60) */}
                  {/* ============================================================== */}
                  {/* NH 48 Corridor (Left Vertical Golden Highway) */}
                  <path
                    d="M 180 0 Q 185 120, 195 240 T 215 370 Q 240 460, 340 580"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 180 0 Q 185 120, 195 240 T 215 370 Q 240 460, 340 580"
                    fill="none"
                    stroke="#fcc509"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 180 0 Q 185 120, 195 240 T 215 370 Q 240 460, 340 580"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                  />

                  {/* NH 60 (Bottom Diagonal Golden Highway) */}
                  <path
                    d="M 480 580 L 580 470"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 480 580 L 580 470"
                    fill="none"
                    stroke="#fcc509"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />

                  {/* ============================================================== */}
                  {/* HIGHWAY BADGES */}
                  {/* ============================================================== */}
                  {/* NH 48 Badge */}
                  <g transform="translate(186, 268)">
                    <rect x="0" y="0" width="34" height="18" rx="4" fill="#fcc509" stroke="#1e293b" strokeWidth="0.8" />
                    <text x="17" y="13" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                      NH 48
                    </text>
                  </g>

                  {/* NH 60 Badge */}
                  <g transform="translate(528, 482)">
                    <rect x="0" y="0" width="34" height="18" rx="4" fill="#fcc509" stroke="#1e293b" strokeWidth="0.8" />
                    <text x="17" y="13" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                      NH 60
                    </text>
                  </g>

                  {/* ============================================================== */}
                  {/* CITY LOCALITY LABELS */}
                  {/* ============================================================== */}
                  {/* Pimpri Chinchwad - adjusted slightly so fully visible below toggle */}
                  <text x="120" y="112" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="800" fontFamily="sans-serif">Pimpri</text>
                  <text x="120" y="127" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="sans-serif">Chinchwad</text>

                  {/* Pimple Saudagar */}
                  <text x="260" y="112" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Pimple Saudagar</text>

                  {/* Wakad */}
                  <text x="90" y="172" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Wakad</text>

                  {/* Hinjawadi */}
                  <text x="138" y="248" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Hinjawadi</text>

                  {/* Bavdhan */}
                  <text x="160" y="348" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Bavdhan</text>

                  {/* Baner */}
                  <text x="260" y="260" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Baner</text>

                  {/* Aundh */}
                  <text x="365" y="155" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700" fontFamily="sans-serif">Aundh</text>

                  {/* Yerawada */}
                  <text x="530" y="200" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="700" fontFamily="sans-serif">Yerawada</text>

                  {/* Viman Nagar */}
                  <text x="515" y="332" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Viman Nagar</text>

                  {/* Kharadi */}
                  <text x="605" y="348" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="800" fontFamily="sans-serif">Kharadi</text>

                  {/* Koregaon Park with Tree Icon */}
                  <g transform="translate(488, 382)">
                    <path d="M 6 0 L 10 7 L 8 7 L 11 12 L 1 12 L 4 7 L 2 7 Z" fill="#16a34a" />
                    <rect x="5.2" y="12" width="1.6" height="3" fill="#15803d" />
                    <text x="17" y="11" fill="#15803d" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Koregaon Park</text>
                  </g>

                  {/* Aga Khan Palace with Landmark/Monument Icon */}
                  <g transform="translate(575, 404)">
                    <rect x="0" y="0" width="13" height="13" rx="2.5" fill="#7c3aed" />
                    <path d="M 2.5 10.5 L 2.5 6 L 6.5 2.5 L 10.5 6 L 10.5 10.5 Z" fill="#ffffff" opacity="0.9" />
                    <rect x="5.2" y="7" width="2.6" height="3.5" rx="1.3" fill="#7c3aed" />
                    <text x="18" y="10" fill="#6d28d9" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Aga Khan Palace</text>
                  </g>

                  {/* Shivajinagar */}
                  <text x="405" y="440" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Shivajinagar</text>

                  {/* Kothrud */}
                  <text x="235" y="492" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Kothrud</text>

                  {/* Katraj */}
                  <text x="395" y="545" textAnchor="middle" fill="#475569" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Katraj</text>

                  {/* Bold Pune Heading in Central Area */}
                  <text x="415" y="508" textAnchor="middle" fill="#0f172a" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5px">
                    Pune
                  </text>

                  {/* ============================================================== */}
                  {/* CONCENTRIC RADAR RIPPLES & GOLDEN LOCATION PIN */}
                  {/* ============================================================== */}
                  {/* Golden Concentric Glow Rings */}
                  <circle cx="388" cy="275" r="42" fill="url(#pin-pulse)" />
                  <circle cx="388" cy="275" r="30" fill="#f5a800" opacity="0.18" />
                  <circle cx="388" cy="275" r="18" fill="#f5a800" opacity="0.32" />

                  {/* Amber Pin pointing down */}
                  <g transform="translate(374, 240)">
                    <path
                      d="M 14 0 C 6.268 0 0 6.268 0 14 C 0 24.5 14 36 14 36 C 14 36 28 24.5 28 14 C 28 6.268 21.732 0 14 0 Z"
                      fill="#f5a800"
                      stroke="#ffffff"
                      strokeWidth="1.8"
                    />
                    <circle cx="14" cy="13" r="5" fill="#ffffff" />
                  </g>

                  {/* Tooltip Card: MR Suppliers, Pune, Maharashtra */}
                  <a
                    href="https://maps.google.com/?q=Kharadi+Pune+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <g transform="translate(324, 180)">
                      {/* Shadow / Card Base */}
                      <rect
                        x="0"
                        y="0"
                        width="128"
                        height="46"
                        rx="14"
                        fill="#ffffff"
                        filter="drop-shadow(0px 8px 18px rgba(0,0,0,0.12))"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      />
                      {/* Black circle icon with yellow dot */}
                      <circle cx="24" cy="23" r="9" fill="#111111" />
                      <circle cx="24" cy="23" r="3.5" fill="#fcc509" />
                      {/* Text block */}
                      <text x="40" y="19" fill="#111111" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">
                        MR Suppliers
                      </text>
                      <text x="40" y="32" fill="#64748b" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">
                        Pune, Maharashtra
                      </text>
                      {/* Downward pointer caret */}
                      <polygon points="64,46 59,51 69,51" fill="#ffffff" />
                    </g>
                  </a>
                </svg>
              </div>
            )}

            {/* TAB 2: LIVE INTERACTIVE GOOGLE MAP */}
            {activeTab === "live" && (
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836606041!2d73.8152554!3d18.5246164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MR Suppliers Pune Location - Interactive Map"
                />
              </div>
            )}
          </div>

          {/* Right Floating Card: Visit Our Office (100% matched with design image) */}
          <div className="relative z-10 w-full lg:max-w-107.5 xl:max-w-112.5 p-4 sm:p-6 lg:p-7 xl:p-8">
            <div className="bg-white rounded-3xl p-6 sm:p-7 xl:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.09)] border border-[#eeeeee]">
              
              {/* Header Pill */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-6 h-0.75 bg-primary rounded-full inline-block"></span>
                <span className="text-[11px] font-extrabold tracking-[2px] uppercase text-[#64748b]">
                  OUR LOCATION
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-[32px] font-black text-[#111111] mb-2.5 tracking-tight leading-tight">
                Visit Our <span className="text-primary">Office</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#64748b] leading-[1.65] mb-5">
                You are welcome to visit our office to discuss your requirements, view product samples and know more about our services.
              </p>

              {/* Address Highlight Box */}
              <div className="bg-[#fffbeb] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 mb-4 border border-[#fef3c7]">
                <div className="w-11 h-11 rounded-xl bg-primary text-[#111111] flex items-center justify-center shrink-0 shadow-xs">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-[15px] font-black text-[#111111] leading-tight">
                    MR Suppliers
                  </span>
                  <span className="text-xs text-[#64748b] font-medium leading-tight mt-1">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>

              {/* Get Directions Full-Width Button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=MR+Suppliers+Pune+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-[#e09400] text-[#111111] text-xs sm:text-sm font-black py-3.5 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(245,168,0,0.35)] hover:shadow-[0_6px_22px_rgba(245,168,0,0.45)] flex items-center justify-center gap-2 group no-underline cursor-pointer"
              >
                {/* Navigation arrow icon tilted */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0 -rotate-45">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                <span>Get Directions</span>
                <span className="text-base font-bold transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              {/* Bottom Details Row: Office Hours & Nearby Landmark */}
              <div className="grid grid-cols-2 gap-3 pt-5 mt-5 border-t border-[#f1f5f9]">
                {/* Office Hours */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#fffbeb] text-primary flex items-center justify-center shrink-0 border border-[#fef3c7] mt-0.5">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold text-[#94a3b8] uppercase tracking-wider leading-tight">
                      Office Hours
                    </span>
                    <span className="text-xs sm:text-[13px] font-black text-[#111111] leading-tight mt-1">
                      Mon - Sat
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#64748b] leading-tight mt-0.5">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>

                {/* Nearby Landmark */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#fffbeb] text-primary flex items-center justify-center shrink-0 border border-[#fef3c7] mt-0.5">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <line x1="9" y1="22" x2="9" y2="22.01" />
                      <line x1="15" y1="22" x2="15" y2="22.01" />
                      <line x1="9" y1="6" x2="9" y2="6.01" />
                      <line x1="15" y1="6" x2="15" y2="6.01" />
                      <line x1="9" y1="10" x2="9" y2="10.01" />
                      <line x1="15" y1="10" x2="15" y2="10.01" />
                      <line x1="9" y1="14" x2="9" y2="14.01" />
                      <line x1="15" y1="14" x2="15" y2="14.01" />
                      <line x1="9" y1="18" x2="9" y2="18.01" />
                      <line x1="15" y1="18" x2="15" y2="18.01" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold text-[#94a3b8] uppercase tracking-wider leading-tight">
                      Nearby Landmark
                    </span>
                    <span className="text-xs sm:text-[13px] font-black text-[#111111] leading-tight mt-1">
                      Kharadi
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#64748b] leading-tight mt-0.5">
                      Pune, Maharashtra
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
