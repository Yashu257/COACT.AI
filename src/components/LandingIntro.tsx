import { useEffect, useRef, useCallback, useState } from "react";
import { motion } from "motion/react";
import BrandMark from "./BrandMark";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LandingIntro() {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const triggered = useRef(false);

  const dismiss = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;
    setExiting(true);
    setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 1100);
  }, []);

  useEffect(() => {
    // Force the underlying page back to the top on refresh, so when the
    // user dismisses the intro they always land at the start of the page
    // instead of wherever they previously scrolled to.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.body.style.overflow = "hidden";

    const onWheel = (e: WheelEvent) => { if (e.deltaY > 0) dismiss(); };
    const onKey = (e: KeyboardEvent) => {
      if ([" ", "ArrowDown", "PageDown", "Enter"].includes(e.key)) {
        e.preventDefault();
        dismiss();
      }
    };
    let ty = 0;
    const onTouchStart = (e: TouchEvent) => { ty = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      if (ty - e.changedTouches[0].clientY > 40) dismiss();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      document.body.style.overflow = "";
    };
  }, [dismiss]);

  if (gone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[500] overflow-hidden"
      /* Smoke dissolve on dismiss */
      animate={{
        opacity: exiting ? 0 : 1,
        filter: exiting ? "blur(36px)" : "blur(0px)",
        scale: exiting ? 1.06 : 1,
      }}
      transition={{ duration: 1.05, ease: [0.4, 0, 0.9, 1] }}
      /* Black fills any frame gap at the loop point */
      style={{ backgroundColor: "#000" }}
    >
      {/* Single looping video — bg-black prevents hero flash at loop */}
      <video
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Cinematic scrim — heavier on the left for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.54) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center" style={{ zIndex: 2 }}>
        <div className="w-full sm:w-[65%] lg:w-[45%] flex flex-col justify-center px-[24px] sm:px-[40px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="flex flex-col"
          >
            {/* Brand lockup — full-colour version on the dark video.
               Sized big so it visually dominates over the headline below.
               Negative margin compensates for the PNG's internal padding. */}
            <div className="mb-[20px] sm:mb-[32px] flex items-center -ml-[10px] sm:-ml-[16px]">
              <BrandMark
                variant="color-dark"
                height={140}
                className="drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Live badge */}
            <div
              className="mb-[20px] sm:mb-[28px] inline-flex items-center gap-[10px] rounded-full px-[14px] h-[32px] self-start"
              style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#7CFF4F] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#7CFF4F]" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-[600] tracking-[0.08em] text-white/80 uppercase">
                Enterprise AI Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-[16px] sm:mb-[20px] font-[750] leading-[0.95] tracking-[-0.04em] text-white text-[clamp(28px,5vw,64px)]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              The future of
              <br />
              enterprise AI
              <br />
              <span style={{
                background: "linear-gradient(135deg, #7CFF4F 0%, #4ddd1a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                starts here.
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="mb-[28px] sm:mb-[40px] max-w-[360px] text-[14px] sm:text-[15px] lg:text-[16.5px] leading-[1.75] text-white/65"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
            >
              Purpose-built intelligence for procurement, HR, operations,
              marketing, and every critical function in between.
            </p>

            {/* Scroll prompt */}
            <div className="flex items-center gap-[16px]">
              <div
                className="relative h-[52px] w-[1px] overflow-hidden"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full bg-[#7CFF4F]"
                  style={{ height: "45%" }}
                  animate={{ y: ["0%", "220%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.25 }}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[10px] sm:text-[11px] font-[650] tracking-[0.12em] uppercase text-white/50">
                  Scroll to enter
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.04em]">
                  or press Space / ↓
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Watermark */}
      <div
        className="absolute bottom-[32px] right-[40px] text-[11px] font-[500] text-white/20 tracking-[0.06em]"
        style={{ zIndex: 3 }}
      >
        coact.co.in
      </div>
    </motion.div>
  );
}
