import React, { useEffect, useState } from "react";
import { Blog } from "../../pages/blog";
import CategoryList from "./CategoryList";
import Post from "./Post";

type PostListProps = {
  posts: Blog[];
};

const PostList = ({ posts }: PostListProps) => {
  const [articles, setArticles] = useState<Blog[]>(posts);
  const [category, setCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    let temp: string[] = [];
    posts.forEach((post: Blog) => {
      post.data.category.forEach((category) => {
        temp.push(category);
      });
    });
    let filtered = temp.filter((t, idx) => {
      return temp.indexOf(t) === idx;
    });
    setCategories(filtered);
  }, []);

  useEffect(() => {
    if (category == "All") {
      return;
    } else {
      filterByCategory(category);
    }
  }, [category]);

  function filterByCategory(str: string): void {
    let temp: Blog[] = [];
    posts.filter((val: Blog) => {
      val.data.category.filter((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
          temp.push(val);
          setArticles(temp);
        }
      });
    });
  }

  return (
    <React.Fragment>
      <section className="flex flex-col w-auto md:w-1/3">
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
            <CategoryList
              onClick={(e: any) => setCategory(e.target.value)}
              categories={categories}
            />
          </select>
        </div>
      </section>
      <article className="grid grid-cols-1 gap-0 my-6 md:grid-cols-2 md:gap-16">
        {articles.map((post: Blog) => {
          return (
            <div key={post.slug}>
              <Post post={post} />
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default React.memo(PostList);
