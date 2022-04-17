import React from "react";
import { Blog } from "../../pages/blog";
import Post from "./Post";

const BlogPosts = ({ articles }: { articles: Blog[] }) => {
  return (
    <article className="grid grid-cols-1 gap-0 my-6 md:grid-cols-2 md:gap-16">
      {articles.map((post: Blog) => {
        return (
          <div key={post.slug}>
            <Post post={post} />
          </div>
        );
      })}
    </article>
  );
};



export default BlogPosts;
