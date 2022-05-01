import AOS from "aos";

import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import "aos/dist/aos.css";
import "../styles/globals.css";
import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from "../lib/theme";

interface ChakraProps {
  cookies: any;
  children: React.ReactNode;
}

function Application({ Component, pageProps, cookies }: AppProps & ChakraProps) {
  const [isMounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  }, []);

  const colorModeManager =
  typeof cookies === "string"
    ? cookieStorageManager(cookies)
    : localStorageManager;


  return (
    <React.Fragment>
      {isMounted && (
        // <ThemeProvider defaultTheme="light" attribute="class">
          <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            <Component {...pageProps} />
          </ChakraProvider>
        // </ThemeProvider>
      )}
    </React.Fragment>
  );
}

export default Application;
