import React from "react";
import Article from "@/components/Article";
import AOS from "@/components/AOS";

export default function Articles({ posts }) {
  const listData = posts.map((post) => {
    return (
      <AOS animation="fade-down" delay="200" duration="400">
        <Article
          key={post.id}
          title={post.title}
          description={post.description}
          link={post.id}
        />
      </AOS>
    );
  });
  return (
    <section className="relative py-16 bg-gray-100 min-w-screen animation-fade animation-delay">
      <div className="container px-8 mx-auto sm:px-12 xl:px-5">
        <AOS animation="fade-up" duration="300" delay="300">
          <p className="switch-decoration text-xs font-bold text-left text-green-600 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            Yet Another Blog
          </p>
        </AOS>
        <AOS animation="fade-down" duration="500" delay="300">
          <h3 className="shuffle mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
            Articles and Posts
          </h3>
          <p className="bounce mt-1 font-bold text-left text-gray-600 sm:mx-6  md:text-4x sm:text-center">
            This blogs intensions is to educate and showcase some things you can do in web development.
          </p>
        </AOS>
        {listData}
      </div>
    </section>
  );
}
