import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  });

  return (
    <>
      {mounted && (
        <ThemeProvider defaultTheme="light" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}

export default Application;
