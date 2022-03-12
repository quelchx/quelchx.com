import React from "react";
import Typewriter from "typewriter-effect";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import data from "@/constants/data";

export default function Hero() {
  return (
    <section className="px-2 py-32 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center spa sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            {data.highlights.map((highlight) => {
              let i = data.highlights.indexOf(highlight);
              return (
                <AnimateOnScroll
                  animation="fade-left"
                  duration={i * 250}
                  delay={i * 400}
                  key={highlight}
                >
                  <h1 className="text-4xl md:text-8xl flex font-bold text-gray-100 dark:text-white my-2">
                    <span
                      className=""
                      style={{ backgroundColor: data.colors[i] }}
                    >
                      <p className="font-monaco pt-2">{highlight}</p>
                    </span>
                  </h1>
                </AnimateOnScroll>
              );
            })}
          </div>
          <div className="w-full md:w-1/2 avatar">
            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
              <AnimateOnScroll delay="200" duration="300" animation="fade-down">
                <img
                  src={data.social.avatar}
                  className="shadow rounded-full hover:animate-pulse"
                />
              </AnimateOnScroll>

              <AnimateOnScroll duration="400" delay="400" animation="fade-left">
                <div className="flex flex-row justify-between pl-36 mt-4">
                  <div className=" hover:-rotate-2 rotate-2 flex flex-row space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-90deg-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                      />
                    </svg>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Yep, thats me")
                          .pauseFor(2500)
                          .start();
                      }}
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
