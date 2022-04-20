import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Marked } from "@ts-stack/markdown";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Animate from "../../components/Animate";
import { DataProps } from "../blog";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MetaHead from "../../components/Meta/MetaHead";
import React from "react";
dayjs.extend(relativeTime);

type PostPageProps = {
  data: DataProps;
  content: string;
};

const PostPage: NextPage<PostPageProps> = ({ data, content }) => {
  let markup = Marked.parse(content);
  return (
    <React.Fragment>
      <MetaHead
        title={data.title}
        description={data.excerpt}
        image={data.cover_image}
      />
      <Navbar />
      <div className="mx-20 my-12">
        <div className="mt-4">
          <Animate animation="fade-left">
            <h1 className="text-4xl sm:text-5xl">{data.title}</h1>
          </Animate>
          <Animate animation="fade-right">
            <p className="py-2 leading-6">
              Posted: {dayjs(data.date).fromNow()} on {data.date}
            </p>
          </Animate>
          <section className="my-6">
            <Animate animation="fade-down">
              <div
                className="md"
                dangerouslySetInnerHTML={{ __html: markup }}
              ></div>
            </Animate>
          </section>
          <Animate animation="fade-in" delay={200}>
            <Link href="/blog">
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Go Back
              </a>
            </Link>
          </Animate>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

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
    path.join("src/posts", slug + ".md"),
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
