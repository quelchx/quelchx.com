import React from "react";
import Meta from "./meta";
import Navbar from "./navbar";
import Footer from "./footer";
import { PageLayoutProps } from "../../@types";

const PageContainer = ({ children, ...overrides }: PageLayoutProps) => {
  return (
    <>
      <Meta {...overrides} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
