import React from "react";
import { Blog, BlogProps } from "../../pages/blog";

export interface CategoriesProps extends BlogProps {
  setArticles: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const InitialCategories = ({
  posts,
  categories,
  setArticles,
}: CategoriesProps) => {
  const filterByCategory = (str: string): void => {
    let temp: Blog[] = [];
    posts.filter((val) => {
      val.data.category.filter((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
          temp.push(val);
        }
      });
    });
    setArticles(temp);
  };

  return (
    <section className="flex flex-col w-auto md:w-1/3">
      <div className="flex flex-col py-2">
        <label htmlFor="posts" className="block mb-2 text-sm font-medium">
          Filter Articles Based On Topic
        </label>
        <select
          defaultValue="All"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option onClick={() => setArticles(posts)}>All</option>
          {categories.map((category: string) => {
            return (
              <option
                onClick={(e: any) => filterByCategory(e.target.value)}
                key={category}
              >
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

const Categories = React.memo(InitialCategories, (prevProps, nextProps) => {
  return prevProps.categories === nextProps.categories;
});

export default Categories;
