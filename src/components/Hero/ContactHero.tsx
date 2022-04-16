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
            <p className="pt-4 text-2xl text-gray-700 dark:text-gray-200">
              If your interesting in leaving a message feel free to use this
              simple form.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
