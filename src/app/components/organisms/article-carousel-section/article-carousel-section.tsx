import { articlesData } from "@/app/definitions/articles";
import { ArticleCardModel } from "@/app/interface/article";
import CardCarousel from "../../molecules/card-carousel/card-carousel";
import ArticleSectionTitle from "../../atoms/article-section-title/article-section-title";

type ArticleCarouselSectionProps = {
  articles: ArticleCardModel[];
  title: string;
};

export function ArticleCarouselSection(props: ArticleCarouselSectionProps) {
  const { articles, title } = props;

  return (
    <>
      <div className="pt-20">
        <ArticleSectionTitle title={title} />
      </div>
      <div>
        <CardCarousel articles={articles} id={"articles-carousel"} />
      </div>
    </>
  );
}
