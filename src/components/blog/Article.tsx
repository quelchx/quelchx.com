import Link from "next/link";
import { Blog } from "../../types";

interface ArticleProps {
  article: Blog;
}

const Article = ({ article }: ArticleProps): JSX.Element => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="rounded-lg cursor-pointer dark:border-gray-700">
        <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.data.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {article.data.excerpt}
        </p>
        <small>Posted {article.data.date}</small>
      </div>
    </Link>
  );
};

export default Article;
