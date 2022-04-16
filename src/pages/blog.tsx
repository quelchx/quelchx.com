import React from "react";
import { GetStaticProps, NextPage } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Meta from "../components/Meta";
import Posts from "../components/Posts";
import BlogHero from "../components/Hero/BlogHero";

export type DataProps = {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  category: string[];
};

export type Blog = {
  slug: string;
  data: DataProps;
};

export type BlogProps = {
  posts: Blog[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Meta title="Developers Blog - Eric Quelch">
      <Posts posts={posts}>
        <BlogHero />
      </Posts>
    </Meta>
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
