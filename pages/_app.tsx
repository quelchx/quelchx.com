import "../styles/main.css";
import "aos/dist/aos.css";
import { ReactNode, useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import { cookieStorageManager, localStorageManager } from "@chakra-ui/react";

import AOS from "aos";

interface ChakraProps {
  cookies: any;
  children: ReactNode;
}

export default function Application({
  Component,
  pageProps,
  cookies,
}: AppProps & ChakraProps) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMounted(true);
  }, [isMounted]);
  const themeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={themeManager}>
      {isMounted && <Component {...pageProps} />}
    </ChakraProvider>
  );
}
