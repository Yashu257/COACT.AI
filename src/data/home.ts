export interface PlatformCardData {
  name: string;
  icon: string;
  stat: string;
  statLabel: string;
  route: string;
  color: string;
}

export const enterpriseCards: PlatformCardData[] = [
  { name: "Smart Procurement", icon: "📦", stat: "45%", statLabel: "Cost Reduction",    route: "/smart-procurement", color: "#22c55e" },
  { name: "HR AI",              icon: "👥", stat: "60%", statLabel: "Faster Hiring",     route: "/hr",                color: "#3b82f6" },
  { name: "Product Intelligence",icon:"🚀", stat: "28%", statLabel: "Faster Decisions",  route: "/product",           color: "#8b5cf6" },
  { name: "Marketing & Sales AI",icon:"📈", stat: "3.2×",statLabel: "Lead Conversion",   route: "/marketing",         color: "#f97316" },
];

export const allCards: PlatformCardData[] = [
  ...enterpriseCards,
  { name: "COACT AI Analyst", icon: "📊", stat: "4 min", statLabel: "Avg. Insight Time", route: "/coact-analyst", color: "#22c55e" },
  { name: "AI Pharma",        icon: "🔬", stat: "45%",   statLabel: "Cost Reduction",    route: "/pharma",        color: "#3b82f6" },
];

export const coactProductCards: PlatformCardData[] = [
  { name: "COACT AI Analyst", icon: "📊", stat: "4 min", statLabel: "Avg. Insight Time", route: "/coact-analyst", color: "#22c55e" },
  { name: "AI Pharma",        icon: "🔬", stat: "45%",   statLabel: "Cost Reduction",    route: "/pharma",        color: "#3b82f6" },
];
