import React from "react";
import Link from "next/link";
import { marked } from "marked";

export async function getStaticPaths() {
  const res = await fetch(process.env.BLOG_API);
  const data = await res.json();

  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.BLOG_API}/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  const content = marked.parse(post.content);
  return (
    <div className="container relative w-full md:max-w-3xl mx-auto pt-20">
      <div className="w-full overflow-x-auto relative z-40 px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div class="text-base md:text-sm hover:text-green-800 text-gray-600 mt-2 border-cyan-900 font-bold no-underline">
          <Link href="/posts">Back To Blogs</Link>
        </div>

        <h1 class="font-bold font-sans break-normal text-gray-900 pt-4 pb-2 text-3xl md:text-4xl">
          {post.title}
        </h1>
        <p class="my-2 text-sm md:text-base font-normal text-gray-600">
          <span className="relative text-gray-700 text-lg font-bold">
            Published:{" "}
          </span>{" "}
          {new Date(post.createdAt).toUTCString()}
        </p>
        <div
          className="py-2 space-y-6 markdown"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      {/* button to top of page or back to blogs */}
    </div>
  );
}
