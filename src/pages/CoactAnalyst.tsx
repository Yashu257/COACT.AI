import { motion } from "motion/react";
import ScrollDetailView, { StackCard } from "../components/ScrollDetailView";
import analystHeroImage from "../assests/Ai Analyst.png";
import vmsHeroImage from "../assests/VMS.png";

const ease = [0.16, 1, 0.3, 1] as const;
const AC = "#7CFF4F";

const analystStats = [
  { value: "98%", label: "Safety Compliance" },
  { value: "4 min", label: "Earlier Detection" },
  { value: "65%", label: "Faster Processing" },
];

const analystBenefits = [
  { num: "01", icon: "🤖", title: "AI-Powered Decision Making", description: "Transform raw CCTV data into strategic intelligence. Our models analyse thousands of frames per second to detect anomalies, measure compliance, and surface actionable insights — before incidents occur.", metric: "94% accuracy" },
  { num: "02", icon: "⚡", title: "Optimise Time & Cost Utilisation", description: "Eliminate manual monitoring overhead. ANALYTIX automates surveillance tasks that previously required dedicated staff, reducing operational costs by up to 60% while improving coverage across every facility.", metric: "60% cost reduction" },
  { num: "03", icon: "📈", title: "Measurably Increase Productivity", description: "Real-time alerts delivered directly to your smartphone mean faster responses and fewer disruptions. Teams focus on strategic work while AI handles routine monitoring, compliance tracking, and anomaly detection at scale.", metric: "3.5× faster response" },
];

const applications = [
  { icon: "🪖", title: "Hardhat Detection", desc: "Real-time workplace safety compliance across all zones" },
  { icon: "🔥", title: "Fire & Smoke Detection", desc: "Early AI-powered detection — alerts 4 min before manual alarm" },
  { icon: "🚗", title: "ANPR", desc: "Automatic number plate recognition for gate security" },
  { icon: "🚶", title: "Loitering Detection", desc: "Monitor unauthorized presence in restricted zones" },
  { icon: "⏱️", title: "Time-In / Time-Out", desc: "Automated attendance and shift tracking" },
  { icon: "📦", title: "Object Detection", desc: "Identify, classify, and track objects in real time" },
];

const industries = [
  { name: "Transport & Logistics", icon: "🚚", description: "Fleet, depot & yard monitoring" },
  { name: "Preschool",             icon: "🧒", description: "Child safety & attendance tracking" },
  { name: "Manufacturing",         icon: "🏭", description: "Plant safety & GMP compliance" },
  { name: "Retail",                icon: "🛒", description: "Store analytics & loss prevention" },
  { name: "Healthcare",            icon: "🏥", description: "Hospital surveillance & care quality" },
];

const vmsBenefits = [
  { num: "01", icon: "💰", title: "Minimal Manpower & Bandwidth Cost", description: "Centralised management of your entire CCTV network from one dashboard reduces headcount requirements. Intelligent compression and selective recording cut bandwidth costs by 70%.", metric: "70% bandwidth savings" },
  { num: "02", icon: "✨", title: "Highly User-Friendly Interface", description: "Designed for non-technical users and security teams alike. Customisable viewing layouts, one-click camera control, and full mobile access ensure your team can respond instantly from anywhere.", metric: "< 2hr onboarding" },
  { num: "03", icon: "⚡", title: "Proactive Rather Than Reactive Security", description: "AI-driven alerts and predictive analytics shift your security posture from reactive to preventive. Organisations using COACT VMS report up to 70% fewer incidents within 3 months.", metric: "70% fewer incidents" },
];

const testimonials = [
  { quote: "COACT ANALYTIX detected a fire 4 minutes before our manual systems would have — potentially saving millions in equipment. The hardhat detection compliance rate jumped to 98%.", company: "Global Manufacturing Corp", role: "Head of Safety", abbr: "MFG" },
  { quote: "COACT VMS gave us centralised visibility across 6 facilities from a single screen. Bandwidth costs dropped 70% and our security team response time improved dramatically.", company: "Logistics Solutions Ltd", role: "VP Operations", abbr: "LOG" },
  { quote: "The ANPR and loitering detection modules transformed our site security. Setup was seamless — no new hardware required, just connected to our existing CCTV network.", company: "Retail Group Inc", role: "Head of Security", abbr: "RTL" },
];

export default function CoactAnalyst() {
  return (
    <ScrollDetailView
      accentColor={AC}
      badge="AI Video Analytics"
      title="COACT AI Analyst"
      ctaTitle="Ready to Get Started?"
      ctaDescription="Transform your video surveillance into actionable intelligence. Talk to our team today."
    >
      {/* ── Card 0: Hero ──────────────────────────────────────────────────── */}
      <StackCard bg="white">
        <section className="relative bg-white overflow-hidden" style={{ paddingTop: 72 }}>
          {/* Mobile/Tablet: image stacked on top */}
          <div className="lg:hidden relative w-full" style={{ height: "clamp(180px, 38vw, 300px)" }}>
            <img src={analystHeroImage} alt="COACT AI Analyst" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
          </div>
          {/* Desktop: absolute right-half */}
          <div className="hidden lg:block sdv-hero-img-pane">
            <img src={analystHeroImage} alt="COACT AI Analyst" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] w-full flex items-center px-[20px] md:px-[40px] lg:px-[56px] pt-[20px] pb-[48px] lg:min-h-[calc(100vh-72px)] lg:py-[40px]">
            <div className="sdv-hero-text-col">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
                className="mb-[16px] md:mb-[24px] inline-flex items-center gap-[10px] rounded-full border border-black/[0.1] bg-white px-[14px] h-[32px]">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: AC }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: AC }} />
                </span>
                <span className="text-[11px] font-[600] tracking-[0.08em] text-[#555] uppercase">AI Video Analytics</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.75, ease }}
                className="mb-[14px] md:mb-[20px] font-[750] leading-[0.95] tracking-[-0.04em] text-[clamp(28px,6vw,80px)] text-[#0a0a0a]">
                COACT AI<br />
                <span style={{ color: AC }}>Analyst</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6, ease }}
                className="mb-[16px] md:mb-[24px] text-[14px] md:text-[16px] lg:text-[17px] leading-[1.7] text-[#555]" style={{ maxWidth: 500 }}>
                A custom AI-enabled video analytics solution that transforms standard CCTV data into strategic business intelligence. ANALYTIX delivers{" "}
                <strong className="font-[600] text-[#0a0a0a]">real-time monitoring, risk mitigation, and operational optimisation</strong>{" "}
                through machine learning-driven video analysis.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5, ease }}
                className="mb-[20px] md:mb-[28px] rounded-[12px] border border-black/[0.08] bg-[#f5f4f0] px-[16px] py-[10px]" style={{ maxWidth: 500 }}>
                <p className="text-[13px] md:text-[15px] font-[600] tracking-[-0.01em] text-[#0a0a0a]">Your data is talking — are you listening?</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.38, duration: 0.5, ease }}
                className="flex flex-wrap gap-[10px]">
                <button className="inline-flex items-center gap-[10px] rounded-full bg-[#0a0a0a] px-[22px] md:px-[28px] h-[46px] md:h-[50px] text-[14px] md:text-[15px] font-[600] text-white">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}
                className="sdv-stats-light">
                {analystStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-[750] text-[20px] md:text-[22px] text-[#0a0a0a] tracking-tight">{s.value}</div>
                    <div className="text-[10px] md:text-[11px] font-[500] text-[#999] uppercase tracking-[0.06em] mt-[2px]">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </StackCard>

      {/* ── Card 1: Analytix Benefits ─────────────────────────────────────── */}
      <StackCard bg="#f5f4f0">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "white", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" }}>Why ANALYTIX</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,52px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0a0a0a", margin: 0 }}>
              Your data is talking.{" "}<span style={{ color: "#15803d" }}>Are you listening?</span>
            </h2>
          </motion.div>
          <div className="sdv-grid-3">
            {analystBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                style={{ background: "white", borderRadius: 20, border: "1px solid rgba(0,0,0,0.07)", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(0,0,0,0.05)", lineHeight: 1, marginBottom: 10 }}>{b.num}</div>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{b.icon}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 650, lineHeight: 1.3, color: "#0a0a0a", margin: "0 0 9px" }}>{b.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#666", margin: "0 0 14px", flex: 1 }}>{b.description}</p>
                <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 999, border: "1px solid rgba(34,197,94,0.35)", background: "rgba(34,197,94,0.09)", padding: "0 12px", height: 25, fontSize: 11, fontWeight: 650, color: "#15803d", width: "fit-content" }}>{b.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackCard>

      {/* ── Card 2: Applications + Industries ────────────────────────────── */}
      <StackCard bg="white">
        <div className="sdv-card-inner">
          <div className="sdv-grid-2col">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} style={{ marginBottom: 22 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "#f5f4f0", padding: "0 14px", height: 28, marginBottom: 12 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" }}>What It Detects</span>
                </div>
                <h2 style={{ fontSize: "clamp(20px,2.8vw,34px)", fontWeight: 720, letterSpacing: "-0.03em", color: "#0a0a0a", margin: 0 }}>
                  Applications of{" "}<span style={{ color: "#15803d" }}>ANALYTIX.</span>
                </h2>
              </motion.div>
              <div className="sdv-grid-2x2">
                {applications.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                    style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa", padding: "14px" }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{a.icon}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 650, color: "#0a0a0a", marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.5, color: "#666" }}>{a.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} style={{ marginBottom: 22 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "#f5f4f0", padding: "0 14px", height: 28, marginBottom: 12 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" }}>Industries</span>
                </div>
                <h2 style={{ fontSize: "clamp(20px,2.8vw,34px)", fontWeight: 720, letterSpacing: "-0.03em", color: "#0a0a0a", margin: 0 }}>
                  Built for your{" "}<span style={{ color: "#15803d" }}>industry.</span>
                </h2>
              </motion.div>
              <div className="sdv-industries">
                {industries.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                    whileHover={{ x: 6, scale: 1.015 }}
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      position: "relative",
                      border: "1px solid rgba(0,0,0,0.07)",
                      background: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 18px",
                      cursor: "pointer",
                      transition: "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${AC}80`;
                      el.style.background = "white";
                      el.style.boxShadow = `0 8px 24px rgba(124,255,79,0.18), 0 0 0 1px ${AC}40`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(0,0,0,0.07)";
                      el.style.background = "#fafafa";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Accent bar on the left — slides in on hover */}
                    <motion.div
                      initial={{ scaleY: 0.4, opacity: 0.6 }}
                      whileHover={{ scaleY: 1, opacity: 1 }}
                      style={{
                        position: "absolute",
                        left: 0, top: 0, bottom: 0,
                        width: 3,
                        background: AC,
                        transformOrigin: "center",
                      }}
                    />

                    {/* Industry icon in a teal-tinted rounded square */}
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${AC}1f`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {ind.icon}
                    </div>

                    {/* Name + sub */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 14.5, fontWeight: 650, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
                        {ind.name}
                      </span>
                      <span style={{ fontSize: 12, color: "#666", marginTop: 1 }}>
                        {ind.description}
                      </span>
                    </div>

                    {/* Arrow chevron — slides in from the right on hover */}
                    <motion.div
                      initial={{ x: -6, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.25, ease }}
                      style={{ color: "#15803d", flexShrink: 0 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </StackCard>

      {/* ── Card 3: VMS Introduction ──────────────────────────────────────── */}
      <StackCard bg="#050a05">
        {/* Mobile/Tablet: image on top */}
        <div className="lg:hidden relative w-full" style={{ height: "clamp(180px, 38vw, 300px)" }}>
          <img src={vmsHeroImage} alt="COACT VMS" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #050a05 100%)" }} />
        </div>
        {/* Desktop: absolute right-half */}
        <div className="hidden lg:block sdv-hero-img-pane" style={{ width: "50%" }}>
          <img src={vmsHeroImage} alt="COACT VMS" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050a05 0%, rgba(5,10,5,0.6) 40%, transparent 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }} className="mx-auto max-w-[1440px] w-full flex items-center px-[20px] md:px-[40px] lg:px-[56px] pt-[20px] pb-[48px] lg:min-h-[100vh] lg:py-[80px]">
          <div className="sdv-hero-text-col">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, ease }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(124,255,79,0.3)", background: "rgba(124,255,79,0.07)", padding: "0 14px", height: 28, marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: AC, display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(124,255,79,0.8)", textTransform: "uppercase" }}>Video Management System</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.08, duration: 0.7, ease }}
              className="font-[750] leading-[0.95] tracking-[-0.04em] text-[clamp(28px,5.5vw,70px)]" style={{ color: "white", margin: "0 0 14px" }}>
              COACT<br /><span style={{ color: AC }}>VMS</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.18, duration: 0.6, ease }}
              className="text-[14px] md:text-[16px] lg:text-[17px]" style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 460, margin: "0 0 24px" }}>
              Centralised video management for your entire CCTV infrastructure. One dashboard, full control, zero compromises on{" "}
              <strong style={{ fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>security, bandwidth, or ease of use</strong>.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.28, duration: 0.5, ease }}
              className="flex flex-wrap gap-[10px]">
              <button className="inline-flex items-center gap-[10px] rounded-full px-[20px] md:px-[28px] h-[44px] md:h-[50px] text-[14px] md:text-[15px] font-[600]" style={{ background: AC, color: "#050505", border: "none", cursor: "pointer" }}>
                Learn More
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </motion.div>
          </div>
        </div>
      </StackCard>

      {/* ── Card 4: VMS Benefits ──────────────────────────────────────────── */}
      <StackCard bg="#0a0a0a">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(124,255,79,0.2)", background: "rgba(124,255,79,0.06)", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(124,255,79,0.7)", textTransform: "uppercase" }}>VMS Advantages</span>
            </div>
            <h2 style={{ fontSize: "clamp(24px,4vw,48px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: "white", margin: 0 }}>
              Security that's{" "}<span style={{ color: AC }}>always one step ahead.</span>
            </h2>
          </motion.div>
          <div className="sdv-grid-3">
            {vmsBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                style={{ borderRadius: 20, border: "1px solid rgba(124,255,79,0.1)", background: "rgba(124,255,79,0.04)", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(255,255,255,0.04)", lineHeight: 1, marginBottom: 10 }}>{b.num}</div>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{b.icon}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 650, lineHeight: 1.3, color: "white", margin: "0 0 9px" }}>{b.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.55)", margin: "0 0 14px", flex: 1 }}>{b.description}</p>
                <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 999, border: "1px solid rgba(124,255,79,0.3)", background: "rgba(124,255,79,0.08)", padding: "0 12px", height: 25, fontSize: 11, fontWeight: 650, color: AC, width: "fit-content" }}>{b.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackCard>

      {/* ── Card 5: Testimonials ──────────────────────────────────────────── */}
      <StackCard bg="#050505">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(124,255,79,0.2)", background: "rgba(124,255,79,0.05)", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(124,255,79,0.7)", textTransform: "uppercase" }}>Client Results</span>
            </div>
            <h2 style={{ fontSize: "clamp(24px,4vw,48px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: "white", margin: 0 }}>
              What our clients{" "}<span style={{ color: AC }}>say.</span>
            </h2>
          </motion.div>
          <div className="sdv-grid-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease, delay: i * 0.09 }}
                style={{ borderRadius: 20, border: "1px solid rgba(124,255,79,0.1)", background: "rgba(124,255,79,0.03)", padding: "24px 20px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {[...Array(5)].map((_, si) => <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill={AC}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 18px", flex: 1, fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(124,255,79,0.1)", border: "1px solid rgba(124,255,79,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: AC, letterSpacing: "0.05em", flexShrink: 0 }}>{t.abbr}</div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: "white" }}>{t.company}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackCard>
    </ScrollDetailView>
  );
}
