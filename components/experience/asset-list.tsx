import React from "react";
import Asset from "./asset";
import ASSETS from "../../constants/assets";
import { AssetProps } from "../../@types";

const AssetList = () => {
  return (
    <>
      {ASSETS.map((asset: AssetProps) => {
        return (
          <Asset
            key={asset.asset}
            icon={asset.icon}
            asset={asset.asset}
            details={asset.details}
          />
        );
      })}
    </>
  );
};

export default AssetList;
