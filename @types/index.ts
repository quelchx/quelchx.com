import React from "react";

export type Children = React.ReactNode;

export interface PageLayoutProps {
  children: Children;
  [overrides: string]: any;
}

export interface MetaState {
  title: string;
  description: string;
  image: string;
  type: string;
}

export interface RouteProps {
  name: string;
  path: string;
}

export interface RedirectProps {
  children: Children;
  href: string;
  className?: string;
}

export interface RepoProps {
  [repo: string]: any;
}

export interface ProjectProps {
  details: string;
  path: string;
  image: string;
  name: string;
}

export interface DataProps {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  category: string[];
};

export interface Blog  {
  slug: string;
  data: DataProps;
};

export interface BlogProps  {
  posts: Blog[];
  categories: string[];
};

export interface CategoriesProps extends BlogProps {
  setArticles: React.Dispatch<React.SetStateAction<Blog[]>>;
}

export interface PostProps {
  post: Blog;
}

export interface PostPageProps {
  data: DataProps;
  content: string;
}

export interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export interface AssetProps {
  icon: string;
  asset: string;
  details: string;
};
