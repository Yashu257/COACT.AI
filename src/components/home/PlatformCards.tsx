import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASE as ease } from "../../lib/theme";
import { EnterpriseCardFan, AllCardsOverlay, CoactProductCardFan } from "./CardOverlays";

/** "For Enterprise" / "The Platform" split — opens card overlays on click. */
export default function PlatformCards() {
  const [showCardFan, setShowCardFan] = useState(false);
  const [showProductFan, setShowProductFan] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <>
    <AnimatePresence>
      {showCardFan && <EnterpriseCardFan onClose={() => setShowCardFan(false)} />}
    </AnimatePresence>
    <AnimatePresence>
      {showProductFan && <CoactProductCardFan onClose={() => setShowProductFan(false)} />}
    </AnimatePresence>
    <AnimatePresence>
      {showAllCards && <AllCardsOverlay onClose={() => setShowAllCards(false)} />}
    </AnimatePresence>
    <section className="bg-white py-[60px] sm:py-[80px]" id="platforms">
      {/* Hover-glow styles for the three interactive section triggers */}
      <style>{`
        .pc-trigger {
          position: relative;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pc-trigger .pc-label {
          background-image: linear-gradient(90deg, currentColor, currentColor);
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: filter 0.32s ease, color 0.32s ease, text-shadow 0.32s ease, letter-spacing 0.32s ease, background-size 0.42s ease;
        }
        .pc-trigger .pc-arrow {
          display: inline-block;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), filter 0.32s ease, color 0.32s ease;
        }
        /* ── Green-on-dark variant — used by AI Enterprise Solutions + COACT Products */
        .pc-trigger.pc-green:hover { transform: translateX(2px); }
        .pc-trigger.pc-green:hover .pc-label {
          color: #7CFF4F;
          letter-spacing: 0.12em;
          text-shadow: 0 0 14px rgba(124,255,79,0.55), 0 0 28px rgba(124,255,79,0.25);
          background-size: 100% 1px;
        }
        .pc-trigger.pc-green:hover .pc-arrow {
          color: #7CFF4F;
          transform: translate(6px, -3px) rotate(-8deg);
          filter: drop-shadow(0 0 8px rgba(124,255,79,0.7));
        }
        /* ── Solid-green "Explore all" pill variant */
        .pc-trigger.pc-explore:hover { transform: translateX(2px); }
        .pc-trigger.pc-explore:hover .pc-label {
          letter-spacing: 0.04em;
          text-shadow: 0 0 16px rgba(124,255,79,0.6), 0 0 32px rgba(124,255,79,0.3);
          background-size: 100% 1px;
        }
        .pc-trigger.pc-explore:hover .pc-arrow {
          transform: translateX(8px);
          filter: drop-shadow(0 0 8px rgba(124,255,79,0.7));
        }
      `}</style>
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px]">
        <div className="grid lg:grid-cols-2 gap-[16px] sm:gap-[20px]">
          {/* Card 1 — dark, "For Enterprise" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="group relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#0a0a0a] p-[32px] sm:p-[48px] lg:p-[56px] flex flex-col min-h-[420px] sm:min-h-[540px]"
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full"
              style={{ background: "rgba(124,255,79,0.05)", filter: "blur(80px)" }}
            />

            <p className="relative z-10 text-[11px] font-[600] tracking-[0.1em] text-white/30 uppercase mb-[32px]">
              For Enterprise
            </p>
            <h2 className="relative z-10 text-[clamp(24px,3vw,40px)] font-[750] tracking-[-0.03em] text-white leading-[1.0] mb-[36px]">
              AI systems that
              <br />
              actually work
            </h2>

            <div className="relative z-10 flex-1 space-y-[32px] mb-[40px]">
              {/* ── AI Enterprise Solutions ── */}
              <div>
                <button
                  onClick={() => setShowCardFan(true)}
                  className="pc-trigger pc-green flex items-center gap-[8px] mb-[18px] cursor-pointer"
                >
                  <p className="pc-label text-[14px] font-[700] tracking-[0.1em] uppercase" style={{ color: "rgba(124,255,79,0.95)" }}>
                    AI Enterprise Solutions
                  </p>
                  <span className="pc-arrow text-[13px]" style={{ color: "rgba(124,255,79,0.7)" }}>↗</span>
                </button>
                <div className="space-y-[14px]">
                  {["Smart Procurement", "HR AI", "Product Intelligence", "Marketing & Sales AI"].map((name) => (
                    <div key={name} className="flex items-center gap-[12px]">
                      <div className="h-[5px] w-[5px] rounded-full bg-[#7CFF4F] shrink-0" />
                      <span className="text-[17px] font-[500] text-white/85">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── COACT Products ── */}
              <div>
                <button
                  onClick={() => setShowProductFan(true)}
                  className="pc-trigger pc-green flex items-center gap-[8px] mb-[18px] cursor-pointer"
                >
                  <p className="pc-label text-[14px] font-[700] tracking-[0.1em] uppercase" style={{ color: "rgba(124,255,79,0.85)" }}>
                    COACT Products
                  </p>
                  <span className="pc-arrow text-[13px]" style={{ color: "rgba(124,255,79,0.6)" }}>↗</span>
                </button>
                <div className="space-y-[14px]">
                  {["COACT AI Analyst", "AI Pharma"].map((name) => (
                    <div key={name} className="flex items-center gap-[12px]">
                      <div className="h-[5px] w-[5px] rounded-full bg-[#7CFF4F] shrink-0" />
                      <span className="text-[17px] font-[500] text-white/85">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAllCards(true)}
              className="pc-trigger pc-explore relative z-10 inline-flex items-center gap-[10px] text-[#7CFF4F] font-[600] text-[14px] cursor-pointer w-fit"
            >
              <span className="pc-label">Explore all</span>
              <span className="pc-arrow">→</span>
            </button>
          </motion.div>

          {/* Card 2 — light, "The Platform" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#f5f4f0] p-[32px] sm:p-[48px] lg:p-[56px] flex flex-col min-h-[420px] sm:min-h-[540px]"
          >
            <p className="text-[11px] font-[600] tracking-[0.1em] text-black/30 uppercase mb-[40px]">
              The Platform
            </p>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-[750] tracking-[-0.03em] text-[#0a0a0a] leading-[1.0] mb-[36px]">
              The intelligence powering enterprise operations
            </h2>

            <div className="flex-1 py-[32px] border-y border-black/[0.08]">
              <div className="text-[clamp(48px,7vw,80px)] font-[750] tracking-[-0.05em] text-[#0a0a0a] leading-[1.0] mb-[14px]">
                90%
              </div>
              <p className="text-[15px] leading-[1.7] text-black/50 max-w-[360px] mb-[32px]">
                of enterprise deployments with COACT AI show measurable ROI
                within the first quarter of going live.
              </p>
              <div className="grid grid-cols-2 gap-[24px]">
                {[
                  { value: "3.2×", label: "Average ROI" },
                  { value: "28+", label: "Years expertise" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[32px] font-[750] tracking-[-0.03em] text-[#0a0a0a] leading-[1.0]">
                      {s.value}
                    </div>
                    <div className="text-[11px] font-[500] text-black/38 uppercase tracking-[0.07em] mt-[4px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#capabilities"
              className="mt-[40px] inline-flex items-center gap-[8px] text-black font-[600] text-[14px] group-hover:gap-[14px] transition-all duration-300"
            >
              Explore the platform <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
