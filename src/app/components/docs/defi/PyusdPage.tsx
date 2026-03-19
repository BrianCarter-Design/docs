import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { ExternalLink } from "lucide-react";

export function PyusdPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "PYUSD Integration" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "What is PYUSD?", href: "#what" },
        { title: "PYUSD on Flow", href: "#flow" },
        { title: "Contract Details", href: "#contract" },
        { title: "Integration Guide", href: "#integration" },
        { title: "LayerZero Asset0", href: "#asset0" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">PYUSD Integration</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        <strong className="text-white">PYUSD</strong> (PayPal USD) is available on Flow EVM via LayerZero's Asset0 program. PYUSD0 is backed 1:1 by PYUSD and can be used across DeFi protocols on Flow.
      </p>

      <h2 id="what" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        What is PYUSD?
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">PayPal USD (PYUSD)</strong> is a US dollar-denominated stablecoin issued by PayPal, fully backed by U.S. dollar deposits, U.S. Treasuries, and similar cash equivalents. It is designed to reduce friction for in-experience payments, transfers, and DeFi usage.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        On Flow, PYUSD is available as <strong className="text-white">PYUSD0</strong> — an OFT (Omnichain Fungible Token) deployed via LayerZero's Asset0 program, maintaining a 1:1 backing with the canonical PYUSD on Ethereum.
      </p>

      <h2 id="flow" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        PYUSD on Flow
      </h2>
      <div className="space-y-2 mb-10">
        {[
          ["Low-cost transfers", "Send PYUSD0 for less than $0.001 per transaction"],
          ["Fast finality", "Transactions confirmed in seconds on Flow"],
          ["DeFi composability", "Use PYUSD0 in DEXs, lending protocols, and liquidity pools"],
          ["Cross-chain", "Bridge PYUSD0 to and from any LayerZero-supported chain"],
        ].map(([title, desc]) => (
          <p key={title} className="text-[15px] text-white/70 leading-[1.75]">
            <strong className="text-white">{title}</strong> — {desc}
          </p>
        ))}
      </div>

      <h2 id="contract" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Contract Details
      </h2>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-10">
        <div className="space-y-2 text-[13px] font-mono">
          <p><span className="text-white/30">Token:</span> <span className="text-white/70">PYUSD0</span></p>
          <p><span className="text-white/30">Standard:</span> <span className="text-white/70">ERC-20 (OFT)</span></p>
          <p><span className="text-white/30">Chain:</span> <span className="text-white/70">Flow EVM (Chain ID: 747)</span></p>
          <p><span className="text-white/30">Address:</span> <span className="text-[#00EF8B]">0x1c7b1FdE1Be946F9d62e9c278e3D1C9c31F0C21E</span></p>
          <p><span className="text-white/30">Decimals:</span> <span className="text-white/70">6</span></p>
          <p><span className="text-white/30">Backing:</span> <span className="text-white/70">1:1 with PYUSD on Ethereum</span></p>
        </div>
      </div>

      <h2 id="integration" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Integration Guide
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        PYUSD0 is a standard ERC-20 token and can be integrated like any other ERC-20 on Flow EVM. Use the standard ERC-20 ABI with the contract address above.
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-4">
        <pre className="text-[13px] text-[#00EF8B]/80 font-mono leading-relaxed overflow-x-auto">
{`import { ethers } from "ethers";

const PYUSD_ADDRESS = "0x1c7b1FdE1Be946F9d62e9c278e3D1C9c31F0C21E";
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
];

const provider = new ethers.JsonRpcProvider(
  "https://mainnet.evm.nodes.onflow.org"
);
const pyusd = new ethers.Contract(PYUSD_ADDRESS, ERC20_ABI, provider);

// Check balance (6 decimals)
const balance = await pyusd.balanceOf(userAddress);
console.log("PYUSD0 Balance:", ethers.formatUnits(balance, 6));`}
        </pre>
      </div>

      <h2 id="asset0" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        LayerZero Asset0 Program
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Asset0</strong> is LayerZero's canonical asset program that enables stablecoins to be natively available across multiple chains while maintaining 1:1 backing. PYUSD0 on Flow is deployed through this program, ensuring that every PYUSD0 token is backed by a locked PYUSD on Ethereum.
      </p>
      <a href="https://docs.layerzero.network/v2/developers/evm/oft/quickstart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00EF8B]/10 text-[#00EF8B] text-[14px] hover:bg-[#00EF8B]/15 transition-colors">
        LayerZero OFT Documentation <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </DocLayout>
  );
}