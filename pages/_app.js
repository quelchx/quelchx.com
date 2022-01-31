import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";
import "../style/main.css";

function Application({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application;
