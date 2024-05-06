import "../styles/globals.css";
import "@interchain-ui/react/styles";

import type { AppProps } from "next/app";
import { SignerOptions, wallets } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import Layout from "../layouts";
import { Metadata } from "next";
import { AssetsList, ChainSchema } from "../config";

export const metadata: Metadata = {
  title: "Nibiru | Template App",
  description: "Empty Nibi JS Template App",
  metadataBase: new URL("https://nibiru.fi/"),
};

function App({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ChainProvider
      chains={ChainSchema}
      assetLists={AssetsList}
      wallets={[...keplrWallets, ...leapWallets, ...cosmostationWallets]}
      walletConnectOptions={{
        signClient: {
          projectId: "a8510432ebb71e6948cfd6cde54b70f7",
          relayUrl: "wss://relay.walletconnect.org",
          metadata: {
            name: "CosmosKit Template",
            description: "CosmosKit dapp template",
            url: "https://docs.cosmology.zone/cosmos-kit/",
            icons: [],
          },
        },
      }}
      // @ts-ignore
      signerOptions={signerOptions}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChainProvider>
  );
}

export default App;
