import { WalletStatus } from "@cosmos-kit/core";
import { ReactNode } from "react";
import { DefaultButton } from "./DefaultButton";
import LoaderCircles from "./LoaderCircles";
import { useChain } from "@cosmos-kit/react";
import { chain } from "../config";

type ConnectWalletBtnProps = {
  text?: string;
  className?: string;
  children?: ReactNode;
  disconnected?: ReactNode;
};

const ConnectWalletBtn = ({
  text = "Connect Wallet",
  className,
  children,
  disconnected,
}: ConnectWalletBtnProps) => {
  const { connect, status, openView, address } = useChain(chain.chainName);
  switch (status) {
    case WalletStatus.Disconnected:
      return (
        <>
          {disconnected}
          <DefaultButton
            className={className}
            onClick={() => connect()}
            text={text}
          />
        </>
      );
    case WalletStatus.Connecting:
      return (
        <div
          data-testid="loader-circles"
          className="w-full h-full flex justify-center"
        >
          <LoaderCircles count={5} />
        </div>
      );
    case WalletStatus.Connected:
      return (
        <DefaultButton
          className={className}
          onClick={() => openView()}
          text={address ?? ""}
        />
      );
    case WalletStatus.Rejected:
      return (
        <DefaultButton
          className={className}
          onClick={() => connect()}
          text="Try Again"
        />
      );
    case WalletStatus.Error:
      return (
        <DefaultButton
          className={className}
          onClick={() => openView()}
          text="Change Wallet"
        />
      );
    case WalletStatus.NotExist:
      return (
        <DefaultButton
          className={className}
          onClick={() => openView()}
          text="Install Wallet"
        />
      );
    default:
      return (
        <DefaultButton
          className={className}
          onClick={() => openView()}
          text={text}
        />
      );
  }
};

export default ConnectWalletBtn;
