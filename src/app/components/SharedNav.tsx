import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import flowLogo from "figma:asset/6cf29d1d8d397b60352c41d3c5f15cb66681dc8e.png";
import svgPaths from "../../imports/svg-dvyonwpy42";

const NAV_ITEMS = [
  { label: "DeFi", to: "/defi" },
  { label: "Tutorials", to: "/tutorials" },
  { label: "Build", to: "/build" },
  { label: "Protocol", to: "/protocol" },
  { label: "Ecosystem", to: "/ecosystem" },
];

function Logo() {
  return (
    <Link to="/" className="h-[30px] w-[165px] block shrink-0">
      <img src={flowLogo} alt="Flow" className="h-full w-auto object-contain" />
    </Link>
  );
}

export function SharedNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 right-0 transition-colors duration-300 ${
        !isHome || scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between border-b border-white/10 px-[48px] py-[15px]">
        <Logo />

        {/* Nav Links */}
        <div className="flex items-center gap-0 font-['Epilogue:Regular',sans-serif] font-normal text-[14px] text-white tracking-[-0.36px]">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-0.5 transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#00EF8B]"
                    : "text-white hover:text-[#00EF8B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Github + Discord pill, Search pill */}
        <div className="flex gap-[8px] items-center shrink-0">
          {/* Github + Discord */}
          <div className="bg-[rgba(0,239,139,0.1)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] rounded-[100px]">
            <a href="https://github.com/onflow" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p26284700} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </a>
            <a href="https://discord.gg/flow" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1ad991a0} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p196f1c80} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p98b1a00} stroke="#00EF8B" strokeWidth="1.5" />
                <path d={svgPaths.p240ba480} stroke="#00EF8B" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          {/* Search */}
          <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] items-center justify-center px-[16px] py-[10px] rounded-[100px] cursor-pointer">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute inset-[12.5%]">
                <div className="absolute inset-[-6.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 20.5">
                    <path d={svgPaths.p18bde480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[14px] text-white whitespace-nowrap">Search</p>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[14px] text-white whitespace-nowrap">
              ⌘K
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}