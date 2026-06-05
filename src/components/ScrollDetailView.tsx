import React, { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import BrandMark from "./BrandMark";

/* ─── StackCard ─────────────────────────────────────────────────────────── */
export interface StackCardProps {
  children: ReactNode;
  bg?: string;
  __index?: number;
}

export function StackCard({ children, bg = "white", __index = 0 }: StackCardProps) {
  const isHero = __index === 0;
  const lightBgs = ["white", "#fff", "#ffffff", "#f5f4f0", "#fafafa", "#fafaf9"];
  const isDark = !lightBgs.includes(bg);

  const frostedGrad = isDark
    ? `linear-gradient(to bottom, ${bg}d9 0%, transparent 100%)`
    : "linear-gradient(to bottom, rgba(255,255,255,0.80) 0%, transparent 100%)";
  const handleColor = isDark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.12)";

  return (
    <div
      className={isHero ? "sdv-stack-hero" : "sdv-stack-card"}
      style={{
        position: "sticky",
        top: 0,
        /* min-height instead of height so cards expand to fit content
           on shorter viewports (laptops, browser-chrome-heavy windows),
           rather than clipping the bottom of the hero content. The
           sticky stack still works because each card has marginTop:40vh
           which keeps the cinematic stack effect intact. */
        minHeight: "100vh",
        zIndex: 10 + __index,
        marginTop: isHero ? 0 : "40vh",
        background: bg,
        borderRadius: isHero ? 0 : "28px 28px 0 0",
        overflow: "hidden",
        boxShadow: isHero ? "none" : "0 -24px 80px rgba(0,0,0,0.32), 0 -2px 0 rgba(0,0,0,0.06)",
      }}
    >
      {!isHero && (
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 72,
            background: frostedGrad,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "28px 28px 0 0",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      {!isHero && (
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 44, height: 5,
            borderRadius: 999,
            background: handleColor,
            zIndex: 2,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 3, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Props ─────────────────────────────────────────────────────────────── */
interface ScrollDetailViewProps {
  children: ReactNode;
  badge?: string;
  title?: string;
  accentColor?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

/* ─── ScrollDetailView ───────────────────────────────────────────────────── */
export default function ScrollDetailView({
  children,
  accentColor = "#7CFF4F",
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Transform your operations with AI-powered intelligence.",
}: ScrollDetailViewProps) {
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const threshold =
      typeof window !== "undefined" ? window.innerHeight * 0.85 : 700;
    setShowMiniHeader(v > threshold);
    setScrolled(v > 40);
  });

  return (
    <div style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      {/* ─── Global responsive CSS ──────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');

        /* ── Hide internal scrollbar on card inner scroll area ── */
        .sdv-card-scroll::-webkit-scrollbar { display: none; }
        .sdv-card-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* ────────────────────────────────────────────────────────
           CARD STACK — Apple-style sticky stack on desktop/tablet.
           On phones switch to natural document flow so tall content
           (1-col grids) scrolls normally instead of being clipped.
           ──────────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .sdv-stack-card, .sdv-stack-hero {
            position: relative !important;
            top: auto !important;
            height: auto !important;
            min-height: unset !important;
            margin-top: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
        }

        /* ── Hero image pane (right half) — desktop only ── */
        .sdv-hero-img-pane {
          position: absolute; right: 0; top: 0; bottom: 0; width: 55%; z-index: 0;
        }

        /* ── Hero left text column ── */
        .sdv-hero-text-col { max-width: 560px; width: 100%; }

        /* ── Card inner content container ──
           Desktop: full-viewport height centred (premium stack feel).
           Tablet / mobile: auto height + comfortable padding so nothing clips.
           ──────────────────────────────────────────────────────────────── */
        .sdv-card-inner {
          min-height: 100vh;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 56px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
        }

        /* ── Section heading margin ── */
        .sdv-section-head { margin-bottom: 32px; }

        /* ── Responsive grids ── */
        .sdv-grid-3        { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .sdv-grid-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .sdv-grid-2col     { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: start; }
        .sdv-grid-2x2      { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        /* ── Tablet (≤ 1024 px) ── */
        @media (max-width: 1024px) {
          .sdv-hero-img-pane { width: 45%; }
          .sdv-hero-text-col { max-width: 55%; }
          .sdv-card-inner { padding: 72px 32px 48px; min-height: 100vh; }
          .sdv-grid-3        { grid-template-columns: repeat(2, 1fr); }
          .sdv-grid-features { grid-template-columns: repeat(2, 1fr); }
          .sdv-grid-2col     { grid-template-columns: 1fr; gap: 32px; }
        }

        /* ── Small tablet (≤ 820 px — iPad Mini/Air portrait) ── */
        @media (max-width: 820px) {
          .sdv-hero-img-pane { width: 48%; }
          .sdv-hero-text-col { max-width: 52%; }
          .sdv-card-inner { padding: 64px 24px 40px; min-height: unset; }
          .sdv-section-head { margin-bottom: 20px; }
          .sdv-grid-3        { grid-template-columns: 1fr 1fr; gap: 10px; }
          .sdv-grid-features { grid-template-columns: 1fr 1fr; gap: 10px; }
        }

        /* ── Mobile (≤ 768 px) ── */
        @media (max-width: 768px) {
          .sdv-hero-img-pane { display: none; }
          .sdv-hero-text-col { max-width: 100%; }
          .sdv-card-inner {
            min-height: unset;
            padding: 32px 16px 40px;
          }
          .sdv-section-head { margin-bottom: 20px; }
          .sdv-grid-3        { grid-template-columns: 1fr; gap: 12px; }
          .sdv-grid-features { grid-template-columns: 1fr; gap: 10px; }
          .sdv-grid-2col     { grid-template-columns: 1fr; gap: 20px; }
          .sdv-grid-2x2      { grid-template-columns: 1fr 1fr; gap: 8px; }
        }

        /* ── Very small phones (≤ 390 px — iPhone SE, 12 Pro) ── */
        @media (max-width: 390px) {
          .sdv-card-inner { padding: 24px 14px 32px; }
          .sdv-grid-2x2   { grid-template-columns: 1fr; gap: 8px; }
        }

        /* ── Navbar outer padding ── */
        .sdv-nav-pad { padding: 0 56px; }
        .sdv-mini-pad { padding: 0 56px; }
        @media (max-width: 1024px) {
          .sdv-nav-pad { padding: 0 32px; }
          .sdv-mini-pad { padding: 0 32px; }
        }
        @media (max-width: 640px) {
          .sdv-nav-pad { padding: 0 16px; }
          .sdv-mini-pad { padding: 0 16px; }
        }

        /* ── Back to Home label — hidden on small screens ── */
        .sdv-back-label { display: inline; }
        @media (max-width: 640px) { .sdv-back-label { display: none; } }

        /* ── CTA section ── */
        .sdv-cta-section { background: #0a0a0a; padding: 80px 0 100px; position: relative; z-index: 200; }
        .sdv-cta-inner { max-width: 1440px; margin: 0 auto; padding: 0 56px; text-align: center; }
        @media (max-width: 1024px) { .sdv-cta-inner { padding: 0 32px; } }
        @media (max-width: 640px) {
          .sdv-cta-section { padding: 56px 0 72px; }
          .sdv-cta-inner { padding: 0 16px; }
        }

        /* ── Footer ── */
        .sdv-footer { background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.06); padding: 40px 0; position: relative; z-index: 200; }
        .sdv-footer-inner {
          max-width: 1440px; margin: 0 auto; padding: 0 56px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
        }
        @media (max-width: 1024px) { .sdv-footer-inner { padding: 0 32px; } }
        @media (max-width: 640px) {
          .sdv-footer { padding: 32px 0; }
          .sdv-footer-inner { padding: 0 16px; flex-direction: column; align-items: flex-start; gap: 14px; }
        }

        /* ── Hero stats rows ── */
        .sdv-stats-light {
          margin-top: 32px;
          display: flex; align-items: center;
          gap: 32px; flex-wrap: wrap;
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 24px;
        }
        .sdv-stats-dark {
          margin-top: 32px;
          display: flex; align-items: center;
          gap: 32px; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }
        @media (max-width: 640px) {
          .sdv-stats-light { gap: 20px; margin-top: 24px; padding-top: 16px; }
          .sdv-stats-dark  { gap: 18px; margin-top: 20px; padding-top: 14px; }
        }

        /* ── Industries list in CoactAnalyst ── */
        .sdv-industries { display: flex; flex-direction: column; gap: 10px; }

        /* ── CTA button row — stack on mobile ── */
        .sdv-cta-btns {
          display: flex; gap: 12px; align-items: center;
          justify-content: center; flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .sdv-cta-btns { flex-direction: column; align-items: stretch; }
          .sdv-cta-btns a, .sdv-cta-btns button {
            width: 100% !important; justify-content: center;
          }
        }
      `}</style>

      {/* ── Fixed Navbar ──────────────────────────────────────────────────── */}
      <nav
        className="sdv-nav-pad"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: 72,
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.04)" : "none",
        }}
      >
        {!scrolled && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        )}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
          }}
        >
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <BrandMark variant={scrolled ? "color-light" : "white"} height={60} />
          </Link>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              to="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                height: 36, padding: "0 14px",
                fontSize: 13, fontWeight: 500,
                color: scrolled ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.80)",
                textDecoration: "none", borderRadius: 999,
                transition: "color 0.3s ease",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sdv-back-label">Back to Home</span>
            </Link>
            <button
              style={{
                height: 36, padding: "0 16px", borderRadius: 999,
                background: scrolled ? "#7CFF4F" : "rgba(255,255,255,0.12)",
                color: scrolled ? "#050505" : "white",
                fontSize: 13, fontWeight: 600,
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.22)",
                cursor: "pointer", whiteSpace: "nowrap",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              }}
            >
              Book a Meeting
            </button>
          </div>
        </div>
      </nav>

      {/* ── Back-to-top floating button (replaces the wide mini-header) ───── */}
      <AnimatePresence>
        {showMiniHeader && (
          <motion.button
            key="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            title="Back to top"
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 999,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(8,8,8,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Card Stack ────────────────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>
        {React.Children.map(children, (child, i) => {
          if (React.isValidElement<StackCardProps>(child)) {
            return React.cloneElement(child, { __index: i });
          }
          return child;
        })}
      </div>

      {/* ── CTA Section ───────────────────────────────────────────────────── */}
      <section className="sdv-cta-section">
        <div className="sdv-cta-inner">
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              padding: "0 14px", height: 28, marginBottom: 20,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: accentColor }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase" }}>
              Get Started Today
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px,5vw,64px)", fontWeight: 750,
              letterSpacing: "-0.03em", lineHeight: 1,
              color: "white", margin: "0 0 20px",
            }}
          >
            {ctaTitle}
          </h2>

          <p
            style={{
              fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.65,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 500, margin: "0 auto 40px",
            }}
          >
            {ctaDescription}
          </p>

          <div className="sdv-cta-btns">
            <a
              href="tel:+917314855655"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)", padding: "0 24px", height: 50,
                fontSize: 14, fontWeight: 500, color: "white", textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 11.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.6a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +91 73148 55655
            </a>
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                borderRadius: 999, background: accentColor, padding: "0 28px", height: 50,
                fontSize: 14, fontWeight: 600, color: "#050505", border: "none", cursor: "pointer",
              }}
            >
              Book a Meeting
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="sdv-footer">
        <div className="sdv-footer-inner">
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <BrandMark variant="color-dark" height={60} />
          </Link>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link to="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <a href="mailto:hello@coact.co.in" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Contact</a>
            <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy</a>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© Coact.Co.in, All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
