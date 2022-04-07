import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
