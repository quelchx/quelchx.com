import React from "react";
import { motion } from "framer-motion";

const TextShadow = ({ children }: { children: string | React.ReactNode }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        textShadow: "0px 0px 8px rgba(255, 255, 255, 0.2)",
      }}
      className="font-medium"
    >
      {children}
    </motion.span>
  );
};

export default TextShadow;
