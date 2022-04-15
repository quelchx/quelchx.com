// import React from "react";
import { Blog } from "../../types";
import Article from "../Article";

type ArticleProps = {
  articles: Blog[];
};

import React, { PureComponent } from "react";

// switching this component to a PureComponent eliminates an extra re-render when user selects a category
export default class BlogArticle extends PureComponent<ArticleProps> {
  render() {
    console.log("Blog Article");
    return (
      <>
        {this.props.articles.map((post: Blog) => {
          return (
            <div key={post.slug}>
              <Article article={post} />
            </div>
          );
        })}
      </>
    );
  }
}
