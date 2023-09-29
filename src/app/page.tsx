import { mainArticleContent } from "./definitions/main-article";
import { articlesData } from "./definitions/articles";
import MainArticle from "./components/molecules/main-article/main-article";
import CardCarousel from "./components/molecules/card-carousel/card-carousel";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${mainArticleContent.title} | Filta Skills Test App`,
  description: "Skills test created by Jeremy Ramos",
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
        <div className="pt-20">
          <p className="uppercase text-5xl text-center font-openSansLight pb-8">
            All the lastest from AEG
          </p>
        </div>
        <div>
          <CardCarousel articles={articlesData} id={"articles-carousel"} />
        </div>
      </main>
    </>
  );
}

export default Home;
