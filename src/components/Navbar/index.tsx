import React, { useEffect, useState } from "react";
import Link from "next/link";
import Links from "./Links";
import data from "../../constants";
import SocialLinks from "../SocialLinks";
import { motion } from "framer-motion";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
 
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
            <a>
              <h1 className="text-xl font-semibold cursor-pointer hvr-pulse">
                Eric<span className="text-green-500"> Quelch</span>
              </h1>
              <p className="text-base cursor-pointer ">
                {data.title}
              </p>
            </a>
          </Link>
        </div>

        <div className="hidden space-x-8 md:block">
          <Links />
        </div>

        <SocialLinks>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </SocialLinks>
      </nav>

      <nav className="block mt-4 space-x-8 md:hidden">
        <Links />
      </nav>
    </motion.header>
  );
};

export default Navbar;
