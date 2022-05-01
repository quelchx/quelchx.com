import React, { ReactNode } from "react";
import { AvatarProps } from "@chakra-ui/react";
import { IconBaseProps, IconContext, IconType } from "react-icons";

export type ComputerRef = any;
export type ComputerProps = {
  children: ReactNode;
};

export interface DataProps {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  category: string[];
}

export interface Blog {
  slug: string;
  data: DataProps;
}

export interface BlogProps {
  posts: Blog[];
  categories: string[];
}

export interface ProfileAvatarProps extends AvatarProps {}

export interface PageLayoutProps {
  children: ReactNode;
}

export interface NavLinkProps extends PageLayoutProps {
  route: Routes;
}

export interface PageLinkProps extends PageLayoutProps {
  href: string;
}

export interface SocialButtonProps extends PageLinkProps {
  label: string;
}

export interface Routes {
  href: string;
  name: string;
  children?: Array<Routes>;
}

export interface CateogiesProps {
  categories: string[];
  articles: Blog[];
  setArticles: React.Dispatch<React.SetStateAction<Blog[]>>;
}

export interface RepoProps {
  [repo: string]: any;
}

export interface StatsCardProps {
  title: string;
  stat: string;
  icon: IconType;
}

export interface MetaState {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export interface MetaProps extends PageLayoutProps {
  [overrides: string]: any;
}

export interface FeatureProps {
  heading: string;
  text: string;
}

export interface ProjectProps {
  title: string;
  link: string;
  description: string;
  features: FeatureProps[];
}

export interface ToggleThemeProps {
  size?: string;
  rounded?: string;
}

export interface AnimationProps  {
  children: React.ReactNode;
  animation?: string;
  duration?: string | number;
  delay?: string | number;
};