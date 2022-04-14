import matter from "gray-matter";
import fs from "fs";
import path from "path";
import type { GetStaticProps, NextPage } from "next";

import MetaContainer from "../components/Meta";
import BlogHeading from "../components/Heading/BlogHeading";
import Animate from "../components/AOS";
import { Blog } from "../types";

import BlogPage from "../components/Blog";
interface BlogProps {
  posts: Blog[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <MetaContainer
      title="Developer Blog"
      description="Eric Quelch - Developer Blog"
    >
      <BlogPage posts={posts}>
        <Animate animation="fade-down">
          <BlogHeading />
        </Animate>
      </BlogPage>
    </MetaContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const posts = files.map((filename) => {
    const slug: string = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("src/posts", filename), "utf-8");

    const { data } = matter(markdown);

    return { slug, data };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
