import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
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

const Meta = ({ children, ...overrides }: MetaProps) => {
  return (
    <React.Fragment>
      <MetaHead {...overrides} />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Meta;
