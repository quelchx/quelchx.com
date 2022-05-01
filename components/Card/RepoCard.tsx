import React from "react";

import { Box, chakra, HStack } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import { CgGitFork } from "react-icons/cg";
import { AiFillCaretRight } from "react-icons/ai";

import Redirect from "../Redirect/Redirect";
import { RepoProps } from "../../interface";

const RepoCard = ({ repo }: RepoProps) => {
  const {
    name,
    description,
    clone_url: link,
    forks_count: forks,
    stargazers_count: stars,
  } = repo;

  return (
    <Box>
      <chakra.p mt={4} mb={2} fontWeight="semibold">
        {name.toUpperCase()}
      </chakra.p>
      <chakra.p>{description}</chakra.p>
      <HStack my={2}>
        <FiStar />
        <chakra.p>{stars}</chakra.p>
        <CgGitFork />
        <chakra.p>{forks}</chakra.p>
      </HStack>
      <HStack>
        <AiFillCaretRight />
        <Redirect href={link}>
          <chakra.span className='hvr-buzz-out'>Visit Repository</chakra.span>
        </Redirect>
      </HStack>
    </Box>
  );
};

export default RepoCard;
