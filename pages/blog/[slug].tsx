import fs from "fs";
import path from "path";
import matter from "gray-matter";

import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import dayjs from "dayjs";
dayjs.extend(relativeTime);

import relativeTime from "dayjs/plugin/relativeTime";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Animate, PageLayout, PageLink } from "../../components";
import { DataProps } from "../../interface";
import { Button, chakra, Heading } from "@chakra-ui/react";

interface PostPageProps {
  data: DataProps;
  content: string;
}

const PostPage: NextPage<PostPageProps> = ({ data, content }) => {
  return (
    <PageLayout
      title={data.title}
      description={data.excerpt}
      image={data.cover_image}
    >
      <chakra.div mx={20} my={12}>
        <chakra.div mt={4}>
          <Animate animation="fade-left">
            <Heading as="h1" size={"3xl"}>
              {data.title}
            </Heading>
          </Animate>
          <Animate animation="fade-right">
            <chakra.p fontSize={20} py={3}>
              Posted: {dayjs(data.date).fromNow()} on {data.date}
            </chakra.p>
          </Animate>
          <chakra.section>
            <Animate animation="fade-down">
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
            </Animate>
          </chakra.section>
          <Animate animation="fade-in" delay={200}>
            <Button colorScheme='blue'>
              <PageLink href="/blog">Go Back</PageLink>
            </Button>
          </Animate>
        </chakra.div>
      </chakra.div>
    </PageLayout>
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
