import Head from "next/head";
import "@/style/main.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Application({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default Application;
