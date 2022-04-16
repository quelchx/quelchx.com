import React from "react";
import Animate from "../Animate";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <div className="w-full rounded-none dark:lg:bg-gray-900 dark:bg-gray-800 lg:rounded-3xl lg:w-6/12 xl:w-5/12">
      <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
        <Animate animation="fade-down" delay="200" duration="500">
          <p className="w-full py-4 text-3xl font-bold dark:text-gray-100">
            This form is deployed using Netlify.
          </p>
          <p className="text-lg dark:text-gray-300">
            This form is safe, no information is collected and no spam emails
            will be sent!
          </p>
          <p className="py-2 text-sm">
            If you would rather email me{" "}
            <a
              className="text-cyan-800 dark:text-cyan-500 hover:border-b-2 hover:border-cyan-700"
              href="mailto:quelchx@gmail.com"
            >
              click here
            </a>
          </p>
        </Animate>
        <div className="relative w-full mt-6 space-y-4">
          <FormInput />
        </div>
      </div>
    </div>
  );
};

export default Form;
