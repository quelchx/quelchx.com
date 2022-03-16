import ContainerBlock from "@/components/Layout/ContainerBlock";
import Hero from "../components/Hero";
import Projects from "../components/Projects/Projects";
import Repositories from "../components/Repositories";

export default function Home() {
  return (
    <ContainerBlock
      title="Eric Quelch - Developer, Writer, Creator"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      <Hero />
      <Repositories  />
      <Projects />
    </ContainerBlock>
  );
}