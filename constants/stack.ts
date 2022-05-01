import { StatsCardProps } from "../interface";
import { BiCodeCurly, BiGitMerge } from "react-icons/bi";
import { DiPython, DiReact, DiSass } from "react-icons/di";
import { FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiChakraui,
  SiDjango,
  SiExpress,
  SiGithub,
  SiHeroku,
  SiJavascript,
  SiLinode,
  SiMongodb,
  SiNetlify,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const stack: StatsCardProps[] = [
  {
    icon: SiJavascript,
    title: "JavaScript",
    stat: "Front-End and Backend Development",
  },

  {
    icon: SiTypescript,
    title: "TypeScript",
    stat: "Front-End and Backend Development",
  },
  {
    icon: DiReact,
    title: "React and Next.js",
    stat: "Front-end Development",
  },
  {
    icon: FaVuejs,
    title: "Vue and Nuxt.js",
    stat: "Front-end Web Development",
  },
  {
    icon: FaNodeJs,
    title: "Node.Js",
    stat: "Backend Development",
  },
  {
    icon: DiPython,
    title: "Python",
    stat: "Web Development, scrapping",
  },
  {
    icon: SiDjango,
    title: "Django",
    stat: "Backend Development",
  },
  {
    icon: SiPostgresql,
    title: "Postgres",
    stat: "SQL Database",
  },
  {
    icon: BiCodeCurly,
    title: "TypeORM",
    stat: "Object Modeling",
  },
  {
    icon: DiSass,
    title: "Sass and CSS",
    stat: "Web Design",
  },
  {
    icon: SiTailwindcss,
    title: "TailwindCSS",
    stat: "Web Design",
  },
  {
    icon: SiChakraui,
    title: "Chakra UI",
    stat: "Web Design",
  },

  {
    icon: SiMongodb,
    title: "MongoDB",
    stat: "NoSQL Database",
  },
  {
    icon: SiExpress,
    title: "Express",
    stat: "Backend Development",
  },
  {
    icon: SiLinode,
    title: "Linode",
    stat: "Server Deployment",
  },
  {
    icon: SiHeroku,
    title: "Heroku",
    stat: "API Hosting",
  },
  {
    icon: SiNetlify,
    title: "Netlify",
    stat: "Static Deployment",
  },
  {
    icon: SiWordpress,
    title: "WordPress",
    stat: "Content Manager",
  },
  {
    icon: BiGitMerge,
    title: "Git",
    stat: "Source Control",
  },
  {
    icon: FiFigma,
    title: "Figma",
    stat: "Project Design",
  },
  {
    icon: SiAdobephotoshop,
    title: "PhotoShop",
    stat: "Project Design",
  },
];

export default stack;
