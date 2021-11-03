import React from "react";
import Project from "@/components/Project";

import { projects } from "../interfaces/projects";

export default function Projects() {
  const listProjects = projects.map((project) => {
    return (
      <div className="mt-4" key={project.id}>
        <Project
          name={project.name}
          image={project.image}
          details={project.details}
          path={project.path}
        />
      </div>
    );
  });

  return (
    <section
      id="projects"
      className="flex items-center justify-center py-16 bg-gray-100 min-w-screen"
    >
      <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium tracking-tight text-green-600 uppercase">
              What I have been up to
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Side Projects
            </h2>
            <p className="my-6 text-lg text-gray-600">
              Here are a few useful packages and side projects I have created.
            </p>
          </div>
          <div className="w-full lg:w-1/2">{listProjects}</div>
        </div>
      </div>
    </section>
  );
}
