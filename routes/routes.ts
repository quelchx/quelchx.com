import { Routes } from "../interface";

const routes: Array<Routes> = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/contact",
    name: "Contact",
  },
  {
    href: "#",
    name: "Links",
    children: [
      {
        href: '/projects',
        name: 'Projects'
      },
      {
        href: "/repos",
        name: "Open Source",
      },
      {
        href: '/stack',
        name: 'My Stack'
      },
    ],
  },
];

export default routes;
