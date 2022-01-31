import React from "react";
import ContainerBlock from "@/components/Layout/ContainerBlock";
import { allPosts } from ".contentlayer/data";
import Link from "next/link";
import { compareDesc } from "date-fns";
import Tag from "@/components/Tag";
import PostSnippet from "@/components/PostSnippet";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import guid from "@/utils/uuid";
import { RoughNotationGroup } from "react-rough-notation";
import ColorHighlight from "../../components/ColorHighlight";
import Heading from "@/components/Heading";

export const getStaticProps = async ({}) => {
  return {
    props: {
      posts: allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => ({
          slug: post._raw.flattenedPath,
          title: post.title,
          date: post.date,
          desc: post.description,
          image: post.image,
          tag: post.tag,
        })),
    },
  };
};

export default function PostsPage({ posts }) {
  const featured = posts[0];
  posts = posts.slice(1);

  return (
    <ContainerBlock
      title="Eric Quelch - A Developers Blog"
      description="A Developers Blog showcasing small examples to help developers a like."
    >
      <section className="relative w-full bg-white dark:bg-gray-900">
        <AnimateOnScroll animation="fade-up" delay="300" duration="500">
          <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
            <Heading title="A Developers Blog" />

            <p className="text-lg font-medium text-gray-500 dark:text-white sm:text-2xl">
              Designs and layouts to help you with your next application.
            </p>
          </div>
        </AnimateOnScroll>

        <section className="bg-white dark:bg-gray-900">
          <div className="w-full px-5 py-2 mx-auto space-y-5 sm:py-4 md:py-6 sm:space-y-8 md:space-y-16 max-w-7xl">
            <AnimateOnScroll animation="zoom-in" delay="400" duration="800">
              <div className="flex flex-col items-center sm:px-5 md:flex-row">
                <div className="w-full md:w-1/2">
                  <Link href={`/posts/${featured.slug}`}>
                    <a className="block">
                      <img
                        className="object-cover hvr-wobble-vertical shadow-lg w-full h-full rounded-lg max-h-64 sm:max-h-96"
                        src={featured.image}
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                  <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <Tag tag="Latest" />
                    <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                      <a>{featured.title}</a>
                    </h1>
                    <p className="text-sm text-gray-500">{featured.desc}</p>
                    <p className="pt-2 text-sm font-medium">
                      by <a className="mr-1 underline">Eric Quelch</a> ·{" "}
                      <span className="mx-1">
                        Posted: {new Date(featured.date).toDateString()}
                      </span>{" "}
                      ·{" "}
                      <Link href={`/posts/${featured.slug}`}>
                        <span className="hvr-buzz-out pb-0.5 mx-1 hover:cursor-pointer text-gray-800 dark:text-green-600">
                          Read
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" duration="1000" delay="800">
              <div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
                {posts.map((post) => {
                  return (
                    <PostSnippet
                      key={post.slug}
                      title={post.title}
                      desc={post.desc}
                      tag={post.tag}
                      color={post.color}
                      image={post.image}
                      date={post.date}
                      link={post.slug}
                    />
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </section>
    </ContainerBlock>
  );
}
