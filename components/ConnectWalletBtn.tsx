import { WalletStatus } from "@cosmos-kit/core";
import Button from "./Button";
import LoaderCircles from "./LoaderCircles";
import { useChain } from "@cosmos-kit/react";
import { chain } from "../config";

type ConnectWalletBtnProps = {
  text?: string;
};

const ConnectWalletBtn = ({
  text = "Connect Wallet",
}: ConnectWalletBtnProps) => {
  const { connect, status, openView, address } = useChain(chain.chainName);
  switch (status) {
    case WalletStatus.Disconnected:
      return <Button onClick={() => connect()} text={text} />;
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
      return <Button onClick={() => openView()} text={address ?? ""} />;
    case WalletStatus.Rejected:
      return <Button onClick={() => connect()} text="Try Again" />;
    case WalletStatus.Error:
      return <Button onClick={() => openView()} text="Change Wallet" />;
    case WalletStatus.NotExist:
      return <Button onClick={() => openView()} text="Install Wallet" />;
    default:
      return <Button onClick={() => openView()} text={text} />;
  }
};

export default ConnectWalletBtn;
