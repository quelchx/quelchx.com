import React from "react";

export default function Assets({ icon, asset, details }) {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 dark:bg-gray-800 sm:rounded-xl">
        <i className={icon + " is-icon"}></i>
        <h4 className="text-xl font-medium dark:text-white text-gray-700">{asset}</h4>
        <p className="text-base text-center dark:text-gray-200 text-gray-500">{details}</p>
    </div>
  );
}
