import AOS from "aos";

import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import "aos/dist/aos.css";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  const [isMounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  }, []);

  return (
    <React.Fragment>
      {isMounted && (
        <ThemeProvider defaultTheme="light" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </React.Fragment>
  );
}

export default Application;
