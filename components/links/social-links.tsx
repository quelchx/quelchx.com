import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import RedirectLink from "./redirect-link";
import { Children } from "../../@types";
import SOCIALS from "../../constants/social";

const SocialLinks = ({ children }: { children: Children }) => {
  const { github, twitter, linkedin } = SOCIALS;
  return (
    <div className="flex flex-row items-center space-x-4">
      <RedirectLink href={github}>
        <FiGithub />
      </RedirectLink>
      <RedirectLink href={linkedin}>
        <FiLinkedin />
      </RedirectLink>
      <RedirectLink href={twitter}>
        <FiTwitter />
      </RedirectLink>
      {children}
    </div>
  );
};

export default SocialLinks;
