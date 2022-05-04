import React from "react";
import { FieldProps } from "../../@types";

const Field = ({ label, name, type, placeholder }: FieldProps) => {
  return (
    <>
      <label className="font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-500 border rounded-lg dark:placeholder-gray-400 dark:text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
        placeholder={placeholder}
      />
    </>
  );
};

export default Field;
