import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Animate, HomeHero, PageContainer } from "../components";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Animate animation="fade-left" delay={400} duration={600}>
        <HomeHero />
      </Animate>
    </PageContainer>
  );
};

export default HomePage;
