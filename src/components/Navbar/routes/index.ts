type RouteProps = {
  name: string;
  path: string;
};

const routes: RouteProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default routes;
