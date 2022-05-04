import React from "react";
import { ProjectProps } from "../../@types";
import Project from "./project";

import PROJECTS from "../../constants/projects";

const Projects = () => {
  return (
    <div className="max-w-6xl px-8 mx-auto md:px-16 xl:px-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-start justify-center w-full h-full pt-20 pr-0 mb-10 lg:pr-20 lg:mb-0 lg:w-1/2">
          <p className="mb-2 text-base font-medium tracking-tight text-blue-500 uppercase">
            What I have been up to
          </p>
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            Projects I Have Made
          </h2>
          <p className="my-2 text-lg ">
            Here are a few useful packages and side projects I've created.
            More to come in the future!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          {PROJECTS.map((project: ProjectProps, idx: string | number) => {
            const { name, image, details, path } = project;
            return (
              <div key={idx}>
                <div className="mb-4">
                  <Project
                    name={name}
                    image={image}
                    details={details}
                    path={path}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
