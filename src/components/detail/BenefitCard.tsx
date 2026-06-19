import { motion } from "motion/react";
import { EASE, hexToRgb } from "../../lib/theme";

export interface Benefit {
  num: string;
  icon: string;
  title: string;
  description: string;
  metric: string;
}

interface BenefitCardProps extends Benefit {
  index: number;
  accent: string;
  accentDeep: string;
}

/** Numbered benefit card (light) — used on the cream "Why / Solutions" card. */
export default function BenefitCard({ index, accent, accentDeep, num, icon, title, description, metric }: BenefitCardProps) {
  const rgb = hexToRgb(accent);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
      style={{ background: "white", borderRadius: 20, border: "1px solid rgba(0,0,0,0.07)", padding: "24px 20px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(0,0,0,0.05)", lineHeight: 1, marginBottom: 10 }}>{num}</div>
      <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
      <h3 style={{ fontSize: 15.5, fontWeight: 650, lineHeight: 1.3, color: "#0a0a0a", margin: "0 0 9px" }}>{title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: "#666", margin: "0 0 14px", flex: 1 }}>{description}</p>
      <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 999, border: `1px solid rgba(${rgb},0.35)`, background: `rgba(${rgb},0.09)`, padding: "0 12px", height: 25, fontSize: 11, fontWeight: 650, color: accentDeep, width: "fit-content" }}>{metric}</div>
    </motion.div>
  );
}
