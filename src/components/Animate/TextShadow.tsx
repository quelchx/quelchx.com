import { motion } from "framer-motion";
import React from "react";

const TextShadow = ({ children }: { children: string | React.ReactNode }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        textShadow: "0px 0px 8px rgba(255, 255, 255, 0.2)",
      }}
      className="font-medium text-gray-500"
    >
      {children}
    </motion.span>
  );
};

export default TextShadow;
