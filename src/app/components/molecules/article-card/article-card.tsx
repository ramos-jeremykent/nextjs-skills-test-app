"use client";

import Image from "next/image";
import React from "react";

import { ArticleCardModel } from "@/app/interface/article";

type ArticlesProps = {
  content: ArticleCardModel;
};

export function ArticlesCard(props: ArticlesProps) {
  const { content } = props;
  const { id, title, excerpt, link, main_photo } = content;
  const coverImage = main_photo;

  function handleOnArticleClick() {
    console.log(`ARTICLE CLICKED: ${title}`);
  }

  return (
    <div
      id={`article-${id}`}
      className="max-w-[500px]"
      onClick={handleOnArticleClick}
    >
      <div className="flex flex-col shadow-lg overflow-visible p-4">
        <div className="flex-shrink-0">
          <div className="h-[360px] w-full relative hover:cursor-pointer border-b-4 border-red-600">
            <Image
              alt="News Image"
              blurDataURL={coverImage}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={coverImage}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1">
            <a href={link} className="block mt-2">
              <p className="text-lg pt-4 font-openSansBold sm:text-body md:text-header6 lg:text-2header6 text-Dark">
                {title}
              </p>
              <p className="text-subtitle text-gray-300 font-openSansLight mt-3 text-base text-dark60 hidden sm:block text-justify">
                {excerpt}
              </p>
            </a>
          </div>
        </div>
        <div
          className="flex-auto mt-6 cursor-pointer"
          onClick={handleOnArticleClick}
        >
          <span className="border-b-2 border-red-600 pb-2">READ MORE</span>
        </div>
      </div>
    </div>
  );
}

export default ArticlesProps;
