import React from "react";
import AOS from "../../AOS";

interface RepoProps {
  [repo: string]: any;
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  return (
    <AOS key={repo.id} animation="fade-up" delay="300" duration="500">
      <h5 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-gray-300">
        {repo.name.toUpperCase()}
      </h5>
      <p className="text-gray-800 dark:text-gray-200">{repo.description}</p>
      <div className="flex flex-row gap-3 py-2">
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
          <p className="pl-1 text-gray-800 dark:text-gray-200">
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
          href={repo.clone_url}
          className="flex flex-row items-center w-full space-x-2 font-semibold group"
        >
          <p className="hvr-wobble-bottom">View Repository </p>
          <div className="pt-1 hvr-forward">
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
    </AOS>
  );
};

export default Repo;
