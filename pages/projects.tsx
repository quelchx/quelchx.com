import React from "react";
import type { NextPage } from "next";

import {
  Animate,
  PageLayout,
  ProjectCard,
  ProjectsHeading,
} from "../components";

import meta from "../constants/meta";
import projects from "../constants/projects";

const ProjectsPage: NextPage = () => {
  const { title, description } = meta.projects;
  return (
    <PageLayout title={title} description={description}>
      <ProjectsHeading />
      {projects.map((project, idx) => {
        const { title, description, link, features } = project;
        return (
          <Animate
            key={title}
            animation="fade-up"
            delay={idx + 1 + 500}
            duration={(idx + 1) * 250}
          >
            <ProjectCard
              title={title}
              link={link}
              description={description}
              features={features}
            />
          </Animate>
        );
      })}
    </PageLayout>
  );
};

export default ProjectsPage;
