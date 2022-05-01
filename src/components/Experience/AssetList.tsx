import React from "react";
import data from "../../constants";
import Asset, { AssetProps } from "./Asset";

const AssetList = () => {
  return (
    <React.Fragment>
      {data.assets.map((asset: AssetProps) => {
        return (
          <Asset
            key={asset.asset}
            icon={asset.icon}
            asset={asset.asset}
            details={asset.details}
          />
        );
      })}
    </React.Fragment>
  );
};

export default AssetList;
