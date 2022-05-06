import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Animate, PageContainer, RepoCard } from "../components";

const RepoPage: NextPage = () => {
  const [repos, setRepos] = useState<[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=user:quelchx+sort:author-date-asc`
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
        setInterval(() => setLoading(false), 350);
      });
  }, []);

  if (isLoading) {
    return (
      <PageContainer
        title="Loading Latest Repos"
        description="Eric Quelch's latest Github Contributions"
      >
        <Animate animation="fade-in" duration={500} delay={500}>
          <div className="grid h-[85vh] place-items-center">
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
        </Animate>
      </PageContainer>
    );
  }

  return (
    <>
      {!isLoading && (
        <PageContainer>
          <Animate animation="fade-left" delay={400} duration={500}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="px-8 mx-auto my-8 max-w-7xl lg:px-12"
            >
              <div className="flex flex-col items-center justify-between md:flex-row">
                <h1 className="max-w-lg my-20 text-3xl font-bold text-center lg:text-6xl md:my-0 lg:text-left">
                  Latest Code
                </h1>
                <button className="flex flex-row items-center px-6 py-4 mb-20 space-x-4 text-xl font-semibold rounded-md shadow-lg button-main hvr-buzz-out is-button md:mb-0">
                  <p>View GitHub</p>
                </button>
              </div>
              <div className="mt-0 lg:mt-4">
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(e.target.value)
                  }
                  type="text"
                  className="p-2 border border-gray-500 dark:border-gray-300"
                  placeholder="Search Repo's By Name"
                />
              </div>
              <div className="grid grid-cols-1 gap-0 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {repos!
                  .filter((val: any) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((repo: [], idx: number) => {
                    return <RepoCard key={idx} repo={repo} />;
                  })}
              </div>
            </motion.div>
          </Animate>
        </PageContainer>
      )}
    </>
  );
};

export default RepoPage;
