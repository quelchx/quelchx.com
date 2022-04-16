import { motion } from "framer-motion";
import React from "react";
import TypeWriter from "typewriter-effect";
import data from "../../constants";
import HighlightHeading from "../HighlightHeading";

const Hero = () => {
  return (
    <section className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div className="flex flex-wrap items-center sm:-mx-4">
        <HighlightHeading highlights={data.highlights} />

        <div className="w-full md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
            <motion.img
              variants={data.variants.hoverVariant}
              whileHover="hover"
              width="auto"
              height="auto"
              alt="avatar"
              src={data.social.avatar}
              className="rounded-full shadow hover:animate-pulse"
            />

            <div className="flex flex-row justify-between mt-4 pl-36">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={data.variants.containerVariants}
                className="flex flex-row space-x-4 hover:-rotate-2 rotate-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Yep, thats me")
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
