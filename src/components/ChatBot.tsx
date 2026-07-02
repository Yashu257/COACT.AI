import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ─── Types ─────────────────────────────────────────────────── */
type Role = "bot" | "user";
interface Message {
  id: number;
  role: Role;
  text: string;
  chips?: string[];
  showContact?: boolean;
}

/* ─── FAQ knowledge base ─────────────────────────────────────── */
const FAQ = [
  {
    q: "What is COACT AI?",
    keywords: ["who are you", "what are you", "tell me about coact", "about coact", "what is coact", "your company", "founded", "who is coact"],
    a: "COACT AI is a purpose-built enterprise AI company with 20+ years of experience. We deliver intelligent platforms across procurement, HR, marketing, sales, operations, and analytics — trusted by enterprises across 20+ countries.",
  },
  {
    q: "What platforms do you offer?",
    keywords: ["platform", "product", "solution", "offer", "service", "module", "tool", "what do you do", "capabilities"],
    a: "We offer 6 enterprise platforms:\n• Smart Procurement AI\n• HR AI\n• Marketing & Sales AI\n• COACT AI Analyst\n• Product Intelligence\n• AI Pharma",
  },
  {
    q: "How do I book a meeting?",
    keywords: ["book", "meeting", "demo", "schedule", "appointment", "talk to", "speak to", "connect with team", "get in touch"],
    a: "Click the \"Book a Meeting\" button at the top of any page to schedule a call directly with our team.",
  },
  {
    q: "What industries do you serve?",
    keywords: ["industry", "sector", "vertical", "serve", "client", "customer", "who do you work with", "which industries", "pharma", "banking", "manufacturing", "healthcare", "government", "retail"],
    a: "We serve 12+ industries including:\n• Pharmaceuticals & Healthcare\n• Banking & Financial Services\n• Manufacturing & Logistics\n• Retail & FMCG\n• Government & Public Sector\n• Technology",
  },
  {
    q: "How does pricing work?",
    keywords: ["price", "pricing", "cost", "fee", "charge", "plan", "how much", "rate", "budget", "affordable", "expensive", "quote"],
    a: "Our pricing is fully customised for each enterprise based on scope and scale. We offer flexible models from a proof-of-concept (POC) to full enterprise deployment. Reach out to our team for a tailored proposal.",
  },
  {
    q: "What results have you delivered?",
    keywords: ["result", "success", "proof", "track record", "achievement", "stat", "numbers", "impact", "outcome", "case study", "poc delivered", "countries", "how many", "how long"],
    a: "Our track record:\n• 20+ years in enterprise AI\n• 100+ POCs delivered across 12+ industries\n• Active deployments in 20 countries\n• 15–45% average operational savings per platform\n• SOC 2 certified infrastructure",
  },
  {
    q: "How do I contact COACT AI?",
    keywords: ["how to contact", "how to reach", "contact you", "reach you", "get in touch", "phone number", "your number", "call you", "email you", "whatsapp", "linkedin", "office address", "office location", "contact coact", "reach coact"],
    a: "You can reach our team directly — tap the details below:",
    showContact: true,
  },
  {
    q: "What is Smart Procurement AI?",
    keywords: ["smart procurement", "procurement", "sourcing", "vendor", "supplier", "rfq", "auction", "purchase", "buying"],
    a: "Smart Procurement AI uses ML-driven analytics to find hidden savings across vendor categories. Dynamic e-auction algorithms deliver 15–23% average savings on every RFQ, while cutting sourcing cycle time by up to 45%.",
  },
  {
    q: "What is HR AI?",
    keywords: ["hr ai", "hr platform", "human resource", "talent", "hiring", "recruitment", "workforce", "employee", "retention", "payroll"],
    a: "HR AI transforms talent acquisition, retention forecasting, and workforce planning with predictive AI. It adapts to your organisation's unique dynamics — cutting hiring cycles by up to 60%.",
  },
  {
    q: "What is COACT AI Analyst?",
    keywords: ["analyst", "data", "analytics", "report", "dashboard", "insight", "sql", "query", "natural language", "ask data", "business intelligence"],
    a: "COACT AI Analyst lets anyone in your organisation explore data and generate board-ready reports using natural language — no SQL, no waiting. Average insight time is just 4 minutes.",
  },
];

/* ─── Matching: exact question label first, then keyword scoring ─ */
function matchFAQ(input: string): { a: string; showContact?: boolean } | null {
  const lower = input.toLowerCase().trim();

  // 1. Exact match against question label (handles chip taps perfectly)
  const exact = FAQ.find((f) => f.q.toLowerCase() === lower);
  if (exact) return { a: exact.a, showContact: (exact as { showContact?: boolean }).showContact };

  // 2. Score-based: count distinct keyword matches; longer phrase = higher weight
  let bestScore = 0;
  let bestItem: (typeof FAQ)[0] | null = null;

  for (const item of FAQ) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lower.includes(kw)) {
        score += kw.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  if (!bestItem || bestScore === 0) return null;
  return { a: bestItem.a, showContact: (bestItem as { showContact?: boolean }).showContact };
}

/* ─── Enquiry steps ──────────────────────────────────────────── */
type EnquiryStep = "name" | "email" | "topic" | "message" | "done";

const TOPICS = [
  "Smart Procurement",
  "HR AI",
  "Marketing & Sales AI",
  "COACT AI Analyst",
  "Product Intelligence",
  "AI Pharma",
  "General Enquiry",
];

let _id = 0;
const uid = () => ++_id;

const WELCOME_CHIPS = ["Ask a question", "Send an enquiry"];
const FAQ_CHIPS = FAQ.slice(0, 7).map((f) => f.q);

const LINKEDIN_URL =
  "https://www.linkedin.com/company/coactuar-communications-pvt-ltd/posts/?feedView=all";

/* ─── Contact card sub-component ────────────────────────────── */
function ContactCard() {
  return (
    <div
      className="mt-[8px] rounded-[12px] border border-white/[0.1] overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <a
        href="tel:+917314855655"
        className="flex items-center gap-[10px] px-[14px] py-[10px] hover:bg-white/[0.05] transition-colors border-b border-white/[0.07]"
      >
        <span className="text-[16px]">📞</span>
        <span className="text-[13px] font-[600] text-[#7CFF4F]">+91 73148 55655</span>
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[10px] px-[14px] py-[10px] hover:bg-white/[0.05] transition-colors"
      >
        <span className="text-[16px]">💼</span>
        <span className="text-[13px] font-[600] text-[#0a66c2]">LinkedIn — COACT AI</span>
      </a>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: "bot",
      text: "Hi! I'm the COACT AI assistant. How can I help you today?",
      chips: WELCOME_CHIPS,
    },
  ]);
  const [mode, setMode] = useState<"home" | "faq" | "enquiry">("home");
  const [enquiryStep, setEnquiryStep] = useState<EnquiryStep>("name");
  const [enquiry, setEnquiry] = useState({ name: "", email: "", topic: "", message: "" });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Cross-browser reliable focus: autoFocus doesn't fire inside Framer Motion
  // exit/enter animations in Safari, so imperatively focus via ref instead.
  useEffect(() => {
    const active = mode === "enquiry" &&
      (enquiryStep === "name" || enquiryStep === "email" || enquiryStep === "message");
    if (active) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [mode, enquiryStep]);

  const pushBot = (
    text: string,
    chips?: string[],
    opts: { delay?: number; showContact?: boolean } = {}
  ) => {
    const { delay = 700, showContact } = opts;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: uid(), role: "bot", text, chips, showContact }]);
    }, delay);
  };

  const pushUser = (text: string) => {
    setMessages((m) => [...m, { id: uid(), role: "user", text }]);
  };

  const handle = (text: string) => {
    if (!text.trim()) return;
    setInput("");
    pushUser(text);

    /* ── home ── */
    if (mode === "home") {
      if (text === "Ask a question") {
        setMode("faq");
        pushBot("Sure! Pick a topic or type your question:", FAQ_CHIPS);
        return;
      }
      if (text === "Send an enquiry") {
        setMode("enquiry");
        setEnquiryStep("name");
        pushBot("Happy to help! First, what's your name?");
        return;
      }
      const match = matchFAQ(text);
      if (match) {
        pushBot(match.a, ["Ask another question", "Send an enquiry"], { showContact: match.showContact });
      } else {
        pushBot("I'm not sure about that. Choose an option below or type your question:", WELCOME_CHIPS);
      }
      return;
    }

    /* ── faq ── */
    if (mode === "faq") {
      if (text === "Ask another question") {
        pushBot("Sure! Pick a topic or type your question:", FAQ_CHIPS);
        return;
      }
      if (text === "Send an enquiry") {
        setMode("enquiry");
        setEnquiryStep("name");
        pushBot("Happy to help! First, what's your name?");
        return;
      }
      const match = matchFAQ(text);
      if (match) {
        pushBot(match.a, ["Ask another question", "Send an enquiry"], { showContact: match.showContact });
      } else {
        pushBot("I don't have a specific answer for that. Try one of the topics below:", FAQ_CHIPS);
      }
      return;
    }

    /* ── enquiry ── */
    if (mode === "enquiry") {
      if (enquiryStep === "name") {
        setEnquiry((e) => ({ ...e, name: text }));
        setEnquiryStep("email");
        pushBot(`Nice to meet you, ${text}! What's your email address?`);
      } else if (enquiryStep === "email") {
        if (!text.includes("@") || !text.includes(".")) {
          pushBot("That doesn't look like a valid email. Please try again:");
          return;
        }
        setEnquiry((e) => ({ ...e, email: text }));
        setEnquiryStep("topic");
        pushBot("Great! What are you interested in?", TOPICS);
      } else if (enquiryStep === "topic") {
        setEnquiry((e) => ({ ...e, topic: text }));
        setEnquiryStep("message");
        pushBot(`Got it — ${text}. Anything specific you'd like us to know? (or type "skip")`);
      } else if (enquiryStep === "message") {
        setEnquiry((e) => ({ ...e, message: text.toLowerCase() === "skip" ? "" : text }));
        setEnquiryStep("done");
        setMode("home");
        pushBot(
          `Thanks ${enquiry.name || "there"}! To speak with our team directly, reach us here:`,
          ["Ask a question", "New enquiry"],
          { showContact: true }
        );
      }
      return;
    }
  };

  const onChip = (chip: string) => {
    if (chip === "New enquiry") {
      setMode("enquiry");
      setEnquiryStep("name");
      setEnquiry({ name: "", email: "", topic: "", message: "" });
      pushUser(chip);
      pushBot("Sure! What's your name?");
      return;
    }
    handle(chip);
  };

  // Input only visible during active enquiry steps (slides up on enter, slides down on done)
  const showInput =
    mode === "enquiry" &&
    (enquiryStep === "name" || enquiryStep === "email" || enquiryStep === "message");

  return (
    <div className="fixed bottom-[24px] right-[24px] z-[600]">
      {/* ── Floating button ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}
            tabIndex={0}
            className="flex items-center gap-[10px] rounded-full px-[20px] h-[52px] font-[650] text-[14px] text-[#050505] shadow-[0_8px_32px_rgba(124,255,79,0.45)] hover:shadow-[0_8px_40px_rgba(124,255,79,0.65)] focus:outline-none focus:ring-2 focus:ring-[#7CFF4F] focus:ring-offset-2 focus:ring-offset-black transition-shadow"
            style={{ backgroundColor: "#7CFF4F" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Chat with us
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-[24px] right-[24px] w-[calc(100vw-32px)] sm:w-[380px] rounded-[24px] overflow-hidden flex flex-col"
            style={{
              height: "min(560px, calc(100vh - 80px))",
              backgroundColor: "#0f0f0f",
              boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-[20px] py-[14px] border-b border-white/[0.07]"
              style={{ backgroundColor: "#161616" }}
            >
              <div className="flex items-center gap-[10px]">
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-[16px]"
                  style={{ backgroundColor: "#7CFF4F22" }}>
                  🤖
                </div>
                <div>
                  <p className="text-[13px] font-[700] text-white leading-[1.2]">COACT AI Assistant</p>
                  <div className="flex items-center gap-[5px]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#7CFF4F] animate-pulse" />
                    <span className="text-[10px] text-white/40">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(false); } }}
                tabIndex={0}
                aria-label="Close chat"
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-[20px]"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-[14px] py-[16px] flex flex-col gap-[10px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className="max-w-[85%] rounded-[16px] px-[14px] py-[10px] text-[13px] leading-[1.6] whitespace-pre-line"
                    style={
                      msg.role === "user"
                        ? { backgroundColor: "#7CFF4F", color: "#050505", borderBottomRightRadius: 4, fontWeight: 500 }
                        : { backgroundColor: "#1e1e1e", color: "rgba(255,255,255,0.85)", borderBottomLeftRadius: 4 }
                    }
                  >
                    {msg.text}
                  </div>

                  {msg.showContact && msg.role === "bot" && <ContactCard />}

                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-[6px] mt-[8px] max-w-[85%]">
                      {msg.chips.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => onChip(chip)}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onChip(chip); } }}
                          className="rounded-full border border-white/[0.18] px-[12px] h-[28px] text-[11px] font-[600] text-white/75 hover:bg-white/[0.1] hover:text-white hover:border-white/[0.35] focus:outline-none focus:ring-1 focus:ring-[#7CFF4F]/60 transition-all"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-start">
                  <div className="flex items-center gap-[4px] rounded-[16px] px-[14px] py-[10px]"
                    style={{ backgroundColor: "#1e1e1e", borderBottomLeftRadius: 4 }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="block h-[6px] w-[6px] rounded-full bg-white/30"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input — slides up when enquiry starts, slides down when done */}
            <AnimatePresence>
              {showInput && (
                <motion.form
                  key="enquiry-input"
                  initial={{ y: 64, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 64, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  onSubmit={(e) => { e.preventDefault(); handle(input); }}
                  className="flex items-center gap-[8px] px-[14px] py-[12px] border-t border-white/[0.07]"
                  style={{ backgroundColor: "#161616" }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey && input.trim()) {
                        e.preventDefault();
                        handle(input);
                      }
                    }}
                    placeholder={
                      enquiryStep === "email" ? "your@email.com"
                      : enquiryStep === "name" ? "Your name"
                      : "Any details... (or type skip)"
                    }
                    className="flex-1 rounded-full bg-white/[0.07] border border-white/[0.1] px-[14px] h-[38px] text-[13px] text-white placeholder-white/30 outline-none focus:border-[#7CFF4F]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full transition-all disabled:opacity-30"
                    style={{ backgroundColor: "#7CFF4F" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                        stroke="#050505" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
