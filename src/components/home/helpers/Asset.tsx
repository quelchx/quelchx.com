import React from "react";
import { Asset } from "../../../types";

const Asset: React.FC<Asset> = ({ icon, asset, details }) => {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 dark:bg-gray-800 sm:rounded-xl">
      <i className={icon + " is-icon"}></i>
      <p className="text-xl font-medium text-gray-700 dark:text-white">
        {asset}
      </p>
      <p className="text-base text-center text-gray-500 hvr-pop dark:text-gray-200">
        {details}
      </p>
    </div>
  );
};

export default Asset;
