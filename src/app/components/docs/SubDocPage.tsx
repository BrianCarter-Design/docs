import { useParams, useLocation, Link } from "react-router";
import { DocLayout } from "../DocLayout";
import { tutorialsSidebar, buildSidebar, protocolSidebar, ecosystemSidebar, defiSidebar } from "./sidebars";
import type { SidebarItem } from "../DocLayout";

// Map route prefixes to sidebars and section names
const SECTIONS: Record<string, { sidebar: SidebarItem[]; label: string; basePath: string }> = {
  tutorials: { sidebar: tutorialsSidebar, label: "Tutorials", basePath: "/tutorials" },
  build: { sidebar: buildSidebar, label: "Build", basePath: "/build" },
  protocol: { sidebar: protocolSidebar, label: "Protocol", basePath: "/protocol" },
  ecosystem: { sidebar: ecosystemSidebar, label: "Ecosystem", basePath: "/ecosystem" },
};

// Content for each sub-page, keyed by full path
const PAGE_CONTENT: Record<string, { title: string; content: string[]; code?: string }> = {
  // Tutorials
  "/tutorials/hello-world": {
    title: "Hello World on Flow",
    content: [
      "This tutorial will walk you through writing and deploying your first smart contract on Flow. By the end, you'll have a working Cadence contract deployed to Flow's testnet.",
      "Cadence is Flow's native smart contract programming language. It introduces resource-oriented programming, a paradigm designed to make digital asset management safe and intuitive.",
      "You'll learn how to set up your development environment, write a simple smart contract, deploy it to testnet, and interact with it using scripts and transactions.",
    ],
    code: `access(all) contract HelloWorld {
    access(all) let greeting: String

    init() {
        self.greeting = "Hello, World!"
    }

    access(all) view fun hello(): String {
        return self.greeting
    }
}`,
  },
  "/tutorials/flow-cli": {
    title: "Flow CLI Quickstart",
    content: [
      "The Flow CLI is the primary tool for developing on Flow. It provides commands for creating projects, deploying contracts, running transactions, and managing accounts.",
      "Install the Flow CLI using Homebrew on macOS, or download the binary for Linux and Windows. After installation, run `flow init` to create a new project.",
      "The CLI includes a built-in emulator for local development, a dev wallet for testing, and deployment tools for testnet and mainnet.",
    ],
    code: `# Install Flow CLI
brew install flow-cli

# Create a new project
flow init my-project
cd my-project

# Start the emulator
flow emulator

# Deploy contracts
flow project deploy --network=testnet`,
  },
  "/tutorials/cadence-first-steps": {
    title: "Cadence First Steps",
    content: [
      "Cadence is a resource-oriented programming language designed for smart contract development on Flow. Resources are linear types that can only exist in one place at a time — they cannot be copied or implicitly discarded.",
      "This paradigm makes it impossible to accidentally duplicate or lose digital assets. When you create an NFT as a Cadence resource, the language guarantees that only one copy exists and it must be explicitly moved or destroyed.",
      "In this tutorial, you'll learn about Cadence's type system, resources, capabilities, access control, and how to structure a smart contract.",
    ],
    code: `// Resources are unique and cannot be copied
access(all) resource NFT {
    access(all) let id: UInt64
    access(all) let name: String

    init(id: UInt64, name: String) {
        self.id = id
        self.name = name
    }
}

// Resources must be moved with <- operator
let nft <- create NFT(id: 1, name: "My First NFT")
// Cannot copy: let copy = nft (ERROR!)
destroy nft // Must explicitly destroy`,
  },
  "/tutorials/deploy-contract": {
    title: "Deploy a Contract",
    content: [
      "Learn how to deploy, update, and interact with smart contracts on Flow's testnet and mainnet. This guide covers the full deployment lifecycle.",
      "Flow has a unique contract deployment model — contracts are deployed to accounts, not to arbitrary addresses. Each account can host multiple contracts, and contracts can be updated following Cadence's stable cadence upgrade rules.",
      "You'll use the Flow CLI to deploy contracts, and learn about Flow's account model, contract naming, and upgrade patterns.",
    ],
  },
  "/tutorials/fungible-tokens": {
    title: "Fungible Tokens",
    content: [
      "Create your own fungible token following Flow's FT standard. This tutorial covers minting, transferring, vault management, and metadata.",
      "Flow's FungibleToken standard uses resource-oriented programming to represent token balances as Vault resources. Each user's balance is stored in their own Vault, making the ownership model explicit and secure.",
      "You'll implement a complete fungible token with minting capabilities, transfer functions, and balance queries.",
    ],
    code: `import FungibleToken from 0xFungibleToken

access(all) contract MyToken: FungibleToken {
    access(all) var totalSupply: UFix64

    access(all) resource Vault: FungibleToken.Vault {
        access(all) var balance: UFix64

        init(balance: UFix64) {
            self.balance = balance
        }

        access(FungibleToken.Withdraw)
        fun withdraw(amount: UFix64): @{FungibleToken.Vault} {
            self.balance = self.balance - amount
            return <- create Vault(balance: amount)
        }

        access(all)
        fun deposit(from: @{FungibleToken.Vault}) {
            self.balance = self.balance + from.balance
            destroy from
        }
    }
}`,
  },
  "/tutorials/nft": {
    title: "Non-Fungible Tokens",
    content: [
      "Build an NFT collection using Flow's NFT standard with metadata, collections, and marketplace integration.",
      "Flow's NonFungibleToken standard provides a comprehensive framework for creating, storing, and transferring NFTs. Each NFT is a unique resource with its own identity and metadata.",
      "This tutorial covers creating an NFT contract, minting NFTs, building a Collection resource for storage, and implementing MetadataViews for rich display data.",
    ],
  },
  "/tutorials/flow-actions": {
    title: "Flow Actions Tutorial",
    content: [
      "Learn how to compose standardized DeFi primitives into atomic, protocol-agnostic workflows using Flow Actions.",
      "Flow Actions define a set of standard interfaces — Sources, Sinks, Swappers, and PriceOracles — that any DeFi protocol can implement. Once implemented, these primitives can be composed into complex workflows without custom integration code.",
      "In this tutorial, you'll build a workflow that claims staking rewards, swaps a portion for USDC, and deposits into a liquidity pool — all in a single atomic transaction.",
    ],
  },
  "/tutorials/scheduled-transactions": {
    title: "Scheduled Transactions Tutorial",
    content: [
      "Build autonomous DeFi workflows with Flow's onchain time scheduler.",
      "Scheduled Transactions allow you to register transactions that execute at a specific time or on a recurring basis. The protocol handles execution natively — no external cron jobs, keeper networks, or off-chain infrastructure required.",
      "You'll learn how to create scheduled transactions, set up recurring execution patterns, and build auto-compounding vaults that operate autonomously.",
    ],
  },
  "/tutorials/fcl-quickstart": {
    title: "FCL Quickstart",
    content: [
      "Get started with the Flow Client Library (FCL) to connect your frontend application to Flow.",
      "FCL is Flow's JavaScript SDK that handles wallet discovery, user authentication, transaction signing, and script execution. It works with multiple wallet providers and supports both Cadence and EVM interactions.",
      "Install FCL, configure it for testnet or mainnet, authenticate users, and send your first transaction.",
    ],
    code: `import * as fcl from "@onflow/fcl"

// Configure FCL
fcl.config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn",
  "flow.network": "mainnet",
})

// Authenticate user
const user = await fcl.authenticate()
console.log("Logged in as:", user.addr)

// Run a script
const result = await fcl.query({
  cadence: \`
    access(all) fun main(): String {
      return "Hello from Flow!"
    }
  \`,
})`,
  },
  "/tutorials/app-quickstart": {
    title: "Flow App Quickstart",
    content: [
      "Build a full-stack Flow application with authentication, transactions, and scripts. This quickstart takes you from zero to a working dApp.",
      "You'll create a React application that connects to Flow, authenticates users via their wallet, reads onchain data with scripts, and mutates state with transactions.",
      "The app will include wallet connection, account display, and a simple transaction interface.",
    ],
  },
  // Build
  "/build/flow-quickstart": {
    title: "Flow Quickstart",
    content: [
      "Get up and running with Flow development in minutes. This quickstart covers the fastest path to deploying your first contract.",
      "Choose between Cadence development (Flow's native language) or EVM development (Solidity). Both paths are fully supported and can interoperate via the VM Bridge.",
    ],
  },
  "/build/installation": {
    title: "Installation",
    content: [
      "Install the tools you need to develop on Flow. The Flow CLI is the primary development tool and includes an emulator, dev wallet, and deployment utilities.",
      "For Cadence development, install the Flow CLI and the Cadence VS Code extension. For EVM development, use your existing Hardhat, Foundry, or Remix setup with Flow's EVM RPC endpoint.",
    ],
    code: `# macOS
brew install flow-cli

# Linux
sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"

# Verify installation
flow version`,
  },
  "/build/app-architecture": {
    title: "App Architecture",
    content: [
      "Understand how Flow applications are structured and how the different components interact.",
      "A typical Flow application consists of smart contracts (Cadence or Solidity), a frontend (using FCL or ethers.js), and optionally a backend for indexing or additional logic. Flow's Access Nodes provide the API layer between your app and the blockchain.",
    ],
  },
  "/build/cadence": {
    title: "Cadence Language Reference",
    content: [
      "Cadence is Flow's resource-oriented smart contract programming language. It is designed to ensure that digital assets are managed safely and correctly.",
      "Key features include resource types (linear types that cannot be copied), capability-based security, built-in support for events and metadata, and a strong static type system that catches errors at compile time.",
      "Cadence draws inspiration from Rust, Swift, and Move, combining the best ideas from each into a language specifically designed for smart contract development.",
    ],
  },
  "/build/design-patterns": {
    title: "Design Patterns",
    content: [
      "Common design patterns for building robust Cadence smart contracts on Flow.",
      "Learn about resource ownership patterns, capability delegation, admin resources, contract upgrades, and composability patterns that help you build secure and maintainable contracts.",
    ],
  },
  "/build/testing": {
    title: "Testing",
    content: [
      "Write comprehensive tests for your Flow smart contracts using the Cadence testing framework.",
      "The Flow CLI includes a built-in testing framework that lets you write unit tests in Cadence itself. You can test contracts, transactions, and scripts with assertions, account setup, and state verification.",
    ],
    code: `import Test

access(all) fun testHelloWorld() {
    let account = Test.createAccount()
    let err = Test.deployContract(
        name: "HelloWorld",
        path: "../contracts/HelloWorld.cdc",
        arguments: []
    )
    Test.expect(err, Test.beNil())

    let result = Test.executeScript(
        "../scripts/GetGreeting.cdc", []
    )
    Test.expect(result, Test.beSucceeded())
    Test.assertEqual("Hello, World!", result.returnValue! as! String)
}`,
  },
  "/build/cli-install": {
    title: "Install Flow CLI",
    content: [
      "The Flow CLI is available on macOS, Linux, and Windows. Install it via Homebrew, shell script, or direct download.",
    ],
  },
  "/build/cli-configuration": {
    title: "CLI Configuration",
    content: [
      "Configure the Flow CLI for your project with flow.json. This file defines your contracts, deployments, accounts, and network settings.",
      "The flow.json file is the central configuration for Flow projects. It maps contract names to source files, defines deployment targets, and stores account keys for testnet and mainnet.",
    ],
  },
  "/build/cli-deployment": {
    title: "Deployment",
    content: [
      "Deploy your contracts to Flow testnet and mainnet using the Flow CLI.",
      "The `flow project deploy` command reads your flow.json configuration and deploys contracts to the specified network. You can deploy to emulator, testnet, or mainnet.",
    ],
  },
  "/build/fcl": {
    title: "Flow Client Library (FCL)",
    content: [
      "FCL is the primary JavaScript/TypeScript SDK for building web applications on Flow. It provides a standard interface for wallet discovery, user authentication, transaction signing, and script execution.",
      "FCL abstracts away the complexity of wallet integration by providing a discovery mechanism that works with multiple wallet providers. Users choose their preferred wallet, and FCL handles the rest.",
    ],
  },
  "/build/go-sdk": {
    title: "Flow Go SDK",
    content: [
      "The Flow Go SDK is a full-featured Go client for the Flow blockchain. It's ideal for backend services, indexing systems, and server-side interactions with Flow.",
      "The SDK provides functions for sending transactions, executing scripts, querying events, and managing accounts programmatically.",
    ],
  },
  "/build/http-api": {
    title: "HTTP Access API",
    content: [
      "Flow's HTTP Access API provides a RESTful interface for querying Flow's Access Nodes. Use it to get blocks, transactions, events, accounts, and execute scripts via standard HTTP requests.",
      "The API is available at https://rest-mainnet.onflow.org for mainnet and https://rest-testnet.onflow.org for testnet.",
    ],
  },
  "/build/evm": {
    title: "Using Flow EVM",
    content: [
      "Flow EVM provides full Ethereum Virtual Machine equivalence on Flow. Deploy existing Solidity contracts, use familiar EVM tooling, and benefit from Flow's speed and low fees.",
      "Flow EVM runs as an environment within Flow's execution layer. EVM transactions are processed alongside Cadence transactions, and assets can move between the two environments via the VM Bridge.",
    ],
  },
  "/build/solidity": {
    title: "Solidity on Flow",
    content: [
      "Write and deploy Solidity smart contracts on Flow EVM. Use Hardhat, Foundry, or Remix with Flow's EVM RPC endpoints.",
      "All existing Solidity code works on Flow EVM without modification. Simply point your development tools to Flow's RPC endpoint and deploy as you would on any EVM chain.",
    ],
    code: `// hardhat.config.js
module.exports = {
  networks: {
    flowMainnet: {
      url: "https://mainnet.evm.nodes.onflow.org",
      chainId: 747,
      accounts: [process.env.PRIVATE_KEY],
    },
    flowTestnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      chainId: 545,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};`,
  },
  "/build/evm-equivalence": {
    title: "EVM Equivalence",
    content: [
      "Flow EVM aims for full EVM equivalence — meaning all EVM opcodes, precompiles, and behaviors work identically to Ethereum.",
      "This includes support for all standard EVM features like CREATE2, delegatecall, EIP-1559 fee model, and the full set of precompiled contracts. Existing contracts and tools work without modification.",
    ],
  },
  // Protocol
  "/protocol/multi-role": {
    title: "Multi-Role Architecture",
    content: [
      "Flow's multi-role architecture splits the work of a traditional blockchain validator into four specialized roles: Collection, Consensus, Execution, and Verification.",
      "This separation allows each node type to be optimized for its specific function, achieving massive throughput without sharding while maintaining full composability between all smart contracts.",
    ],
  },
  "/protocol/consensus": {
    title: "Consensus",
    content: [
      "Flow uses HotStuff, a leader-based Byzantine Fault Tolerant consensus protocol that achieves responsiveness and fast finality.",
      "Consensus nodes are lightweight and determine the ordering of transactions. They don't need to execute transactions, which allows the consensus layer to remain highly decentralized.",
    ],
  },
  "/protocol/execution": {
    title: "Execution",
    content: [
      "Execution nodes perform the actual computation on Flow — executing transactions and maintaining the global state.",
      "Flow's execution environment supports both Cadence and EVM, running them side by side in a unified state. Execution nodes produce cryptographic commitments to their results, which are then verified by verification nodes.",
    ],
  },
  "/protocol/verification": {
    title: "Verification",
    content: [
      "Verification nodes check the correctness of execution results using Specialized Proofs of Confidential Knowledge (SPoCKs).",
      "This allows verification without re-execution, enabling Flow to scale execution while maintaining trustless verification. Once enough verification nodes approve a result, the block is sealed.",
    ],
  },
  "/protocol/node-operation": {
    title: "Node Operation",
    content: [
      "Run a Flow node to support the network and earn staking rewards. Flow supports four types of nodes, each with different hardware requirements and reward structures.",
      "Collection and consensus nodes can run on modest hardware, while execution and verification nodes require more powerful machines. All node operators must stake FLOW tokens.",
    ],
  },
  "/protocol/staking": {
    title: "Staking",
    content: [
      "Stake FLOW tokens to secure the network and earn rewards. You can stake as a node operator or delegate to an existing node.",
      "Flow's staking system uses an epoch-based model where rewards are distributed at the end of each epoch (approximately one week). The minimum stake varies by node type.",
    ],
  },
  "/protocol/epochs": {
    title: "Epoch Lifecycle",
    content: [
      "Flow uses epochs to organize network operations. Each epoch lasts approximately one week and follows a lifecycle of setup, staking, and committed phases.",
      "During each epoch, nodes join and leave the network, staking rewards are calculated and distributed, and the network configuration is updated for the next epoch.",
    ],
  },
  "/protocol/flow-token": {
    title: "FLOW Token",
    content: [
      "FLOW is the native cryptocurrency of the Flow blockchain. It is used for transaction fees, storage deposits, staking, and governance.",
      "FLOW has a low inflation rate from staking rewards and transaction fees are partially burned, creating a balanced token economic model.",
    ],
  },
  "/protocol/fees": {
    title: "Transaction Fees",
    content: [
      "Flow's transaction fees consist of an inclusion fee and an execution fee. Total fees are typically under $0.001, making Flow one of the most cost-effective blockchains.",
      "Many Flow applications choose to sponsor transaction fees for their users, enabling free user experiences. The FlowFees contract manages fee collection and distribution.",
    ],
  },
  "/protocol/storage": {
    title: "Storage",
    content: [
      "Flow uses a storage deposit model where accounts reserve FLOW tokens proportional to the amount of onchain data they store.",
      "The minimum account balance is 0.001 FLOW, which provides 100KB of storage. Additional storage costs 0.001 FLOW per 100KB. Storage deposits are refundable when data is removed.",
    ],
  },
  // Ecosystem
  "/ecosystem/flow-wallet": {
    title: "Flow Wallet",
    content: [
      "The official Flow Wallet supports both Cadence and EVM accounts, providing a unified experience for all Flow assets.",
      "Available on iOS, Android, and as a Chrome extension, Flow Wallet includes an NFT gallery, staking interface, dApp browser, and seamless integration with Flow applications.",
    ],
  },
  "/ecosystem/ledger": {
    title: "Ledger Support",
    content: [
      "Secure your FLOW tokens with Ledger hardware wallets. Flow supports both Ledger Nano S and Ledger Nano X.",
      "Use the Flow app on your Ledger device to sign transactions securely. Ledger integration works with Flow Port and the Flow CLI for both regular and staking transactions.",
    ],
  },
  "/ecosystem/account-linking": {
    title: "Account Linking",
    content: [
      "Account Linking is a Flow-native feature that enables parent-child account relationships. A parent account can access and manage the resources of child accounts.",
      "This enables powerful use cases like custodial wallets that maintain user sovereignty, game accounts linked to a user's main wallet, and progressive onboarding where new users start with an app-managed account and later link to their own wallet.",
    ],
  },
  "/ecosystem/block-explorers": {
    title: "Block Explorers",
    content: [
      "Multiple block explorers are available for the Flow blockchain, supporting both Cadence and EVM transactions.",
      "Flowscan (flowscan.io) is the primary explorer for Flow, supporting both Cadence and EVM. Flow View (flowview.app) provides account and contract exploration. EVM Block Explorer (evm.flowscan.io) is a Blockscout-based explorer for Flow EVM.",
    ],
  },
  "/ecosystem/faucets": {
    title: "Faucets",
    content: [
      "Get testnet FLOW tokens for development and testing. The Flow Testnet Faucet provides up to 1,000 testnet FLOW tokens per request.",
      "Visit testnet-faucet.onflow.org to request tokens. You can also create new testnet accounts directly from the faucet. For Flow EVM testnet, your account will be automatically credited with a small amount of FLOW for gas when you first interact with it.",
    ],
  },
  "/ecosystem/bridges": {
    title: "Bridges",
    content: [
      "Bridge assets between Flow and other blockchains. Multiple bridging solutions support different assets and chains.",
      "The Flow Bridge (bridge.flow.com) and Stargate (stargate.finance) are the primary bridges for moving assets to and from Flow EVM. LayerZero and Axelar provide additional cross-chain messaging and token transfer capabilities.",
    ],
  },
  "/ecosystem/oracles": {
    title: "Oracles",
    content: [
      "Oracle services provide real-world data to smart contracts on Flow. Band Protocol and Pyth Network are the primary oracle providers.",
      "Use oracles for price feeds, random number generation, and accessing off-chain data in your DeFi applications.",
    ],
  },
  "/ecosystem/grants": {
    title: "Grants",
    content: [
      "The Flow Ecosystem Fund provides grants to teams building on Flow. Grants are available for infrastructure, tooling, DeFi, gaming, and community projects.",
      "Apply for grants through the Flow Foundation's grants program. Successful applicants receive FLOW tokens, technical support, and marketing assistance.",
    ],
  },
  "/ecosystem/bug-bounty": {
    title: "Bug Bounty",
    content: [
      "Flow maintains an active bug bounty program to incentivize responsible disclosure of security vulnerabilities.",
      "Rewards range from $500 to $100,000 depending on the severity of the vulnerability. The program covers the core protocol, smart contracts, and key infrastructure.",
    ],
  },
  "/ecosystem/events": {
    title: "Events",
    content: [
      "Stay connected with the Flow community through regular events, hackathons, and developer meetups.",
      "Flow hosts regular office hours, developer workshops, and hackathons. Join the Flow Discord to stay updated on upcoming events and community activities.",
    ],
  },
};

function findSidebarTitle(items: SidebarItem[], path: string): string | null {
  for (const item of items) {
    if (item.to === path) return item.title;
    if (item.children) {
      const found = findSidebarTitle(item.children, path);
      if (found) return found;
    }
  }
  return null;
}

export function SubDocPage({ section }: { section: string }) {
  const location = useLocation();
  const path = location.pathname;
  const config = SECTIONS[section];

  if (!config) {
    return (
      <div className="text-white/90 font-['Epilogue',sans-serif] p-20 text-center">
        <h1 className="text-[36px] mb-4">Page Not Found</h1>
        <p className="text-white/50">
          <Link to="/" className="text-[#00EF8B] hover:underline">Return home</Link>
        </p>
      </div>
    );
  }

  const pageContent = PAGE_CONTENT[path];
  const title = pageContent?.title || findSidebarTitle(config.sidebar, path) || "Documentation";
  const content = pageContent?.content || [
    "This page is part of the Flow documentation. Content is being expanded — check back soon for comprehensive guides and references.",
  ];
  const code = pageContent?.code;

  return (
    <DocLayout
      breadcrumbs={[
        { label: config.label, to: config.basePath },
        { label: title },
      ]}
      sidebar={config.sidebar}
      toc={[]}
    >
      <h1 className="text-[36px] tracking-[-1px] mb-8">{title}</h1>
      {content.map((paragraph, i) => (
        <p key={i} className="text-white/70 text-[15px] leading-[1.75] mb-4" dangerouslySetInnerHTML={{
          __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        }} />
      ))}
      {code && (
        <div className="bg-[#00180E] border border-white/[0.06] rounded-xl p-5 mt-6">
          <pre className="text-[13px] text-[#00EF8B]/80 font-mono leading-relaxed overflow-x-auto">
            {code}
          </pre>
        </div>
      )}
    </DocLayout>
  );
}