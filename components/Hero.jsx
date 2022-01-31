import React from "react";
import HeroSVG from "./svg/HeroSVG";
import AOS from "@/components/AOS";

export default function Hero() {
  return (
    <AOS once={true} delay="200" duration="400">
      <section className="px-2 pt-32 dark:bg-gray-800 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left dark:text-white text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <AOS once={true} animation="fade-right">
              <span className="block">
                Eric Quelch
                <span> {/* empty span for spacing */} </span>
                <span className="hover:animate-pulse block mt-1 text-green-500 lg:inline lg:mt-0">
                  Full Stack Developer
                </span>
              </span>
            </AOS>
          </h1>
          <AOS once={true} animation="fade-up" duration="400" delay="200">
            <p className="w-full mx-auto text-base text-left dark:text-gray-300 text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
              Welcome and thanks for dropping by! Im
              <span className="text-green-500"> Eric Quelch</span>, a junior
              full stack web developer currently in college.
            </p>
          </AOS>
        </div>
        <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
          <AOS once={true} animation="fade-down" delay="300" duration="500">
            <HeroSVG />
          </AOS>
        </div>
      </section>
    </AOS>
  );
}
