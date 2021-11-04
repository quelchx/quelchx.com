import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/style/main.css";

import { useEffect } from "react";

function Application({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <NextNProgress color="#059669" height={5} />
      <section>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </section>
    </section>
  );
}

export default Application;
