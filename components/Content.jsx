import React from "react";
import WebpageSVG from "./svg/WebpageSVG";
import ComputersSVG from "./svg/ComputersSVG";
import AOS from "@/components/AOS";

export default function Content() {
  return (
    <section className="w-full dark:bg-gray-700 bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <AOS animation="fade-right" delay="500" duration="600">
            <WebpageSVG />
          </AOS>
        </div>

        <div className="box-border order-first w-full dark:text-white text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <AOS animation="fade-left">
            <h2 className="bounce m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              College Education
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 dark:text-white text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Currently I'm a student at Fanshawe College studying software
              solutions and internet applications.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Intelligent
              </li>
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Diverse
              </li>
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Versitile
              </li>
            </ul>
          </AOS>
        </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div className="box-border w-full dark:text-white text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <AOS animation="fade-right">
            <h2 className="bounce m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Polygot Programmer
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 dark:text-gray-200 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Outside of my education im versitile and skilled with many
              development frameworks/libraries.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Creative
              </li>
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Passionate
              </li>
              <li className="shuffle box-border relative py-1 pl-0 text-left dark:text-gray-200 text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Motivator
              </li>
            </ul>
          </AOS>
        </div>

        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <AOS animation="fade-left" delay="300" duration="300">
            <ComputersSVG />
          </AOS>
        </div>
      </div>
    </section>
  );
}
