import React from "react";
import Link from "next/link";

interface NextLinkProps {
  path: string;
  children: React.ReactNode;
}

export default function NextLink({ children, path }: NextLinkProps) {
  return <Link href={path}>{children}</Link>;
}
