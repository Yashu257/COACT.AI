import { motion } from "motion/react";
import ScrollDetailView, { StackCard } from "../components/ScrollDetailView";

const ease = [0.16, 1, 0.3, 1] as const;
const AC = "#7CFF4F";

const stats = [
  { value: "2019", label: "Year Founded" },
  { value: "28+", label: "Years Combined Expertise" },
  { value: "100+", label: "POCs & Pilots Delivered" },
  { value: "3", label: "Countries" },
];

const values = [
  { num: "01", icon: "🤝", title: "Connect", description: "We believe the strongest outcomes happen when the right people, tools, and ideas come together. Every engagement begins with understanding your business deeply." },
  { num: "02", icon: "🧠", title: "Collaborate", description: "Our team works as an extension of yours — not a vendor, but a partner. We share ownership of outcomes and stay invested long after go-live." },
  { num: "03", icon: "📡", title: "Communicate", description: "Transparency is non-negotiable. From project kickoff to delivery, we keep every stakeholder aligned, informed, and confident at every step." },
];

const clients = ["HUL", "ITC", "Google", "ICICI Bank", "Biocon", "HCL", "AXIS", "ABB", "Allergan", "Freedom", "CG"];

const teamHighlights = [
  { icon: "🎯", title: "Domain Expertise", description: "Deep practitioners in Video Management Systems, AI Video Analytics, and Intelligent Software Ecosystems — built from real enterprise deployments." },
  { icon: "🌍", title: "Global Reach", description: "Operating across India, UAE, and Southeast Asia with in-market teams who understand local enterprise nuances and regulatory environments." },
  { icon: "⚡", title: "Delivery Speed", description: "From POC to production in weeks, not months. Our agile methodology and reusable AI components accelerate every engagement." },
  { icon: "🔒", title: "Enterprise Grade", description: "Every solution built to enterprise standards — SOC 2, GDPR-ready, and with full audit trails for regulated industries." },
  { icon: "🤖", title: "AI-First DNA", description: "Founded with AI at our core, not bolted on. Every product decision starts with 'how does AI make this 10× better for the enterprise user?'" },
  { icon: "🏆", title: "Proven Track Record", description: "100+ POCs and pilots delivered to blue-chip clients including HUL, ITC, Google, ICICI Bank, and Biocon." },
];

const testimonials = [
  { name: "Dr (Maj) Ameya Kagali", quote: "COACT's team was proactive and streamlined throughout our webinar support engagement. Delivery was flawless under tight timelines.", company: "Medical Client", role: "Client", abbr: "MED" },
  { name: "Pinaki", quote: "Superfast, high-quality delivery. COACT consistently exceeded expectations and adapted quickly to our last-minute requirements.", company: "South Region Pharma", role: "Regional Head", abbr: "PHR" },
  { name: "Ananya", quote: "The COACT team's responsiveness and ability to manage events seamlessly made them stand out from every other vendor we've worked with.", company: "BFSI Client", role: "Client Lead", abbr: "BFS" },
];

export default function About() {
  return (
    <ScrollDetailView
      accentColor={AC}
      badge="About COACT AI"
      title="Connect. Collaborate. Communicate."
      ctaTitle="Let's Work Together"
      ctaDescription="Ready to transform your enterprise operations with AI built for your industry? Get in touch with our team."
    >
      {/* ── Card 0: Hero (white) ──────────────────────────────────────────── */}
      <StackCard bg="white">
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-[72px]">
          <div className="relative z-10 w-full mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[56px] py-[40px]">
            <div className="sdv-hero-text-col" style={{ maxWidth: 820 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
                className="mb-[20px] inline-flex items-center gap-[10px] rounded-full px-[14px] h-[32px]"
                style={{ border: "1px solid rgba(0,0,0,0.1)", background: "#f5f4f0" }}>
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: AC }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: AC }} />
                </span>
                <span className="text-[11px] font-[600] tracking-[0.08em] text-[#555] uppercase">About COACT AI</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.85, ease }}
                className="font-[750] leading-[0.94] tracking-[-0.04em] text-[clamp(34px,6.5vw,80px)] text-[#0a0a0a] mb-[18px]">
                Connect.{" "}
                <span style={{ color: AC }}>Collaborate.</span>
                <br />
                Communicate.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.22, duration: 0.7, ease }}
                className="text-[15px] md:text-[17px] leading-[1.65] mb-[28px] max-w-[600px] text-[#555]">
                COACT AI is a team of technology professionals with deep expertise in{" "}
                <strong className="font-[600] text-[#0a0a0a]">Video Management Systems, AI Video Analytics,</strong>{" "}
                and{" "}
                <strong className="font-[600] text-[#0a0a0a]">Intelligent Software Ecosystems</strong>{" "}
                — purpose-built for enterprise operations.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.7 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] rounded-[20px] overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                {stats.map((s, i) => (
                  <div key={s.label} className="px-[18px] md:px-[24px] py-[16px] md:py-[20px] flex flex-col gap-[5px]"
                    style={{ background: "#fafafa", borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                    <div className="font-[750] leading-[1] tracking-[-0.03em] text-[clamp(22px,3vw,38px)]" style={{ color: "#15803d" }}>{s.value}</div>
                    <div className="text-[10px] md:text-[11px] font-[500] uppercase tracking-[0.07em] text-[#999]">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </StackCard>

      {/* ── Card 1: Values ────────────────────────────────────────────────── */}
      <StackCard bg="white">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "#f5f4f0", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" }}>Our Values</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,52px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0a0a0a", margin: "0 0 8px" }}>
              The principles that{" "}<span style={{ color: "#15803d" }}>drive us.</span>
            </h2>
          </motion.div>
          <div className="sdv-grid-3" style={{ marginBottom: 28 }}>
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                style={{ borderRadius: 20, border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa", padding: "24px 20px" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(0,0,0,0.05)", lineHeight: 1, marginBottom: 10 }}>{v.num}</div>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{v.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#15803d", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", margin: 0 }}>{v.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", marginBottom: 12 }}>Trusted by enterprise leaders</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {clients.map((c) => (
                <div key={c} style={{ borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", background: "#f5f4f0", padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#555", letterSpacing: "0.02em" }}>{c}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </StackCard>

      {/* ── Card 2: Team Highlights ───────────────────────────────────────── */}
      <StackCard bg="white">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(0,0,0,0.08)", background: "#f5f4f0", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" }}>Why COACT AI</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,52px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0a0a0a", margin: 0 }}>
              Built by practitioners,{" "}<span style={{ color: "#15803d" }}>for enterprise.</span>
            </h2>
          </motion.div>
          <div className="sdv-grid-features">
            {teamHighlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.07)", background: "#fafafa", padding: "18px 16px" }}>
                <div style={{ fontSize: 24, marginBottom: 9 }}>{h.icon}</div>
                <div style={{ fontSize: 14.5, fontWeight: 650, color: "#0a0a0a", marginBottom: 5 }}>{h.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: "#666" }}>{h.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </StackCard>

      {/* ── Card 3: Testimonials ──────────────────────────────────────────── */}
      <StackCard bg="#0a0a0a">
        <div className="sdv-card-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }} className="sdv-section-head">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(124,255,79,0.2)", background: "rgba(124,255,79,0.05)", padding: "0 14px", height: 28, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: AC }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(124,255,79,0.7)", textTransform: "uppercase" }}>Client Voices</span>
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
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,255,79,0.1)", border: "1px solid rgba(124,255,79,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: AC, letterSpacing: "0.05em", flexShrink: 0 }}>{t.abbr}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{t.name}</div>
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
