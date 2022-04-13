import type { NextPage } from "next";

import React from "react";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PageNotFound: NextPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="grid py-8 my-72 place-items-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-3xl">Sorry this page was not found</h1>
          <Link href="/">
            <a className="px-4 py-2 text-white rounded bg-lime-700 dark:bg-blue-500">
              Return Home
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PageNotFound;
