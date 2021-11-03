import React from "react";
import HeroSVG from "./svg/HeroSVG";
import ChevronSVG from "./svg/ChevronSVG";

export default function Hero() {
  return (
    <section className="px-2 pt-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Eric Quelch
            <span>{/* empty span for spacing */}</span>
            <span className="block mt-1 text-green-500 lg:inline lg:mt-0">
              Full Stack Developer
            </span>
          </span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          consequuntur porro assumenda explicabo impedit ex neque placeat.
          Voluptatem repudiandae aperiam sequi tenetur inventore officiis
          distinctio sed perspiciatis, earum voluptatum! Inventore.
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <a
            href="#_"
            className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-500 rounded-md md:mb-0 hover:bg-green-700 md:w-auto"
          >
            Projects of Mine
            <ChevronSVG/>
          </a>
          <a
            href="#_"
            className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
        <HeroSVG/>
      </div>
    </section>
  );
}
