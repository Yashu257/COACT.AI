import { ProductPageConfig } from "../components/ProductDetailTemplate";
import smartImg from "../assests/image.png";
import hrImg from "../assests/HR AI.png";
import productImg from "../assests/Product.png";
import salesImg from "../assests/Sales.png";
import pharmaImg from "../assests/Pharma.png";

const strong = (t: string) => <strong className="font-[600] text-[#0a0a0a]">{t}</strong>;

/* ── Smart Procurement ─────────────────────────────────────────────────── */
export const smartProcurement: ProductPageConfig = {
  accent: "#22c55e",
  accentDeep: "#15803d",
  badge: "Smart Procurement",
  heroImage: smartImg,
  heroImageAlt: "Smart Procurement",
  hero: {
    title: <>Smarter Tools.<br /><span style={{ color: "#22c55e" }}>Better Decisions.</span></>,
    subtitle: <>Powerful tools to analyse, visualise, and act on your procurement data with confidence. Leverage{" "}{strong("AI-powered analytics and automated workflows")}{" "}to optimise sourcing, negotiation, and financial transactions.</>,
    quote: "Every rupee saved is a rupee earned. Make procurement your competitive edge.",
    stats: [
      { value: "45%", label: "Sourcing Cycle Cut" },
      { value: "₹2Cr+", label: "Avg. Q1 Savings" },
      { value: "80%", label: "Fewer Disputes" },
    ],
  },
  benefits: {
    label: "Why Choose Us",
    title: <>Procurement,{" "}<span style={{ color: "#22c55e" }}>reimagined.</span></>,
    items: [
      { num: "01", icon: "💰", title: "Cut Costs Across Your Supply Chain", description: "AI-powered spend analytics identify hidden savings. Dynamic e-auction algorithms guarantee the most competitive pricing on every RFQ — averaging 15–25% savings per category.", metric: "₹2Cr+ avg. savings" },
      { num: "02", icon: "🤝", title: "Build Stronger Supplier Relationships", description: "Transparent workflows, automated communications, and real-time performance dashboards create partnerships built on data. Suppliers bid more competitively when the process is fair.", metric: "45% faster sourcing" },
      { num: "03", icon: "🛡️", title: "Proactive Risk Management", description: "Supplier risk scoring, compliance monitoring, and early warning systems ensure you're never blindsided. Identify concentration risks and regulatory gaps months before they become crises.", metric: "80% fewer disputes" },
    ],
  },
  features: {
    label: "Platform Features",
    title: <>Features of COACT{" "}<span style={{ color: "#22c55e" }}>Smart Procurement</span></>,
    items: [
      { icon: "📋", title: "RFQ Management", description: "Streamlined workflows that optimise procurement and reduce sourcing cycle times." },
      { icon: "📊", title: "Smart Analytics", description: "Real-time spend visibility — identify savings opportunities and optimisation areas instantly." },
      { icon: "⚡", title: "E-Auction", description: "Dynamic price optimisation algorithms drive competitive bidding on every auction." },
      { icon: "☁️", title: "Flexible Deployment", description: "Cloud, on-premise, or hybrid — tailored to your organisational compliance needs." },
      { icon: "💳", title: "Billing & Invoicing", description: "Automated workflows ensure accurate, timely payment processing and fewer disputes." },
    ],
  },
  testimonials: {
    label: "Client Results",
    title: <>What our clients{" "}<span style={{ color: "#22c55e" }}>say.</span></>,
    items: [
      { quote: "COACT Smart Procurement cut our sourcing cycle by 45%. The e-auction module alone saved us over ₹2 crore in the first quarter.", name: "Global Manufacturing Corp", role: "Chief Procurement Officer", abbr: "MFG" },
      { quote: "The spend analytics dashboard gave us complete visibility across 12 supplier categories. We finally have data-driven decisions.", name: "Pharma Enterprises Ltd", role: "VP Supply Chain", abbr: "PHR" },
      { quote: "Flexible deployment on our private cloud was seamless. Invoice management reduced payment disputes by 80%.", name: "Logistics Solutions Inc", role: "Head of Operations", abbr: "LOG" },
    ],
  },
  cta: { title: "Ready to Get Started?", description: "Transform your procurement operations with AI-powered analytics and intelligent automation." },
};

/* ── HR AI ─────────────────────────────────────────────────────────────── */
export const hrAi: ProductPageConfig = {
  accent: "#3b82f6",
  accentDeep: "#1d4ed8",
  badge: "Workforce Intelligence",
  heroImage: hrImg,
  heroImageAlt: "COACT HR AI",
  hero: {
    title: <>AI-Powered<br /><span style={{ color: "#3b82f6" }}>HR Intelligence</span></>,
    subtitle: <>Transform your human capital management with intelligent automation and predictive analytics. Leverage{" "}{strong("AI-driven insights to optimise every stage of the employee lifecycle")}.</>,
    quote: "Your people are your greatest asset. Make every decision count.",
    stats: [
      { value: "58%", label: "Faster Hiring" },
      { value: "89%", label: "Attrition Accuracy" },
      { value: "32%", label: "Engagement Uplift" },
    ],
  },
  benefits: {
    label: "Why COACT HR AI",
    title: <>People decisions,{" "}<span style={{ color: "#3b82f6" }}>powered by data.</span></>,
    items: [
      { num: "01", icon: "⚡", title: "Reduce Time-to-Hire by 58%", description: "AI-powered candidate screening processes thousands of applications in hours, not weeks. Intelligent matching scores candidates against role requirements, culture fit, and predictive success indicators.", metric: "58% faster hiring" },
      { num: "02", icon: "🎯", title: "Predict Attrition 6 Months Ahead", description: "ML models analyse 47+ behavioural and engagement signals to identify flight-risk employees with 89% accuracy. Intervene early before top performers decide to leave.", metric: "89% prediction accuracy" },
      { num: "03", icon: "📈", title: "Increase Employee Engagement", description: "Real-time sentiment analysis, continuous feedback systems, and personalised development pathways demonstrate genuine investment in employee growth — delivering 32% improvements in engagement scores.", metric: "32% engagement uplift" },
    ],
  },
  features: {
    label: "Platform Features",
    title: <>Everything you need to{" "}<span style={{ color: "#3b82f6" }}>manage your workforce.</span></>,
    items: [
      { icon: "👥", title: "Talent Acquisition", description: "AI-powered candidate screening and predictive hiring analytics to identify top talent faster." },
      { icon: "📊", title: "Workforce Analytics", description: "Real-time insights into employee performance, engagement, and predictive attrition modelling." },
      { icon: "🎯", title: "Performance Management", description: "Automated goal tracking, continuous feedback loops, and AI-driven performance reviews at scale." },
      { icon: "📚", title: "Learning & Development", description: "Personalised training recommendations, skill gap analysis, and career path optimisation." },
      { icon: "💰", title: "Compensation Intelligence", description: "Market-based salary benchmarking, equity analysis, and predictive compensation modelling." },
      { icon: "🔄", title: "Employee Lifecycle", description: "End-to-end automation from onboarding to offboarding with intelligent workflow management." },
    ],
  },
  testimonials: {
    label: "Client Results",
    title: <>What our clients{" "}<span style={{ color: "#3b82f6" }}>say.</span></>,
    items: [
      { quote: "COACT HR AI cut our time-to-hire by 58% in the first quarter. The predictive attrition model alone retained 3 key managers we were at risk of losing.", name: "Tech Enterprises Ltd", role: "CHRO", abbr: "TEC" },
      { quote: "Engagement scores improved 32% within 6 months of deploying COACT's sentiment analysis. Our people team finally has the data to make smart decisions.", name: "Global Finance Corp", role: "Head of People", abbr: "GFC" },
      { quote: "The workforce analytics dashboard transformed our quarterly reviews. We now have real-time insight into every team's performance trajectory.", name: "Pharma Solutions Inc", role: "VP Human Resources", abbr: "PHR" },
    ],
  },
  cta: { title: "Ready to Transform Your HR?", description: "Revolutionise workforce management with AI-driven intelligence across every stage of the employee lifecycle." },
};

/* ── Product Intelligence ──────────────────────────────────────────────── */
export const product: ProductPageConfig = {
  accent: "#8b5cf6",
  accentDeep: "#7c3aed",
  badge: "Product Intelligence",
  heroImage: productImg,
  heroImageAlt: "COACT Product Intelligence",
  hero: {
    title: <>Data-Driven<br /><span style={{ color: "#8b5cf6" }}>Product Success</span></>,
    subtitle: <>Empower your product teams with AI-powered analytics and market intelligence. Leverage{" "}{strong("predictive insights, customer intelligence, and performance tracking")}{" "}to build products that customers love.</>,
    quote: "Build products that matter. Let data guide every decision.",
    stats: [
      { value: "35%", label: "Faster to Market" },
      { value: "45%", label: "Higher Adoption" },
      { value: "28%", label: "Churn Reduction" },
    ],
  },
  benefits: {
    label: "Why Choose Us",
    title: <>Ship better.{" "}<span style={{ color: "#8b5cf6" }}>Grow faster.</span></>,
    items: [
      { num: "01", icon: "🚀", title: "Accelerate Time-to-Market", description: "AI-driven feature prioritisation eliminates roadmap debates by quantifying revenue impact. Predictive analytics identify market timing windows — cutting time-to-market by 35%.", metric: "35% faster delivery" },
      { num: "02", icon: "📈", title: "Increase Product Adoption", description: "Deep user behaviour analytics surface exactly which features drive engagement and which create friction. AI recommendations guide product decisions with real usage data — resulting in 45% higher adoption.", metric: "45% adoption increase" },
      { num: "03", icon: "🎯", title: "Predict and Prevent Churn", description: "Identify at-risk customers before they cancel with ML models trained on usage patterns, support interactions, and engagement signals. Proactive AI-triggered interventions reduce churn by 28%.", metric: "28% churn reduction" },
    ],
  },
  features: {
    label: "Platform Features",
    title: <>Built for every stage of{" "}<span style={{ color: "#8b5cf6" }}>product success.</span></>,
    items: [
      { icon: "📊", title: "Product Analytics", description: "Deep insights into product performance, user behaviour, and feature adoption with real-time dashboards." },
      { icon: "🎯", title: "Market Intelligence", description: "Competitive analysis, market trends, and pricing intelligence to stay ahead of the competition." },
      { icon: "🔍", title: "Customer Insights", description: "AI-powered sentiment analysis, feedback aggregation, and customer journey mapping across every touchpoint." },
      { icon: "📈", title: "Performance Tracking", description: "KPI monitoring, goal tracking, and predictive analytics for the product metrics that matter most." },
      { icon: "🚀", title: "Launch Optimisation", description: "Data-driven go-to-market strategies, A/B testing frameworks, and phased feature rollout management." },
      { icon: "🔄", title: "Lifecycle Management", description: "End-to-end product lifecycle tracking from ideation to sunset with intelligent roadmap recommendations." },
    ],
  },
  testimonials: {
    label: "Client Results",
    title: <>What our clients{" "}<span style={{ color: "#8b5cf6" }}>say.</span></>,
    items: [
      { quote: "COACT Product Intelligence cut our time-to-market by 35% and the adoption analytics transformed how we prioritise our roadmap every quarter.", name: "SaaS Platform Ltd", role: "Chief Product Officer", abbr: "SAS" },
      { quote: "Feature adoption jumped 45% after we started acting on COACT's usage intelligence. Finally, product decisions backed by real data instead of gut feel.", name: "Enterprise Software Co", role: "VP Product", abbr: "ENT" },
      { quote: "Churn prediction alerts gave us time to intervene with at-risk accounts. We retained 28% more customers in the first 60 days alone.", name: "Growth Tech Inc", role: "Head of Product", abbr: "GTH" },
    ],
  },
  cta: { title: "Ready to Build Better Products?", description: "Transform your product strategy with AI-powered analytics and market intelligence." },
};

/* ── Marketing & Sales ─────────────────────────────────────────────────── */
export const marketingSales: ProductPageConfig = {
  accent: "#f97316",
  accentDeep: "#c2410c",
  badge: "Revenue Intelligence",
  heroImage: salesImg,
  heroImageAlt: "COACT Marketing & Sales AI",
  hero: {
    title: <>AI-Powered<br /><span style={{ color: "#f97316" }}>Marketing & Sales</span></>,
    subtitle: <>Accelerate revenue with intelligent automation and predictive analytics. Leverage{" "}{strong("AI-driven lead intelligence, campaign analytics, and sales acceleration")}{" "}across every stage of your funnel.</>,
    quote: "Revenue is a metric. Intelligent revenue is your competitive advantage.",
    stats: [
      { value: "3.2×", label: "Qualified Leads" },
      { value: "40%", label: "Shorter Sales Cycle" },
      { value: "240%", label: "ROI Increase" },
    ],
  },
  benefits: {
    label: "Why Choose Us",
    title: <>Grow revenue.{" "}<span style={{ color: "#f97316" }}>Smarter, faster.</span></>,
    items: [
      { num: "01", icon: "🚀", title: "Increase Conversion Rates by 3.5×", description: "Intelligent lead scoring identifies high-intent prospects the moment they engage. Automated nurture sequences deliver the right message at the right time — eliminating wasted effort on low-intent leads.", metric: "3.5× higher conversions" },
      { num: "02", icon: "⚡", title: "Reduce Sales Cycle Time by 40%", description: "Next-best-action AI removes guesswork from sales execution. Automated outreach, intelligent follow-up sequencing, and deal velocity analytics help reps close faster with less manual effort.", metric: "40% shorter cycles" },
      { num: "03", icon: "💰", title: "Boost Marketing ROI by 240%", description: "Multi-touch attribution modelling reveals exactly which channels drive revenue. Budget reallocation based on real impact data consistently delivers 240%+ ROI improvements within 90 days.", metric: "240%+ ROI increase" },
    ],
  },
  features: {
    label: "Platform Features",
    title: <>Everything you need to{" "}<span style={{ color: "#f97316" }}>accelerate revenue.</span></>,
    items: [
      { icon: "🎯", title: "Lead Intelligence", description: "AI-powered lead scoring, qualification, and routing to maximise conversion rates across every channel." },
      { icon: "📊", title: "Campaign Analytics", description: "Real-time campaign performance tracking, attribution modelling, and ROI optimisation across all channels." },
      { icon: "💬", title: "Customer Engagement", description: "Personalised messaging, automated nurture campaigns, and intelligent chatbot interactions at scale." },
      { icon: "📈", title: "Revenue Forecasting", description: "Predictive revenue modelling, pipeline analytics, and deal probability scoring with ML trained on your data." },
      { icon: "🔍", title: "Market Segmentation", description: "AI-driven customer segmentation, persona development, and targeted marketing strategies for every audience." },
      { icon: "⚡", title: "Sales Acceleration", description: "Automated outreach, intelligent follow-ups, and next-best-action recommendations for every rep." },
    ],
  },
  testimonials: {
    label: "Client Results",
    title: <>What our clients{" "}<span style={{ color: "#f97316" }}>say.</span></>,
    items: [
      { quote: "COACT's lead scoring increased our qualified pipeline by 3.2× in 90 days. The next-best-action recommendations transformed how our reps prioritise their day.", name: "SaaS Growth Co", role: "Chief Revenue Officer", abbr: "SAS" },
      { quote: "Our sales cycle shortened by 40% within the first quarter. The deal velocity analytics are something we never knew we needed until we had them.", name: "Enterprise Sales Ltd", role: "VP Sales", abbr: "ENT" },
      { quote: "COACT's attribution modelling finally showed us which channels actually drove revenue. We reallocated budget and saw 240% ROI improvement within 90 days.", name: "Digital Marketing Inc", role: "CMO", abbr: "DMK" },
    ],
  },
  cta: { title: "Ready to Accelerate Revenue?", description: "Transform your marketing and sales operations with AI-driven intelligence and automation." },
};

/* ── Pharma (teal, deep accent on light cards) ─────────────────────────── */
export const pharma: ProductPageConfig = {
  accent: "#14b8a6",
  accentDeep: "#0f766e",
  badge: "Pharma Intelligence",
  heroImage: pharmaImg,
  heroImageAlt: "COACT Pharma Intelligence",
  hero: {
    title: <>AI Built<br /><span style={{ color: "#0f766e" }}>for Pharma.</span></>,
    subtitle: <>From procurement to compliance to HCP engagement —{" "}{strong("AI-powered intelligence built specifically for pharmaceutical enterprises")}.</>,
    quote: "Where precision meets purpose — AI built for pharmaceutical excellence.",
    quoteColor: "#0f766e",
    primaryButtonBg: "#0f766e",
    stats: [
      { value: "45%", label: "Procurement Cost Reduction" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "60%", label: "Faster Compliance Reporting" },
    ],
  },
  benefits: {
    label: "Core Solutions",
    title: <>Built for the{" "}<span style={{ color: "#0f766e" }}>complexity of pharma.</span></>,
    items: [
      { num: "01", icon: "📹", title: "Webinar & Video Conference Management", description: "COACT powers high-stakes pharmaceutical events — from medical education webinars and KOL roundtables to HCP engagement sessions and product launches. Superfast, high-quality delivery with 99.9% uptime.", metric: "99.9% uptime SLA" },
      { num: "02", icon: "📊", title: "Regulatory & Compliance Intelligence", description: "AI-powered documentation, audit-ready reporting, and compliance dashboards aligned with FDA, CDSCO, and ICH guidelines. Reduce compliance reporting effort by 60% and surface regulatory risks before they become blockers.", metric: "60% faster reporting" },
    ],
  },
  features: {
    label: "Platform Capabilities",
    title: <>A complete platform for{" "}<span style={{ color: "#0f766e" }}>pharma operations.</span></>,
    items: [
      { icon: "🔬", title: "Clinical Data Analytics", description: "Real-time dashboards for clinical trial monitoring, adverse event tracking, and patient data aggregation across sites." },
      { icon: "🏭", title: "Plant & Facility Monitoring", description: "AI-powered video surveillance for manufacturing plants — ensuring GMP compliance, safety protocol adherence, and incident response." },
      { icon: "📦", title: "Supply Chain Visibility", description: "End-to-end pharma supply chain intelligence with cold chain tracking, vendor risk scoring, and demand forecasting." },
      { icon: "🤝", title: "KOL & HCP Engagement", description: "Manage key opinion leader programmes, medical education events, and HCP outreach with AI-driven scheduling and analytics." },
      { icon: "📋", title: "Audit Trail Management", description: "Automated documentation and audit-ready compliance records that meet 21 CFR Part 11 and EU GMP Annex 11 requirements." },
      { icon: "🛡️", title: "Pharmacovigilance Support", description: "AI-assisted adverse event signal detection, case processing dashboards, and regulatory submission tracking." },
    ],
  },
  products: {
    label: "AI Pharma / Product Analytics",
    title: <>Purpose-built{" "}<span style={{ color: "#0f766e" }}>pharma products.</span></>,
    items: [
      {
        icon: "🎮",
        title: "RWE Gamification Platform",
        subtitle: "AI-Powered Clinical Trial Engagement",
        description: "Boosts trial participation and retention through milestone rewards, real-time tracking, and AI-driven recruitment forecasting — improving study outcomes end-to-end.",
      },
      {
        icon: "🧬",
        title: "Virtual Scalp Analyzer",
        subtitle: "AI-Driven Scalp Intelligence",
        description: "High-resolution imaging plus AI diagnostics deliver scalp-health analysis, follicle density mapping, and personalised treatment recommendations for dermatology clinics.",
      },
      {
        icon: "🩺",
        title: "Pediatric Care Ecosystem",
        subtitle: "Intelligent Pediatric Practice Management",
        description: "Connects doctors, parents, and patients with AI workflows, automated scheduling, vaccine reminders, and voice-assisted clinical documentation in one place.",
      },
      {
        icon: "☀️",
        title: "AI UV Damage Analyzer",
        subtitle: "Multispectral AI Skin Diagnostics",
        description: "Multispectral imaging detects subsurface skin damage, UV exposure patterns, and early photoaging — backed by visual diagnostics and patient-friendly insights.",
      },
      {
        icon: "📝",
        title: "AI Script Generator with Auto Prompter",
        subtitle: "AI-Assisted Consultation Intelligence",
        description: "Generates real-time consultation scripts and live prompting assistance — improving communication, accuracy, and documentation quality during patient interactions.",
      },
      {
        icon: "🎙️",
        title: "Voice to Prescription & Clinical Notes",
        subtitle: "AI-Powered Medical Documentation",
        description: "Converts doctor-patient consultations into structured prescriptions and clinical notes in real time — with intelligent validation and EMR integration.",
      },
    ],
  },
  testimonials: {
    label: "Client Voices",
    title: <>Trusted by{" "}<span style={{ color: "#14b8a6" }}>pharma leaders.</span></>,
    items: [
      { quote: "COACT's procurement intelligence cut our API sourcing costs by 45% while maintaining full GMP compliance. The audit trail capability is invaluable for regulatory submissions.", name: "Leading Pharma Ltd", role: "Head of Procurement", abbr: "PHR" },
      { quote: "Superfast, high-quality delivery. COACT consistently exceeded expectations and adapted quickly to our last-minute requirements for our global KOL webinar series.", name: "South Region Pharma", role: "Regional Manager", abbr: "REG" },
      { quote: "We've trusted COACT as a partner for over a year. Their responsiveness and commitment to quality makes every pharma event feel effortless.", name: "North Region Pharma", role: "Regional Manager", abbr: "NRT" },
    ],
  },
  cta: { title: "Ready to Transform Pharma Operations?", description: "From procurement to compliance to HCP engagement — COACT delivers AI built specifically for pharmaceutical enterprises." },
};
