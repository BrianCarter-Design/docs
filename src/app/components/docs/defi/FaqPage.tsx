import { useState } from "react";
import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { ChevronDown } from "lucide-react";

const FAQ_SECTIONS = [
  {
    title: "General",
    items: [
      { q: "Does Flow use ETH for gas?", a: "No, Flow uses $FLOW as the gas token. WETH is supported on Flow EVM when bridging from another chain. $WFLOW is used as an ERC20 in DeFi apps and not used for gas." },
      { q: "How do I pay for gas when bridging into Flow?", a: "When using Flow EVM for the first time, your EOA will automatically be credited 0.05 FLOW to cover gas costs. If further top-ups are required you can use Gas.zip. Flow Wallet users do not pay for gas since the wallet subsidizes all transaction fees." },
      { q: "What are the fees for using stablecoins on Flow?", a: "Flow's transaction fees are extremely low (typically less than $0.000179 per transaction). In many cases, Flow Wallet or Flow-based apps sponsor the gas fees, meaning users can transact stablecoins with zero cost." },
    ],
  },
  {
    title: "Stablecoins",
    items: [
      { q: "What stablecoins are available on Flow?", a: "USDC (USD Coin) issued by Circle, USDT (Tether USD) issued by Tether, and PYUSD0 — backed 1:1 by PYUSD (PayPal USD), deployed via LayerZero's Asset0 program." },
      { q: "Where can I trade stablecoins on Flow?", a: "Stablecoins can be traded on major Flow-based DEXs like KittyPunch/PunchSwap (swap.kittypunch.xyz) and IncrementFi/IncrementSwap (app.increment.fi/swap)." },
      { q: "How can I earn yield on stablecoins on Flow?", a: "Through lending platforms (IncrementFi, Sturdy Finance, MoreMarkets) or liquidity pools on IncrementFi and KittyPunch to earn trading fees and farm LP tokens." },
    ],
  },
  {
    title: "Bridges",
    items: [
      { q: "How can I bridge stablecoins to and from Flow?", a: "Bridge USDC, USDT, and more via bridge.flow.com or stargate.finance/bridge. Select your source chain, choose Flow as destination, enter amount, approve, and wait a few minutes." },
      { q: "What is Stargate?", a: "Stargate is a liquidity transfer protocol built on LayerZero that allows users to bridge assets across multiple blockchains with minimal slippage and deep liquidity. It supports bridging USDC, USDT, and ETH between Flow and other chains." },
      { q: "Is bridging via Stargate safe?", a: "Stargate is built on LayerZero, a well-audited and widely used interoperability protocol. It's secure, trusted, efficient, and cost-effective — especially on Flow." },
      { q: "What chains can I bridge from?", a: "You can bridge assets from Ethereum, Arbitrum, Optimism, Base, Polygon, Avalanche, BNB Chain, and many more chains supported by Stargate and LayerZero." },
      { q: "How long does bridging take?", a: "Bridging via Stargate typically takes 2-5 minutes. The Flow Bridge may take 5-15 minutes depending on the source chain's finality time." },
    ],
  },
  {
    title: "Security",
    items: [
      { q: "Is DeFi on Flow safe?", a: "Flow EVM supports secure multi-sig from Safe.Global (formerly Gnosis Safe) and Fireblocks for institutional-grade security. All DeFi protocols on Flow benefit from the network's MEV resistance and equitable transaction ordering." },
      { q: "Has Flow EVM been audited?", a: "Yes, Flow EVM has been audited by multiple independent security firms. The core protocol undergoes regular security reviews, and individual DeFi protocols maintain their own audit histories." },
    ],
  },
];

export function FaqPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Stablecoins & Bridges FAQ" },
      ]}
      sidebar={defiSidebar}
      toc={FAQ_SECTIONS.map((s) => ({ title: s.title, href: `#${s.title.toLowerCase()}` }))}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Stablecoins & Bridges FAQ</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Frequently asked questions about stablecoins, bridges, gas fees, and DeFi on Flow.
      </p>

      {FAQ_SECTIONS.map((section) => (
        <div key={section.title}>
          <h2 id={section.title.toLowerCase()} className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
            {section.title}
          </h2>
          <div className="flex flex-col gap-2 mb-10">
            {section.items.map((item, i) => {
              const key = `${section.title}-${i}`;
              return (
                <div key={key} className="rounded-xl border border-white/[0.06] bg-[#00180E] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === key ? null : key)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                  >
                    <span className="text-white/80 text-[15px] pr-4">{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${openFaq === key ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === key && (
                    <div className="px-5 pb-4">
                      <p className="text-white/40 text-[14px] leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </DocLayout>
  );
}