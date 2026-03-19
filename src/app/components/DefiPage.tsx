import { useState } from "react";
import { Link } from "react-router";
import {
  ExternalLink,
  ChevronDown,
  BookOpen,
  ArrowLeftRight,
  HelpCircle,
} from "lucide-react";
import { DocLayout } from "./DocLayout";
import { defiSidebar } from "./docs/sidebars";

const TOC_ITEMS = [
  { title: "Why DeFi on Flow?", href: "#why-defi" },
  { title: "Build with Forte", href: "#forte" },
  { title: "DeFi Partners", href: "#partners" },
  { title: "Kittypunch", href: "#partners", indent: true },
  { title: "Trado.one", href: "#partners", indent: true },
  { title: "Increment.fi", href: "#partners", indent: true },
  { title: "More.Markets", href: "#partners", indent: true },
  { title: "Sturdy.Finance", href: "#partners", indent: true },
  { title: "Ankr", href: "#partners", indent: true },
  { title: "Sudocat", href: "#partners", indent: true },
  { title: "Hitdex", href: "#partners", indent: true },
  { title: "Rally", href: "#partners", indent: true },
  { title: "Hype.meme", href: "#partners", indent: true },
  { title: "Vaultopolis", href: "#partners", indent: true },
  { title: "Izumi.finance", href: "#partners", indent: true },
  { title: "Bridged USDC", href: "#partners", indent: true },
  { title: "USDF", href: "#partners", indent: true },
  { title: "Pumpflow", href: "#partners", indent: true },
  { title: "Fixes.world", href: "#partners", indent: true },
  { title: "Tally", href: "#partners", indent: true },
  { title: "Securing DeFi on Flow EVM", href: "#security" },
];

const DEFI_PARTNERS = [
  { name: "Kittypunch", desc: "Kittypunch is a next-generation decentralized exchange on Flow offering high-speed, low-cost token swaps and an intuitive trading experience.", url: "https://www.kittypunch.xyz/", docs: "https://kittypunch.gitbook.io/kittypunch-docs", tag: null },
  { name: "Trado.one", desc: "Trado.one is a permissionless decentralized exchange that enables seamless token swaps on Flow.", url: "https://www.trado.one/", docs: "https://docs-perp.trado.one/", tag: null },
  { name: "Increment.fi", desc: "Increment.fi is a composable DeFi platform on Flow offering lending, borrowing, staking, and exchange functionalities.", url: "https://app.increment.fi/", docs: "https://docs.increment.fi/", tag: null },
  { name: "More.Markets", desc: "More.Markets provides decentralized lending and borrowing on Flow with dynamic interest rates.", url: "https://www.more.markets/", docs: "https://docs.more.markets/", tag: null },
  { name: "Sturdy.Finance", desc: "Sturdy.Finance facilitates interest-free borrowing using yield-bearing assets on Flow.", url: "https://sturdy.finance/", docs: "https://docs.sturdy.finance/", tag: null },
  { name: "Ankr", desc: "Ankr brings liquid staking to Flow, allowing users to stake FLOW tokens and receive liquid derivatives.", url: "https://www.ankr.com/", docs: "https://www.ankr.com/docs/", tag: "Liquid Staking" },
  { name: "Sudocat", desc: "Sudocat offers a decentralized trading dashboard built for Flow with analytics and portfolio tracking.", url: "https://www.sudocat.ai/", docs: "https://docs.sudocat.ai/", tag: null },
  { name: "Hitdex", desc: "Hitdex is a trading app native to Flow optimized for speed and low fees.", url: "https://www.hitdex.com/", docs: null, tag: null },
  { name: "Rally", desc: "Rally is your wallet, made social. Innovative social trading features on Flow.", url: "https://rally.xyz/", docs: null, tag: null },
  { name: "Hype.meme", desc: "Hype.meme is a platform to trade memes, now live on the App Store.", url: "https://hype.meme/", docs: null, tag: null },
  { name: "Vaultopolis", desc: "Vaultopolis tokenizes Top Shot Moments into TSHOT for trading and yield.", url: "https://vaultopolis.com/", docs: null, tag: null },
  { name: "Izumi.finance", desc: "Izumi.finance provides one-stop DEX-as-a-Service solutions on Flow.", url: "https://izumi.finance/", docs: null, tag: null },
  { name: "Bridged USDC", desc: "Bridged USDC provides stable liquidity within the Flow ecosystem.", url: "https://bridge.flow.com/", docs: null, tag: null },
  { name: "USDF", desc: "USDF is a blockchain-backed bank token for payments on Flow.", url: null, docs: null, tag: null },
  { name: "Pumpflow", desc: "Launch and verify meme tokens in seconds on Flow.", url: "https://www.pumpflow.meme/", docs: null, tag: null },
  { name: "Fixes.world", desc: "An autonomous programmable token universe on Flow.", url: "https://fixes.world/", docs: null, tag: null },
  { name: "Tally", desc: "Advanced credit line system to help you save.", url: "https://www.tally.xyz/", docs: null, tag: null },
];

const FAQ_ITEMS = [
  { q: "Does Flow use ETH for gas?", a: "No, Flow uses $FLOW as the gas token. WETH is supported on Flow EVM when bridging from another chain. $WFLOW is used as an ERC20 in DeFi apps and not used for gas." },
  { q: "How do I pay for gas when bridging into Flow?", a: "When using Flow EVM for the first time, your EOA will automatically be credited 0.05 FLOW to cover gas costs. If further top-ups are required you can use Gas.zip. Flow Wallet users do not pay for gas since the wallet subsidizes all transaction fees." },
  { q: "What stablecoins are available on Flow?", a: "USDC (USD Coin) issued by Circle, USDT (Tether USD) issued by Tether, and PYUSD0 — backed 1:1 by PYUSD (PayPal USD), deployed via LayerZero's Asset0 program." },
  { q: "Where can I trade stablecoins on Flow?", a: "Stablecoins can be traded on major Flow-based DEXs like KittyPunch/PunchSwap and IncrementFi/IncrementSwap." },
  { q: "How can I earn yield on stablecoins on Flow?", a: "Through lending platforms (IncrementFi, Sturdy Finance, MoreMarkets) or liquidity pools on IncrementFi and KittyPunch." },
  { q: "How can I bridge stablecoins to and from Flow?", a: "Bridge USDC, USDT, and more via bridge.flow.com or stargate.finance/bridge." },
  { q: "What are the fees for using stablecoins on Flow?", a: "Flow's transaction fees are extremely low (typically less than $0.000179 per transaction). Many apps sponsor gas fees." },
  { q: "What is Stargate?", a: "Stargate is a liquidity transfer protocol built on LayerZero for cross-chain bridging with deep liquidity." },
  { q: "Is bridging via Stargate safe?", a: "Stargate is built on LayerZero, a well-audited and widely used interoperability protocol." },
];

export function DefiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllPartners, setShowAllPartners] = useState(false);

  const visiblePartners = showAllPartners ? DEFI_PARTNERS : DEFI_PARTNERS.slice(0, 8);

  return (
    <DocLayout
      breadcrumbs={[{ label: "DeFi" }]}
      sidebar={defiSidebar}
      toc={TOC_ITEMS}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">DeFi on Flow</h1>

      <p className="text-white/70 text-[16px] leading-[1.75] mb-6">
        <span className="text-white">Fast, scalable, and capital-efficient DeFi.</span> Flow delivers a seamless DeFi experience without congestion, unlocking new possibilities for developers and users alike.
      </p>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Flow is a purpose-built L1 blockchain designed for large-scale consumer finance applications and automated DeFi. It enables developers to build high-performance <strong className="text-white">DEXs, lending platforms, stablecoin protocols, and liquidity solutions</strong>—all without the friction of high fees or complex scaling layers.
      </p>

      <h2 id="why-defi" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Why DeFi on Flow?
      </h2>
      <div className="space-y-2 mb-6">
        {[
          ["Ultra-low fees", "Cost-efficient swaps, lending, and staking"],
          ["Fast finality", "Transactions confirmed in seconds with guaranteed execution"],
          ["MEV resistance", "Equitable access without frontrunning or hidden fees"],
          ["Capital-efficient execution", "No congestion, seamless scaling"],
          ["Composable DeFi", "Built-in interoperability between assets and protocols"],
          ["Automated execution", "Native scheduling and autonomous workflows with Forte"],
        ].map(([title, desc]) => (
          <p key={title} className="text-[15px] text-white/70 leading-[1.75]">
            <strong className="text-white">{title}</strong> — {desc}
          </p>
        ))}
      </div>

      <p className="text-white text-[15px] mb-4">Start integrating DeFi on Flow today.</p>
      <div className="flex flex-col gap-1 mb-4">
        <Link to="/defi/contracts-mainnet" className="text-[#00EF8B] text-[15px] hover:underline flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" /> DeFi Contracts
        </Link>
        <Link to="/defi/cross-chain-swaps" className="text-[#00EF8B] text-[15px] hover:underline flex items-center gap-1">
          <ArrowLeftRight className="w-3.5 h-3.5" /> Cross-chain swaps
        </Link>
        <Link to="/defi/faq" className="text-[#00EF8B] text-[15px] hover:underline flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5" /> Read the FAQ
        </Link>
      </div>
      <p className="text-white/50 text-[15px] mb-10 leading-[1.75]">
        Explore the{" "}
        <a href="https://www.flowverse.co/?categories=defi" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">
          FlowVerse DeFi ecosystem
        </a>{" "}
        page for more information.
      </p>

      <h2 id="forte" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Build with Forte
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        The <strong className="text-white">Forte network upgrade</strong> transforms Flow into an autonomous, intelligent network capable of executing complex DeFi workflows without external dependencies.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Flow Actions</strong> enable protocol-native, composable operations that link together standardized DeFi primitives into atomic, protocol-agnostic workflows.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Scheduled Transactions</strong> introduce the first truly onchain time scheduler, enabling recurring actions and autonomous portfolio management without external cron jobs.
      </p>
      <p className="text-white/50 text-[15px] leading-[1.75] mb-10">
        Learn more in the <Link to="/defi/forte" className="text-[#00EF8B] hover:underline">Build with Forte</Link> guide, or see{" "}
        <Link to="/tutorials/flow-actions" className="text-[#00EF8B] hover:underline">Flow Actions</Link> and{" "}
        <Link to="/tutorials/scheduled-transactions" className="text-[#00EF8B] hover:underline">Scheduled Transactions</Link> tutorials.
      </p>

      <h2 id="partners" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        DeFi Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {visiblePartners.map((partner) => (
          <div key={partner.name} className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors">
            <h3 className="text-[16px] text-white mb-1">{partner.name}</h3>
            {partner.tag && <p className="text-white/30 text-[12px] mb-2">Tags: {partner.tag}</p>}
            <p className="text-white/50 text-[13px] leading-[1.7] mb-3">{partner.desc}</p>
            <div className="flex items-center gap-3">
              {partner.url && (
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#00EF8B]/70 hover:text-[#00EF8B] transition-colors flex items-center gap-1">
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {partner.docs && (
                <a href={partner.docs} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/30 hover:text-white/50 transition-colors flex items-center gap-1">
                  Docs <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {DEFI_PARTNERS.length > 8 && (
        <button
          onClick={() => setShowAllPartners(!showAllPartners)}
          className="mb-10 flex items-center gap-2 text-[14px] text-white/40 hover:text-white/70 transition-colors mx-auto cursor-pointer"
        >
          {showAllPartners ? "Show less" : `Show all ${DEFI_PARTNERS.length} partners`}
          <ChevronDown className={`w-4 h-4 transition-transform ${showAllPartners ? "rotate-180" : ""}`} />
        </button>
      )}

      <h2 id="security" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Securing DeFi on Flow EVM
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow EVM supports secure multi-sig from Safe.Global (formerly Gnosis Safe) or Fireblocks for institutional-grade security.
      </p>
      <ul className="list-disc list-inside text-[15px] text-white/70 space-y-1 mb-10">
        <li><a href="https://safe.flow.com/" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">Safe.Global</a></li>
        <li><a href="https://www.fireblocks.com/" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">Fireblocks</a></li>
      </ul>

      <h2 id="faq" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Stablecoins & Bridges FAQ
      </h2>
      <div className="flex flex-col gap-2 mb-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="rounded-xl border border-white/[0.06] bg-[#00180E] overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
            >
              <span className="text-white/80 text-[15px] pr-4">{item.q}</span>
              <ChevronDown className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && (
              <div className="px-5 pb-4">
                <p className="text-white/40 text-[14px] leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-white/50 text-[14px]">
        See the full <Link to="/defi/faq" className="text-[#00EF8B] hover:underline">FAQ page</Link> for more questions.
      </p>
    </DocLayout>
  );
}