import { motion } from "motion/react";
import { EASE as ease } from "../../lib/theme";
import homeHeroVideo from "../../assests/HMP.mp4";

/** Homepage hero — full-bleed looping video + headline + CTAs + stat row. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-[88px] pb-[40px] sm:pb-[48px] bg-[#070707]">
      {/* Hero background video */}
      <video
        src={homeHeroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Cinematic dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(7,7,7,0.62) 0%, rgba(7,7,7,0.42) 45%, rgba(7,7,7,0.72) 100%)",
        }}
      />

      {/* Subtle lime glow from top */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[400px] lg:h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at top, rgba(124,255,79,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full mx-auto max-w-[1440px] px-[20px] sm:px-[40px] lg:px-[56px] text-center" style={{ zIndex: 3 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[20px] sm:mb-[28px] inline-flex items-center gap-[8px] rounded-full border border-white/[0.14] bg-white/[0.07] px-[16px] h-[30px] backdrop-blur-[12px]"
        >
          <span className="h-[6px] w-[6px] rounded-full bg-[#7CFF4F] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-[600] tracking-[0.07em] text-white/65 uppercase">
            Enterprise AI Platform
          </span>
        </motion.div>

        {/* Headline — tightened so it fits in viewport */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease }}
          className="font-[750] leading-[0.95] tracking-[-0.04em] text-[clamp(32px,7vw,84px)] text-white max-w-[1000px] mx-auto"
        >
          The world's enterprise operations need reliable AI systems.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-[16px] sm:mt-[22px] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-white/55 max-w-[480px] sm:max-w-[560px] mx-auto"
        >
          Reliable AI has no shortcuts.{" "}
          <span className="text-white font-[600]">COACT AI</span> builds
          purpose-built platforms for enterprises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-[12px] mt-[24px] sm:mt-[32px]"
        >
          <button className="w-full sm:w-auto px-[28px] sm:px-[34px] h-[46px] sm:h-[50px] rounded-full bg-[#7CFF4F] text-[#050505] font-[650] text-[14px] sm:text-[15px] hover:shadow-[0_0_36px_rgba(124,255,79,0.5)] hover:bg-[#6DEB3F] transition-all">
            Book a Meeting
          </button>
          <button className="w-full sm:w-auto px-[28px] sm:px-[34px] h-[46px] sm:h-[50px] rounded-full border border-white/[0.18] text-white/70 font-[500] text-[14px] sm:text-[15px] hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-[8px]">
            Explore Platforms →
          </button>
        </motion.div>

        {/* Stats row — compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          className="mt-[32px] sm:mt-[44px] flex flex-wrap items-center justify-center gap-x-[28px] sm:gap-x-[56px] gap-y-[16px] pt-[20px] sm:pt-[28px] border-t border-white/[0.1] max-w-[820px] mx-auto"
        >
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "100+", label: "POCs Delivered" },
            { value: "SOC 2", label: "Certified" },
            { value: "20", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[18px] sm:text-[22px] font-[750] tracking-[-0.02em] text-white">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-[500] text-white/38 uppercase tracking-[0.08em] mt-[2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
