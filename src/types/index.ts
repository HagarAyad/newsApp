export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  url: string;
  description: string;
  content: string;
  urlToImage: string;
  publishedAt: string;
};
