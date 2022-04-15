import BlogHeading from "../Heading/BlogHeading";
import Animate from "../AOS";
import Article from "../Article";
import { Blog } from "../../types";
import React, { useEffect, useState } from "react";
import BlogArticle from "./BlogArticle";
interface BlogProps {
  posts: Blog[];
  children: React.ReactNode;
}

const BlogPage = ({ posts, children }: BlogProps) => {
  const [articles, setArticles] = useState(posts);
  const [category, setCategory] = useState<string>("All");
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    let p: any = [];
    posts.forEach((post: Blog) => {
      post.data.category.forEach((cat) => {
        p.push(cat);
      });
    });
    setCategories([...new Set(p)]);

    if (category == "All") {
      return;
    } else {
      filterByCategory(category);
    }
  }, []);

  function filterByCategory(str: string): void {
    let temp: any = [];
    posts.filter((val) => {
      val.data.category.filter((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
          temp.push(val);
          setArticles(temp);
        }
      });
    });
  }

  useEffect(() => {
    if (category == "All") {
      return;
    } else {
      filterByCategory(category);
    }
  }, [category]);

  return (
    <section className="py-10">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        {children}
        <div className="flex flex-col w-auto md:w-1/3">
          <div className="flex flex-col py-2">
            <label
              htmlFor="posts"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Filter Articles Based On Topic - {articles.length}{" "}
              {articles.length === 1 ? <>Article</> : <>Articles</>}
            </label>
            <select
              id="posts"
              defaultValue={category}
              onChange={() => filterByCategory(category)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option onClick={() => setArticles(posts)}>All</option>
              {categories.map((cat: string) => {
                return (
                  <option
                    onClick={(e: any) => setCategory(e.target.value)}
                    key={cat}
                  >
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 my-6 md:grid-cols-2 md:gap-16">
          <BlogArticle articles={articles} />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
