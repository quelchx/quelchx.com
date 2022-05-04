import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavLinks from "../links/nav-links";
import SocialLinks from "../links/social-links";
import ThemeSwitch from "../switch/theme-switch";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="top"
      className="wrapper"
    >
      <nav className="flex items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="text-xl font-semibold cursor-pointer hvr-pulse">
                Eric<span className="accent"> Quelch</span>
              </h1>
              <p className="text-base cursor-pointer ">Software Developer</p>
            </a>
          </Link>
        </div>
        <div className="hidden space-x-6 md:block">
          <NavLinks />
        </div>
        <SocialLinks>
          <ThemeSwitch />
        </SocialLinks>
      </nav>
      <nav className="block mt-4 space-x-6 md:hidden">
        <NavLinks />
      </nav>
    </motion.header>
  );
};

export default Navbar;
