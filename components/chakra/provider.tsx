import React from "react";
import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";
import VoxelComputerLoader from "./loader/loader";

const LazyVoxelComputer = dynamic(
  () => import("./loader/computer"),
  {
    ssr: false,
    loading: () => <VoxelComputerLoader />,
  }
);

const ChakraComponent = () => {
  return (
    <ChakraProvider>
      <LazyVoxelComputer />
    </ChakraProvider>
  );
};

export default ChakraComponent;
