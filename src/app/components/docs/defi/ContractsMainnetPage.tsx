import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";
import { ExternalLink } from "lucide-react";

const MAINNET_CONTRACTS = [
  { name: "FlowToken", address: "0x1654653399040a61", desc: "The native FLOW fungible token contract" },
  { name: "FungibleToken", address: "0xf233dcee88fe0abe", desc: "Fungible Token standard interface" },
  { name: "NonFungibleToken", address: "0x1d7e57aa55817448", desc: "NFT standard interface" },
  { name: "MetadataViews", address: "0x1d7e57aa55817448", desc: "Metadata views for NFTs and tokens" },
  { name: "FUSD", address: "0x3c5959b568896393", desc: "Flow USD stablecoin (deprecated)" },
  { name: "FlowFees", address: "0xf919ee77447b7497", desc: "Transaction fee management contract" },
  { name: "FlowStorageFees", address: "0xe467b9dd11fa00df", desc: "Storage fee management contract" },
  { name: "StakingProxy", address: "0x62430cf28c26d095", desc: "Staking helper proxy contract" },
  { name: "LockedTokens", address: "0x8d0e87b65159ae63", desc: "Locked FLOW token management" },
  { name: "FlowStakingCollection", address: "0x8d0e87b65159ae63", desc: "Staking collection for managing multiple stakes" },
  { name: "FlowIDTableStaking", address: "0x8624b52f9ddcd04a", desc: "Identity table and staking contract" },
  { name: "FlowEpoch", address: "0x8624b52f9ddcd04a", desc: "Epoch lifecycle management" },
  { name: "FlowClusterQC", address: "0x8624b52f9ddcd04a", desc: "Cluster quorum certificate" },
  { name: "FlowDKG", address: "0x8624b52f9ddcd04a", desc: "Distributed key generation for consensus" },
];

const EVM_CONTRACTS = [
  { name: "WFLOW", address: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e", desc: "Wrapped FLOW (ERC-20)" },
  { name: "USDC.e", address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52", desc: "Bridged USDC (Circle)" },
  { name: "USDT", address: "0x674599E3bdD6Ec2E5286f698a4F34D35DA4b1571", desc: "Bridged Tether USD" },
  { name: "WETH", address: "0xC5B17b58F1C8DD43109f883cC56bcf0B81F3F8F3", desc: "Wrapped Ether" },
  { name: "ankrFLOW", address: "0x1b97100eA1d7126C4d60027e231EA4CB25314bdb", desc: "Ankr staked FLOW" },
  { name: "PYUSD", address: "0x1c7b1FdE1Be946F9d62e9c278e3D1C9c31F0C21E", desc: "PayPal USD (via LayerZero)" },
];

export function ContractsMainnetPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Contracts Mainnet" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "Core Cadence Contracts", href: "#cadence" },
        { title: "EVM Token Contracts", href: "#evm" },
        { title: "Using Contracts", href: "#usage" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">DeFi Contracts — Mainnet</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        A comprehensive list of deployed smart contracts on <strong className="text-white">Flow Mainnet</strong> relevant to DeFi development. These contracts provide the foundation for building financial applications on Flow.
      </p>

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
            {MAINNET_CONTRACTS.map((c) => (
              <tr key={c.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="py-3 px-3 text-[#00EF8B] font-mono">{c.name}</td>
                <td className="py-3 px-3 text-white/50 font-mono text-[12px]">
                  <a
                    href={`https://www.flowscan.io/account/${c.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00EF8B] transition-colors flex items-center gap-1"
                  >
                    {c.address.slice(0, 8)}...{c.address.slice(-4)}
                    <ExternalLink className="w-3 h-3" />
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
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        These ERC-20 token contracts are deployed on <strong className="text-white">Flow EVM</strong> (Chain ID: 747) and can be used with standard EVM tooling like MetaMask, ethers.js, and Hardhat.
      </p>
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
            {EVM_CONTRACTS.map((c) => (
              <tr key={c.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="py-3 px-3 text-[#00EF8B] font-mono">{c.name}</td>
                <td className="py-3 px-3 text-white/50 font-mono text-[12px]">
                  <a
                    href={`https://evm.flowscan.io/address/${c.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00EF8B] transition-colors flex items-center gap-1"
                  >
                    {c.address.slice(0, 8)}...{c.address.slice(-4)}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-3 px-3 text-white/50">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="usage" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Using Contracts
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        To import a Cadence contract in your transaction or script:
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-4">
        <pre className="text-[13px] text-[#00EF8B]/80 font-mono">
{`import FungibleToken from 0xf233dcee88fe0abe
import FlowToken from 0x1654653399040a61`}
        </pre>
      </div>
      <p className="text-white/70 text-[15px] leading-[1.75]">
        For EVM contracts, use the standard ERC-20 ABI with the contract address and Chain ID <strong className="text-white">747</strong>.
      </p>
    </DocLayout>
  );
}