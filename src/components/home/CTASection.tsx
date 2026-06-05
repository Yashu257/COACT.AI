import { motion } from "motion/react";
import { EASE as ease } from "../../lib/theme";

/** Dark closing call-to-action band. */
export default function CTASection() {
  return (
    <section className="bg-[#0a0a0a] py-[80px] sm:py-[140px] relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full" style={{ background: "rgba(124,255,79,0.05)", filter: "blur(100px)" }} />
      <div className="relative mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px] text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
          <h2 className="text-[clamp(36px,7.5vw,96px)] font-[750] tracking-[-0.04em] text-white leading-[0.92] mb-[20px] sm:mb-[28px]">
            Book a demo today
          </h2>
          <p className="text-[16px] sm:text-[18px] text-white/40 max-w-[480px] mx-auto mb-[40px] sm:mb-[56px] leading-[1.68]">
            See how COACT AI delivers enterprise intelligence that actually works — from day one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] sm:gap-[14px]">
            <a href="tel:+917314855655"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-[10px] px-[28px] h-[50px] sm:h-[54px] rounded-full border border-white/[0.14] text-white/60 font-[500] text-[14px] sm:text-[15px] hover:bg-white/[0.07] hover:text-white transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 11.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.6a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +91 73148 55655
            </a>
            <button className="w-full sm:w-auto px-[28px] sm:px-[36px] h-[50px] sm:h-[54px] rounded-full bg-[#7CFF4F] text-[#050505] font-[650] text-[14px] sm:text-[15px] hover:shadow-[0_0_40px_rgba(124,255,79,0.45)] hover:bg-[#6DEB3F] transition-all">
              Book a Meeting →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
