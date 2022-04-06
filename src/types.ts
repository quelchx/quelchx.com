export interface Blog {
  slug: string;
  data: Post;
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
}
