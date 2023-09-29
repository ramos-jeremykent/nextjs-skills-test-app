export interface ArticleModel {
  id: number;
  title: string;
  content: string;
  footer: {
    title: string;
    content: string;
  };
  images: ArticleImages[];
}

export interface ArticleCardModel {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  main_photo: string;
}

export interface ArticleFooter {
  title: string;
  content: string;
}

export interface ArticleImages {
  id: number;
  src: string;
  alt: string;
}
