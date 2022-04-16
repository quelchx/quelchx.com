import { motion } from "framer-motion";
import React from "react";
import data from "../../constants";

export type AssetProps = {
  icon: string;
  asset: string;
  details: string;
};

const Asset = ({ icon, asset, details }: AssetProps) => {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 dark:bg-gray-800 sm:rounded-xl">
      <i className={icon + " is-icon"}></i>
      <p className="text-xl font-medium text-gray-700 dark:text-white">
        {asset}
      </p>
      <motion.p
        variants={data.variants.svgVariant}
        whileHover="hover"
        className="text-base text-center text-gray-500 hvr-pop dark:text-gray-200"
      >
        {details}
      </motion.p>
    </div>
  );
};

export default Asset;
