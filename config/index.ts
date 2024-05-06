import { Chain, AssetList } from "@chain-registry/types";
import { Testnet } from "@nibiruchain/nibijs";

export const chain = Testnet(1);

const GAS_MULT = 5;

export const ChainSchema: Chain[] = [chain].map((chain) => ({
  $schema: "../chain.schema.json",
  chain_name: chain.chainName,
  status: "live",
  network_type: chain.chainName.includes("cataclysm") ? "mainnet" : "testnet",
  website: "https://nibiru.fi/",
  update_link: "",
  pretty_name: "Nibiru",
  chain_id: chain.chainId,
  bech32_prefix: "nibi",
  bech32_config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub",
  },
  daemon_name: "nibid",
  node_home: "$HOME/.nibid",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "unibi",
        fixed_min_gas_price: 0.01 * GAS_MULT,
        low_gas_price: 0.01 * GAS_MULT,
        average_gas_price: 0.025 * GAS_MULT,
        high_gas_price: 0.04 * GAS_MULT,
      },
    ],
  },
  staking: { staking_tokens: [{ denom: "unibi" }] },
  codebase: {
    git_repo: "https://github.com/NibiruChain/nibiru",
    recommended_version: "v0.21.11",
    compatible_versions: ["v0.21.11"],
    binaries: {
      "darwin/amd64":
        "https://github.com/NibiruChain/nibiru/releases/download/v0.21.11/nibid_0.21.11_darwin_amd64.tar.gz",
      "darwin/arm64":
        "https://github.com/NibiruChain/nibiru/releases/download/v0.21.11/nibid_0.21.11_darwin_arm64.tar.gz",
      "linux/amd64":
        "https://github.com/NibiruChain/nibiru/releases/download/v0.21.11/nibid_0.21.11_linux_amd64.tar.gz",
      "linux/arm64":
        "https://github.com/NibiruChain/nibiru/releases/download/v0.21.11/nibid_0.21.11_linux_arm64.tar.gz",
    },
    cosmos_sdk_version: "", // to be filled
    consensus: {
      type: "tendermint",
      version: "informalsystems/tendermint@0.34.24",
    },
    cosmwasm_version: "", // to be filled
    cosmwasm_enabled: false,
    ibc_go_version: "", //to be filled
    ics_enabled: [],
    genesis: {
      name: "",
      genesis_url: "",
    },
    versions: [],
  },
  images: [
    {
      svg: "https://github.com/NibiruChain/explorer/blob/master/public/logo.svg",
      theme: {
        primary_color_hex: "#1E173D",
      },
    },
  ],
  logo_URIs: {
    png: "https://github.com/NibiruChain/explorer/blob/master/public/logo.png",
    svg: "https://nibiru.fi/assets/nibi-logo-smooth.727efedc.svg",
  },
  peers: { seeds: [], persistent_peers: [] },
  apis: {
    rpc: [{ address: chain.endptTm, provider: "Nibiru Foundation" }],
    rest: [{ address: chain.endptRest, provider: "Nibiru Foundation" }],
    grpc: [{ address: chain.endptGrpc, provider: "Nibiru Foundation" }],
  },
  explorers: [
    {
      kind: "explorers.nibiru",
      url: "https://explorer.nibiru.fi/",
      tx_page:
        "https://explorer.nibiru.fi/" + chain.chainName + "/tx/${txHash}",
      account_page:
        "https://explorer.nibiru.fi/" +
        chain.chainName +
        "/account/${accountAddress}",
    },
  ],
  keywords: ["nibi", "unibi", "unusd", "nusd", "NIBI", "Nibiru", "NibiruChain"],
}));

export const AssetsList: AssetList[] = [
  {
    $schema: "../assetlist.schema.json",
    chain_name: chain.chainName,
    assets: [
      {
        description: "The native token of Nibiru",
        denom_units: [
          { denom: "nibi", exponent: 6 },
          { denom: "unibi", exponent: 0 },
        ],
        base: "unibi",
        name: "Nibi",
        display: "nibi",
        symbol: "NIBI",
      },
    ],
  },
];
