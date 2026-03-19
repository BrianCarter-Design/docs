import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { ExternalLink } from "lucide-react";

const TESTNET_CONTRACTS = [
  { name: "FlowToken", address: "0x7e60df042a9c0868", desc: "The native FLOW fungible token contract" },
  { name: "FungibleToken", address: "0x9a0766d93b6608b7", desc: "Fungible Token standard interface" },
  { name: "NonFungibleToken", address: "0x631e88ae7f1d7c20", desc: "NFT standard interface" },
  { name: "MetadataViews", address: "0x631e88ae7f1d7c20", desc: "Metadata views for NFTs and tokens" },
  { name: "FUSD", address: "0xe223d8a629e49c68", desc: "Flow USD stablecoin (deprecated)" },
  { name: "FlowFees", address: "0x912d5440f7e3769e", desc: "Transaction fee management" },
  { name: "FlowStorageFees", address: "0x8c5303eaa26202d6", desc: "Storage fee management" },
  { name: "FlowIDTableStaking", address: "0x9eca2b38b18b5dfe", desc: "Identity table and staking" },
  { name: "FlowEpoch", address: "0x9eca2b38b18b5dfe", desc: "Epoch lifecycle management" },
  { name: "LockedTokens", address: "0x95e019a17d0e23d7", desc: "Locked FLOW token management" },
];

const EVM_TESTNET_CONTRACTS = [
  { name: "WFLOW", address: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e", desc: "Wrapped FLOW (ERC-20)" },
  { name: "USDC.e (Test)", address: "0x0000000000000000000000000000000000000001", desc: "Test bridged USDC" },
];

export function ContractsTestnetPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Contracts Testnet" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "Core Cadence Contracts", href: "#cadence" },
        { title: "EVM Token Contracts", href: "#evm" },
        { title: "Getting Testnet Tokens", href: "#faucet" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">DeFi Contracts — Testnet</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-4">
        Contract addresses for <strong className="text-white">Flow Testnet</strong>. Use these addresses during development and testing before deploying to mainnet.
      </p>
      <div className="bg-[#00EF8B]/5 border border-[#00EF8B]/10 rounded-xl p-4 mb-10">
        <p className="text-[14px] text-white/70 leading-[1.75]">
          <strong>Testnet RPC:</strong> <code className="bg-[#00180E] px-1.5 py-0.5 rounded">https://testnet.evm.nodes.onflow.org</code> — Chain ID: <strong>545</strong>
        </p>
      </div>

      <h2 id="cadence" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Core Cadence Contracts
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left py-3 px-3 text-white/40">Contract</th>
              <th className="text-left py-3 px-3 text-white/40">Address</th>
              <th className="text-left py-3 px-3 text-white/40">Description</th>
            </tr>
          </thead>
          <tbody>
            {TESTNET_CONTRACTS.map((c) => (
              <tr key={c.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="py-3 px-3 text-[#00EF8B] font-mono">{c.name}</td>
                <td className="py-3 px-3 text-white/50 font-mono text-[12px]">
                  <a href={`https://testnet.flowscan.io/account/${c.address}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00EF8B] transition-colors flex items-center gap-1">
                    {c.address} <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-3 px-3 text-white/50">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="evm" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        EVM Token Contracts
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left py-3 px-3 text-white/40">Token</th>
              <th className="text-left py-3 px-3 text-white/40">Address</th>
              <th className="text-left py-3 px-3 text-white/40">Description</th>
            </tr>
          </thead>
          <tbody>
            {EVM_TESTNET_CONTRACTS.map((c) => (
              <tr key={c.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="py-3 px-3 text-[#00EF8B] font-mono">{c.name}</td>
                <td className="py-3 px-3 text-white/50 font-mono text-[12px]">{c.address.slice(0, 8)}...{c.address.slice(-4)}</td>
                <td className="py-3 px-3 text-white/50">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="faucet" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Getting Testnet Tokens
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Use the <strong className="text-white">Flow Testnet Faucet</strong> to request up to 1,000 testnet FLOW tokens. You can also create new testnet accounts directly from the faucet.
      </p>
      <a href="https://testnet-faucet.onflow.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00EF8B]/10 text-[#00EF8B] text-[14px] hover:bg-[#00EF8B]/15 transition-colors">
        Open Faucet <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </DocLayout>
  );
}