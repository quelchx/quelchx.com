import React from "react";
import Articles from "@/components/Articles";
import Questions from "@/components/Questions";
import AOS from "@/components/AOS";

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
    <AOS delay='300'>
      <Articles posts={articles} />
    </AOS>
  );
}
