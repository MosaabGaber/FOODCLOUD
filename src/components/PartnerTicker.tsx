interface PartnerTickerProps {}

export default function PartnerTicker({}: PartnerTickerProps) {
  const brands = [
    "Birds Eye",
    "Boost Protein",
    "Aunt Bessie's",
    "Goodfella's",
    "Captain Birds Eye",
    "Crumbz Pretzels",
    "posty water pods",
    "Thai Union",
    "Meadow Vale",
    "Milky Royal",
    "Apical",
    "Hai Vuong Group",
  ];

  // Duplicate for seamless infinite horizontal scroll
  const doubledBrands = [...brands, ...brands];

  return (
    <section
      id="partner-ticker"
      className="relative bg-[#F8FAFF] border-t border-b border-bright-blue/10 py-5.5 overflow-hidden select-none"
    >
      {/* Label */}
      <div className="text-center mb-4">
        <h2 className="font-display font-bold text-[9px] text-[#94A3B8] tracking-[3px] uppercase">
          Trusted by Global Brands
        </h2>
      </div>

      {/* Infinite Horizontal Ticker Container */}
      <div className="ticker-container relative w-full overflow-hidden mask-fade-edges py-1">
        <div className="flex animate-ticker-scroll w-max gap-15 items-center">
          {doubledBrands.map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="font-sans font-bold text-sm sm:text-base text-[#64748B] whitespace-nowrap px-4 transition-colors hover:text-bright-blue duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
