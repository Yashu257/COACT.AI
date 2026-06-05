import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import CoactAnalyst from "./pages/CoactAnalyst";
import SmartProcurement from "./pages/SmartProcurement";
import HRAI from "./pages/HRAI";
import Product from "./pages/Product";
import MarketingSales from "./pages/MarketingSales";
import Pharma from "./pages/Pharma";
import About from "./pages/About";
import LandingIntro from "./components/LandingIntro";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <LandingIntro />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coact-analyst" element={<CoactAnalyst />} />
        <Route path="/vms" element={<Navigate to="/coact-analyst" replace />} />
        <Route path="/smart-procurement" element={<SmartProcurement />} />
        <Route path="/hr" element={<HRAI />} />
        <Route path="/product" element={<Product />} />
        <Route path="/marketing" element={<MarketingSales />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
