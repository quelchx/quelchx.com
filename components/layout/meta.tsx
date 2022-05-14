import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SOCIALS from "../../constants/social";
import { MetaState } from "../../@types";

const Meta = ({ ...overrides }) => {
  const router = useRouter();

  const meta: MetaState = {
    title: "Eric Quelch - Software Developer",
    description: `Eric Quelch - Software Developer Portfolio. Check out my portfolio here at http://quelchx.com or visit my Linkedin at ${SOCIALS.linkedin}`,
    image: "https://avatars.githubusercontent.com/u/74473426?v=4",
    type: "website",
    ...overrides,
  };

  return (
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
      <meta name="twitter:site" content="@ericquelch" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
};

export default Meta;
