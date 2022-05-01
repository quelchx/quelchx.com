import React from "react";
import { Select } from "@chakra-ui/react";
import { Blog, CateogiesProps } from "../../interface";

const Categories = ({ categories, articles, setArticles }: CateogiesProps) => {
  const filterByCategory = (str: string): void => {
    let temp: Blog[] = [];
    articles.filter((val) => {
      val.data.category.filter((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
          temp.push(val);
        }
      });
    });
    setArticles(temp);
  };

  return (
    <Select defaultValue="All" width={"75%"}>
      <option onClick={() => setArticles(articles)}>All</option>
      {categories.map((category) => (
        <option
          onClick={(e: any) => filterByCategory(e.target.value)}
          key={category}
        >
          {category}
        </option>
      ))}
    </Select>
  );
};

export default Categories;
