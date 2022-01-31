import React from "react";
import Articles from "@/components/Articles";
import AOS from "@/components/AOS";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch(process.env.BLOG_API);
  const articles = await res.json();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  articles.reverse();

  return {
    props: { articles }, // will be passed to the page component as props
  };
}

export default function Posts({ articles }) {
  return (
    <div>
      <Head>
        <title>Eric Quelch's Blog</title>
        <meta property="og:title" content="Eric Quelch's Blog" key="title" />
        <meta name="description" content="Eric Quelch's personal web blog" />
      </Head>
      <AOS delay="300">
        <Articles posts={articles} />
      </AOS>
    </div>
  );
}
