import { DocLayout } from "../DocLayout";
import { ecosystemSidebar } from "./sidebars";
import { ExternalLink } from "lucide-react";

export function EcosystemPage() {
  return (
    <DocLayout
      breadcrumbs={[{ label: "Ecosystem" }]}
      sidebar={ecosystemSidebar}
      toc={[
        { title: "Overview", href: "#overview" },
        { title: "Wallets", href: "#wallets" },
        { title: "Block Explorers", href: "#explorers" },
        { title: "Bridges", href: "#bridges" },
        { title: "Oracles", href: "#oracles" },
        { title: "Faucets", href: "#faucets" },
        { title: "Community", href: "#community" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Flow Ecosystem</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Everything you need to build, deploy, and interact with applications on Flow. From wallets and block explorers to bridges and oracles — the Flow ecosystem provides comprehensive infrastructure for developers and users.
      </p>

      <h2 id="wallets" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Wallets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { name: "Flow Wallet", desc: "The official Flow wallet with built-in support for both Cadence and EVM accounts, NFT gallery, staking, and dApp browser. Available on iOS, Android, and Chrome extension.", url: "https://wallet.flow.com", tags: ["Official", "Mobile", "Extension"] },
          { name: "MetaMask", desc: "Connect MetaMask to Flow EVM using the Flow EVM RPC endpoint. Use your existing MetaMask wallet to interact with Flow EVM dApps.", url: "https://metamask.io", tags: ["EVM", "Extension"] },
          { name: "Ledger", desc: "Hardware wallet support for Flow. Secure your FLOW tokens and manage your account with Ledger Nano S and Nano X.", url: "https://www.ledger.com", tags: ["Hardware"] },
          { name: "Blocto", desc: "Cross-chain smart contract wallet with email login. Supports Flow native accounts with account abstraction and social recovery.", url: "https://blocto.io", tags: ["Smart Wallet", "Mobile"] },
        ].map((w) => (
          <div key={w.name} className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[16px] text-white">{w.name}</h3>
              {w.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/[0.05] text-white/40">{tag}</span>
              ))}
            </div>
            <p className="text-white/50 text-[13px] leading-[1.7] mb-3">{w.desc}</p>
            <a href={w.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#00EF8B]/70 hover:text-[#00EF8B] flex items-center gap-1">
              Visit <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>

      <h2 id="explorers" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Block Explorers
      </h2>
      <div className="space-y-3 mb-10">
        {[
          { name: "Flowscan", desc: "The primary block explorer for Flow. View transactions, accounts, contracts, and tokens across both Cadence and EVM environments.", url: "https://www.flowscan.io" },
          { name: "Flow View", desc: "Account explorer and contract browser for Flow. Inspect account storage, view deployed contracts, and explore on-chain data.", url: "https://www.flowview.app" },
          { name: "EVM Block Explorer", desc: "Blockscout-based explorer for Flow EVM. View EVM transactions, token transfers, and contract verification.", url: "https://evm.flowscan.io" },
          { name: "ContractBrowser", desc: "Search and browse all deployed Cadence contracts on Flow. View source code, dependencies, and contract history.", url: "https://contractbrowser.com" },
        ].map((e) => (
          <a key={e.name} href={e.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors">
            <div>
              <h3 className="text-[15px] text-white">{e.name}</h3>
              <p className="text-white/40 text-[12px]">{e.desc}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-white/20 shrink-0 ml-4" />
          </a>
        ))}
      </div>

      <h2 id="bridges" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Bridges
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Bridge assets between Flow and other blockchains. Flow supports multiple bridging solutions for transferring tokens, stablecoins, and NFTs.
      </p>
      <div className="space-y-3 mb-10">
        {[
          { name: "Flow Bridge", desc: "The official Flow bridge for transferring assets between Flow EVM and other chains. Supports USDC, USDT, ETH, and more.", url: "https://bridge.flow.com" },
          { name: "Stargate", desc: "Cross-chain liquidity transfer protocol built on LayerZero. Bridge USDC, USDT, and ETH to Flow with deep liquidity and minimal slippage.", url: "https://stargate.finance" },
          { name: "LayerZero", desc: "Omnichain interoperability protocol enabling seamless cross-chain messaging and token transfers.", url: "https://layerzero.network" },
          { name: "Axelar", desc: "Secure cross-chain communication protocol supporting token transfers and general message passing.", url: "https://axelar.network" },
        ].map((b) => (
          <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors">
            <div>
              <h3 className="text-[15px] text-white">{b.name}</h3>
              <p className="text-white/40 text-[12px]">{b.desc}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-white/20 shrink-0 ml-4" />
          </a>
        ))}
      </div>

      <h2 id="oracles" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Oracles
      </h2>
      <div className="space-y-3 mb-10">
        {[
          { name: "Band Protocol", desc: "Cross-chain data oracle that provides reliable real-world data for smart contracts on Flow.", url: "https://bandprotocol.com" },
          { name: "Pyth Network", desc: "High-fidelity financial data oracle delivering low-latency price feeds for DeFi applications.", url: "https://pyth.network" },
        ].map((o) => (
          <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors">
            <div>
              <h3 className="text-[15px] text-white">{o.name}</h3>
              <p className="text-white/40 text-[12px]">{o.desc}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-white/20 shrink-0 ml-4" />
          </a>
        ))}
      </div>

      <h2 id="faucets" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Faucets
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Get testnet FLOW tokens for development and testing. The <strong className="text-white">Flow Faucet</strong> provides up to 1,000 testnet FLOW tokens and can also create new testnet accounts.
      </p>
      <a
        href="https://testnet-faucet.onflow.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00EF8B]/10 text-[#00EF8B] text-[14px] hover:bg-[#00EF8B]/15 transition-colors mb-10"
      >
        Flow Testnet Faucet <ExternalLink className="w-3.5 h-3.5" />
      </a>

      <h2 id="community" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Community
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Join the Flow community to connect with other developers, get help, and stay updated.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Discord", desc: "Join the Flow Discord for real-time chat, developer support, and community events.", url: "https://discord.gg/flow" },
          { name: "Forum", desc: "Long-form discussions, proposals, and governance on the Flow community forum.", url: "https://forum.flow.com" },
          { name: "GitHub", desc: "Explore Flow's open-source repositories, contribute code, and report issues.", url: "https://github.com/onflow" },
        ].map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block">
            <h3 className="text-[15px] text-white mb-1">{c.name}</h3>
            <p className="text-white/40 text-[12px] leading-[1.7]">{c.desc}</p>
          </a>
        ))}
      </div>
    </DocLayout>
  );
}