import React, { useEffect, useState } from "react";

import SocialLinks from "../SocialLinks";
import ThemeSwitch from "../ThemeSwitch";
import Tooltip from "../Tooltip";

const Footer = () => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
      <a className="text-xl font-black leading-none text-gray-900 select-none dark:text-white logo">
        Eric<span className="text-green-500"> Quelch</span>
      </a>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
        Built with passion
      </p>

      <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        <SocialLinks>
          <Tooltip text="Top Page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z" />
            </svg>
          </Tooltip>
          <ThemeSwitch isMounted={isMounted} />
        </SocialLinks>
      </span>
    </footer>
  );
};

export default Footer;
