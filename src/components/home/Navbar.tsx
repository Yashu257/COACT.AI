import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMark from "../BrandMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = ["Platforms", "Industries", "Capabilities", "Company"];

  return (
    <>
      <nav
        className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/96 backdrop-blur-[24px] border-b border-black/[0.07] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[64px] sm:h-[72px] max-w-[1440px] items-center justify-between px-[16px] sm:px-[40px] lg:px-[56px]">
          {/* Logo — swaps between the white-on-dark and the colour-on-light variants */}
          <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <BrandMark
              variant={scrolled || menuOpen ? "color-light" : "white"}
              height={60}
            />
          </Link>

          {/* Center nav — desktop only */}
          <div className="hidden lg:flex items-center gap-[32px]">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className={`text-[14px] font-[500] transition-colors ${scrolled ? "text-black/60 hover:text-black" : "text-white/65 hover:text-white"}`}>
                {item}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-[10px] sm:gap-[12px]">
            <Link to="/about"
              className={`hidden sm:block text-[14px] font-[500] transition-colors ${scrolled || menuOpen ? "text-black/55 hover:text-black" : "text-white/60 hover:text-white"}`}
              onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <button className="hidden sm:block px-[16px] sm:px-[20px] h-[38px] sm:h-[40px] rounded-full bg-[#7CFF4F] text-[#050505] text-[13px] sm:text-[14px] font-[600] hover:bg-[#6DEB3F] hover:shadow-[0_0_20px_rgba(124,255,79,0.35)] transition-all whitespace-nowrap">
              Book a Meeting
            </button>
            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-[40px] h-[40px] gap-[5px]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${scrolled || menuOpen ? "bg-[#0a0a0a]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${scrolled || menuOpen ? "bg-[#0a0a0a]" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${scrolled || menuOpen ? "bg-[#0a0a0a]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-white flex flex-col pt-[64px] lg:hidden">
          <div className="flex flex-col px-[24px] py-[32px] gap-[8px]">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[18px] font-[600] text-[#0a0a0a] py-[14px] border-b border-black/[0.06]"
                onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <Link to="/about" className="text-[18px] font-[600] text-[#0a0a0a] py-[14px] border-b border-black/[0.06]" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </div>
          <div className="px-[24px] mt-auto pb-[40px]">
            <button className="w-full h-[52px] rounded-full bg-[#7CFF4F] text-[#050505] text-[16px] font-[650]">
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </>
  );
}
