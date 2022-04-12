export interface Blog {
  slug: string;
  data: Post;
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  category: [string]
}

export interface Asset {
  icon: string;
  asset: string;
  details: string;
}

export interface Project {
  details: string;
  path: string;
  image: string;
  name: string;
}