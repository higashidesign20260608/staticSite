// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});



// BLOG
// 型定義
export type Blog = {
  title: string;
  description: string;
  content: string;
} & MicroCMSListContent & BlogPlus;

export type BlogPlus = {
  image: MicroCMSImage;
  category: {
    name: string;
  } & MicroCMSListContent;
  meta: {
    title: string;
    description: string;
    image: MicroCMSImage;
  }
}

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};



// NEWS
// 型定義
export type News = {
  title: string;
  description: string;
  content: string;
} & MicroCMSListContent & BlogPlus;

export type NewsPlus = {
  category: {
    name: string;
  } & MicroCMSListContent;
  meta: {
    title: string;
    description: string;
    image: MicroCMSImage;
  }
}

// APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({ endpoint: "news", queries });
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};