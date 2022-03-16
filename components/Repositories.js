import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect, useState } from "react";

export default function Repositories() {
  const [repos, setRepos] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/search/repositories?q=user:quelchx+sort:author-date-asc`
    )
      .then((res) => res.json())
      .then((data) => {
        let latest = data.items.slice(0, 10);
        setRepos(latest);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  if (!repos) return <p>No profile data</p>;

  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-700">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-700 dark:text-white my-20 md:my-0 text-center lg:text-left">
            Latest Code
          </h1>
          <a
            href={`https://github.com/quelchx`}
            className="is-button mb-20 md:mb-0 px-6 py-4 rounded-md bg-gray-900 text-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 dark:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-0 text-gray-600 dark:text-gray-200 md:grid-cols-2 mt-6 md:gap-8">
          {repos.map((repo) => {
            return (
              <AnimateOnScroll
                key={repo.id}
                animation="fade-up"
                delay="300"
                duration="500"
              >
                <h5 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-gray-300">
                  {repo.name.toUpperCase()}
                </h5>
                <p className="text-gray-800 dark:text-gray-200">
                  {repo.description}
                </p>
                <a
                  target="_blank"
                  href={repo.clone_url}
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p className="pt-2">View Repository </p>
                  <div className="transform group-hover:translate-x-2 transition duration-300">
                    &rarr;
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
