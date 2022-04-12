import Link from "next/link";
import { Blog } from "../../types";

interface ArticleProps {
  article: Blog;
}

const Article = ({ article }: ArticleProps): JSX.Element => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <span className="rounded-lg cursor-pointer dark:border-gray-700">
        <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.data.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {article.data.excerpt}
        </p>
        <small>Posted {article.data.date}</small>
        <div className="flex py-2">
        {article.data.category.map((el, idx) => {
          return (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {el}
            </span>
          );
        })}
        </div>
        
      </span>
    </Link>
  );
};

export default Article;
