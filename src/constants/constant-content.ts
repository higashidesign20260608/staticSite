import { getCollection } from "astro:content";
import type { TypeBlog } from "../types/type-content-collection";
import type { TypeNews } from "../types/type-content-collection";

// getCollectionの引数
// content.config.tsのcollectionsのプロパティ名
export const BLOG_COLLECTION: TypeBlog[] = await getCollection("blog");
export const NEWS_COLLECTION: TypeNews[] = await getCollection("news");
