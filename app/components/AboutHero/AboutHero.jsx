import Image from "next/image";
import Link from "next/link";

export default function AboutHero({
  tag = "— ABOUT US",
  headline = (
    <>
      A TRUSTED PARTNER
      <br />
      IN INDUSTRIAL OILS
      <br />
      &amp; <span className="text-primary">BITUMEN</span>
    </>
  ),
  description = "Since 2018, MR Suppliers has been a leading wholesale trader of Diesel Oil, Fuel Oil, Tyre Oil, Bitumen and various industrial oils, catering to diverse industry requirements.",
  showActions = true,
  showBadge = true,
}) {
  return (
    <section className="relative bg-white py-[30px] pb-[25px] sm:py-[50px] sm:pb-10 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-9 lg:gap-[50px]">
          {/* Left Content Column */}
          <div className="flex-[1.1] w-full max-w-full lg:max-w-[560px]">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-primary mb-3.5">
              {tag}
            </span>

            <h1 className="text-[28px] max-[560px]:leading-[1.2] sm:text-[34px] lg:text-[44px] font-black text-[#111111] leading-[1.12] tracking-[-0.5px] mb-[18px]">
              {headline}
            </h1>

            <p className="text-sm leading-[1.7] text-[#555555] mb-[30px] max-w-[500px]">
              {description}
            </p>

            {showActions && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-[#111111] text-[13px] font-extrabold py-3 px-6 rounded hover:bg-primary-dark hover:-translate-y-px transition-all duration-200 shadow-[0_4px_14px_rgba(245,168,0,0.35)] w-full sm:w-auto"
                >
                  Our Products <span className="text-[15px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-1.5 text-[#111111] text-[13.5px] font-extrabold transition-all duration-200 hover:text-primary-dark"
                >
                  Contact Us <span className="text-[15px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Right Plant Visual Column with Diagonal Accent & Badge */}
          <div className="flex-[0.9] relative flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-full lg:max-w-[500px] h-[260px] sm:h-[340px] lg:h-[400px]">
              {/* Diagonal yellow graphic accent band */}
              <div className="absolute -top-[25px] left-5 -right-[25px] bottom-[25px] bg-gradient-to-br from-[rgba(245,168,0,0.85)] to-[rgba(255,197,51,0.4)] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] rounded-xl z-1"></div>

              {/* Plant Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden z-2 shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/hero-plant.jpg"
                  alt="Industrial oils refinery plant"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Top Right "SINCE 2018" Badge */}
              {showBadge && (
                <div className="absolute top-2.5 sm:top-5 lg:top-[50px] right-1 sm:right-2.5 lg:-right-6 bg-white py-2.5 px-3.5 sm:py-[18px] sm:px-5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.14)] z-3 flex flex-col min-w-[110px] sm:min-w-[140px]">
                  <span className="text-[11px] font-extrabold text-[#777777] tracking-[1.5px] uppercase">SINCE</span>
                  <span className="text-[22px] sm:text-[30px] font-black text-[#111111] leading-[1.1] mt-0.5">2018</span>
                  <span className="block w-[38px] h-[3px] bg-primary my-2.5 rounded-[2px]"></span>
                  <span className="text-[10px] font-extrabold text-[#555555] tracking-[1px] leading-[1.4] uppercase">
                    TRUSTED<br />WHOLESALE<br />SUPPLIER
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
