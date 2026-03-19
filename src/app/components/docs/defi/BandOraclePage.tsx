import { DocLayout } from "../../DocLayout";
import { defiSidebar } from "../sidebars";

export function BandOraclePage() {
  return (
    <DocLayout
      breadcrumbs={[
        { label: "DeFi", to: "/defi" },
        { label: "Band Oracle" },
      ]}
      sidebar={defiSidebar}
      toc={[
        { title: "What is Band Protocol?", href: "#what" },
        { title: "Supported Price Feeds", href: "#feeds" },
        { title: "Integration Guide", href: "#integration" },
        { title: "Cadence Integration", href: "#cadence" },
        { title: "EVM Integration", href: "#evm" },
      ]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">Band Protocol Oracle</h1>
      <p className="text-white/70 text-[16px] leading-[1.75] mb-10">
        <strong className="text-white">Band Protocol</strong> provides decentralized, real-world data to smart contracts on Flow. Use Band oracle price feeds for DeFi applications including DEXs, lending protocols, and derivatives platforms.
      </p>

      <h2 id="what" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        What is Band Protocol?
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts. It provides reliable, tamper-proof data feeds that DeFi protocols need to function correctly — including price feeds, random number generation, and cross-chain data.
      </p>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        On Flow, Band Protocol provides price feeds for major cryptocurrency pairs and supports both Cadence and EVM contract integrations.
      </p>

      <h2 id="feeds" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Supported Price Feeds
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left py-3 px-3 text-white/40">Pair</th>
              <th className="text-left py-3 px-3 text-white/40">Update Frequency</th>
              <th className="text-left py-3 px-3 text-white/40">Deviation Threshold</th>
            </tr>
          </thead>
          <tbody>
            {[
              { pair: "FLOW / USD", freq: "Every 60s", dev: "0.5%" },
              { pair: "BTC / USD", freq: "Every 60s", dev: "0.5%" },
              { pair: "ETH / USD", freq: "Every 60s", dev: "0.5%" },
              { pair: "USDC / USD", freq: "Every 300s", dev: "0.1%" },
              { pair: "USDT / USD", freq: "Every 300s", dev: "0.1%" },
            ].map((f) => (
              <tr key={f.pair} className="border-b border-white/[0.04]">
                <td className="py-3 px-3 text-white font-mono">{f.pair}</td>
                <td className="py-3 px-3 text-white/50">{f.freq}</td>
                <td className="py-3 px-3 text-white/50">{f.dev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="integration" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Integration Guide
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-10">
        Band Protocol on Flow supports both <strong className="text-white">Cadence</strong> and <strong className="text-white">EVM</strong> integrations. Choose the integration method that matches your smart contract environment.
      </p>

      <h2 id="cadence" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        Cadence Integration
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        Query Band oracle prices from your Cadence smart contracts or scripts:
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mb-10">
        <pre className="text-[13px] text-[#00EF8B]/80 font-mono leading-relaxed overflow-x-auto">
{`import BandOracle from 0xBandOracleAddress

access(all) fun main(): UFix64 {
    // Get the latest FLOW/USD price
    let feedData = BandOracle.getReferenceData(
        base: "FLOW",
        quote: "USD"
    )
    return feedData.rate
}`}
        </pre>
      </div>

      <h2 id="evm" className="text-[26px] tracking-[-0.5px] mb-6 pt-4 border-t border-white/[0.06]">
        EVM Integration
      </h2>
      <p className="text-white/70 text-[15px] leading-[1.75] mb-4">
        For EVM-based contracts, use Band's standard <code className="bg-white/[0.05] px-1.5 py-0.5 rounded text-[13px]">IStdReference</code> interface:
      </p>
      <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5">
        <pre className="text-[13px] text-[#00EF8B]/80 font-mono leading-relaxed overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStdReference {
    struct ReferenceData {
        uint256 rate;
        uint256 lastUpdatedBase;
        uint256 lastUpdatedQuote;
    }

    function getReferenceData(
        string memory _base,
        string memory _quote
    ) external view returns (ReferenceData memory);
}

contract MyDeFiApp {
    IStdReference public oracle;

    constructor(address _oracle) {
        oracle = IStdReference(_oracle);
    }

    function getFlowPrice() external view returns (uint256) {
        IStdReference.ReferenceData memory data =
            oracle.getReferenceData("FLOW", "USD");
        return data.rate;
    }
}`}
        </pre>
      </div>
    </DocLayout>
  );
}