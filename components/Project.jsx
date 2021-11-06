import React from "react";

export default function Project({details, path, image, name}) {
  return (
    <blockquote className="flex items-center justify-between w-full col-span-1 p-6 dark:bg-gray-700 bg-white rounded-lg shadow">
      <div className="flex flex-col pr-8">
        <div className="relative pl-12">
          <svg
            className="absolute left-0 w-10 h-10 dark:text-cyan-400 text-green-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 125"
          >
            <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
          </svg>
          <p className="mt-2 text-sm dark:text-green-300 text-gray-600 sm:text-base lg:text-sm xl:text-base">
            {details}
          </p>
        </div>

        <p className="pl-12 mt-3 text-sm font-medium leading-5 dark:text-green-300 text-gray-800 truncate sm:text-base lg:text-base">
          {name}
          <span className="mt-1 text-sm leading-5 text-gray-500 dark:text-green-400 truncate">
            <a href={path}> - Visit</a>
          </span>
        </p>
      </div>
      <img
        className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
        src={image}
        alt=""
      />
    </blockquote>
  );
}
