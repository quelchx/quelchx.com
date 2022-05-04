import React from "react";
import Meta from "./meta";
import Navbar from "./navbar";
import Footer from "./footer";
import { PageLayoutProps } from "../../@types";

const PageContainer = ({ children, ...overrides }: PageLayoutProps) => {
  return (
    <div className="dark:bg-neutral-900 dark:text-white">
      <Meta {...overrides} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
