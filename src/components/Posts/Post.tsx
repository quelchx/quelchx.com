import Link from "next/link";
import React from "react";
import { Blog } from "../../pages/blog";

type PostProps = {
  post: Blog;
};

const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <span className="rounded-lg cursor-pointer dark:border-gray-700">
        <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.data.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.data.excerpt}
        </p>
        <small>Posted {post.data.date}</small>
        <div className="flex py-2">
          {post.data.category.map((el, idx) => {
            return (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {el}
              </span>
            );
          })}
        </div>
      </span>
    </Link>
  );
};

export default React.memo(Post);
