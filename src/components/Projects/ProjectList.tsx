import React from "react";
import data from "../../constants";
import Animate from "../Animate";
import Project, { ProjectProps } from "./Project";

const ProjectList = () => {
  return (
    <React.Fragment>
      {data.projects.map((project: ProjectProps, idx: number) => {
        return (
          <div key={project.name}>
            <Animate
              animation="zoom-in"
              duration={(idx + 1) * 500}
              delay={(idx + 1) * 300}
            >
              <div className="mb-4">
                <Project
                  name={project.name}
                  image={project.image}
                  details={project.details}
                  path={project.path}
                />
              </div>
            </Animate>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectList;
