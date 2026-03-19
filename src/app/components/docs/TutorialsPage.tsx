import { DocLayout } from "../DocLayout";
import { tutorialsSidebar } from "./sidebars";
import { Link } from "react-router";

export function TutorialsPage() {
  return (
    <DocLayout
      breadcrumbs={[{ label: "Tutorials" }]}
      sidebar={tutorialsSidebar}
      toc={[
        { title: "Getting Started", href: "#getting-started" },
        { title: "Smart Contract Tutorials", href: "#smart-contracts" },
        { title: "Build with Forte", href: "#forte" },
        { title: "Frontend Development", href: "#frontend" },
        { title: "Advanced Topics", href: "#advanced" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Tutorials</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Learn how to build on Flow with step-by-step tutorials. Whether you're new to blockchain development or an experienced builder, these guides will help you get started quickly and build production-ready applications.
      </p>

      <h2 id="getting-started" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Getting Started
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Hello World on Flow", desc: "Write and deploy your first smart contract on Flow in under 10 minutes.", to: "/tutorials/hello-world", tag: "Beginner" },
          { title: "Flow CLI Quickstart", desc: "Install and configure the Flow CLI to interact with the network from your terminal.", to: "/tutorials/flow-cli", tag: "Beginner" },
          { title: "Cadence First Steps", desc: "Learn the basics of Cadence, Flow's resource-oriented smart contract language.", to: "/tutorials/cadence-first-steps", tag: "Beginner" },
        ].map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[16px] text-white">{t.title}</h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#00EF8B]/10 text-[#00EF8B]">{t.tag}</span>
            </div>
            <p className="text-white/50 text-[13px] leading-[1.7]">{t.desc}</p>
          </Link>
        ))}
      </div>

      <h2 id="smart-contracts" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Smart Contract Tutorials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Deploy a Contract", desc: "Learn how to deploy, update, and interact with smart contracts on Flow's testnet and mainnet.", to: "/tutorials/deploy-contract", tag: "Intermediate" },
          { title: "Fungible Tokens", desc: "Create your own fungible token following Flow's FT standard with minting, transferring, and vault management.", to: "/tutorials/fungible-tokens", tag: "Intermediate" },
          { title: "Non-Fungible Tokens", desc: "Build an NFT collection using Flow's NFT standard with metadata, collections, and marketplace integration.", to: "/tutorials/nft", tag: "Intermediate" },
        ].map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[16px] text-white">{t.title}</h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">{t.tag}</span>
            </div>
            <p className="text-white/50 text-[13px] leading-[1.7]">{t.desc}</p>
          </Link>
        ))}
      </div>

      <h2 id="forte" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Build with Forte
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Forte is Flow's autonomous execution layer. Learn how to build self-operating DeFi protocols with <strong className="text-white">Flow Actions</strong> and <strong className="text-white">Scheduled Transactions</strong>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Flow Actions", desc: "Compose standardized DeFi primitives into atomic, protocol-agnostic workflows.", to: "/tutorials/flow-actions", tag: "Advanced" },
          { title: "Scheduled Transactions", desc: "Build autonomous DeFi workflows with onchain time scheduling — no cron jobs needed.", to: "/tutorials/scheduled-transactions", tag: "Advanced" },
        ].map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[16px] text-white">{t.title}</h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">{t.tag}</span>
            </div>
            <p className="text-white/50 text-[13px] leading-[1.7]">{t.desc}</p>
          </Link>
        ))}
      </div>

      <h2 id="frontend" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Frontend Development
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: "FCL Quickstart", desc: "Get started with Flow Client Library (FCL) to connect your frontend app to Flow.", to: "/tutorials/fcl-quickstart", tag: "Beginner" },
          { title: "Flow App Quickstart", desc: "Build a full-stack Flow app with authentication, transactions, and scripts.", to: "/tutorials/app-quickstart", tag: "Intermediate" },
        ].map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E] hover:bg-[#002814] transition-colors block"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[16px] text-white">{t.title}</h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#00EF8B]/10 text-[#00EF8B]">{t.tag}</span>
            </div>
            <p className="text-white/50 text-[13px] leading-[1.7]">{t.desc}</p>
          </Link>
        ))}
      </div>

      <h2 id="advanced" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Advanced Topics
      </h2>
      <p className="text-white/50 text-[15px] leading-[1.75]">
        Looking for more? Explore <Link to="/build" className="text-[#00EF8B] hover:underline">Build</Link> for comprehensive SDK documentation, or check out the <Link to="/protocol" className="text-[#00EF8B] hover:underline">Protocol</Link> section to understand Flow's architecture.
      </p>
    </DocLayout>
  );
}