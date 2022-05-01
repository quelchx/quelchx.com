import React, { ReactNode } from "react";
import { Link } from "@chakra-ui/react";
import { PageLinkProps } from "../../interface";

const Redirect = ({ href, children }: PageLinkProps) => {
  return (
    <Link href={href} referrerPolicy="origin" target="_blank">
      {children}
    </Link>
  );
};

export default Redirect;
