import { mainArticleContent } from "./definitions/main-article";
import { articlesData } from "./definitions/articles";
import MainArticle from "./components/molecules/main-article/main-article";
import Head from "next/head";
import { Metadata } from "next";
import { ArticleCarouselSection } from "./components/organisms/article-carousel-section/article-carousel-section";

export const metadata: Metadata = {
  title: `${mainArticleContent.title} | Filta Skills Test App`,
  description: mainArticleContent.content,
};

export function Home() {
  return (
    <>
      <Head>
        <title>{mainArticleContent.title} | Filta Skills Test App</title>
        <meta name="title" content={mainArticleContent.title} />
        <meta name="content" content={mainArticleContent.content} />
      </Head>
      <main className="min-h-screen py-24  min-[320px]:py-10 min-[320px]:px-10 md:px-20">
        <MainArticle articleContent={mainArticleContent} />
        <ArticleCarouselSection
          title="All the latest from AEG"
          articles={articlesData}
        />
      </main>
    </>
  );
}

export default Home;
