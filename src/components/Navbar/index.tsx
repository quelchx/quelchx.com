import React, { useEffect, useState } from "react";
import Link from "next/link";
import Links from "./Links";
import data from "../../constants";
import ThemeSwitch from "../ThemeSwitch";
import SocialLinks from "../SocialLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMounted, setMouted] = useState<boolean>(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="top"
      className="container max-w-6xl px-8 py-2 mx-auto md:py-6"
    >
      <nav className="flex items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/">
            <React.Fragment>
              <h1 className="text-xl font-semibold text-gray-800 cursor-pointer hvr-pulse dark:text-white">
                Eric<span className="text-green-500"> Quelch</span>
              </h1>
              <p className="text-base text-gray-800 cursor-pointer dark:text-white">
                {data.title}
              </p>
            </React.Fragment>
          </Link>
        </div>

        <div className="hidden space-x-8 md:block">
          <Links />
        </div>

        <SocialLinks>
          <ThemeSwitch isMounted={isMounted} />
        </SocialLinks>
      </nav>

      <nav className="block mt-4 space-x-8 md:hidden">
        <Links />
      </nav>
    </motion.header>
  );
};

export default Navbar;
