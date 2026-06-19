import { Link } from "react-router-dom";
import animatedLogo from "../../assests/New AI logo/COACT AI logo animation.gif";

/** Minimal footer — brand + tagline + socials + copyright. */
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.07] py-[48px] sm:py-[64px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[40px] lg:px-[56px] flex flex-col items-center gap-[20px] text-center">
        <Link to="/" className="flex items-center">
          <img src={animatedLogo} alt="COACT AI" style={{ height: 100, width: "auto", display: "block", objectFit: "contain" }} draggable={false} />
        </Link>
        <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.68] max-w-[300px]">
          Purpose-built AI platforms for enterprise operations. Intelligence across every department.
        </p>
        <div className="flex gap-[12px]">
          {[
            { icon: "in", href: "https://www.linkedin.com/company/coactuar-communications-pvt-ltd/posts/?feedView=all" },
            { icon: "𝕏", href: "#" },
          ].map(({ icon, href }) => (
            <a key={icon} href={href} target={href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/[0.25] text-white/80 hover:text-white hover:border-white/[0.5] transition-all text-[13px] font-[700]">
              {icon}
            </a>
          ))}
        </div>
        <span className="text-[13px] text-white/40">© 2026 Coact.Co.in, All Rights Reserved.</span>
      </div>
    </footer>
  );
}
