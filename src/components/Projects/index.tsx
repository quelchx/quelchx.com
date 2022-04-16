import React from "react";
import Animate from "../Animate";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <Animate>
      <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <Animate animation="zoom-in">
              <p className="mb-2 text-base font-medium tracking-tight text-green-500 uppercase">
                What I have been up to
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Projects of mine
              </h2>
              <p className="my-2 text-lg ">
                Here are a few useful packages and side projects I have created.
              </p>
            </Animate>
          </div>
          <div className="w-full lg:w-1/2">
            <ProjectList />
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Projects;
