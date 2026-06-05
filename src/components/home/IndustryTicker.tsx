/** Infinite marquee of industry verticals beneath the hero. */
export default function IndustryTicker() {
  const items = [
    "Pharma",
    "FMCG",
    "Logistics",
    "Manufacturing",
    "Banking",
    "Healthcare",
    "Education",
    "Retail",
    "Energy",
    "Automotive",
    "Insurance",
    "Defence",
  ];

  return (
    <div className="relative overflow-hidden border-y border-black/[0.07] bg-[#f5f4f0]">
      {/* Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#f5f4f0] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#f5f4f0] to-transparent z-10" />

      <div
        className="flex gap-[0px]"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 px-[32px] py-[18px] text-[14px] font-[500] text-black/38 border-r border-black/[0.07] whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
