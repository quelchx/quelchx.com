import React from "react";
import data from "../../constants";
import AOS from "../AOS";
import Project from "./helpers/Project";

const Projects: React.FC = () => {
  const listProjects = data.projects.map(
    (project: any, idx: string | number) => {
      return (
        <div key={idx}>
          <AOS animation="zoom-in" duration="500" delay="300">
            <div className="mb-4">
              <Project
                name={project.name}
                image={project.image}
                details={project.details}
                path={project.path}
              />
            </div>
          </AOS>
        </div>
      );
    }
  );

  return (
    <AOS>
      <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <AOS animation="zoom-in">
              <p className="mb-2 text-base font-medium tracking-tight text-green-500 uppercase">
                What I have been up to
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Projects of mine
              </h2>
              <p className="my-2 text-lg ">
                Here are a few useful packages and side projects I have created.
              </p>
            </AOS>
          </div>
          <div className="w-full lg:w-1/2">{listProjects}</div>
        </div>
      </div>
    </AOS>
  );
};

export default Projects;
