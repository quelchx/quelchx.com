import React from "react";
import Articles from "@/components/Articles";
import Questions from "@/components/Questions";

export async function getStaticProps(context) {
  const res = await fetch(process.env.BLOG_API);
  const articles = await res.json();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles }, // will be passed to the page component as props
  };
}

export default function Posts({ articles }) {
  return (
    <div>
      <Articles posts={articles} />
      <Questions />
    </div>
  );
}
