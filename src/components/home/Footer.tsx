import { Link } from "react-router-dom";
import BrandMark from "../BrandMark";

/** Multi-column dark site footer. */
export default function Footer() {
  const cols = [
    {
      title: "Products",
      links: [
        { label: "Smart Procurement", href: "/smart-procurement" },
        { label: "HR AI", href: "/hr" },
        { label: "Product", href: "/product" },
        { label: "VMS", href: "/coact-analyst" },
        { label: "Marketing AI", href: "/marketing" },
        { label: "COACT Analyst", href: "/coact-analyst" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise", href: "#" },
        { label: "Pharma", href: "#" },
        { label: "Manufacturing", href: "#" },
        { label: "Banking", href: "#" },
        { label: "Healthcare", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Security", href: "#" },
        { label: "Legal", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Events", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Guides",
      links: [
        { label: "AI for Procurement", href: "#" },
        { label: "HR AI Guide", href: "#" },
        { label: "VMS Setup", href: "#" },
        { label: "Data Analytics", href: "#" },
        { label: "Computer Vision", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.07] pt-[56px] sm:pt-[72px] pb-[32px] sm:pb-[40px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-[32px] sm:gap-[40px] mb-[48px] sm:mb-[64px]">
          {/* Brand column — full width on mobile */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center mb-[16px] sm:mb-[20px]">
              <BrandMark variant="color-dark" height={64} />
            </Link>
            <p className="text-[13px] sm:text-[14px] text-white/70 leading-[1.68] max-w-[260px] mb-[20px] sm:mb-[28px]">
              Purpose-built AI platforms for enterprise operations. Intelligence across every department.
            </p>
            <div className="flex gap-[10px] sm:gap-[12px]">
              {["in", "𝕏"].map((icon) => (
                <a key={icon} href="#"
                  className="flex h-[34px] sm:h-[36px] w-[34px] sm:w-[36px] items-center justify-center rounded-full border border-white/[0.25] text-white/80 hover:text-white hover:border-white/[0.5] transition-all text-[13px] font-[700]">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-[10px] sm:text-[11px] font-[700] tracking-[0.12em] text-[#7CFF4F] uppercase mb-[14px] sm:mb-[20px]">
                {col.title}
              </div>
              <div className="space-y-[10px] sm:space-y-[12px]">
                {col.links.map((link) => (
                  <div key={link.label}>
                    <Link to={link.href} className="text-[13px] sm:text-[14px] text-white/85 hover:text-[#7CFF4F] transition-colors">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px] sm:gap-[16px] border-t border-white/[0.15] pt-[24px] sm:pt-[32px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[24px]">
            <span className="text-[12px] sm:text-[13px] text-white/65">Copyright © 2026 COACT AI, Inc. All rights reserved.</span>
            <a href="#" className="text-[12px] sm:text-[13px] text-white/65 hover:text-white transition-colors">Terms of Use & Privacy Policy</a>
          </div>
          <button className="text-[12px] sm:text-[13px] text-white/65 hover:text-white transition-colors">Cookie Preferences</button>
        </div>
      </div>
    </footer>
  );
}
