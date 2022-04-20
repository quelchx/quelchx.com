import dynamic from "next/dynamic";

import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import VoxelComputerLoader from "../VoxelComputerLoader";
import MetaHead from "./MetaHead";
export interface MetaProps {
  children: React.ReactNode;
  [overrides: string]: any;
}
export interface MetaState {
  title: string;
  description: string;
  image: string;
  type: string;
}

const LazyVoxelComputer = dynamic(() => import("../VoxelComputer"), {
  ssr: false,
  loading: () => <VoxelComputerLoader />,
});

const Meta = ({ children, ...overrides }: MetaProps) => {

  return (
    <React.Fragment>
      <MetaHead {...overrides} />
      <Navbar />
      <LazyVoxelComputer />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Meta;
