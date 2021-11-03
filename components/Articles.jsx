import React from "react";
import Article from "@/components/Article";

export default function Articles({ posts }) {
  const listData = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        description={post.description}
        link={post.id}
      />
    );
  });
  return (
    <section className="relative py-16 bg-gray-100 min-w-screen animation-fade animation-delay">
      <div className="container px-8 mx-auto sm:px-12 xl:px-5">
        <p className="text-xs font-bold text-left text-green-600 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
          Yet Another Blog
        </p>
        <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
          Articles and Posts
        </h3>
        {listData}
      </div>
    </section>
  );
}
