import Head from "next/head";

import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type MetaProps = {
  children: React.ReactNode;
  [overrides: string]: any;
};

type MetaState = {
  title: string;
  description: string;
  image: string;
  type: string;
};

const Meta = ({ children, ...overrides }: MetaProps) => {
  const router = useRouter();

  const meta: MetaState = {
    title: "Eric Quelch - Developer, Writer, Creator, Mentor and Tutor",
    description: `I've been developing websites for 4 years straight. Get in touch with me to know more.`,
    image: "https://avatars.githubusercontent.com/u/74473426?v=4",
    type: "website",
    ...overrides,
  };

  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content={meta.description} />
        <meta name="description" content={meta.description} />
        <meta content={meta.description} name="description" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:url" content={`https://quelchx${router.asPath}`} />
        <link rel="canonical" href={`https://quelchx.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="quelchx.com" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wcbblez" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Meta;
