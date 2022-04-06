export interface Article {
  slug: string;
  data: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
}

export interface Posts {
  title: string;
  slug: string;
  image_cover: string;
  date: string;
  excerpt: string;
}
