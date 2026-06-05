import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import IndustryTicker from "../components/home/IndustryTicker";
import PlatformCards from "../components/home/PlatformCards";
import ScrollExplorer from "../components/home/ScrollExplorer";
import CustomerCarousel from "../components/home/CustomerCarousel";
import ProofSection from "../components/home/ProofSection";
import Insights from "../components/home/Insights";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-white text-[#0a0a0a]"
      style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f5f4f0; }
        ::-webkit-scrollbar-thumb { background: #d0cfcb; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #b0afab; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-r {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <Navbar />
      <Hero />
      <IndustryTicker />
      <PlatformCards />
      <ScrollExplorer />
      <CustomerCarousel />
      <ProofSection />
      <Insights />
      <CTASection />
      <Footer />
    </div>
  );
}
