import { NibiruQuerier } from "@nibiruchain/nibijs";
import { chain } from "../config";
import { useEffect, useState } from "react";

const IbcDetails = () => {
  const [channels, setChannels] = useState([]);
  const fetch = async () => {
    const querier = await NibiruQuerier.connect(chain.endptTm);
    const response = await querier.nibiruExtensions.ibc.channel.allChannels();

    const respChannels = response?.channels;
    setChannels(respChannels as never[]);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-col items-start">
      {channels?.map(({ channelId, counterparty }) => (
        <p key={channelId}>
          {channelId} {JSON.stringify(counterparty)}
        </p>
      ))}
    </div>
  );
};

export default IbcDetails;
