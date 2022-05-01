import { Button, chakra, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Repo from "./Repo";

const Repositories = () => {
  const [repos, setRepos] = useState<[]>();
  const [isLoading, setLoading] = useState<boolean>(false);

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
      <div className="flex items-center justify-center">
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
    <div className="px-8 mx-auto max-w-7xl lg:px-12">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="max-w-lg my-20 text-3xl font-bold text-center lg:text-6xl md:my-0 lg:text-left">
          Latest Code
        </h1>
        <chakra.button
          as="a"
          bg={'blue.600'}
          color={useColorModeValue('gray.100', 'gray.900')}
          href={`https://github.com/quelchx`}
          className="flex flex-row items-center px-6 py-4 mb-20 space-x-4 text-xl font-semibold rounded-md shadow-lg hvr-curl-top-right is-button md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right-square hvr-buzz-out"
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
        </chakra.button>
      </div>

      <div className="grid grid-cols-1 gap-0 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {repos.map((repo: [], idx: number) => {
          return <Repo key={idx} repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default Repositories;
