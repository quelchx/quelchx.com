import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMonitor } from "react-icons/md";
import ROUTES from "../../constants/routes";

const NavLinks = () => {
  const router = useRouter();

  return (
    <>
      {ROUTES.map((route, idx) => {
        return (
          <Link href={route.path} key={idx}>
            <a
              className={
                router.asPath === route.path
                  ? `text-blue-600 text-base font-normal cursor-pointer hover:text-blue-500 hvr-buzz-out`
                  : "text-base font-normal cursor-pointer hover:text-blue-400 hvr-buzz-out"
              }
            >
              {router.asPath === route.path && (
                <div className="inline-block w-3 h-3 mb-0.5 mr-1.5">
                  <MdMonitor />
                </div>
              )}
              {route.name}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
