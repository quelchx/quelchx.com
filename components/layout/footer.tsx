import React from "react";
import { motion } from "framer-motion";
import RedirectLink from "../links/redirect-link";
import SocialLinks from "../links/social-links";
import ThemeSwitch from "../switch/theme-switch";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="wrapper"
    >
      <footer className="flex flex-col items-center sm:flex-row">
        <div className="text-xl font-black leading-none select-none logo">
          Eric<span className="accent"> Quelch</span>
        </div>
        <RedirectLink href="http://github.com/quelchx/quelchx.com">
          <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            Built with passion
          </p>
        </RedirectLink>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <SocialLinks>
            <ThemeSwitch />
          </SocialLinks>
        </span>
      </footer>
    </motion.section>
  );
};

export default Footer;
