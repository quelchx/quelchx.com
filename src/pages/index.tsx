
import type { NextPage } from "next";

import MetaContainer from "../meta/MetaContainer";

import Heading from "../components/home/Heading";
import Repositories from "../components/home/Repositories";
import Projects from "../components/home/Projects";
import Experience from "../components/home/Experience";

const Home: NextPage = () => {
  return (
    <MetaContainer title="Eric Quelch - Home Page">
      <section className="px-2 py-32 bg-gray-200 dark:bg-gray-900 md:px-0">
        <Heading />
      </section>
      <section className="py-20 ">
        <Repositories />
      </section>
      <section className="flex items-center justify-center py-16 bg-gray-200 min-w-screen dark:bg-gray-900">
        <Projects />
      </section>

      <section className="py-10 leading-7 text-gray-900 dark:text-white ">
        <Experience />
      </section>
    </MetaContainer>
  );
};

export default Home;
