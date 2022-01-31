import React from "react";
import Project from "./Project";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import projects from "@/constants/projects";
import guid from "@/utils/uuid";

export default function Projects() {
  const listProjects = projects.map((project) => {
    return (
      <div key={guid()}>
        <AnimateOnScroll animation="zoom-in" duration="500" delay="300">
          <div className="mb-4">
            <Project
              name={project.name}
              image={project.image}
              details={project.details}
              path={project.path}
            />
          </div>
        </AnimateOnScroll>
      </div>
    );
  });

  return (
    <AnimateOnScroll>
      <section
        id="projects"
        className="flex items-center justify-center py-16 dark:bg-gray-900 bg-gray-100 min-w-screen"
      >
        <div className="max-w-6xl px-12 mx-auto bg-gray-100 dark:bg-gray-900 md:px-16 xl:px-10">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <AnimateOnScroll animation="zoom-in">
                <p className="mb-2 text-base font-medium tracking-tight text-green-500 uppercase">
                  What I have been up to
                </p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight dark:text-gray-300 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  Projects of mine
                </h2>
                <p className="my-2 text-lg text-gray-600 dark:text-gray-300">
                  Here are a few useful packages and side projects I have
                  created.
                </p>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-1/2">{listProjects}</div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}