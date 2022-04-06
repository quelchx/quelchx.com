import Link from "next/link";
import { Article } from "../../types";

interface ArticleProps {
  article: Article;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={article.data.cover_image}
          alt="cover-image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {article.data.title}
          </p>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {article.data.excerpt}
        </p>
        <Link href={`/blog/${article.slug}`}>
          <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Article;
