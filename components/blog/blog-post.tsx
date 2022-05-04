import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { PostProps } from "../../@types";

dayjs.extend(relativeTime);

const BlogPost = ({ post }: PostProps) => {
  const { slug } = post;
  const { excerpt, date, category, title } = post.data;

  return (
    <Link href={`/blog/${slug}`}>
      <span className="border-gray-700 rounded-lg cursor-pointer">
        <p className="my-2 text-2xl font-bold tracking-tight">{title}</p>
        <p className="mb-3 font-normal">{excerpt}</p>
        <small>Posted {dayjs(date).fromNow()}</small>
        <div className="flex py-2">
          {category.map((el, idx) => (
            <span
              key={idx}
              className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              {el}
            </span>
          ))}
        </div>
      </span>
    </Link>
  );
};

export default React.memo(BlogPost);
