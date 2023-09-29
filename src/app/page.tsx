import type { Metadata } from "next";
import { mainArticleContent } from "./definitions/main-article";
import { articlesData } from "./definitions/articles";
import MainArticle from "./components/molecules/main-article/main-article";

export const metadata: Metadata = {
  title: `${mainArticleContent.title} | Filta Skills Test App`,
  description: mainArticleContent.content,
};

export default function Home() {
  return (
    <main className="min-h-screen py-24 min-[320px]:px-10 min-[320px]:py-10 md:px-32">
      <MainArticle articleContent={mainArticleContent} />
      <div className="pt-20">
        <p className="uppercase text-5xl text-center font-openSansLight">
          All the lastest from AEG
        </p>
      </div>
    </main>
  );
}
