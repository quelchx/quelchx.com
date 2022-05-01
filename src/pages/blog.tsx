import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next/types";
import path from "path";
import React from "react";

import fs from "fs";
import Meta from "../components/Meta";
import PostsWrapper from "../components/Posts";
import BlogHero from "../components/Hero/BlogHero";

export interface DataProps {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  category: string[];
};

export interface Blog  {
  slug: string;
  data: DataProps;
};

export interface BlogProps  {
  posts: Blog[];
  categories: string[];
};

const PostsPage: NextPage<BlogProps> = ({ posts, categories }) => {
  return (
    <Meta title='Developers Notes - Eric Quelch'>
      <BlogHero />
      <PostsWrapper posts={posts} categories={categories} />
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

export default PostsPage;
