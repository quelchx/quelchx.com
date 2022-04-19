import React from "react";
import Animate from "../Animate";

import data from "../../constants";

const ContactHero = () => {
  return (
    <section className="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
      <div className="relative flex flex-col items-center justify-center w-full px-10 my-20 h-3/5 lg:px-16 lg:my-0">
        <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
          <Animate animation="fade-up" delay="500">
            <div className="relative">
              <p className="mb-2 font-medium text-gray-700 uppercase dark:text-white">
                Want to get in touch?
              </p>
              <section>
                <h1 className="flex my-2 text-4xl font-bold text-gray-100 md:text-8xl dark:text-white">
                  <span
                    style={{
                      backgroundColor:
                        data.colors[
                          Math.floor(Math.random() * data.colors.length)
                        ],
                    }}
                  >
                    <p className="pt-2 font-monaco">Contact?</p>
                  </span>
                </h1>
              </section>
            </div>
            <Animate animation="fade-down" delay="200" duration="500">
              <p className="w-full py-4 text-3xl font-bold dark:text-gray-100">
                This form is deployed using Netlify.
              </p>
              <p className="text-lg dark:text-gray-300">
                This form is safe, no information is collected and no spam
                emails will be sent!
              </p>
              <p className="py-2">
                If you would rather use your email provider to contact me{" "}
                <a
                  className="text-cyan-800 dark:text-cyan-500 hover:border-b-2 hover:border-cyan-700"
                  href="mailto:quelchx@gmail.com"
                >
                  click here
                </a>
              </p>
            </Animate>

            <button className="py-4">
              <a
                target="_blank"
                rel="noreferrer"
                href={data.resume}
                className="flex flex-row items-center px-3 py-4 mb-20 space-x-4 text-xl font-semibold text-white bg-gray-900 rounded-md shadow-lg hvr-curl-top-right is-button md:mb-0 dark:text-gray-700 dark:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square hvr-buzz-out"
                  stroke="4"
                  strokeWidth="4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                  />
                </svg>
                <p>Download Resume</p>
              </a>
            </button>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
