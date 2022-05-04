import React from "react";
import type { NextPage } from "next";
import { PageContainer, Projects } from "../components";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer title="My Projects" description="Eric Quelch's current projects">
      <div className="my-12">
        <Projects />
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
