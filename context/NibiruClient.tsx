import { useChain } from "@cosmos-kit/react";
import { NibiruTxClient } from "@nibiruchain/nibijs";
import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
} from "react";
import { chain } from "../config";

interface NibiruClientContext {
  signingClient?: { amino?: NibiruTxClient };
}

const nibiruClient = createContext({} as NibiruClientContext);

export const NibiruClientProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const { status, address, isWalletConnected, getOfflineSignerAmino } =
    useChain(chain.chainName);
  const [signingClient, setSigningClient] = useState<{
    direct?: NibiruTxClient;
    amino?: NibiruTxClient;
  }>({ direct: undefined, amino: undefined });

  const setSigners = async () => {
    // amino
    const signerAmino = getOfflineSignerAmino();
    const aminoPromise = NibiruTxClient.connectWithSigner(
      chain.endptTm,
      signerAmino
    );

    const isFulfilled = <T,>(
      p: PromiseSettledResult<T>
    ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";

    const [aminoClient] = await Promise.allSettled([aminoPromise]);

    const [amino] = [aminoClient].filter(isFulfilled).map((p) => p.value);

    setSigningClient({
      amino,
    });
  };

  useEffect(() => {
    if (isWalletConnected) {
      setSigners();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, address, isWalletConnected]);

  const memo = useMemo(() => ({ signingClient }), [signingClient]);

  return <nibiruClient.Provider value={memo}>{children}</nibiruClient.Provider>;
};

export const useNibiruClient = () => useContext(nibiruClient);
