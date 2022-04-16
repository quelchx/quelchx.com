import React, { useEffect, useState } from "react";
import { Blog } from "../../pages/blog";
import PostList from "./PostsList";

type PostProps = {
  posts: Blog[];
  children: React.ReactNode;
};

const Posts = ({ posts, children }: PostProps) => {
  return (
    <section className="py-10">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        {children}
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default React.memo(Posts);
