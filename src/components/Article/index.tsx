import Link from "next/link";
import { Blog } from "../../types";
import React, { PureComponent } from "react";

interface ArticleProps {
  article: Blog;
}

// Pure Component helps eliminate additional re-render of this component if user selects the same category
export default class Article extends PureComponent<ArticleProps> {
  render() {
    return (
      <Link href={`/blog/${this.props.article.slug}`}>
        <span className="rounded-lg cursor-pointer dark:border-gray-700">
          <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {this.props.article.data.title}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {this.props.article.data.excerpt}
          </p>
          <small>Posted {this.props.article.data.date}</small>
          <div className="flex py-2">
            {this.props.article.data.category.map((el, idx) => {
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
  }
}
