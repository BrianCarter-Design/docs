import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { ExternalLink } from "lucide-react";

export function CrossChainSwapsPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Cross-chain Swaps" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "Overview", href: "#overview" },
        { title: "Stargate Bridge", href: "#stargate" },
        { title: "Flow Bridge", href: "#flow-bridge" },
        { title: "LayerZero", href: "#layerzero" },
        { title: "Supported Assets", href: "#assets" },
        { title: "Step-by-Step Guide", href: "#guide" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Cross-chain Swaps on Flow EVM</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Bridge and swap assets between Flow EVM and other chains including Ethereum, Arbitrum, Optimism, Base, Polygon, Avalanche, and more. Multiple bridge solutions are available depending on your needs.
      </p>

      <h2 id="overview" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Overview
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow EVM supports multiple cross-chain bridging solutions. Each bridge has different characteristics regarding speed, supported assets, fees, and security model. Choose the one that best fits your use case.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { name: "Stargate", time: "~2-5 min", fee: "Low", security: "LayerZero DVN" },
          { name: "Flow Bridge", time: "~5-15 min", fee: "Very Low", security: "Native validators" },
          { name: "LayerZero OFT", time: "~2-5 min", fee: "Low", security: "DVN network" },
        ].map((b) => (
          <div key={b.name} className="p-4 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <h3 className="text-[15px] text-white mb-3">{b.name}</h3>
            <div className="space-y-1 text-[12px]">
              <p><span className="text-white/30">Time:</span> <span className="text-white/60">{b.time}</span></p>
              <p><span className="text-white/30">Fee:</span> <span className="text-white/60">{b.fee}</span></p>
              <p><span className="text-white/30">Security:</span> <span className="text-white/60">{b.security}</span></p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="stargate" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Stargate Bridge
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Stargate</strong> is a liquidity transfer protocol built on <strong className="text-white">LayerZero</strong>. It enables native asset bridging between Flow EVM and 20+ supported chains with deep liquidity pools and minimal slippage.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Stargate supports bridging <strong className="text-white">USDC</strong>, <strong className="text-white">USDT</strong>, and <strong className="text-white">ETH</strong> to and from Flow EVM. Transfers typically complete in 2-5 minutes.
      </p>
      <a href="https://stargate.finance/bridge" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00EF8B]/10 text-[#00EF8B] text-[14px] hover:bg-[#00EF8B]/15 transition-colors mb-10">
        Open Stargate <ExternalLink className="w-3.5 h-3.5" />
      </a>

      <h2 id="flow-bridge" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Flow Bridge
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        The official <strong className="text-white">Flow Bridge</strong> at <a href="https://bridge.flow.com" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">bridge.flow.com</a> supports bridging assets between Ethereum and Flow EVM. It provides a straightforward interface for transferring USDC, USDT, WETH, and other supported tokens.
      </p>

      <h2 id="layerzero" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        LayerZero OFT
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">LayerZero's OFT (Omnichain Fungible Token)</strong> standard enables tokens to be natively transferred across chains. Tokens like PYUSD (via the Asset0 program) use OFT to maintain 1:1 backing across all supported chains.
      </p>
      <p className="text-white/50 text-[15px] leading-[1.75] mb-10">
        Developers can deploy their own OFT tokens to enable cross-chain transfers for their projects using the <a href="https://docs.layerzero.network/v2/developers/evm/oft/quickstart" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">LayerZero OFT Quickstart</a>.
      </p>

      <h2 id="assets" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Supported Assets
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left py-3 px-3 text-white/40">Asset</th>
              <th className="text-left py-3 px-3 text-white/40">Stargate</th>
              <th className="text-left py-3 px-3 text-white/40">Flow Bridge</th>
              <th className="text-left py-3 px-3 text-white/40">LayerZero OFT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { asset: "USDC", stargate: true, flow: true, lz: false },
              { asset: "USDT", stargate: true, flow: true, lz: false },
              { asset: "ETH / WETH", stargate: true, flow: true, lz: false },
              { asset: "PYUSD", stargate: false, flow: false, lz: true },
              { asset: "FLOW", stargate: false, flow: true, lz: false },
            ].map((row) => (
              <tr key={row.asset} className="border-b border-white/[0.04]">
                <td className="py-3 px-3 text-white font-mono">{row.asset}</td>
                <td className="py-3 px-3">{row.stargate ? <span className="text-[#00EF8B]">Yes</span> : <span className="text-white/20">—</span>}</td>
                <td className="py-3 px-3">{row.flow ? <span className="text-[#00EF8B]">Yes</span> : <span className="text-white/20">—</span>}</td>
                <td className="py-3 px-3">{row.lz ? <span className="text-[#00EF8B]">Yes</span> : <span className="text-white/20">—</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="guide" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Step-by-Step Guide
      </h2>
      <div className="space-y-4 mb-4">
        {[
          { step: 1, title: "Connect your wallet", desc: "Connect MetaMask or another EVM wallet to the bridge interface. Ensure you're on the source chain (e.g., Ethereum Mainnet)." },
          { step: 2, title: "Select source and destination", desc: "Choose your source chain and select Flow as the destination chain. Flow EVM Chain ID is 747." },
          { step: 3, title: "Choose asset and amount", desc: "Select the token you want to bridge and enter the amount. Review the estimated fees and receive amount." },
          { step: 4, title: "Approve and bridge", desc: "Approve the token spend (first time only), then confirm the bridge transaction. Sign the transaction in your wallet." },
          { step: 5, title: "Wait for completion", desc: "The bridge transfer typically takes 2-15 minutes depending on the bridge and source chain. You'll receive tokens on Flow EVM once confirmed." },
        ].map((s) => (
          <div key={s.step} className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-[#00EF8B]/10 text-[#00EF8B] flex items-center justify-center shrink-0 text-[14px]">{s.step}</div>
            <div>
              <h3 className="text-[15px] text-white mb-1">{s.title}</h3>
              <p className="text-white/50 text-[13px] leading-[1.7]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DocLayout>
  );
}