"use client";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleCardModel } from "@/app/interface/article";
import { ArticlesCard } from "../article-card/article-card";
import { cn } from "@/app/utils/cn";

/* eslint-disable-next-line */
type NewsAndArticlesSlidesProps = {
  articles: ArticleCardModel[];
  className?: string;
  id: string;
};

export function CardCarousel(props: NewsAndArticlesSlidesProps) {
  const { articles, className, id } = props;

  const articleSlides = articles.map((article) => {
    const { id: articleId } = article;

    return (
      <SwiperSlide key={`article-${articleId}`}>
        <ArticlesCard content={article} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className={cn(className)}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
      navigation={{
        nextEl: `.article-next-${id}`,
        prevEl: `.article-prev-${id}`,
      }}
    >
      {articleSlides}
    </Swiper>
  );
}

export default CardCarousel;
