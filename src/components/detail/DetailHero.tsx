import { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE } from "../../lib/theme";

export interface HeroStat {
  value: string;
  label: string;
}

interface DetailHeroProps {
  accent: string;
  heroImage: string;
  imageAlt: string;
  badge: string;
  title: ReactNode;
  subtitle: ReactNode;
  quote: string;
  quoteColor?: string;
  stats: HeroStat[];
  primaryButtonBg?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function DetailHero({
  accent,
  heroImage,
  imageAlt,
  badge,
  title,
  subtitle,
  quote,
  quoteColor = "#0a0a0a",
  stats,
  primaryButtonBg,
  primaryLabel = "Get Started",
}: DetailHeroProps) {
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: 72 }}>

      {/* ── Mobile / Tablet: stacked image on top ───────────────────────── */}
      <div className="lg:hidden relative w-full" style={{ height: "clamp(200px, 40vw, 340px)" }}>
        <img
          src={heroImage}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          style={{ display: "block" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
      </div>

      {/* ── Desktop: absolute right-half image pane ──────────────────────── */}
      <div className="hidden lg:block sdv-hero-img-pane">
        <img src={heroImage} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      {/* ── Text content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full flex items-center
                      px-[20px] md:px-[40px] lg:px-[56px]
                      pt-[20px] pb-[32px] lg:min-h-[calc(100vh-72px)] lg:py-[24px]">
        <div className="sdv-hero-text-col w-full lg:w-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            className="mb-[12px] md:mb-[16px] inline-flex items-center gap-[10px] rounded-full border border-black/[0.1] bg-white px-[14px] h-[28px]"
          >
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: accent }} />
              <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: accent }} />
            </span>
            <span className="text-[10px] md:text-[11px] font-[600] tracking-[0.08em] text-[#555] uppercase">{badge}</span>
          </motion.div>

          {/* Title — tighter clamp + leading so it fits in viewport */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
            className="mb-[12px] md:mb-[16px] font-[750] leading-[0.92] tracking-[-0.04em] text-[clamp(26px,5vw,64px)] text-[#0a0a0a]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            className="mb-[14px] md:mb-[18px] text-[13px] md:text-[15px] lg:text-[16px] leading-[1.6] text-[#555]"
            style={{ maxWidth: 520 }}
          >
            {subtitle}
          </motion.p>

          {/* Quote pill — visible on all sizes */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
            className="mb-[14px] md:mb-[18px] rounded-[12px] border border-black/[0.08] bg-[#f5f4f0] px-[14px] py-[8px]"
            style={{ maxWidth: 520 }}
          >
            <p className="text-[12px] md:text-[13.5px] font-[600] tracking-[-0.01em]" style={{ color: quoteColor }}>{quote}</p>
          </motion.div>

          {/* Primary CTA (secondary "Watch Demo / Request Demo" button removed) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38, duration: 0.5, ease: EASE }}
            className="flex flex-wrap gap-[10px] mb-[14px] md:mb-[0px]"
          >
            <button
              className="inline-flex items-center gap-[10px] rounded-full px-[20px] md:px-[24px] h-[40px] md:h-[44px] text-[13px] md:text-[14px] font-[600] text-white"
              style={{ background: primaryButtonBg ?? accent }}
            >
              {primaryLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </motion.div>

          {/* Stats row — compact spacing so everything fits inside 100vh */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap items-center gap-x-[32px] md:gap-x-[40px] gap-y-[12px] mt-[18px] md:mt-[22px] pt-[14px] md:pt-[18px] border-t border-black/[0.08]"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-[750] text-[16px] md:text-[20px] text-[#0a0a0a] tracking-tight leading-[1]">{s.value}</div>
                <div className="text-[9px] md:text-[10.5px] font-[500] text-[#999] uppercase tracking-[0.06em] mt-[2px]">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
