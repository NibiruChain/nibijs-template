import { useChain } from "@cosmos-kit/react";
import { chain } from "../config";
import { useNibiruClient } from "../context";
import Button from "./Button";
import { Coin } from "@nibiruchain/nibijs/dist/src/protojs/cosmos/base/v1beta1/coin";
import { useState } from "react";

const Balances = () => {
  const { address = "" } = useChain(chain.chainName);
  const { signingClient } = useNibiruClient();
  const [balances, setBalances] = useState<readonly Coin[] | undefined>([]);
  return (
    <div>
      <Button
        text="Get Balances"
        onClick={async () => {
          await signingClient?.amino
            ?.getAllBalances(address)
            .then((coins) => setBalances(coins));
        }}
      />
      <div>{JSON.stringify(balances)}</div>
    </div>
  );
};

export default Balances;
