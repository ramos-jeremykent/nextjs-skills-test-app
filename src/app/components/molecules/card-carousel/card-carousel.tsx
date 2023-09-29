"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { ArticleCardModel } from "@/app/interface/article";
import { ArticlesCard } from "../article-card/article-card";

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
      // breakpoints={{
      //   1024: {
      //     width: 1024,
      //     slidesPerView: 3,
      //   },
      //   // when window width is >= 640px
      //   640: {
      //     width: 640,
      //     slidesPerView: 1,
      //   },
      //   // when window width is >= 768px
      //   768: {
      //     width: 768,
      //     slidesPerView: 2,
      //   },
      // }}
      modules={[Navigation]}
      navigation={{
        nextEl: `.article-next-${id}`,
        prevEl: `.article-prev-${id}`,
      }}
      slidesPerView={3}
      spaceBetween={10}
    >
      {articleSlides}
    </Swiper>
  );
}

export default CardCarousel;
