import React from "react";
import { RedirectProps } from "../../@types";

const RedirectLink = ({ children, href, className }: RedirectProps) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      referrerPolicy="origin"
    >
      {children}
    </a>
  );
};

export default RedirectLink;
