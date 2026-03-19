import { DocLayout } from "../DocLayout";
import { buildSidebar } from "./sidebars";
import { Link } from "react-router";

export function BuildPage() {
  return (
    <DocLayout
      breadcrumbs={[{ label: "Build" }]}
      sidebar={buildSidebar}
      toc={[
        { title: "Why Build on Flow?", href: "#why" },
        { title: "Development Paths", href: "#paths" },
        { title: "Cadence Development", href: "#cadence" },
        { title: "EVM Development", href: "#evm" },
        { title: "Developer Tools", href: "#tools" },
        { title: "SDKs & Libraries", href: "#sdks" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Build on Flow</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-6">
        Flow is a fast, decentralized, and developer-friendly blockchain designed as the foundation for a new generation of games, apps, and the digital assets that power them. Whether you're building with <strong className="text-white">Cadence</strong> or <strong className="text-white">Solidity on Flow EVM</strong>, you'll find everything you need here.
      </p>

      <h2 id="why" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Why Build on Flow?
      </h2>
      <div className="space-y-2 mb-10">
        {[
          ["Resource-oriented programming", "Cadence's unique resource model makes it impossible to accidentally duplicate or lose digital assets"],
          ["EVM compatibility", "Deploy Solidity contracts directly to Flow EVM with full EVM equivalence"],
          ["Low fees", "Transaction costs under $0.001 with no gas spikes or congestion"],
          ["Consumer-scale", "Built for millions of users from day one — no L2 complexity"],
          ["Developer experience", "Comprehensive tooling, playground, and CLI for rapid development"],
        ].map(([title, desc]) => (
          <p key={title} className="text-[15px] text-white/70 leading-[1.75]">
            <strong className="text-white">{title}</strong> — {desc}
          </p>
        ))}
      </div>

      <h2 id="paths" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Development Paths
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Link to="/build/cadence" className="p-5 rounded-xl border border-[#00EF8B]/20 bg-[#00EF8B]/[0.03] hover:bg-[#00EF8B]/[0.06] transition-colors block">
          <h3 className="text-[18px] text-[#00EF8B] mb-2">Cadence Path</h3>
          <p className="text-white/50 text-[13px] leading-[1.7]">Build with Flow's native, resource-oriented language. Best for new projects that want to leverage Flow's unique capabilities including resources, capabilities, and account linking.</p>
        </Link>
        <Link to="/build/evm" className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block">
          <h3 className="text-[18px] text-white mb-2">EVM Path</h3>
          <p className="text-white/50 text-[13px] leading-[1.7]">Deploy existing Solidity contracts to Flow EVM. Best for teams migrating from Ethereum or using established EVM tooling like Hardhat, Foundry, and Remix.</p>
        </Link>
      </div>

      <h2 id="cadence" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Cadence Development
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Cadence</strong> is Flow's native smart contract programming language. It introduces resource-oriented programming — a new paradigm that makes it easy to create, manage, and secure digital assets directly in the language.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Resources in Cadence are linear types that can only exist in one place at a time. They cannot be copied or implicitly discarded — they must be explicitly moved or destroyed. This eliminates entire classes of bugs like reentrancy and double-spending at the language level.
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-10">
        <p className="text-[13px] text-white/40 mb-3">Example: Cadence Resource</p>
        <pre className="text-[13px] text-[#00EF8B]/80 font-mono leading-relaxed overflow-x-auto">
{`access(all) contract HelloWorld {
    access(all) resource Greeting {
        access(all) let message: String
        init(message: String) {
            self.message = message
        }
    }

    access(all) fun createGreeting(
        _ message: String
    ): @Greeting {
        return <- create Greeting(message: message)
    }
}`}
        </pre>
      </div>

      <h2 id="evm" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        EVM Development
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Flow EVM</strong> provides full Ethereum Virtual Machine equivalence, enabling developers to deploy existing Solidity contracts and use familiar EVM tooling. Flow EVM runs as an environment within Flow, giving EVM developers access to Flow's speed, low fees, and MEV resistance.
      </p>
      <ul className="list-disc list-inside text-[15px] text-white/70 space-y-1 mb-10">
        <li>Deploy with <strong className="text-white">Hardhat</strong>, <strong className="text-white">Foundry</strong>, or <strong className="text-white">Remix</strong></li>
        <li>Use <strong className="text-white">ethers.js</strong>, <strong className="text-white">viem</strong>, or <strong className="text-white">web3.js</strong></li>
        <li>Connect with <strong className="text-white">MetaMask</strong> and other EVM wallets</li>
        <li>Access Flow-native assets via the <strong className="text-white">VM Bridge</strong></li>
      </ul>

      <h2 id="tools" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Developer Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { title: "Flow CLI", desc: "Command-line interface for creating, building, testing, and deploying Flow projects." },
          { title: "Flow Playground", desc: "Browser-based IDE for writing and testing Cadence contracts without any setup." },
          { title: "Cadence VS Code", desc: "Language server extension with syntax highlighting, diagnostics, and auto-completion." },
        ].map((tool) => (
          <div key={tool.title} className="p-4 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <h3 className="text-[15px] text-white mb-1">{tool.title}</h3>
            <p className="text-white/40 text-[12px] leading-[1.7]">{tool.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="sdks" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        SDKs & Libraries
      </h2>
      <div className="space-y-3 mb-4">
        {[
          { name: "Flow Client Library (FCL)", lang: "JavaScript/TypeScript", desc: "The primary SDK for building web applications on Flow. Handles authentication, transactions, and scripts.", to: "/build/fcl" },
          { name: "Flow Go SDK", lang: "Go", desc: "Full-featured Go SDK for backend services, indexing, and server-side Flow interactions.", to: "/build/go-sdk" },
          { name: "HTTP Access API", lang: "REST", desc: "RESTful API for querying Flow's Access Nodes directly via HTTP.", to: "/build/http-api" },
        ].map((sdk) => (
          <Link key={sdk.name} to={sdk.to} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors">
            <div>
              <h3 className="text-[15px] text-white">{sdk.name}</h3>
              <p className="text-white/40 text-[12px]">{sdk.desc}</p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/40 shrink-0 ml-4">{sdk.lang}</span>
          </Link>
        ))}
      </div>
    </DocLayout>
  );
}