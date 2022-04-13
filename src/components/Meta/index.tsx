import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface MetaContainerProps {
  children: React.ReactNode;
  [overrides: string]: any;
}

type MetaProps = {
  title: string;
  description: string;
  image: string;
  type: string;
};

const MetaContainer = ({
  children,
  ...overrides
}: MetaContainerProps): JSX.Element => {
  const router = useRouter();

  const meta: MetaProps = {
    title: "Eric Quelch - Developer, Writer, Creator, Mentor and Tutor",
    description: `I've been developing websites for 4 years straight. Get in touch with me to know more.`,
    image: "https://avatars.githubusercontent.com/u/74473426?v=4",
    type: "website",
    ...overrides,
  };

  return (
    <>
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
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default MetaContainer;
