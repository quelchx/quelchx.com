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
        console.log(latest);
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
    <section className="py-20 bg-gray-400 dark:bg-gray-700">
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
                <div className="flex flex-row py-2 gap-3">
                  <div className="flex flex-row hvr-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                    <p className="text-gray-800 dark:text-gray-200 pl-1">
                      {repo.stargazers_count}
                    </p>
                  </div>
                  <div className="flex flex-row hvr-buzz-out">
                    <div className="pt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8z" />
                      </svg>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 pl-0.5">
                      {repo.forks_count}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    href={repo.clone_url}
                    className="font-semibold group flex flex-row space-x-2 w-full items-center"
                  >
                    <p>View Repository </p>
                    <div className="transform group-hover:translate-x-2 transition duration-300 pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
