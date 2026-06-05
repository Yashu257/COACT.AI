import { motion } from "motion/react";
import { EASE as ease } from "../../lib/theme";

/** Research/blog card grid. */
export default function Insights() {
  const articles = [
    {
      tag: "Research",
      title: "How enterprise AI is transforming procurement in 2025",
      meta: "6 min read",
      emoji: "📦",
      bg: "#f0fff4",
    },
    {
      tag: "Product",
      title: "COACT VMS: The next generation of intelligent surveillance",
      meta: "4 min read",
      emoji: "📹",
      bg: "#f0f4ff",
    },
    {
      tag: "Healthcare",
      title: "AI in pharma: from clinical trials to real-world evidence",
      meta: "8 min read",
      emoji: "🔬",
      bg: "#fdf4ff",
    },
    {
      tag: "Government",
      title: "Enterprise AI and the future of public sector operations",
      meta: "5 min read",
      emoji: "🏛️",
      bg: "#fff7f0",
    },
  ];

  return (
    <section className="bg-[#f5f4f0] py-[72px] sm:py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px]">
        <div className="flex items-end justify-between mb-[40px] sm:mb-[56px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[11px] font-[600] tracking-[0.09em] text-black/35 uppercase mb-[12px]">Latest insights</p>
            <h2 className="text-[clamp(24px,4vw,52px)] font-[750] tracking-[-0.03em] text-[#0a0a0a]">From our research team</h2>
          </motion.div>
          <a href="#" className="hidden lg:block text-[14px] font-[600] text-black/38 hover:text-black transition-colors">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px]">
          {articles.map((article, i) => (
            <motion.div key={article.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="group rounded-[16px] sm:rounded-[20px] bg-white overflow-hidden cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <div className="h-[160px] sm:h-[200px] flex items-center justify-center" style={{ backgroundColor: article.bg }}>
                <span className="text-[50px] sm:text-[60px] opacity-25">{article.emoji}</span>
              </div>
              <div className="p-[18px] sm:p-[24px]">
                <span className="text-[10px] font-[700] tracking-[0.09em] uppercase mb-[8px] sm:mb-[10px] block" style={{ color: "#22c55e" }}>{article.tag}</span>
                <h3 className="text-[14px] sm:text-[15px] font-[700] tracking-tight text-[#0a0a0a] leading-[1.35] mb-[10px] sm:mb-[12px] group-hover:text-black/65 transition-colors">{article.title}</h3>
                <span className="text-[12px] text-black/32 font-[500]">{article.meta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
