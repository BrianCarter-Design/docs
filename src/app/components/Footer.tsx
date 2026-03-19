import { Link } from "react-router";
import flowLogo from "figma:asset/6cf29d1d8d397b60352c41d3c5f15cb66681dc8e.png";

const FOOTER_LINKS = {
  Flow: [
    { label: "Build with AI", to: "/build/build-with-ai" },
    { label: "Why Flow", to: "/ecosystem/why-flow" },
    { label: "Tools", to: "/build/tools" },
    { label: "Faucet", to: "/build/faucet" },
    { label: "Builder Toolkit", to: "/build/builder-toolkit" },
  ],
  Cadence: [
    { label: "Quickstart", to: "/tutorials/getting-started" },
    { label: "Build with Forte", to: "/defi/forte" },
    { label: "Cadence Advantages", to: "/build/cadence-overview" },
    { label: "React SDK", to: "/build/fcl-sdk" },
    { label: "Language Reference", href: "https://cadence-lang.org/docs" },
  ],
  "Solidity (EVM)": [
    { label: "Quickstart", to: "/tutorials/evm-quickstart" },
    { label: "Native VRF", to: "/build/native-vrf" },
    { label: "Batched Transactions", to: "/build/batched-transactions" },
    { label: "Network Information", to: "/protocol/network-info" },
  ],
  "Community & Support": [
    { label: "Dev Office Hours", href: "https://flow.com/office-hours" },
    { label: "Hackathons and Events", href: "https://flow.com/events" },
    { label: "Discord", href: "https://discord.gg/flow" },
    { label: "GitHub", href: "https://github.com/onflow" },
    { label: "Careers", href: "https://flow.com/careers" },
  ],
  "Network & Resources": [
    { label: "Network Status", href: "https://status.flow.com" },
    { label: "Block Explorer", href: "https://flowscan.io" },
    { label: "Flow Port", href: "https://port.flow.com" },
    { label: "Flow Website", href: "https://flow.com" },
    { label: "Flow Blog", href: "https://flow.com/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-[48px] py-[64px]">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-[64px] justify-between">
          {/* Brand */}
          

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[48px]">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-[16px]">
                <h4 className="font-['Clash_Grotesk:Medium',sans-serif] text-[14px] text-[#00EF8B] tracking-[0.5px] uppercase">
                  {heading}
                </h4>
                <div className="flex flex-col gap-[10px]">
                  {links.map((link) =>
                    "to" in link ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="font-['Epilogue:Regular',sans-serif] text-[14px] text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Epilogue:Regular',sans-serif] text-[14px] text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <span className="text-[11px]">↗</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-[48px] pt-[24px] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <p className="font-['Epilogue:Regular',sans-serif] text-[13px] text-white/30">
            Copyright &copy; 2026 Flow Foundation. All Rights Reserved.
          </p>
          <div className="flex gap-[24px]">
          </div>
        </div>
      </div>
    </footer>
  );
}