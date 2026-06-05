import { motion } from "motion/react";
import { EASE as ease } from "../../lib/theme";

/** Dual-row bidirectional marquee of client stories. */
export default function CustomerCarousel() {
  const customers = [
    {
      logo: "PHARMA",
      name: "Global Pharmaceutical Leader",
      desc: "COACT Smart Procurement cut sourcing cycle by 45% and saved ₹2Cr+ in Q1 alone.",
    },
    {
      logo: "MFG",
      name: "Fortune 500 Manufacturer",
      desc: "Operations intelligence reduced incident response time by 68% across 47 facilities.",
    },
    {
      logo: "BANK",
      name: "International Bank",
      desc: "Real-time fraud detection running at 94% accuracy over 18 months in full production.",
    },
    {
      logo: "FMCG",
      name: "Consumer Goods Giant",
      desc: "Supply chain AI eliminated 67% of stockouts and reduced working capital by 22%.",
    },
    {
      logo: "HOSP",
      name: "Hospital Network",
      desc: "AI workflow automation reduced admin burden by 40% per clinician per day.",
    },
    {
      logo: "LOG",
      name: "Logistics Corporation",
      desc: "Route optimisation AI cut fuel costs by 18% and lifted on-time delivery to 97%.",
    },
  ];

  const row2 = [...customers.slice(3), ...customers.slice(0, 3)];

  return (
    <section className="bg-[#f5f4f0] py-[72px] sm:py-[100px] overflow-hidden" id="industries">
      {/* Heading */}
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px] mb-[40px] sm:mb-[60px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <p className="text-[11px] font-[600] tracking-[0.09em] text-black/35 uppercase mb-[12px] sm:mb-[16px]">Client Stories</p>
          <h2 className="text-[clamp(26px,5vw,60px)] font-[750] tracking-[-0.03em] text-[#0a0a0a] leading-[1.0]">Trusted by industry leaders</h2>
        </motion.div>
      </div>

      {/* Row 1 — scroll left */}
      <div className="mb-[16px] flex gap-[16px]" style={{ animation: "marquee 48s linear infinite" }}>
        {[...customers, ...customers].map((c, i) => (
          <div
            key={`r1-${i}`}
            className="shrink-0 w-[320px] rounded-[20px] bg-white border border-black/[0.07] p-[28px]"
          >
            <div className="mb-[20px] h-[40px] w-[76px] rounded-[10px] bg-black/[0.05] flex items-center justify-center text-[11px] font-[700] tracking-[0.05em] text-black/35">
              {c.logo}
            </div>
            <p className="text-[13px] font-[600] text-[#0a0a0a] mb-[8px] leading-[1.3]">{c.name}</p>
            <p className="text-[13px] leading-[1.65] text-black/45">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Row 2 — scroll right */}
      <div className="flex gap-[16px]" style={{ animation: "marquee-r 48s linear infinite" }}>
        {[...row2, ...row2].map((c, i) => (
          <div
            key={`r2-${i}`}
            className="shrink-0 w-[320px] rounded-[20px] bg-white border border-black/[0.07] p-[28px]"
          >
            <div className="mb-[20px] h-[40px] w-[76px] rounded-[10px] bg-black/[0.05] flex items-center justify-center text-[11px] font-[700] tracking-[0.05em] text-black/35">
              {c.logo}
            </div>
            <p className="text-[13px] font-[600] text-[#0a0a0a] mb-[8px] leading-[1.3]">{c.name}</p>
            <p className="text-[13px] leading-[1.65] text-black/45">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
