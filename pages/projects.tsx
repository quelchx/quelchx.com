import React from "react";
import type { NextPage } from "next";
import { Animate, PageContainer, Projects } from "../components";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer
      title="My Projects"
      description="Eric Quelch's current projects"
    >
      <div className="my-12">
        <Animate animation="fade-left" delay={400} duration={500}>
          <Projects />
        </Animate>
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
