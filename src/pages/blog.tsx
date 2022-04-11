import matter from "gray-matter";
import fs from "fs";
import path from "path";
import type { GetStaticProps, NextPage } from "next";

import MetaContainer from "../meta/MetaContainer";
import BlogHeading from "../components/blog/BlogHeading";
import AOS from "../components/AOS";
import Article from "../components/blog/Article";
import { Blog } from "../types";
interface BlogProps {
  posts: Blog[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <MetaContainer
      title="Developer Blog"
      description="Eric Quelch - Developer Blog"
    >
      <section className="pt-10">
        <div className="px-8 mx-auto max-w-7xl lg:px-16">
          <AOS animation="fade-down">
            <BlogHeading />
          </AOS>
          <div className="grid grid-cols-1 gap-0 my-6 md:grid-cols-2 md:gap-16">
            {posts.reverse().map((post: Blog) => {
              return (
                <div key={post.slug}>
                  <AOS animation="fade-in">
                    <Article article={post} />
                  </AOS>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
