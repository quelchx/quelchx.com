import Link from "next/link";
import React from "react";
import { Blog } from "../../pages/blog";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
type PostProps = {
  post: Blog;
};

const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <span className="rounded-lg cursor-pointer border-gray-700">
        <p className="my-2 text-2xl font-bold tracking-tight">
          {post.data.title}
        </p>
        <p className="mb-3 font-normal">{post.data.excerpt}</p>
        <small>Posted {dayjs(post.data.date).fromNow()}</small>
        <div className="flex py-2">
          {post.data.category.map((el, idx) => {
            return (
              <span
                key={idx}
                className="bg-gray-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
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
