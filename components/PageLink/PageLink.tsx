import React from "react";
import NextLink from "next/link";
import { ChakraProps, Link } from "@chakra-ui/react";
import { PageLinkProps } from "../../interface";

const PageLink = ({ href, children, ...ChakraProps }: PageLinkProps & ChakraProps) => {
  return (
    <NextLink href={href}>
      <Link {...ChakraProps}>
        {children}
      </Link>
    </NextLink>
  );
};

export default PageLink;
