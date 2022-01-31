import ContainerBlock from "@/components/Layout/ContainerBlock";

import Hero from "../components/Hero";
import Projects from "../components/Projects/Projects";
import Repositories from "../components/Repositories";
import getRepositories from "../lib/repositories";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Eric Quelch - Developer, Writer, Creator"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <Repositories repos={repositories} />
      <Projects />
    </ContainerBlock>
  );
}

export const getStaticProps = async () => {
  const repositories = await getRepositories();
  return {
    props: { repositories },
  };
};
