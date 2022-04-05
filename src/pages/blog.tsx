// @ts-ignore
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import type { GetStaticProps, NextPage } from "next";

import MetaContainer from "../meta/MetaContainer";
import Link from "next/link";
import BlogHeading from "../components/blog/BlogHeading";
import AOS from "../components/AOS";

type Posts = {
  title: string;
  slug: string;
  image_cover: string;
  date: string;
  excerpt: string;
};

interface BlogProps {
  posts?: Posts[];
}

const Blog: NextPage<BlogProps> = ({ posts }: { posts: any }) => {
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
            {posts.map((post: any, idx: string | number) => {
              return (
                <div key={idx} className="flex flex-col justify-center px-6">
                  <AOS animation="fade-up">
                    <h5 className="font-semibold ">{post.data.title}</h5>
                    <p>{post.data.excerpt}</p>
                    <p className="mt-1">Posted: {post.data.date}</p>
                    <div className="py-4">
                      <Link href={`/blog/${post.slug}`}>
                        <a className="px-5 py-2.5 mr-2 rounded mb-2 text-center text-white bg-blue-500">
                          Read More
                        </a>
                      </Link>
                    </div>
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
      posts: posts,
    },
  };
};

export default Blog;
