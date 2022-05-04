import React from "react";
import type { NextPage } from "next";
import { PageContainer, Projects } from "../components";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer>
      <div className="my-12">
        <Projects />
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
