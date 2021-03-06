import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { Animate, Footer, Meta, Navbar } from "../../components";
import { PostPageProps } from "../../@types";

dayjs.extend(relativeTime);

const PostPage: NextPage<PostPageProps> = ({ data, content }) => {
  const { title, excerpt, date, cover_image: image } = data;

  return (
    <>
      <Meta title={title} description={excerpt} image={image} />
      <Navbar />
      <Animate animation="fade-left" delay={400} duration={500}>
        <div className="mx-20 my-12">
          <div className="mt-4">
            <div>
              <h1 className="text-4xl sm:text-5xl">{title}</h1>
            </div>
            <div>
              <p className="py-2 leading-6">
                Posted: {dayjs(date).fromNow()} on {date}
              </p>
            </div>
            <section className="my-6">
              <div>
                <ReactMarkdown
                  className="md"
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                  children={content}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
            </section>
            <div>
              <Link href="/blog">
                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Go Back
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Animate>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      slug,
      content,
    },
  };
};

export default PostPage;
