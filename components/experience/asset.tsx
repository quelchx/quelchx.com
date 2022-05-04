import React from "react";
import { motion } from "framer-motion";
import VARIANTS from "../../constants/variants";
import { AssetProps } from "../../@types";

const Asset = ({ icon, asset, details }: AssetProps) => {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden shadow-sm-light dark:shadow-lg sm:rounded-xl">
      <i className={icon + " is-icon"}></i>
      <p className="text-xl font-medium">
        {asset}
      </p>
      <motion.p
        variants={VARIANTS.svgVariant}
        whileHover="hover"
        className="text-base text-center"
      >
        {details}
      </motion.p>
    </div>
  );
};

export default Asset;
