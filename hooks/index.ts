import { HeartMonitor } from "@nibiruchain/nibijs";
import { chain } from "../config";

export const heartMonitorEndpoint = () => chain.endptHm;
export const webSocketEndpoint = () => chain.endptWs;

export const useHeartMonitor = (isSubscription?: boolean) =>
  new HeartMonitor(
    heartMonitorEndpoint(),
    isSubscription ? webSocketEndpoint() : undefined,
    WebSocket
  );
