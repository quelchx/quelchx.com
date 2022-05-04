import React, { useState } from "react";
import BlogPosts from "./blog-posts";
import Categories from "./blog-categories";
import { BlogProps } from "../../@types";

const BlogContainer = ({ posts, categories }: BlogProps) => {
  const [articles, setArticles] = useState(posts);

  return (
    <section className="pt-1 pb-6">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <Categories
          posts={posts}
          categories={categories}
          setArticles={setArticles}
        />
        <BlogPosts articles={articles} />
      </div>
    </section>
  );
};

export default BlogContainer;
