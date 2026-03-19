import { DocLayout } from "../DocLayout";
import { protocolSidebar } from "./sidebars";
import { Link } from "react-router";

export function ProtocolPage() {
  return (
    <DocLayout
      breadcrumbs={[{ label: "Protocol" }]}
      sidebar={protocolSidebar}
      toc={[
        { title: "What is Flow?", href: "#what" },
        { title: "Multi-Role Architecture", href: "#architecture" },
        { title: "Node Roles", href: "#roles" },
        { title: "Consensus", href: "#consensus" },
        { title: "Execution", href: "#execution" },
        { title: "Verification & Sealing", href: "#verification" },
        { title: "FLOW Token", href: "#token" },
        { title: "Transaction Fees", href: "#fees" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Flow Protocol</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Flow is a fast, decentralized, and developer-friendly Layer 1 blockchain. It is the only blockchain that scales without sharding — achieving massive throughput improvements through a unique <strong className="text-white">multi-role architecture</strong> that separates the jobs of a validator node.
      </p>

      <h2 id="what" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        What is Flow?
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow was designed from the ground up to support consumer-scale applications, serving billions of people. Built by the team behind CryptoKitties and NBA Top Shot, Flow's architecture separates consensus from computation, enabling the network to scale without sacrificing decentralization or composability.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        Unlike sharded blockchains, all smart contracts on Flow run in the same shared execution environment. This means every contract can interact with every other contract directly — enabling the rich composability that developers rely on.
      </p>

      <h2 id="architecture" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Multi-Role Architecture
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow's key innovation is splitting the work of a traditional blockchain validator into four specialized roles: <strong className="text-white">Collection</strong>, <strong className="text-white">Consensus</strong>, <strong className="text-white">Execution</strong>, and <strong className="text-white">Verification</strong>. Each role is optimized for its specific function, and nodes can specialize in the role that best fits their hardware capabilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { role: "Collection Nodes", desc: "Enhance network connectivity and data availability. They bundle transactions into collections and ensure all transactions are available for processing." },
          { role: "Consensus Nodes", desc: "Determine the ordering and presence of transactions on the blockchain. They form blocks by ordering transaction collections and drive the core protocol." },
          { role: "Execution Nodes", desc: "Perform the actual computation — executing transactions and maintaining the state. They are the powerhouses of the network." },
          { role: "Verification Nodes", desc: "Verify the correctness of execution results. They act as an accountable, trustless check on execution nodes using specialized proof checking." },
        ].map((n) => (
          <div key={n.role} className="p-5 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <h3 className="text-[16px] text-[#00EF8B] mb-2">{n.role}</h3>
            <p className="text-white/50 text-[13px] leading-[1.7]">{n.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="roles" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Node Roles
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        This separation of concerns means that consensus nodes don't need powerful hardware — they just need to order transactions. The heavy computational work is done by execution nodes, which can invest in high-performance hardware. Verification nodes check the work using efficient cryptographic proofs.
      </p>
      <p className="text-white/50 text-[15px] leading-[1.75] mb-10">
        Learn more about <Link to="/protocol/node-operation" className="text-[#00EF8B] hover:underline">running a node</Link> or <Link to="/protocol/staking" className="text-[#00EF8B] hover:underline">staking on Flow</Link>.
      </p>

      <h2 id="consensus" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Consensus
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow uses <strong className="text-white">HotStuff</strong>, a leader-based Byzantine Fault Tolerant (BFT) consensus protocol. HotStuff achieves responsiveness — meaning it runs at the speed of the actual network rather than depending on conservative timeouts. Flow's implementation achieves fast finality with only 2-3 rounds of communication.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        The consensus protocol is run exclusively by consensus nodes, which are lightweight and can be operated on modest hardware. This separation allows Flow to maintain strong decentralization in consensus while enabling powerful execution nodes to handle computation.
      </p>

      <h2 id="execution" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Execution
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Execution nodes are responsible for computing the results of transactions. They process each transaction sequentially within a block, maintaining the global state of the blockchain. Flow's execution environment runs both <strong className="text-white">Cadence</strong> smart contracts and the <strong className="text-white">Ethereum Virtual Machine (EVM)</strong>, enabling developers to choose their preferred language and tooling.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        After executing a block, execution nodes produce a cryptographic commitment to the resulting state (an execution receipt) which is then verified by verification nodes.
      </p>

      <h2 id="verification" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Verification & Sealing
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Verification nodes check the work of execution nodes using <strong className="text-white">Specialized Proofs of Confidential Knowledge (SPoCKs)</strong>. This cryptographic technique allows verification nodes to confirm that execution nodes actually performed the computation correctly, without needing to re-execute the transactions themselves.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        Once enough verification nodes have approved an execution result, the block is <strong className="text-white">sealed</strong> — meaning its results are finalized and can be trusted by the rest of the network.
      </p>

      <h2 id="token" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        FLOW Token
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        <strong className="text-white">FLOW</strong> is the native token of the Flow blockchain. It is required for:
      </p>
      <ul className="list-disc list-inside text-[15px] text-white/70 space-y-1 mb-10">
        <li><strong className="text-white">Transaction fees</strong> — paying for computation and state changes</li>
        <li><strong className="text-white">Storage deposits</strong> — reserving onchain storage for account data</li>
        <li><strong className="text-white">Staking</strong> — securing the network by staking as a node operator or delegator</li>
        <li><strong className="text-white">Governance</strong> — participating in protocol decisions</li>
      </ul>

      <h2 id="fees" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Transaction Fees
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Flow's transaction fees are composed of two parts: an <strong className="text-white">inclusion fee</strong> (a flat fee for including the transaction) and an <strong className="text-white">execution fee</strong> (proportional to the computation used). Total fees are typically under <strong className="text-white">$0.001</strong>, making Flow one of the most cost-effective blockchains for both developers and users.
      </p>
      <p className="text-white/50 text-[15px] leading-[1.75]">
        Many Flow applications sponsor transaction fees for their users, creating a completely free user experience. Learn more about <Link to="/protocol/fees" className="text-[#00EF8B] hover:underline">transaction fees</Link> and <Link to="/protocol/storage" className="text-[#00EF8B] hover:underline">storage costs</Link>.
      </p>
    </DocLayout>
  );
}