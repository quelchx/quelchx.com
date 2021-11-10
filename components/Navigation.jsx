import React, { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const toggleTheme = () => {
    let theme = document.getElementById("theme");

    if (theme.className === "dark") {
      theme.className = "light";
      localStorage.setItem("theme", "light");
    } else {
      theme.className = "dark";
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <section className="w-full px-8 dark:text-white dark:bg-gray-700 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <div className="bounce flex items-center mb-5 font-medium   lg:w-auto lg:items-center lg:justify-center md:mb-0"></div>
          <Link href="/">
            <span className="hover:cursor-pointer mx-auto text-xl font-black leading-none dark:text-white text-gray-900 select-none">
              quelch<span className="dark:text-cyan-500 text-green-600">x</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center mt-2 md:mt-0 mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <div className="switch-decoration mr-3 font-medium leading-6 dark:text-white dark:hover:text-cyan-500 text-gray-600 hover:text-green-700">
              <Link href="/posts">Blog</Link>
            </div>
            <div className="switch-decoration mr-3 font-medium leading-6 dark:text-white dark:hover:text-cyan-500 text-gray-600 hover:text-green-700">
              <a target="_blank" href="https://github.com/quelchx">
                Github
              </a>
            </div>
            <div className="switch-decoration mr-3 font-medium leading-6 dark:text-white dark:hover:text-cyan-500 text-gray-600 hover:text-green-700">
              <a
                target="_blank"
                href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEXA_gvDoYhwwAAAX0LWPjAXFBRMlWVhGrf8RhVYW7Cszs8BOzR-clkcNZitlgufNBEYunms4B2H1bvMTGPL5Vlwr5BkA-Lie6ReuupqqMRM8SoWt_O0sWlIweKIAYSNwIk34k=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fca.linkedin.com%2Fin%2Feric-quelch-768861201"
              >
                Linkedin
              </a>
            </div>
          </nav>
        </div>
        <div>
          <div className="flex items-center justify-center w-full">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <label htmlFor="checkbox" />
                <input
                  onClick={toggleTheme}
                  type="checkbox"
                  id="checkbox"
                  className="sr-only"
                />
                <div className="block bg-gray-600 w-14 h-8 rounded"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
