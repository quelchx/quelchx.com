import React from "react";
import HeroSVG from "./svg/HeroSVG";

export default function Hero() {
  return (
    <section className="px-2 pt-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Eric Quelch
            <span> {/* empty span for spacing */} </span>
            <span className="block mt-1 text-green-500 lg:inline lg:mt-0">
              Full Stack Developer
            </span>
          </span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Welcome and thanks for dropping by! Im 
          <span className="text-green-500"> Eric Quelch</span>, a junior full
          stack web developer currently in college.
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
         
        </div>
      </div>
      <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
        <HeroSVG />
      </div>
    </section>
  );
}
