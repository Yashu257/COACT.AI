import { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE } from "../../lib/theme";

type Variant = "onCream" | "onWhite" | "onDark";

interface SectionHeaderProps {
  variant: Variant;
  accent: string;
  label: string;
  /** The <h2> inner content (may contain accent <span>s). */
  children: ReactNode;
  /** Defaults to the features/testimonials size; benefits uses a larger clamp. */
  titleSize?: string;
}

const BADGE: Record<Variant, { border: string; bg: string; label: string }> = {
  onCream: { border: "1px solid rgba(0,0,0,0.08)", bg: "white", label: "#666" },
  onWhite: { border: "1px solid rgba(0,0,0,0.08)", bg: "#f5f4f0", label: "#666" },
  onDark: { border: "1px solid rgba(255,255,255,0.1)", bg: "rgba(255,255,255,0.05)", label: "rgba(255,255,255,0.6)" },
};

/** Badge pill + section <h2> — the standard heading block on every detail card. */
export default function SectionHeader({
  variant,
  accent,
  label,
  children,
  titleSize = "clamp(24px,4vw,48px)",
}: SectionHeaderProps) {
  const badge = BADGE[variant];
  const titleColor = variant === "onDark" ? "white" : "#0a0a0a";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sdv-section-head"
    >
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: badge.border, background: badge.bg, padding: "0 14px", height: 28, marginBottom: 14 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: badge.label, textTransform: "uppercase" }}>{label}</span>
      </div>
      <h2 style={{ fontSize: titleSize, fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: titleColor, margin: 0 }}>
        {children}
      </h2>
    </motion.div>
  );
}
