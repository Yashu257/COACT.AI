import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { EASE as ease } from "../../lib/theme";
import smartClip from "../../assests/Smart.mp4";
import hrAiClip from "../../assests/Hr.mp4";
import marketingClip from "../../assests/Marketing.mp4";
import analystClip from "../../assests/DATA Analyst.mp4";
import productClip from "../../assests/Product Intelligence.mp4";

/** Sticky scroll-driven platform explorer with per-panel looping video. */
export default function ScrollExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const panels = [
    {
      label: "Smart Procurement",
      title: "Smarter sourcing.\nBetter decisions.",
      description:
        "AI-powered analytics identify hidden savings across every vendor category. Dynamic e-auction algorithms guarantee the most competitive pricing on every RFQ — with documented savings averaging 15–23%.",
      stat: "45%",
      statLabel: "Sourcing cycle cut",
      accent: "#22c55e",
      video: null,
      clip: smartClip,
      route: "/smart-procurement",
    },
    {
      label: "HR AI",
      title: "Workforce intelligence\nat scale.",
      description:
        "Transform talent acquisition, retention forecasting, and workforce planning with predictive AI that adapts to your organisation's unique dynamics and growth stage.",
      stat: "60%",
      statLabel: "Faster hiring cycle",
      accent: "#3b82f6",
      video: null,
      clip: hrAiClip,
      route: "/hr",
    },
    {
      label: "Marketing & Sales AI",
      title: "Revenue intelligence\nthat converts.",
      description:
        "AI-powered lead scoring, campaign optimisation, and customer journey analytics that turn data into pipeline and pipeline into predictable, repeatable revenue.",
      stat: "3.2×",
      statLabel: "Lead conversion uplift",
      accent: "#f97316",
      video: null,
      clip: marketingClip,
      route: "/marketing",
    },
    {
      label: "COACT AI Analyst",
      title: "Ask your data\nanything.",
      description:
        "Natural language analytics that let anyone in your organisation explore data, generate board-ready reports, and surface insights in minutes — no SQL, no waiting.",
      stat: "4 min",
      statLabel: "Avg. insight time",
      accent: "#22c55e",
      video: null,
      clip: analystClip,
      route: "/coact-analyst",
    },
    {
      label: "Product Intelligence",
      title: "Know your product\nlike never before.",
      description:
        "Deep product analytics, competitive benchmarking, and market positioning intelligence to drive roadmap decisions with data-backed confidence.",
      stat: "28%",
      statLabel: "Faster decisions",
      accent: "#3b82f6",
      video: null,
      clip: productClip,
      route: "/product",
    },
  ];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * panels.length), panels.length - 1);
      setActive(idx);
    });
  }, [panels.length, scrollYProgress]);

  /* ── Mobile: stacked cards layout ── */
  if (isMobile) {
    return (
      <section className="bg-white" id="capabilities">
        <div className="px-[16px] py-[60px]">
          <p className="text-[11px] font-[700] tracking-[0.12em] uppercase mb-[6px] text-[#22c55e]">Our AI platforms</p>
          <h2 className="text-[28px] font-[750] tracking-[-0.03em] text-[#0a0a0a] mb-[40px]">Platform explorer</h2>
          <div className="flex flex-col gap-[24px]">
            {panels.map((panel, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="rounded-[20px] overflow-hidden border border-black/[0.07]">
                {/* Video thumbnail */}
                <div className="relative h-[200px] bg-black">
                  <video src={panel.clip} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
                  {/* Stat badge */}
                  <div className="absolute bottom-[16px] left-[16px] bg-white rounded-[14px] px-[16px] py-[10px]">
                    <div className="text-[28px] font-[800] tracking-[-0.04em] leading-[1]" style={{ color: panel.accent }}>{panel.stat}</div>
                    <div className="text-[10px] font-[600] text-black/35 uppercase tracking-[0.07em] mt-[2px]">{panel.statLabel}</div>
                  </div>
                  {/* Label pill */}
                  <div className="absolute top-[14px] left-[14px] rounded-full px-[12px] h-[28px] flex items-center gap-[6px] text-[11px] font-[600]"
                    style={{ backgroundColor: `${panel.accent}22`, color: panel.accent }}>
                    <span className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: panel.accent }} />
                    {panel.label}
                  </div>
                </div>
                {/* Text */}
                <div className="p-[20px]">
                  <h3 className="text-[20px] font-[750] tracking-[-0.02em] text-[#0a0a0a] mb-[10px] whitespace-pre-line leading-[1.15]">{panel.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-black/52 mb-[16px]">{panel.description}</p>
                  <Link to={panel.route} className="inline-flex items-center gap-[6px] text-[13px] font-[600]" style={{ color: panel.accent }}>
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Desktop: sticky scroll layout ── */
  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${panels.length * 100}vh` }}
      id="capabilities"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="h-full flex">
          {/* ── Left: text ── */}
          <div className="w-[44%] lg:w-[42%] flex flex-col justify-center px-[32px] md:px-[40px] lg:px-[72px] border-r border-black/[0.06]">
            {/* Header label */}
            <div className="mb-[36px] lg:mb-[48px]">
              <p className="text-[11px] font-[700] tracking-[0.12em] uppercase mb-[6px]" style={{ color: panels[active].accent }}>
                ↓ Scroll to explore
              </p>
              <p className="text-[14px] sm:text-[15px] text-black/55 font-[600]">Our AI platforms</p>
            </div>

            {/* Progress pills */}
            <div className="flex gap-[6px] mb-[36px] lg:mb-[48px]">
              {panels.map((_, i) => (
                <div key={i} className="h-[3px] rounded-full transition-all duration-500"
                  style={{ width: i === active ? "32px" : "12px", backgroundColor: i === active ? panels[active].accent : "rgba(0,0,0,0.12)" }} />
              ))}
            </div>

            {/* Changing content */}
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.42, ease }}>
                <div className="text-[13px] sm:text-[15px] font-[700] tracking-[0.06em] text-[#0a0a0a] uppercase mb-[16px] sm:mb-[20px]">
                  {panels[active].label}
                </div>
                <h2 className="text-[clamp(22px,2.8vw,46px)] font-[750] tracking-[-0.03em] text-[#0a0a0a] leading-[1.05] mb-[16px] sm:mb-[22px] whitespace-pre-line">
                  {panels[active].title}
                </h2>
                <p className="text-[14px] lg:text-[16px] leading-[1.72] text-black/52 mb-[28px] sm:mb-[36px] max-w-[400px]">
                  {panels[active].description}
                </p>
                <div className="flex items-baseline gap-[10px] mb-[32px] sm:mb-[40px]">
                  <span className="text-[36px] sm:text-[44px] font-[750] tracking-[-0.04em] leading-[1]" style={{ color: panels[active].accent }}>
                    {panels[active].stat}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-[600] text-black/35 uppercase tracking-[0.07em]">
                    {panels[active].statLabel}
                  </span>
                </div>
                <Link to={panels[active].route} className="inline-flex items-center gap-[8px] text-[14px] font-[600] text-black/50 hover:text-black transition-colors">
                  Learn more <span>→</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: visual ── */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55, ease }} className="absolute inset-0">
                {panels[active].clip ? (
                  <>
                    <video src={panels[active].clip} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
                    <div className="absolute inset-0" style={{ zIndex: 1, background: "rgba(0,0,0,0.35)" }} />
                    <div className="absolute inset-0" style={{ zIndex: 2, background: `radial-gradient(ellipse at center, ${panels[active].accent}18 0%, transparent 65%)` }} />
                  </>
                ) : (
                  <div className="absolute inset-0" style={{ background: `${panels[active].accent}0d`, zIndex: 0 }} />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Floating card */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
              <AnimatePresence mode="wait">
                <motion.div key={`card-${active}`} initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16, scale: 0.96 }} transition={{ duration: 0.45, ease }}
                  className="bg-white rounded-[24px] p-[28px] sm:p-[40px] w-[220px] sm:w-[300px] text-center"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.10)" }}>
                  <div className="inline-flex items-center gap-[8px] rounded-full px-[14px] sm:px-[16px] h-[28px] sm:h-[32px] mb-[16px] sm:mb-[20px] text-[11px] sm:text-[12px] font-[600]"
                    style={{ backgroundColor: `${panels[active].accent}18`, color: panels[active].accent }}>
                    <span className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: panels[active].accent }} />
                    {panels[active].label}
                  </div>
                  <div className="text-[44px] sm:text-[56px] font-[800] tracking-[-0.05em] leading-[1.0] mb-[8px]" style={{ color: panels[active].accent }}>
                    {panels[active].stat}
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-[600] text-black/35 uppercase tracking-[0.07em]">
                    {panels[active].statLabel}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
