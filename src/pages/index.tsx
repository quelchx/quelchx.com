import type { NextPage } from "next";
import Experience from "../components/Experience";
import Hero from "../components/Hero/Hero";

import Meta from "../components/Meta";
import Projects from "../components/Projects";
import Repositories from "../components/Repositories";

const Home: NextPage = () => {
  return (
    <Meta title="Eric Quelch - Full Stack Developer">
      <header className="px-2 py-32 bg-gray-200 dark:bg-gray-900 md:px-0">
        <Hero />
      </header>
      <main className="py-20">
        <Repositories />
      </main>
      <article className="flex items-center justify-center py-16 bg-gray-200 min-w-screen dark:bg-gray-900">
        <Projects />
      </article>
      <section className="py-10 leading-7 text-gray-900 dark:text-white ">
        <Experience />
      </section>
    </Meta>
  );
};

export default Home;
