import React, { MouseEventHandler } from "react";

type CategoryListProps = {
  categories: string[];
  onClick: MouseEventHandler;
};

const CategoryList = ({ categories, onClick }: CategoryListProps) => {
  console.log('Category List')

  return (
    <React.Fragment>
      {categories.map((cat: string) => {
        return (
          <option onClick={onClick} key={cat}>
            {cat}
          </option>
        );
      })}
    </React.Fragment>
  );
};

export default React.memo(CategoryList);
