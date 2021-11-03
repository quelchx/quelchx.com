import React from "react";
import Link from "next/link";
import { routes } from "@/routes";

export default function Navigation() {
  const router = routes.map((route) => {
    return (
      <div key={route.name} className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
        <Link href={route.path}>{route.name}</Link>
      </div>
    );
  });

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              quelch<span className="text-green-600">x</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {router}
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="https://github.com/quelchx"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/eric-quelch-768861201/?originalSubdomain=ca"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
