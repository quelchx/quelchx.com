import React, { useState } from "react";
import Link from "next/link";
import { routes } from "@/routes";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    let theme = document.getElementById("theme");

    if (!toggle) {
      theme.className = "light";
      setToggle(true);
    } else {
      theme.className = "dark";
      setToggle(false);
    }
  };

  const router = routes.map((route) => {
    return (
      <div
        key={route.name}
        className="switch-decoration mr-5 font-medium leading-6 dark:text-white dark:hover:text-cyan-500 text-gray-600 hover:text-green-700"
      >
        <Link href={route.path}>{route.name}</Link>
      </div>
    );
  });

  return (
    <section className="w-full px-8 dark:text-white dark:bg-gray-700 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="bounce flex items-center mb-5 font-medium   lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none dark:text-white text-gray-900 select-none">
              quelch<span className="dark:text-cyan-500 text-green-600">x</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {router}
          </nav>
        </div>
        <div className="font-medium leading-6 dark:text-white text-gray-60">
          <div className="flex items-center justify-center w-full">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  onClick={toggleTheme}
                  type="checkbox"
                  className="sr-only"
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
