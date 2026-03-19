import svgPaths from "../../imports/svg-dvyonwpy42";
import { Link } from "react-router";
import { useState, useCallback } from "react";
import * as fcl from "@onflow/fcl";

/* ─── DESIGN TOKENS ──────────────────────────────────────────────────────────
   Edit these values to update all sections and cards across the home page.
   ──────────────────────────────────────────────────────────────────────────── */
const SECTION_W  = "w-full max-w-[1312px] mx-auto"; // max-width + centering for all sections
const SECTION_X  = "px-[64px]";                     // left/right page gutter
const SECTION_MT = "mt-[80px]";                     // vertical gap between sections
const CARD_P     = "p-[32px]";                      // padding inside individual cards
const CARD_GAP   = "gap-[24px]";                    // gap between cards
const CARD_R     = "rounded-[24px]";                // card corner radius

/* ─── Shared Arrow Icon ─── */
function ArrowRight({ color = "white" }: { color?: string }) {
  return (
    <div className="overflow-clip shrink-0 size-[24px]">
      <div className="flex items-center justify-center size-full">
        <div className="-scale-y-100 h-[16px] rotate-90 w-[14px]">
          <svg className="block size-full" fill="none" viewBox="0 0 14 16">
            <path d={svgPaths.p29125700} fill={color} />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Learn More Button ─── */
function LearnMoreButton({ label = "Learn more" }: { label?: string }) {
  return (
    <div className="flex gap-[12px] items-center justify-center pb-[8px] relative shrink-0 cursor-pointer">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[18px] text-white whitespace-nowrap">{label}</p>
      <ArrowRight />
    </div>
  );
}

/* ─── Category Card List ─── */
function CategoryList({ items, color = "#00EF8B" }: { items: string[]; color?: string }) {
  return (
    <div className="flex flex-col w-full mt-[32px]">
      {items.map((item, i) => (
        <div key={item} className="flex items-center justify-between py-[12px] border-t border-[#002E1B] cursor-pointer hover:opacity-80 transition-opacity">
          <span className="font-['Clash_Grotesk:Regular',sans-serif] text-[18px] tracking-[0.36px] leading-[2]" style={{ color }}>{item}</span>
          <ArrowRight color={color} />
        </div>
      ))}
      <div className="border-t border-[#002E1B]" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 1: Hero
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <div className="relative h-[646px] overflow-clip w-full">
      {/* Video background */}
      <div className="absolute inset-0">
        <video autoPlay className="absolute max-w-none object-cover opacity-10 size-full" controlsList="nodownload" loop playsInline muted>
          <source src="/_videos/v1/f608c97174905faf7ae28ae63ef127a0ce325166" />
        </video>
      </div>
      {/* Green glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[708px] h-[354px]">
        <svg className="block size-full" fill="none" viewBox="0 0 1108 754" style={{ width: "1108px", height: "754px", position: "absolute", left: "-200px", top: "-200px" }}>
          <g filter="url(#hero_glow)" opacity="0.1">
            <path d={svgPaths.pd88d380} fill="#00EF8B" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="754" id="hero_glow" width="1108" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
            </filter>
          </defs>
        </svg>
      </div>
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] px-[64px] pt-[60px]">
        <div className="bg-[rgba(1,255,135,0.1)] flex items-center justify-center px-[18px] py-[9px] rounded-[100px] relative">
          <div aria-hidden className="absolute border-[0.611px] border-[rgba(1,255,135,0.3)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[#00ef8b] text-[18px] whitespace-nowrap">Global, always-on, and in real-time.</p>
        </div>
        <p className="font-['Clash_Grotesk:Bold',sans-serif] leading-none text-[72px] text-center text-white uppercase max-w-[1091px]">Turn decentralized finance into personal finance</p>
        <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[18px] text-[rgba(255,255,255,0.75)] text-center max-w-[705px]">
          Flow is the leading consumer layer-one network, trusted by 1 million monthly active users and chosen by top global brands, it is the foundation for the next generation of consumer finance.
        </p>
        <div className="flex gap-[16px] items-center">
          <Link to="/defi" className="bg-[#00ef8b] flex gap-[12px] items-center justify-center px-[32px] py-[18px] rounded-[100px] hover:bg-[#00d67d] transition-colors">
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[#00140c] text-[18px] whitespace-nowrap">Automate DeFi</p>
          </Link>
          <Link to="/build" className="flex gap-[12px] items-center justify-center px-[32px] py-[18px] rounded-[100px] relative hover:bg-white/5 transition-colors">
            <div aria-hidden className="absolute border border-[#00ef8b] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[#00ef8b] text-[18px] whitespace-nowrap">Start building</p>
            <ArrowRight color="#00EF8B" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2: Feature Cards Row
   ═══════════════════════════════════════════ */
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className={`backdrop-blur-[30px] bg-[#00180e] flex-[1_0_0] min-w-[200px] h-[191px] ${CARD_R} flex items-end ${CARD_P} justify-between`}>
      <div className="flex flex-col gap-[12px]">
        <div className="overflow-clip size-[50px]">{icon}</div>
        <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.1] text-[24px] text-white tracking-[0.24px] max-w-[240px]">{title}</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function FeatureCardsSection() {
  return (
    <div className={`flex ${CARD_GAP} items-start ${SECTION_W} ${SECTION_MT}`}>
      <FeatureCard
        icon={<svg className="block size-full" fill="none" viewBox="0 0 41.5833 43.6667"><path d={svgPaths.pad9ba40} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
        title="Create revolutionary consumer DeFi experiences"
        description=""
      />
      <FeatureCard
        icon={<svg className="block size-full" fill="none" viewBox="0 0 43.6667 43.6667"><path d={svgPaths.p179f7580} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
        title="Create apps that evolve without a proxy contract"
        description=""
      />
      <FeatureCard
        icon={<svg className="block size-full" fill="none" viewBox="0 0 39.5 43.6668"><path d={svgPaths.p131d1d80} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
        title="Build faster with React components and hooks"
        description=""
      />
      <FeatureCard
        icon={<svg className="block size-full" fill="none" viewBox="0 0 43.6667 43.6667"><path d={svgPaths.pcb2dd00} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
        title="Deploy Solidity apps on Flow without code changes"
        description=""
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3: Try Cadence Live
   ═══════════════════════════════════════════ */

fcl.config({
  "flow.network": "mainnet",
  "accessNode.api": "https://rest-mainnet.onflow.org",
});

const SCRIPTS = [
  {
    label: "Flow token account balance",
    code: `import FungibleToken from 0xf233dcee88fe0abe
import FlowToken from 0x1654653399040a61

access(all) fun main(address: Address): UFix64 {
  let account = getAccount(address)
  let vaultRef = account.capabilities
    .borrow<&{FungibleToken.Balance}>(/public/flowTokenBalance)
    ?? panic("Could not borrow Balance reference")
  return vaultRef.balance
}`,
    args: (fcl: any) => [fcl.arg("0x18eb4ee6b3c026d2", fcl.t.Address)],
    argLabel: "Address",
    argDefault: "0x18eb4ee6b3c026d2",
    argType: "Address",
  },
  {
    label: "Account storage limit and usage",
    code: `access(all) fun main(address: Address): {String: UInt64} {
  let account = getAuthAccount<auth(Storage) &Account>(address)
  return {
    "capacity": account.storage.capacity,
    "used": account.storage.used,
    "available": account.storage.capacity - account.storage.used
  }
}`,
    args: (fcl: any) => [fcl.arg("0x18eb4ee6b3c026d2", fcl.t.Address)],
    argLabel: "Address",
    argDefault: "0x18eb4ee6b3c026d2",
    argType: "Address",
  },
  {
    label: "Current block height",
    code: `access(all) fun main(): UInt64 {
  return getCurrentBlock().height
}`,
    args: () => [],
    argLabel: null,
    argDefault: "",
    argType: "",
  },
  {
    label: "Flow total supply",
    code: `import FlowToken from 0x1654653399040a61

access(all) fun main(): UFix64 {
  return FlowToken.totalSupply
}`,
    args: () => [],
    argLabel: null,
    argDefault: "",
    argType: "",
  },
  {
    label: "Get account public key count",
    code: `access(all) fun main(address: Address): Int {
  let account = getAccount(address)
  var count = 0
  var i = 0
  while true {
    if account.keys.get(keyIndex: i) == nil { break }
    count = count + 1
    i = i + 1
  }
  return count
}`,
    args: (fcl: any) => [fcl.arg("0x18eb4ee6b3c026d2", fcl.t.Address)],
    argLabel: "Address",
    argDefault: "0x18eb4ee6b3c026d2",
    argType: "Address",
  },
];

function TryCadenceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(SCRIPTS[0].code);
  const [argValue, setArgValue] = useState(SCRIPTS[0].argDefault);
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectScript = (i: number) => {
    setActiveIndex(i);
    setCode(SCRIPTS[i].code);
    setArgValue(SCRIPTS[i].argDefault);
    setOutput(null);
    setError(null);
  };

  const runScript = useCallback(async () => {
    setRunning(true);
    setOutput(null);
    setError(null);
    try {
      const script = SCRIPTS[activeIndex];
      const result = await fcl.query({
        cadence: code,
        args: script.argLabel
          ? (arg: any, t: any) => [arg(argValue, t[script.argType])]
          : () => [],
      });
      setOutput(JSON.stringify(result, null, 2));
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setRunning(false);
    }
  }, [activeIndex, code, argValue]);

  const activeScript = SCRIPTS[activeIndex];

  return (
    <div className={`bg-[#00140c] ${CARD_R} ${SECTION_W} ${SECTION_MT} ${SECTION_X} py-[64px] flex flex-col gap-[49px]`}>
      <div className="flex gap-[29px] items-center">
        <div className="size-[22.38px]">
          <svg className="block size-full" fill="none" viewBox="0 0 22.3796 22.3796">
            <circle cx="11.1898" cy="11.1898" fill="#00EF8B" r="11.1898" />
          </svg>
        </div>
        <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-none text-[54px] text-white whitespace-nowrap">Try Cadence live</p>
      </div>
      <div className="flex gap-[16px] items-start w-full">
        {/* Script list */}
        <div className="flex flex-col w-[280px] shrink-0 gap-[4px]">
          {SCRIPTS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => selectScript(i)}
              className={`text-left p-[16px] rounded-[16px] transition-colors cursor-pointer ${i === activeIndex ? "bg-[rgba(255,255,255,0.07)]" : "hover:bg-[rgba(255,255,255,0.03)]"}`}
            >
              <p className={`font-['Clash_Grotesk:Medium',sans-serif] leading-[1.3] text-[15px] ${i === activeIndex ? "text-[rgba(255,255,255,0.85)]" : "text-[rgba(255,255,255,0.35)]"}`}>
                {s.label}
              </p>
            </button>
          ))}
        </div>

        {/* Editor + output */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          {/* Editor header */}
          <div className="bg-[rgba(0,0,0,0.4)] rounded-t-[20px] flex items-center justify-between px-[20px] py-[12px] border-b border-[rgba(255,255,255,0.06)]">
            <div className="flex gap-[8px] items-center">
              <div className="size-[12px] rounded-full bg-[rgba(255,255,255,0.15)]" />
              <div className="size-[12px] rounded-full bg-[rgba(255,255,255,0.15)]" />
              <div className="size-[12px] rounded-full bg-[rgba(255,255,255,0.15)]" />
              <span className="ml-[8px] font-['Clash_Grotesk:Regular',sans-serif] text-[13px] text-[rgba(255,255,255,0.3)]">cadence</span>
            </div>
            <button
              onClick={runScript}
              disabled={running}
              className="bg-[#00EF8B] text-black font-['Clash_Grotesk:Medium',sans-serif] text-[14px] px-[20px] py-[8px] rounded-[100px] hover:bg-[#00d47a] transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed flex items-center gap-[8px]"
            >
              {running ? (
                <>
                  <svg className="animate-spin size-[14px]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Running…
                </>
              ) : "▶ Run"}
            </button>
          </div>

          {/* Code textarea */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="bg-[rgba(0,0,0,0.35)] text-[rgba(0,239,139,0.9)] font-mono text-[13px] leading-[1.7] p-[24px] resize-none outline-none w-full min-h-[280px] border-none"
            style={{ caretColor: "#00EF8B" }}
          />

          {/* Arg input */}
          {activeScript.argLabel && (
            <div className="flex items-center gap-[12px] px-[4px]">
              <span className="font-['Clash_Grotesk:Regular',sans-serif] text-[13px] text-[rgba(255,255,255,0.4)] shrink-0">{activeScript.argLabel}:</span>
              <input
                type="text"
                value={argValue}
                onChange={(e) => setArgValue(e.target.value)}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[12px] py-[8px] text-white font-mono text-[13px] flex-1 outline-none focus:border-[rgba(0,239,139,0.4)]"
              />
            </div>
          )}

          {/* Output */}
          {(output !== null || error !== null) && (
            <div className={`rounded-b-[20px] p-[20px] font-mono text-[13px] leading-[1.6] whitespace-pre-wrap break-all ${error ? "bg-[rgba(255,60,60,0.08)] text-[rgba(255,120,120,0.9)] border border-[rgba(255,60,60,0.15)]" : "bg-[rgba(0,0,0,0.35)] text-[rgba(0,239,139,0.85)] border border-[rgba(0,239,139,0.1)]"}`}>
              {error ?? output}
            </div>
          )}
        </div>
      </div>

      <p className="font-['Clash_Grotesk:Regular',sans-serif] text-[18px] text-center">
        <span className="text-[rgba(255,255,255,0.4)]">Powered by</span>
        <span className="text-[#00ef8b]"> Flow Mainnet</span>
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4: Next Gen Tools
   ═══════════════════════════════════════════ */
function ToolCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className={`bg-[#00180e] flex-[1_0_0] min-w-[280px] ${CARD_R} relative`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className={`flex flex-col ${CARD_GAP} items-start ${CARD_P} w-full`}>
          <div className="flex gap-[16px] items-center">
            {icon}
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.17] text-[27px] text-white whitespace-nowrap">{title}</p>
          </div>
          <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.111] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[0.36px]">{description}</p>
          <LearnMoreButton />
        </div>
      </div>
      <div aria-hidden className={`absolute border border-[rgba(0,239,139,0.1)] border-solid inset-0 pointer-events-none ${CARD_R} shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`} />
    </div>
  );
}

function NextGenToolsSection() {
  return (
    <div className={`flex flex-col gap-[64px] items-start ${SECTION_W} ${SECTION_MT}`}>
      <div className={`flex items-end justify-between w-full ${SECTION_X}`}>
        <div className="font-['Clash_Grotesk:Bold',sans-serif] leading-none text-[54px] text-white max-w-[860px]">
          <p className="mb-0">Next Gen Tools</p>
          <p>for Next Gen Products</p>
        </div>
        <div className="flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[100px] relative cursor-pointer hover:bg-white/5 transition-colors">
          <div aria-hidden className="absolute border border-[#00ef8b] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.2] text-[#00ef8b] text-[18px] whitespace-nowrap">View all tools</p>
          <ArrowRight color="#00EF8B" />
        </div>
      </div>
      <div className="flex gap-[16px] items-center w-full">
        <ToolCard
          icon={
            <div className="size-[56px]">
              <svg className="block size-full" fill="none" viewBox="0 0 56 56">
                <rect fill="#00EF8B" fillOpacity="0.1" height="56" rx="12" width="56" />
                <g><path d={svgPaths.p16253640} stroke="#00EF8B" /><path d={svgPaths.pf6e55f0} stroke="#00EF8B" /><path d={svgPaths.p7dffd00} stroke="#00EF8B" /><path d={svgPaths.pbe5e200} stroke="#00EF8B" /></g>
              </svg>
            </div>
          }
          title="React SDK"
          description="Build modern Flow apps with React & @onflow/react-sdk. Access accounts, sign transactions, and integrate Cadence."
        />
        <ToolCard
          icon={
            <div className="bg-[rgba(0,239,139,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p1fb2ff60} stroke="#00EF8B" strokeWidth="1.5" />
                <path d={svgPaths.p1058a000} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
          title="Get 100k testnet $FLOW"
          description="Flow's faucet gives you 100k $FLOW on testnet so you can build, test, and experiment without limits."
        />
        <ToolCard
          icon={
            <div className="bg-[rgba(0,239,139,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p342de680} stroke="#00EF8B" strokeWidth="2" />
                <path d={svgPaths.p32c03000} stroke="#00EF8B" strokeWidth="2" />
                <path d="M8 12V18.6667M13.3333 24H20" stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p26aca580} stroke="#00EF8B" strokeWidth="2" />
              </svg>
            </div>
          }
          title="Build & ship with Flow CLI"
          description="Flow CLI streamlines development — initialize projects, manage contracts, deploy, and interact with the chain from one tool."
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5: Builder Toolkit
   ═══════════════════════════════════════════ */
function BuilderToolkitSection() {
  return (
    <div className={`bg-gradient-to-b from-[rgba(216,164,255,0.1)] to-[rgba(69,52,81,0.1)] ${CARD_R} ${SECTION_W} ${SECTION_MT} ${SECTION_X} py-[64px] flex flex-col gap-[64px] items-center relative`}>
      <div aria-hidden className={`absolute border border-[#d8a4ff] border-solid inset-0 pointer-events-none ${CARD_R}`} />
      <p className="font-['Clash_Grotesk:Bold',sans-serif] leading-none text-[54px] text-center text-white max-w-[1110px]">Your builder toolkit to start, grow, and win</p>
      <div className="flex gap-[40px] items-start w-full">
        {/* Column 1 */}
        <div className="flex-1 relative pr-[40px]">
          <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[rgba(168,85,247,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p5045100} stroke="#D8A4FF" strokeLinecap="round" strokeWidth="2" />
                <path d={svgPaths.p1dd78d80} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p2cee1d00} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p16fb1880} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.17] text-[27px] text-white">Developer supper hub</p>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.111] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[0.36px]">Access builder perks, grants, and VCs and funds. Get comprehensive support including technical guidance, marketing resources, and ecosystem connections.</p>
            <LearnMoreButton />
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex-1 relative pr-[40px]">
          <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[rgba(168,85,247,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p1dee4500} stroke="#D8A4FF" strokeWidth="2" />
                <path d={svgPaths.p3a00fec0} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.17] text-[27px] text-white">Dev Office Hours</p>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.111] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[0.36px]">Join our weekly developer office hours to get direct support from the Flow team and connect with other builders.</p>
            <LearnMoreButton />
          </div>
        </div>
        {/* Column 3 */}
        <div className="flex-1">
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[rgba(168,85,247,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p87f1f00} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p216b700} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p1e0c8180} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p237e3900} stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16 8H12" stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M20 24H16" stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M24 16V12" stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M8 20V16" stroke="#D8A4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.17] text-[27px] text-white">Use your favorite platforms</p>
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.111] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[0.36px]">Connect with other popular blockchain infrastructure platforms to enhance user experience and reduce development complexity.</p>
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6: Browse by Category
   ═══════════════════════════════════════════ */
function BrowseCategoryCard({ icon, title, description, items, color = "#00EF8B", to }: {
  icon: React.ReactNode; title: string; description: string; items: string[]; color?: string; to?: string;
}) {
  return (
    <Link to={to || "/"} className={`bg-[rgba(0,24,14,0.6)] overflow-clip ${CARD_R} shrink-0 w-[422px] ${CARD_P} flex flex-col hover:bg-[rgba(0,40,20,0.6)] transition-colors`}>
      <div className="flex gap-[16px] items-center">
        {icon}
        <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.17] text-[27px] text-white whitespace-nowrap">{title}</p>
      </div>
      <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-[1.111] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[0.36px] mt-[16px]">{description}</p>
      <CategoryList items={items} color={color} />
    </Link>
  );
}

function BrowseByCategorySection() {
  return (
    <div className={`flex flex-col gap-[64px] items-center ${SECTION_W} ${SECTION_MT} pb-[80px]`}>
      <p className="font-['Clash_Grotesk:Bold',sans-serif] leading-none text-[54px] text-white">Browse by category</p>
      <div className="flex flex-wrap gap-[22px] items-start w-full justify-center">
        {/* DeFi */}
        <BrowseCategoryCard
          to="/defi"
          icon={
            <div className="bg-[rgba(0,239,139,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p19da9000} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p3f5aad80} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pd769a80} stroke="#00EF8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p3defa7c0} stroke="#00EF8B" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
          title="DeFi"
          description="Build DEXs, lending, stablecoins and cross-chain swaps on the fastest consumer chain."
          items={["DeFi Contracts Mainnet", "DeFi Contracts Testnet", "Cross-chain Swaps", "Add Token to MetaMask", "Band Oracle", "FAQ"]}
        />
        {/* Tutorials & guides */}
        <BrowseCategoryCard
          to="/tutorials"
          icon={
            <div className="bg-[rgba(59,130,246,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p2f1c5780} stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16 21.3333V15.3333" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16 10.6826V10.6693" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
              </svg>
            </div>
          }
          title="Tutorials & guides"
          description="Step-by-step guides to build, test, and ship on Flow using Cadence and React SDK."
          items={["Use AI To Build On Flow", "Gasless Transactions", "Token Launch", "Cross-VM Apps", "FlowtoBooth", "Native VRF"]}
          color="#00EF8B"
        />
        {/* Cadence */}
        <BrowseCategoryCard
          to="/build"
          icon={
            <div className="bg-[rgba(168,85,247,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p1730bf00} stroke="#A855F7" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          }
          title="Cadence"
          description="Learn the resource-oriented smart contract language built for safety."
          items={["Differences vs. EVM", "Getting Started", "Basics", "Writing and Deploying Smart Contracts", "Advanced Concepts", "Guides", "Core Smart Contracts", "Explore More"]}
          color="#00EF8B"
        />
        {/* EVM */}
        <BrowseCategoryCard
          to="/build"
          icon={
            <div className="bg-[rgba(249,115,22,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p18c7dc80} stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pf07e900} stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p2f1af880} stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p240a6980} stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
          title="EVM"
          description="Deploy Solidity contracts instantly with Flow EVM — no code changes required."
          items={["How it Works", "Using Flow EVM", "Network Information", "Fees", "Accounts", "Cross-chain Bridges", "Faucets", "Block Explorers", "Guides"]}
          color="#00EF8B"
        />
        {/* Tools */}
        <BrowseCategoryCard
          to="/build"
          icon={
            <div className="bg-[rgba(100,116,139,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.pd2bc280} stroke="#64748B" strokeWidth="2" />
                <path d={svgPaths.p306e8a80} stroke="#64748B" strokeLinecap="round" strokeWidth="2" />
                <path d="M7.34528 24.6667H7.33333" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              </svg>
            </div>
          }
          title="Tools"
          description="Flow Emulator, CLI, VS Code extension, Dev Wallet and more."
          items={["Flow Emulator", "Flow CLI", "Cadence VS Code Extension", "Flow Dev Wallet", "Client Tools", "Error Codes", "Wallet Provider Spec", "Tools"]}
          color="#00EF8B"
        />
        {/* Networks */}
        <BrowseCategoryCard
          to="/protocol"
          icon={
            <div className="bg-[rgba(6,182,212,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p7ec7700} stroke="#06B6D4" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p1ba06480} stroke="#06B6D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16 2.66667V8" stroke="#06B6D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p2582c680} stroke="#06B6D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          }
          title="Networks"
          description="Mainnet, Testnet, architecture, staking, governance and node operations."
          items={["Mainnet", "Testnet", "Network Architecture", "Staking and Epochs", "Node Ops", "Accessing Data", "Governance", "Flow Port"]}
          color="#00EF8B"
        />
        {/* Ecosystem */}
        <BrowseCategoryCard
          to="/ecosystem"
          icon={
            <div className="bg-[rgba(236,72,153,0.1)] flex items-center justify-center p-[8px] rounded-[12px] size-[56px]">
              <svg className="block size-[32px]" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p3f67f8e0} stroke="#EC4899" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p4815050} stroke="#EC4899" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M15.3333 8H16.6667" stroke="#EC4899" strokeLinecap="round" strokeWidth="1.5" />
                <path d={svgPaths.p13e91080} stroke="#EC4899" strokeLinecap="round" strokeWidth="1.5" />
                <path d={svgPaths.p2ee3ab00} stroke="#EC4899" strokeLinecap="round" strokeWidth="1.5" />
                <path d={svgPaths.pe165204} stroke="#EC4899" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
          title="Ecosystem"
          description="Wallets, explorers, bridges, grants, hackathons and community projects."
          items={["Wallets", "Flow Block Explorers", "Data Indexers", "Developer Profile", "Bridges", "Community Projects", "Builder Perks", "VCs & Funds", "Faucets", "Grants", "Hackathons and Events", "Auditors"]}
          color="#00EF8B"
        />
        {/* Case Studies CTA */}
        <div className={`flex-1 min-w-[400px] h-[228px] ${CARD_R} relative flex items-center ${CARD_P}`}>
          <div aria-hidden className={`absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none ${CARD_R} shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`} />
          <div className="flex flex-col gap-[24px] flex-1">
            <p className="font-['Clash_Grotesk:Regular',sans-serif] leading-none text-[36px] text-white">Deploy your ideas amongst 8,000 other smart contracts built by developers just like you.</p>
            <LearnMoreButton label="Read case studies" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════ */
export function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeatureCardsSection />
      <TryCadenceSection />
      <NextGenToolsSection />
      <BuilderToolkitSection />
      <BrowseByCategorySection />
    </div>
  );
}
