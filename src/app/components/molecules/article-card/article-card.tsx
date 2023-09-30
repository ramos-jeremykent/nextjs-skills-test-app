"use client";

import React from "react";

import { ArticleCardModel } from "@/app/interface/article";
import { CardContent } from "../../atoms/card-content/card-content";
import { CardImage } from "../../atoms/card-image/card-image";
import { CardLink } from "../../atoms/card-link/card-link";

type ArticlesProps = {
  content: ArticleCardModel;
};

export function ArticlesCard(props: ArticlesProps) {
  const { content } = props;
  const { id, title, excerpt, link, image } = content;

  function handleOnArticleClick() {
    console.log(`ARTICLE CLICKED: ${title}`);
  }

  return (
    <div id={`article-${id}`} className="w-full" onClick={handleOnArticleClick}>
      <div className="flex flex-col shadow-lg overflow-visible p-4">
        <CardImage alt={image.alt} main_photo={image.src} />
        <CardContent excerpt={excerpt} title={title} link={link} />
        <CardLink onClick={handleOnArticleClick} />
      </div>
    </div>
  );
}

export default ArticlesProps;
