import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";

const TOKENS = [
  { name: "WFLOW", symbol: "WFLOW", address: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e", decimals: 18 },
  { name: "USDC.e", symbol: "USDC.e", address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52", decimals: 6 },
  { name: "USDT", symbol: "USDT", address: "0x674599E3bdD6Ec2E5286f698a4F34D35DA4b1571", decimals: 6 },
  { name: "WETH", symbol: "WETH", address: "0xC5B17b58F1C8DD43109f883cC56bcf0B81F3F8F3", decimals: 18 },
  { name: "ankrFLOW", symbol: "ankrFLOW", address: "0x1b97100eA1d7126C4d60027e231EA4CB25314bdb", decimals: 18 },
  { name: "PYUSD", symbol: "PYUSD", address: "0x1c7b1FdE1Be946F9d62e9c278e3D1C9c31F0C21E", decimals: 6 },
];

export function AddTokenMetaMaskPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Add Token to MetaMask" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "Add Flow EVM Network", href: "#network" },
        { title: "Add Tokens", href: "#tokens" },
        { title: "Manual Token Import", href: "#manual" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Add Token to MetaMask</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        Configure MetaMask to work with Flow EVM and import popular DeFi tokens. This guide covers adding the Flow EVM network and importing token contracts.
      </p>

      <h2 id="network" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Add Flow EVM Network
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        First, add the Flow EVM network to MetaMask. You can do this manually or by visiting <a href="https://chainlist.org/?search=flow" target="_blank" rel="noopener noreferrer" className="text-[#00EF8B] hover:underline">Chainlist</a>.
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-4">
        <p className="text-[13px] text-white/40 mb-3">Flow EVM Mainnet Configuration</p>
        <div className="space-y-2 text-[13px] font-mono">
          <p><span className="text-white/30">Network Name:</span> <span className="text-white/70">Flow EVM</span></p>
          <p><span className="text-white/30">RPC URL:</span> <span className="text-[#00EF8B]">https://mainnet.evm.nodes.onflow.org</span></p>
          <p><span className="text-white/30">Chain ID:</span> <span className="text-white/70">747</span></p>
          <p><span className="text-white/30">Currency Symbol:</span> <span className="text-white/70">FLOW</span></p>
          <p><span className="text-white/30">Block Explorer:</span> <span className="text-[#00EF8B]">https://evm.flowscan.io</span></p>
        </div>
      </div>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-10">
        <p className="text-[13px] text-white/40 mb-3">Flow EVM Testnet Configuration</p>
        <div className="space-y-2 text-[13px] font-mono">
          <p><span className="text-white/30">Network Name:</span> <span className="text-white/70">Flow EVM Testnet</span></p>
          <p><span className="text-white/30">RPC URL:</span> <span className="text-[#00EF8B]">https://testnet.evm.nodes.onflow.org</span></p>
          <p><span className="text-white/30">Chain ID:</span> <span className="text-white/70">545</span></p>
          <p><span className="text-white/30">Currency Symbol:</span> <span className="text-white/70">FLOW</span></p>
          <p><span className="text-white/30">Block Explorer:</span> <span className="text-[#00EF8B]">https://evm-testnet.flowscan.io</span></p>
        </div>
      </div>

      <h2 id="tokens" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Add Tokens
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        After adding the Flow EVM network, import these tokens by copying their contract address and pasting it in MetaMask's "Import Token" dialog.
      </p>
      <div className="space-y-3 mb-10">
        {TOKENS.map((t) => (
          <div key={t.symbol} className="p-4 rounded-xl border border-white/[0.06] bg-[#00180E]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[15px] text-white">{t.name} <span className="text-white/30">({t.symbol})</span></h3>
              <span className="text-[11px] text-white/30">Decimals: {t.decimals}</span>
            </div>
            <code className="text-[12px] text-[#00EF8B]/70 font-mono bg-black/30 px-2 py-1 rounded block overflow-x-auto">
              {t.address}
            </code>
          </div>
        ))}
      </div>

      <h2 id="manual" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Manual Token Import
      </h2>
      <div className="space-y-4">
        {[
          { step: 1, text: "Open MetaMask and ensure you're connected to the Flow EVM network" },
          { step: 2, text: "Click 'Import tokens' at the bottom of your token list" },
          { step: 3, text: "Select 'Custom token' and paste the token contract address" },
          { step: 4, text: "MetaMask will auto-fill the token symbol and decimals. Verify these match the values above." },
          { step: 5, text: "Click 'Add Custom Token' and then 'Import Tokens' to confirm" },
        ].map((s) => (
          <div key={s.step} className="flex gap-4 items-start">
            <div className="w-7 h-7 rounded-full bg-[#00EF8B]/10 text-[#00EF8B] flex items-center justify-center shrink-0 text-[13px]">{s.step}</div>
            <p className="text-white/70 text-[14px] leading-[1.75] pt-0.5">{s.text}</p>
          </div>
        ))}
      </div>
    </DocLayout>
  );
}