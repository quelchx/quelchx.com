import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { BiGitRepoForked, BiLink } from "react-icons/bi";
import { RepoProps } from "../../@types";

const svgVariant = {
  hover: {
    color: "#0b73be",
    transition: {
      duration: 0.3,
    },
  },
};

const RepoCard = ({ repo }: RepoProps) => {
  const {
    name,
    description,
    stargazers_count: stars,
    forks_count: forks,
  } = repo;

  return (
    <section>
      <p className="mt-4 mb-2 font-semibold">{name.toUpperCase()}</p>
      <p>{description}</p>
      <div className="flex flex-row gap-2 py-2">
        <motion.div
          variants={svgVariant}
          whileHover="hover"
          className="flex flex-row hvr-pulse"
        >
          <FiStar />
          <p className="pl-1">{stars}</p>
        </motion.div>
        <motion.div
          variants={svgVariant}
          whileHover="hover"
          className="flex flex-row hvr-buzz-out"
        >
          <div className="pt-0.5">
            <BiGitRepoForked />
          </div>
          <p className="pl-0.5">{forks}</p>
        </motion.div>
        <motion.a
          variants={svgVariant}
          whileHover="hover"
          href={repo.clone_url}
          className="flex flex-row items-center w-full space-x-2 font-semibold group"
        >
          <p className="hvr-wobble-bottom">View Repository </p>
          <div className="pt-0.5 hvr-buzz-out">
            <BiLink />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default RepoCard;
