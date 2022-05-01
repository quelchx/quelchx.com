import React from "react";
import { chakra } from "@chakra-ui/react";
import Meta from "./Meta";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { MetaProps, PageLayoutProps } from "../../interface";

const PageLayout = ({ children, ...overrides }: PageLayoutProps & MetaProps) => {
  return (
    <Meta {...overrides}>
      <Navigation />
      <chakra.main mb={12}>{children}</chakra.main>
      <Footer />
    </Meta>
  );
};

export default PageLayout;
