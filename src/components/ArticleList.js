import React from "react";
import Article from "./Article";

function ArticleList({ post }) {
  const articles = post.map((article) => (
    <Article key={article.id} {...article}/>
  ));
  return <main>{articles}</main>;
}

export default ArticleList;