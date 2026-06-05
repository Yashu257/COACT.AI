import { motion } from "motion/react";
import { EASE as ease } from "../../lib/theme";

/** Three achievement cards — years, POCs, countries. */
export default function ProofSection() {
  const items = [
    {
      icon: "🏆",
      stat: "20+",
      title: "Years powering enterprise breakthroughs",
      desc: "Founded on the principle that AI must deliver measurable outcomes — not just impressive demos.",
      link: "Our story",
    },
    {
      icon: "📊",
      stat: "100+",
      title: "POCs delivered across 12+ industries",
      desc: "Every deployment is benchmarked against real operational KPIs from day one in production.",
      link: "View case studies",
    },
    {
      icon: "🌍",
      stat: "20",
      title: "Countries with active deployments",
      desc: "Global enterprises in pharmaceuticals, banking, logistics, and manufacturing trust COACT AI.",
      link: "Global reach",
    },
  ];

  return (
    <section className="bg-white py-[72px] sm:py-[100px]" id="company">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px]">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-[40px] sm:mb-[56px]">
          <p className="text-[11px] font-[600] tracking-[0.09em] text-black/35 uppercase mb-[16px]">Proven at scale</p>
          <h2 className="text-[clamp(24px,4.5vw,56px)] font-[750] tracking-[-0.03em] text-[#0a0a0a]">Proven across every industry</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px]">
          {items.map((item, i) => (
            <motion.div key={item.stat} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.65, ease }}
              className="rounded-[20px] sm:rounded-[24px] bg-[#f5f4f0] p-[28px] sm:p-[40px] flex flex-col">
              <div className="text-[24px] sm:text-[28px] mb-[18px] sm:mb-[24px]">{item.icon}</div>
              <div className="text-[clamp(40px,6vw,72px)] font-[750] tracking-[-0.05em] text-[#0a0a0a] leading-[1.0] mb-[16px] sm:mb-[20px]">{item.stat}</div>
              <h3 className="text-[16px] sm:text-[18px] font-[700] tracking-tight text-[#0a0a0a] mb-[10px] sm:mb-[12px] leading-[1.2]">{item.title}</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.68] text-black/48 flex-1 mb-[20px] sm:mb-[28px]">{item.desc}</p>
              <a href="#" className="inline-flex items-center gap-[6px] text-[13px] font-[600] text-black/38 hover:text-black transition-colors">{item.link} →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
