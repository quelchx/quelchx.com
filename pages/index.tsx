import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Experience, HomeHero, PageContainer } from "../components";

const HomePage: NextPage = () => {

  return (
    <PageContainer>
      <HomeHero />
    </PageContainer>
  );
};

export default HomePage;
