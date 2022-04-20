import Animate from "../Animate";
import Link from "next/link";
import React from "react";
import AssetList from "./AssetList";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="max-w-6xl px-6 py-3 mx-auto rounded solid lg:px-12">
        <div className="flex flex-col items-start leading-7 border-0 lg:items-center lg:flex-row">
          <div className="box-border flex-1 text-center border-solid sm:text-left">
            <h1 className="my-4 text-4xl font-bold">
              Looking For A Developer?
            </h1>
            <p className="mt-2 text-xl text-left border-0  sm:text-xl font-poppin">
              My services will help you maximize and boost your productivity.
              <br />I know im no Linus Torvalds, Dennis Ritchie, Brendan Eich or
              Bill Gates, but I will bring motivation, passion and work hard. I
              may not be able to change the world but I can want to start
              somewhere.
            </p>
          </div>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-blue-600 border border-blue-600 border-solid rounded cursor-pointer hvr-bounce-to-top md:w-auto lg:mt-0 focus-within:bg-green-700 focus-within:border-green-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
              Contact Me
            </a>
          </Link>
        </div>
      </div>

      <div className="py-2">
        <Animate animation="zoom-in" delay="200" duration="300">
          <div className="container max-w-6xl px-4 mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-center">
              What is in my Stack?
            </h2>
            <p className="mt-2 text-lg text-center">
              Personal skills I have aquired and technologies I'm familiar with
            </p>
            <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
              <AssetList />
            </div>
          </div>
        </Animate>
      </div>
    </React.Fragment>
  );
};

export default Experience;
