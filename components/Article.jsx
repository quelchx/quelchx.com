import React from "react";
import Link from "next/link";

export default function Article({ title, description, link }) {
  return (
    <div className="w-full rounded-xl relative px-6 py-6 mx-auto mt-10 bg-gray-700 border border-gray-900 sm:px-8 md:px-12 sm:py-8 sm:shadow-2xl lg:w-5/6 xl:w-2/3">
      <div className="bg-card bg-green-400 -rotate-1"></div>
      <div className="bg-card bg-green-600  rotate-1"></div>
      <h3 className="text-lg relative font-bold text-white sm:text-2xl md:text-3xl">
        {title}
      </h3>
      <p className="mb-4 mt-2 relative text-base text-gray-50 font-bold sm:text-lg md:text-normal">
        {description}
      </p>
      <div className="text-base relative text-gray-50 sm:text-lg md:text-normal">
        <div className="pt-2">
          <Link href={`posts/${link}`}>
            <span className="bg-gray-700 px-6 py-3 rounded shadow-lg">
              Read
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
