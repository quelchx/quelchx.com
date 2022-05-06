import React from "react";
import type { NextPage } from "next";
import { Animate, Experience, PageContainer } from "../components";

const ExperiencePage: NextPage = () => {
  return (
    <PageContainer title="My Stack" description="Eric Quelch's Tech Stack">
      <Animate animation="fade-left" delay={400} duration={500}>
        <Experience />
      </Animate>
    </PageContainer>
  );
};

export default ExperiencePage;
