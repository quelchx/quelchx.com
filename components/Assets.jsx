import React from "react";

export default function Assets({ icon, asset, details }) {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
        <i className={icon + " is-icon"}></i>
        <h4 className="text-xl font-medium text-gray-700">{asset}</h4>
        <p className="text-base text-center text-gray-500">{details}</p>
    </div>
  );
}
