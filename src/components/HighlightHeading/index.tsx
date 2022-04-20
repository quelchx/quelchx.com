import { motion } from "framer-motion";
import React from "react";
import data from "../../constants";
import Animate from "../Animate";

type HighlightHeadingProps = {
  highlights: string[];
};

const HighlightHeading = ({ highlights }: HighlightHeadingProps) => {
  return (
    <div className="w-full grid grid-cols-2 place-items-center">
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
              className="flex my-2 text-2xl font-bold sm:text-4xl lg:text-7xl md:text-6xl"
            >
              <motion.span
              className="rounded-tr-2xl"
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1, originX: 0 }}
                style={{ backgroundColor: data.colors[i] }}
              >
                <p className="p-3">{highlight}</p>
              </motion.span>
            </div>
          </Animate>
        );
      })}
    </div>
  );
};

export default HighlightHeading;
