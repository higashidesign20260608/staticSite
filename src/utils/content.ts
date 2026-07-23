import { BLOG_COLLECTION } from "../constants/constant-content";
import type { TypeBlog } from "../types/type-content-collection";
import { NEWS_COLLECTION } from "../constants/constant-content";
import type { TypeNews } from "../types/type-content-collection";

export function getLatestBlogs(num: number): TypeBlog[] {
  let count = 0;
  if ( num > BLOG_COLLECTION.length) {
    count = BLOG_COLLECTION.length;
  }else{
    count = num;
  };
  return [...BLOG_COLLECTION].sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()).slice(0, count);
};

export function getLatestNews(num: number): TypeNews[] {
  let count = 0;
  if ( num > NEWS_COLLECTION.length) {
    count = NEWS_COLLECTION.length;
  }else{
    count = num;
  };
  return [...NEWS_COLLECTION].sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()).slice(0, count);
};