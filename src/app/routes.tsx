import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { DefiPage } from "./components/DefiPage";
import { TutorialsPage } from "./components/docs/TutorialsPage";
import { BuildPage } from "./components/docs/BuildPage";
import { ProtocolPage } from "./components/docs/ProtocolPage";
import { EcosystemPage } from "./components/docs/EcosystemPage";
import { ContractsMainnetPage } from "./components/docs/defi/ContractsMainnetPage";
import { ContractsTestnetPage } from "./components/docs/defi/ContractsTestnetPage";
import { CrossChainSwapsPage } from "./components/docs/defi/CrossChainSwapsPage";
import { AddTokenMetaMaskPage } from "./components/docs/defi/AddTokenMetaMaskPage";
import { BandOraclePage } from "./components/docs/defi/BandOraclePage";
import { FaqPage } from "./components/docs/defi/FaqPage";
import { FortePage } from "./components/docs/defi/FortePage";
import { PyusdPage } from "./components/docs/defi/PyusdPage";
import { SubDocPage } from "./components/docs/SubDocPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "defi", Component: DefiPage },
      { path: "defi/forte", Component: FortePage },
      { path: "defi/contracts-mainnet", Component: ContractsMainnetPage },
      { path: "defi/contracts-testnet", Component: ContractsTestnetPage },
      { path: "defi/cross-chain-swaps", Component: CrossChainSwapsPage },
      { path: "defi/add-token-metamask", Component: AddTokenMetaMaskPage },
      { path: "defi/band-oracle", Component: BandOraclePage },
      { path: "defi/faq", Component: FaqPage },
      { path: "defi/pyusd-integration", Component: PyusdPage },
      { path: "tutorials", Component: TutorialsPage },
      { path: "build", Component: BuildPage },
      { path: "protocol", Component: ProtocolPage },
      { path: "ecosystem", Component: EcosystemPage },
      { path: "tutorials/:slug", element: <SubDocPage section="tutorials" /> },
      { path: "build/:slug", element: <SubDocPage section="build" /> },
      { path: "protocol/:slug", element: <SubDocPage section="protocol" /> },
      { path: "ecosystem/:slug", element: <SubDocPage section="ecosystem" /> },
    ],
  },
]);
