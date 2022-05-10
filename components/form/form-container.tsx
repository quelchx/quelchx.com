import React from "react";
import Form from "./form";

const FormContainer = () => {
  return (
    <div className="w-full rounded-none lg:rounded-3xl lg:w-6/12 xl:w-5/12">
      <div className="flex flex-col items-start justify-start w-full h-full px-10 lg:px-16 xl:p-24">
        <div className="mt-0 mb-6 sm:mt-10">
          <p className="block text-lg lg:hidden dark:text-gray-300">
            Please fill out all the fields below.
          </p>
        </div>
        <div className="relative w-full space-y-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
