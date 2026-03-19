import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { Link } from "react-router";

export function FortePage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Build with Forte" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "What is Forte?", href: "#what" },
        { title: "Flow Actions", href: "#actions" },
        { title: "Scheduled Transactions", href: "#scheduled" },
        { title: "128-bit Fixed Point", href: "#precision" },
        { title: "WebAuthn", href: "#webauthn" },
        { title: "Use Cases", href: "#use-cases" },
        { title: "Getting Started", href: "#start" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Build with Forte</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        The <strong className="text-white">Forte network upgrade</strong> transforms Flow into an autonomous, intelligent network capable of executing complex DeFi workflows without external dependencies.
      </p>

      <h2 id="what" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        What is Forte?
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Forte is Flow's autonomous execution upgrade that introduces native time scheduling, protocol-level composability, and precision financial calculations. It enables entirely new categories of DeFi applications that were previously impossible or required complex off-chain infrastructure.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        With Forte, DeFi protocols can become <strong className="text-white">self-maintaining</strong>: positions compound automatically, vaults adjust exposure based on time or events, and protocols enforce predictable behavior entirely onchain.
      </p>

      <h2 id="actions" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Flow Actions
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Flow Actions</strong> enable protocol-native, composable operations that link together standardized DeFi primitives into atomic, protocol-agnostic workflows. A single transaction can:
      </p>
      <ul className="list-disc list-inside text-[15px] text-white/70 space-y-1 mb-4">
        <li>Claim staking rewards from a validator</li>
        <li>Swap a portion of rewards for USDC via a DEX</li>
        <li>Add liquidity to a FLOW/USDC pool</li>
        <li>Stake LP tokens in a yield farm</li>
      </ul>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        All in one atomic transaction — without any off-chain orchestration, middleware, or custom integration code.
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-10">
        <p className="text-[13px] text-white/40 mb-3">Action Primitives</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["Source", "Sink", "Swapper", "PriceOracle", "LiquidityProvider", "Staker"].map((p) => (
            <div key={p} className="px-3 py-2 rounded-lg bg-[#00EF8B]/5 border border-[#00EF8B]/10 text-[#00EF8B] text-[13px] text-center">
              {p}
            </div>
          ))}
        </div>
      </div>

      <h2 id="scheduled" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Scheduled Transactions
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">Scheduled Transactions</strong> introduce the first truly onchain time scheduler. Unlike external cron jobs or keeper networks, scheduled transactions are processed natively by the protocol at the specified time.
      </p>
      <div className="space-y-2 mb-10">
        {[
          ["Recurring execution", "Set up daily, weekly, or custom interval transactions"],
          ["Deferred settlement", "Schedule settlements for a specific future date/time"],
          ["Auto-compounding", "Automatically compound yields without user intervention"],
          ["Limit orders", "Execute trades when price conditions are met at scheduled check times"],
          ["Portfolio rebalancing", "Automatically rebalance portfolios on a schedule"],
        ].map(([title, desc]) => (
          <p key={title} className="text-[15px] text-white/70 leading-[1.75]">
            <strong className="text-white">{title}</strong> — {desc}
          </p>
        ))}
      </div>

      <h2 id="precision" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        128-bit Fixed-Point Arithmetic
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        Forte adds <strong className="text-white">128-bit fixed-point numbers</strong> natively to Cadence, providing lossless financial calculations. This eliminates rounding errors in interest calculations, exchange rate computations, and fee distributions — issues that have caused significant losses on other chains. Developers no longer need to implement custom math libraries or worry about precision loss in DeFi calculations.
      </p>

      <h2 id="webauthn" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Native WebAuthn Support
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        Forte introduces native <strong className="text-white">WebAuthn</strong> support, enabling passwordless and seedless user onboarding via biometrics (Face ID, fingerprint, Windows Hello). Users can create Flow accounts and sign transactions using device biometrics — no seed phrases, no browser extensions, no friction.
      </p>

      <h2 id="use-cases" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Use Cases
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Auto-compounding Vaults", desc: "Yield vaults that automatically harvest and reinvest rewards on a schedule, maximizing APY without manual claims." },
          { title: "Dollar-Cost Averaging", desc: "Users set up recurring buys that execute automatically — no need to remember or manually trigger trades." },
          { title: "Self-Liquidating Loans", desc: "Lending protocols can automatically liquidate undercollateralized positions at scheduled intervals, improving protocol health." },
          { title: "Streaming Payments", desc: "Salary, subscription, or royalty payments streamed continuously or disbursed at regular intervals." },
        ].map((uc) => (
          <div key={uc.title} className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <h3 className="text-[16px] text-white mb-2">{uc.title}</h3>
            <p className="text-white/50 text-[13px] leading-[1.7]">{uc.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="start" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Getting Started
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75]">
        Ready to build with Forte? Check out the <Link to="/tutorials/flow-actions" className="text-[#00EF8B] hover:underline">Flow Actions tutorial</Link> and <Link to="/tutorials/scheduled-transactions" className="text-[#00EF8B] hover:underline">Scheduled Transactions guide</Link> to start building autonomous DeFi on Flow.
      </p>
    </DocLayout>
  );
}