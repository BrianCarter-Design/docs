import type { SidebarItem } from "../DocLayout";

export const defiSidebar: SidebarItem[] = [
  { title: "DeFi on Flow", to: "/defi" },
  { title: "Build with Forte", to: "/defi/forte" },
  { title: "DeFi Contracts Mainnet", to: "/defi/contracts-mainnet" },
  { title: "DeFi Contracts Testnet", to: "/defi/contracts-testnet" },
  { title: "Cross-chain Swaps", to: "/defi/cross-chain-swaps" },
  { title: "Add Token to MetaMask", to: "/defi/add-token-metamask" },
  { title: "Band Oracle", to: "/defi/band-oracle" },
  { title: "Stablecoins & Bridges FAQ", to: "/defi/faq" },
  { title: "PYUSD Integration", to: "/defi/pyusd-integration" },
];

export const tutorialsSidebar: SidebarItem[] = [
  { title: "Tutorials", to: "/tutorials" },
  {
    title: "Getting Started",
    children: [
      { title: "Hello World on Flow", to: "/tutorials/hello-world" },
      { title: "Flow CLI Quickstart", to: "/tutorials/flow-cli" },
      { title: "Cadence First Steps", to: "/tutorials/cadence-first-steps" },
    ],
  },
  {
    title: "Smart Contracts",
    children: [
      { title: "Deploy a Contract", to: "/tutorials/deploy-contract" },
      { title: "Fungible Tokens", to: "/tutorials/fungible-tokens" },
      { title: "Non-Fungible Tokens", to: "/tutorials/nft" },
    ],
  },
  {
    title: "Forte",
    children: [
      { title: "Flow Actions", to: "/tutorials/flow-actions" },
      { title: "Scheduled Transactions", to: "/tutorials/scheduled-transactions" },
    ],
  },
  {
    title: "Frontend",
    children: [
      { title: "FCL Quickstart", to: "/tutorials/fcl-quickstart" },
      { title: "Flow App Quickstart", to: "/tutorials/app-quickstart" },
    ],
  },
];

export const buildSidebar: SidebarItem[] = [
  { title: "Overview", to: "/build" },
  {
    title: "Getting Started",
    children: [
      { title: "Flow Quickstart", to: "/build/flow-quickstart" },
      { title: "Installation", to: "/build/installation" },
      { title: "App Architecture", to: "/build/app-architecture" },
    ],
  },
  {
    title: "Cadence",
    children: [
      { title: "Language Reference", to: "/build/cadence" },
      { title: "Design Patterns", to: "/build/design-patterns" },
      { title: "Testing", to: "/build/testing" },
    ],
  },
  {
    title: "Flow CLI",
    children: [
      { title: "Install CLI", to: "/build/cli-install" },
      { title: "Configuration", to: "/build/cli-configuration" },
      { title: "Deployment", to: "/build/cli-deployment" },
    ],
  },
  {
    title: "SDKs",
    children: [
      { title: "FCL (JavaScript)", to: "/build/fcl" },
      { title: "Flow Go SDK", to: "/build/go-sdk" },
      { title: "HTTP API", to: "/build/http-api" },
    ],
  },
  {
    title: "EVM",
    children: [
      { title: "Using Flow EVM", to: "/build/evm" },
      { title: "Solidity on Flow", to: "/build/solidity" },
      { title: "EVM Equivalence", to: "/build/evm-equivalence" },
    ],
  },
];

export const protocolSidebar: SidebarItem[] = [
  { title: "Overview", to: "/protocol" },
  {
    title: "Architecture",
    children: [
      { title: "Multi-Role Architecture", to: "/protocol/multi-role" },
      { title: "Consensus", to: "/protocol/consensus" },
      { title: "Execution", to: "/protocol/execution" },
      { title: "Verification", to: "/protocol/verification" },
    ],
  },
  {
    title: "Nodes",
    children: [
      { title: "Node Operation", to: "/protocol/node-operation" },
      { title: "Staking", to: "/protocol/staking" },
      { title: "Epoch Lifecycle", to: "/protocol/epochs" },
    ],
  },
  {
    title: "Tokens",
    children: [
      { title: "FLOW Token", to: "/protocol/flow-token" },
      { title: "Fees", to: "/protocol/fees" },
      { title: "Storage", to: "/protocol/storage" },
    ],
  },
];

export const ecosystemSidebar: SidebarItem[] = [
  { title: "Overview", to: "/ecosystem" },
  {
    title: "Wallets",
    children: [
      { title: "Flow Wallet", to: "/ecosystem/flow-wallet" },
      { title: "Ledger Support", to: "/ecosystem/ledger" },
      { title: "Account Linking", to: "/ecosystem/account-linking" },
    ],
  },
  {
    title: "Infrastructure",
    children: [
      { title: "Block Explorers", to: "/ecosystem/block-explorers" },
      { title: "Faucets", to: "/ecosystem/faucets" },
      { title: "Bridges", to: "/ecosystem/bridges" },
      { title: "Oracles", to: "/ecosystem/oracles" },
    ],
  },
  {
    title: "Community",
    children: [
      { title: "Grants", to: "/ecosystem/grants" },
      { title: "Bug Bounty", to: "/ecosystem/bug-bounty" },
      { title: "Events", to: "/ecosystem/events" },
    ],
  },
];
