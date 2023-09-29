import { mainArticleContent } from "@/app/definitions/main-article";
import { ArticleModel } from "@/app/interface/article";
import { cn } from "@/app/utils/cn";

type MainArticleProps = {
  articleContent: ArticleModel;
  className?: string;
};

export default function MainArticle(props: MainArticleProps) {
  const { articleContent, className } = props;

  return (
    <div className={cn("md:grid md:grid-cols-3 gap-5", className)}>
      <div className="min-[320px]:mb-8">
        <div className="space-y-2 mb-9">
          <h1 className="md:pr-5 text-[1.8rem] uppercase font-openSansLight pb-1">
            {articleContent.title}
          </h1>
          <hr />
          <p className="leading-8 pt-4 text-lg font-openSansLight text-gray-300">
            {articleContent.content}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-red-700 font-openSansRegular font-semibold">
            {articleContent.footer.title}
          </p>
          <p className="leading-8 text-lg font-openSansBold">
            {articleContent.footer.content}
          </p>
        </div>
      </div>
      <div className="md:col-span-2 md:order-first">
        <div className="md:flex h-full items-stretch gap-5">
          <div className="xs:pb-3">
            <img
              src={mainArticleContent.images[0].src}
              alt={mainArticleContent.images[0].alt}
            />
          </div>
          <div className="sm:flex md:block md:space-y-6 xs:space-y-3">
            <div className="sm:mb-5">
              <img
                src={mainArticleContent.images[1].src}
                alt={mainArticleContent.images[1].alt}
              />
            </div>
            <div>
              <img
                src={mainArticleContent.images[2].src}
                alt={mainArticleContent.images[2].alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
