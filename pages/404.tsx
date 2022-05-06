import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Animate, PageContainer } from "../components";

const PageNotFound: NextPage = () => {
  return (
    <PageContainer title="Page Not Found">
      <Animate animation="fade-left" delay={400} duration={500}>
        <div className="grid h-[80vh] place-items-center">
          <div className="flex flex-col items-center">
            <h1 className="mb-4 text-3xl">Sorry this page was not found</h1>
            <Link href="/">
              <a className="px-4 py-2 text-white bg-blue-700 rounded dark:bg-blue-500">
                Return Home
              </a>
            </Link>
          </div>
        </div>
      </Animate>
    </PageContainer>
  );
};

export default PageNotFound;
