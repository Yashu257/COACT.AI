import { motion } from "motion/react";
import { EASE, hexToRgb } from "../../lib/theme";

export interface Testimonial {
  quote: string;
  /** Primary line — company name on product pages, person's name on About. */
  name: string;
  role: string;
  abbr: string;
}

interface TestimonialCardProps extends Testimonial {
  index: number;
  accent: string;
}

/** Glass testimonial card (dark) — used on the dark "Client Results" card. */
export default function TestimonialCard({ index, accent, quote, name, role, abbr }: TestimonialCardProps) {
  const rgb = hexToRgb(accent);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.09 }}
      style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: "24px 20px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
        {[...Array(5)].map((_, si) => (
          <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill={accent}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 18px", flex: 1, fontStyle: "italic" }}>"{quote}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: `rgba(${rgb},0.12)`, border: `1px solid rgba(${rgb},0.22)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: accent, letterSpacing: "0.05em", flexShrink: 0 }}>{abbr}</div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "white" }}>{name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
