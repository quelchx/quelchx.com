import React from "react";
import { FiDownload } from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="relative w-full pt-20 bg-cover lg:w-6/12 xl:w-7/12 xl:pt-0">
      <div className="relative flex flex-col items-center justify-center w-full px-10 h-3/5 lg:px-16 ">
        <div className="flex flex-col items-start space-y-4 tracking-tight lg:max-w-3xl">
          <div className="relative pt-2">
            <p className="mb-1 font-medium uppercase">Want to get in touch?</p>
            <section>
              <h1 className="flex text-4xl font-bold md:text-7xl ">
                <p className="pt-1">Contact?</p>
              </h1>
            </section>
          </div>
          <p className="w-full py-2 text-3xl font-bold">
            This form is deployed using Netlify.
          </p>
          <p className="text-lg">
            This form is safe, no information is collected and no spam emails
            will be sent!
          </p>
          <p className="py-1">
            If you would rather use your email provider to contact me{" "}
            <a
              className="text-blue-600 hover:border-b-2 hover:border-blue-600"
              href="mailto:quelchx@gmail.com"
            >
              click here
            </a>
          </p>

          <button className="py-2">
            <a
              href="./equelch_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center px-3 py-4 mb-20 space-x-2 text-xl font-semibold text-white bg-blue-700 rounded-md shadow-lg dark:bg-blue-500 hvr-buzz-out is-button md:mb-0"
            >
              <FiDownload />
              <p>Download Resume</p>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
