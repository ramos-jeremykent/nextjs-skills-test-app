"use client";

import * as React from "react";

import { mainArticleContent } from "@/app/definitions/main-article";
import { ArticleModel } from "@/app/interface/article";
import { cn } from "@/app/utils/cn";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type MainArticleProps = {
  articleContent: ArticleModel;
  className?: string;
};

export default function MainArticle(props: MainArticleProps) {
  const { articleContent, className } = props;
  const [open, setOpen] = React.useState(false);
  const [clickedImage, setClickedImage] = React.useState<string>("");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  function handleImageClick(image: string) {
    setOpen(true);
    setClickedImage(image);
  }

  return (
    <div className={cn("md:grid md:grid-cols-3 gap-5", className)}>
      <div className="min-[320px]:mb-8">
        <div
          className={`transition-opacity duration-500 space-y-2 mb-9 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={cn(
              "md:pr-5 text-[1.8rem] uppercase font-openSansLight pb-1"
            )}
          >
            {articleContent.title}
          </h1>
          <hr />
          <p
            className={`transition-opacity duration-1000 leading-8 pt-4 text-lg font-openSansLight text-gray-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {articleContent.content}
          </p>
        </div>
        <div
          className={`transition-opacity duration-[1500ms] space-y-3 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-red-700 font-openSansRegular font-semibold">
            {articleContent.footer.title}
          </p>
          <p className="leading-8 text-lg font-openSansBold">
            {articleContent.footer.content}
          </p>
        </div>
      </div>
      <div className="md:col-span-2 md:order-first">
        <div
          className={`transition-opacity duration-700 md:flex grid h-full gap-5 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="sm:pb-3 sm:max-h-[200px]">
            <a
              className="cursor-pointer"
              onClick={() => handleImageClick(mainArticleContent.images[0].src)}
            >
              <img
                src={mainArticleContent.images[0].src}
                alt={mainArticleContent.images[0].alt}
              />
            </a>
          </div>
          <div className="grid sm:flex md:block md:space-y-6 gap-5">
            <div className="sm:mb-5">
              <a
                className="cursor-pointer"
                onClick={() =>
                  handleImageClick(mainArticleContent.images[1].src)
                }
              >
                <img
                  src={mainArticleContent.images[1].src}
                  alt={mainArticleContent.images[1].alt}
                />
              </a>
            </div>
            <div>
              <a
                className="cursor-pointer"
                onClick={() =>
                  handleImageClick(mainArticleContent.images[2].src)
                }
              >
                <img
                  src={mainArticleContent.images[2].src}
                  alt={mainArticleContent.images[2].alt}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: true }}
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: clickedImage }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
