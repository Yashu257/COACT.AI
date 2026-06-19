import { ReactNode } from "react";
import { motion } from "motion/react";
import ScrollDetailView, { StackCard } from "./ScrollDetailView";
import DetailHero, { HeroStat } from "./detail/DetailHero";
import SectionHeader from "./detail/SectionHeader";
import BenefitCard, { Benefit } from "./detail/BenefitCard";
import FeatureCard, { Feature } from "./detail/FeatureCard";
import TestimonialCard, { Testimonial } from "./detail/TestimonialCard";
import { EASE } from "../lib/theme";

export interface ProductBlurb {
  /** Optional emoji/icon — gives each product card a visual anchor. */
  icon?: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProductPageConfig {
  accent: string;
  accentDeep: string;
  badge: string;
  heroImage: string;
  heroImageAlt: string;
  hero: {
    title: ReactNode;
    subtitle: ReactNode;
    quote: string;
    quoteColor?: string;
    stats: HeroStat[];
    primaryButtonBg?: string;
    secondaryLabel?: string;
  };
  benefits: { label: string; title: ReactNode; items: Benefit[] };
  features: { label: string; title: ReactNode; items: Feature[] };
  /** Optional — a detailed "Product Analytics" section with longer blurbs. */
  products?: { label: string; title: ReactNode; items: ProductBlurb[] };
  testimonials: { label: string; title: ReactNode; items: Testimonial[] };
  cta: { title: string; description: string };
}

/**
 * Standard product detail page = hero → benefits (cream) → features (white)
 * → testimonials (dark). Every product page that follows this shape is one
 * line: `<ProductDetailTemplate config={...} />`.
 */
export default function ProductDetailTemplate({ config }: { config: ProductPageConfig }) {
  const { accent, accentDeep, badge, heroImage, heroImageAlt, hero, benefits, features, products, testimonials, cta } = config;

  return (
    <ScrollDetailView accentColor={accent} badge={badge} title={badge} ctaTitle={cta.title} ctaDescription={cta.description}>
      {/* Card 0 — Hero */}
      <StackCard bg="white">
        <DetailHero
          accent={accent}
          heroImage={heroImage}
          imageAlt={heroImageAlt}
          badge={badge}
          title={hero.title}
          subtitle={hero.subtitle}
          quote={hero.quote}
          quoteColor={hero.quoteColor}
          stats={hero.stats}
          primaryButtonBg={hero.primaryButtonBg}
          secondaryLabel={hero.secondaryLabel}
        />
      </StackCard>

      {/* Card 1 — Benefits (cream) */}
      <StackCard bg="#f5f4f0">
        <div className="sdv-card-inner">
          <SectionHeader variant="onCream" accent={accent} label={benefits.label} titleSize="clamp(26px,4vw,52px)">
            {benefits.title}
          </SectionHeader>
          <div className="sdv-grid-3">
            {benefits.items.map((b, i) => (
              <BenefitCard key={i} index={i} accent={accent} accentDeep={accentDeep} {...b} />
            ))}
          </div>
        </div>
      </StackCard>

      {/* Card 2 — Features (white) */}
      <StackCard bg="white">
        <div className="sdv-card-inner">
          <SectionHeader variant="onWhite" accent={accent} label={features.label}>
            {features.title}
          </SectionHeader>
          <div className="sdv-grid-features">
            {features.items.map((f, i) => (
              <FeatureCard key={i} index={i} {...f} />
            ))}
          </div>
        </div>
      </StackCard>

      {/* Optional Card — Products / Detailed product analytics (cream) */}
      {products && (
        <StackCard bg="#f5f4f0">
          <div className="sdv-card-inner">
            <SectionHeader variant="onCream" accent={accent} label={products.label} titleSize="clamp(26px,4vw,52px)">
              {products.title}
            </SectionHeader>
            <div className="sdv-grid-features">
              {products.items.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(0,0,0,0.07)",
                    background: "white",
                    padding: "20px 18px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Icon badge — teal-tinted square so cards have a consistent anchor */}
                  {p.icon && (
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${accent}1a`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        marginBottom: 12,
                      }}
                    >
                      {p.icon}
                    </div>
                  )}
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: accentDeep,
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15.5,
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#0a0a0a",
                      margin: "0 0 8px",
                    }}
                  >
                    {p.subtitle}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "#666",
                      flex: 1,
                    }}
                  >
                    {p.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </StackCard>
      )}

      {/* Card 3 — Testimonials (dark) */}
      <StackCard bg="#0a0a0a">
        <div className="sdv-card-inner">
          <SectionHeader variant="onDark" accent={accent} label={testimonials.label}>
            {testimonials.title}
          </SectionHeader>
          <div className="sdv-grid-3">
            {testimonials.items.map((t, i) => (
              <TestimonialCard key={i} index={i} accent={accent} {...t} />
            ))}
          </div>
        </div>
      </StackCard>
    </ScrollDetailView>
  );
}
