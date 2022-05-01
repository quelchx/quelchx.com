import type { NextPage } from "next";

import Meta from "../components/Meta";
import MainHero from "../components/Hero/MainHero";
import Repositories from "../components/Repositories";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <Meta title="Eric Quelch - Full Stack Developer">
      <header className="px-2 md:px-0">
        <MainHero />
      </header>
      <article className="flex items-center justify-center pb-12 min-w-screen">
        <Projects />
      </article>
      <div className="pt-12">
        <Repositories />
      </div>
      <section className="py-10 leading-7">
        <Experience />
      </section>
    </Meta>
  );
};

export default Home;
