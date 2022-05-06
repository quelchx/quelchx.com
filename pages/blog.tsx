import React from "react";
import type { GetStaticProps, NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Animate, BlogContainer, BlogHero, PageContainer } from "../components";
import { BlogProps } from "../@types";

const BlogPage: NextPage<BlogProps> = ({ posts, categories }) => {
  return (
    <div className="dark:bg-neutral-900 dark:text-white">
      <PageContainer
        title="Dev Blog"
        description="Eric Quelch's Developers Blog"
      >
        <Animate animation="fade-left" delay={400} duration={500}>
          <BlogHero />
          <BlogContainer posts={posts} categories={categories} />
        </Animate>
      </PageContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug: string = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(markdown);
    return { slug, data };
  });

  let temp: string[] = [];
  posts.forEach((post: any) => {
    post.data.category.forEach((category: any) => {
      temp.push(category);
    });
  });

  const categories = temp.filter((t, idx) => {
    return temp.indexOf(t) === idx;
  });

  return {
    props: {
      posts,
      categories,
    },
  };
};

export default BlogPage;
