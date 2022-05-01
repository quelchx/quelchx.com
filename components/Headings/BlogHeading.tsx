import React from "react";
import dynamic from "next/dynamic";
import { chakra } from "@chakra-ui/react";

import VoxelComputerLoader from "../VoxelLoader/VoxelComputerLoader";

const LazyVoxelComputer = dynamic(
  () => import("../VoxelLoader/VoxelComputer"),
  {
    ssr: false,
    loading: () => <VoxelComputerLoader />,
  }
);

const BlogHeading = () => {
  return (
    <chakra.div pb={50} pt={100}>
      <LazyVoxelComputer />
    </chakra.div>
  );
};

export default BlogHeading;
