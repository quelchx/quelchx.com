import { motion } from "framer-motion";
import React from "react";
import data from "../../constants";
import Animate from "../Animate";

type HighlightHeadingProps = {
  highlights: string[];
};

const HighlightHeading = ({ highlights }: HighlightHeadingProps) => {
  return (
    <div className="w-full md:w-1/2 md:px-2">
      {highlights.map((highlight, idx) => {
        let i = data.highlights.indexOf(highlight);
        return (
          <Animate
            animation="fade-left"
            duration={i * 250}
            delay={i * 400}
            key={highlight}
          >
            <div
              key={idx}
              className="flex my-2 text-3xl font-bold text-gray-100 sm:text-5xl lg:text-8xl md:text-7xl dark:text-white"
            >
              <motion.span
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1, originX: 0 }}
                style={{ backgroundColor: data.colors[i] }}
              >
                <p className="pt-2">{highlight}</p>
              </motion.span>
            </div>
          </Animate>
        );
      })}
    </div>
  );
};

export default HighlightHeading;
