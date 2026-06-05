import { motion } from "motion/react";
import { EASE } from "../../lib/theme";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  index: number;
}

/** Compact feature tile (light) — used on the white "Features" card. */
export default function FeatureCard({ index, icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.07 }}
      style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa", padding: "18px 16px" }}
    >
      <div style={{ fontSize: 24, marginBottom: 9 }}>{icon}</div>
      <div style={{ fontSize: 14.5, fontWeight: 650, color: "#0a0a0a", marginBottom: 5 }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: "#666" }}>{description}</div>
    </motion.div>
  );
}
