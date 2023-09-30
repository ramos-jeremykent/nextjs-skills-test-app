import { articlesData } from "@/app/definitions/articles";
import { ArticleCardModel } from "@/app/interface/article";
import CardCarousel from "../../molecules/card-carousel/card-carousel";
import ArticleSectionTitle from "../../atoms/article-section-title/article-section-title";

type ArticleCarouselSectionProps = {
  articles: ArticleCardModel[];
  className?: string;
  title: string;
};

export function ArticleCarouselSection(props: ArticleCarouselSectionProps) {
  const { articles, className, title } = props;

  return (
    <>
      <div className={className}>
        <ArticleSectionTitle title={title} />
      </div>
      <div>
        <CardCarousel articles={articles} id={"articles-carousel"} />
      </div>
    </>
  );
}
