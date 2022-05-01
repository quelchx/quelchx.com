import React from "react";

type InputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

const InputField = ({ label, name, type, placeholder }: InputProps) => {
  return (
    <React.Fragment>
      <label className="font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="block w-full px-4 py-4 mt-2 text-xl text-gray-900 placeholder-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default InputField;
