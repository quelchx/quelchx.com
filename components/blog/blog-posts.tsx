import React from "react";
import BlogPost from "./blog-post";
import { Blog } from "../../@types";

const BlogPosts = ({ articles }: { articles: Blog[] }) => {
  return (
    <article className="grid grid-cols-1 gap-0 my-5 md:grid-cols-2 md:gap-10">
      {articles.map((post: Blog) => {
        const { slug } = post;
        return (
          <div key={slug}>
            <BlogPost post={post} />
          </div>
        );
      })}
    </article>
  );
};

export default BlogPosts;
