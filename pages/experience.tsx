import React from "react";
import type { NextPage } from "next";
import { Experience, PageContainer } from "../components";

const ExperiencePage: NextPage = () => {
  return (
    <PageContainer title='My Stack' description="Eric Quelch's Tech Stack">
      <Experience />
    </PageContainer>
  );
};

export default ExperiencePage;
