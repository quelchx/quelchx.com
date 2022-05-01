import { MetaState } from "../interface";

export interface MetaData {
  [data: string]: MetaState;
}

const name = "Eric Quelch";

const meta: MetaData = {
  about: {
    title: `About - ${name}`,
    description: `Learn more about ${name}`,
  },
  projects: {
    title: `Projects - ${name}`,
    description: `Current Projects ${name} has deployed or worked on`,
  },
  contact: {
    title: `Projects - ${name}`,
    description: `Current Projects ${name} has deployed or worked on`,
  },
  repos: {
    title: `Repositories - ${name}`,
    description: `${name}'s latest repositories and contributions`,
  },
  blog: {
    title: `Dev Blog - ${name}`,
    description: `Developers Blog by ${name}`,
  },
  stack: {
    title: `My Stack - ${name}`,
    description: `Frameworks, libraries, programming languages and other technologies ${name} is familiar with`,
  },
};

export default meta;
