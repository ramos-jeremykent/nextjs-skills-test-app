import type { Metadata } from "next";
import { mainArticleContent } from "./definitions/main-article";
import { articlesData } from "./definitions/articles";

export const metadata: Metadata = {
  title: `${mainArticleContent.title} | Filta Skills Test App`,
  description: mainArticleContent.content,
};

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-28">
      <div className="grid md:grid-cols-3 gap-x-5">
        <div className="col-span-2">
          <div className="flex h-full items-stretch gap-5">
            <div>
              <img src="/assets/component-01/Image-01@2x.jpg" alt="Image 01" />
            </div>
            <div className="space-y-5">
              <img src="/assets/component-01/Image-02@2x.jpg" alt="Image 02" />
              <img src="/assets/component-01/Image-03@2x.jpg" alt="Image 03" />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-2 mb-9">
            <h1 className="md:pr-5 text-[1.8rem] uppercase font-openSansLight pb-1">
              {mainArticleContent.title}
            </h1>
            <hr />
            <p className="leading-9 pt-4 text-lg font-openSansLight text-gray-300">
              {mainArticleContent.content}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-lg text-red-700 font-openSansBold">
              {mainArticleContent.footer.title}
            </p>
            <p className="text-lg font-openSansBold">
              {mainArticleContent.footer.content}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <p className="uppercase text-5xl text-center font-openSansLight">
          All the lastest from AEG
        </p>
      </div>
    </main>
  );
}
