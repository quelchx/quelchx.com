import React from "react";
import Animate from "../Animate";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <div className="w-full rounded-none  lg:rounded-3xl lg:w-6/12 xl:w-5/12">
      <div className="flex flex-col items-start justify-start w-full h-full px-10 lg:px-16 xl:p-24">
        <Animate animation="fade-down" delay="200" duration="500">
          <p className="text-lg block lg:hidden dark:text-gray-300">
            Please fill out these fields
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
