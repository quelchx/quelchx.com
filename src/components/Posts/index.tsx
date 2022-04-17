import React, { useState } from "react";
import { BlogProps } from "../../pages/blog";
import BlogPosts from "./BlogPosts";
import Categories from "./Categories";

const PostsWrapper = ({ posts, categories }: BlogProps) => {
  const [articles, setArticles] = useState(posts);

  return (
    <section className="py-10">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <Categories
          setArticles={setArticles}
          posts={posts}
          categories={categories}
        />
        <BlogPosts articles={articles} />
      </div>
    </section>
  );
};

export default PostsWrapper;
