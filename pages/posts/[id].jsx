import React from "react";
import { allPosts } from ".contentlayer/data";
import ContainerBlock from "@/components/Layout/ContainerBlock";
import Link from "next/link";
import Heading from "../../components/Heading";
import { marked } from "marked";

export async function getStaticPaths() {
  const paths = allPosts.map((_) => "/posts/" + _._raw.flattenedPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((_) => _._raw.flattenedPath === params.id);
  return { props: { post } };
}

export default function PostPage({ post }) {
  const content = marked.parse(post.body.html);
  return (
    <ContainerBlock
      title={`A Developers Blog - ${post.title}`}
      description={post.description}
    >
      <section className="p-10 mx-4">
        <Heading title={post.title} />
        {/* <h1 className="py-2 font-poppin font-bold text-2xl">{post.title}</h1> */}
        <p className="py-2 leading-4 tracking-wide">
          Posted: {new Date(post.date).toDateString()}
        </p>
        <div
          className="my-2 _markdown_"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="inline-flex pt-2 rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="hvr-reveal py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <a href="#top">Top</a>
          </button>
          <Link href="/">
            <button
              type="button"
              className="hvr-rectangle-out py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <a>Home</a>
            </button>
          </Link>
          <button
            type="button"
            className="hvr-reveal py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <Link href="/posts">Blog</Link>
          </button>
        </div>
      </section>
    </ContainerBlock>
  );
}
