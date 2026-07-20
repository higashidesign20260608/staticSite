import { BLOG_COLLECTION, NEWS_COLLECTION } from "./constant-content";
import type { ItfNavigation } from "../types/type-navigation"
import type { TypeBlog, TypeNews } from "../types/type-content-collection";
import { baseUrl } from "./constant-common";

// NAVIGATION_OBJ.BLOG.subを作成
const blogSub: ItfNavigation[] = [
  ...new Map(
    BLOG_COLLECTION.map((blog: TypeBlog) => {
      const categoryName = blog.data.category.id;

      return [
        categoryName,
        {
          name: categoryName,
          label: blog.data.category.name,
          path: `/${baseUrl}/blog/${categoryName}/`,
          sub: getBlogsByCategoryObj(categoryName),
        },
      ];
    })
  ).values(),
];

// カテゴリー別でまとめた記事オブジェクトを取得
function getBlogsByCategoryObj(categoryName:string): ItfNavigation[] {
  const categoryFilterBlogs: TypeBlog[] = BLOG_COLLECTION.filter((blog: TypeBlog) => blog.data.category.name === categoryName);
  const blogsByCategoryObj = categoryFilterBlogs.map((blog: TypeBlog) => (
    {
      name: blog.id,
      label: blog.data.title,
      path: `/${baseUrl}/blog/${blog.data.category.name}/${blog.id}/`,
      sub: null,
    }
  ))
  return blogsByCategoryObj;
};

// NAVIGATION_OBJ.NEWS.subを作成
const newsSub: ItfNavigation[] = [
  ...new Map(
    NEWS_COLLECTION.map((newsItem: TypeNews) => {
      const categoryName = newsItem.data.category.id;

      return [
        categoryName,
        {
          name: categoryName,
          label: newsItem.data.category.name,
          path: `/${baseUrl}/news/${categoryName}/`,
          sub: getNewsByCategoryObj(categoryName),
        },
      ];
    })
  ).values(),
];

// カテゴリー別でまとめた記事オブジェクトを取得
function getNewsByCategoryObj(categoryName:string): ItfNavigation[] {
  const categoryFilterBlogs: TypeNews[] = NEWS_COLLECTION.filter((newsItem: TypeNews) => newsItem.data.category.id === categoryName);
  const blogsByCategoryObj = categoryFilterBlogs.map((newsItem: TypeNews) => (
    {
      name: newsItem.id,
      label: newsItem.data.title,
      path: `/${baseUrl}/news/${newsItem.data.category.id}/${newsItem.id}/`,
      sub: null,
    }
  ))
  return blogsByCategoryObj;
};

// 全ページのナビゲーション情報オブジェクト
export const NAVIGATION_OBJ = {
  HOME: {
    name: "home",
    label: "ホーム",
    path: `/${baseUrl}/`,
    sub: null
  },
  NEWS: {
    name: "news",
    label: "ニュース",
    path: `/${baseUrl}/news/`,
    sub: newsSub
  },
  BLOG: {
    name: "blog",
    label: "ブログ",
    path: `/${baseUrl}/blog/`,
    sub: blogSub
  },
  SHOP: {
    name: "shop", label: "ショップ", path: `/${baseUrl}/shop/`, sub: null
  },
  CONTACT: {
    name: "contact", label: "お問い合わせ", path: `/${baseUrl}/contact/`, sub: null
  },
  PRIVACY_POLICY: {
    name: "privacy-policy", label: "プライバシーポリシー", path: `/${baseUrl}/privacy-policy/`, sub: null
  },
} as const satisfies Record<string,ItfNavigation>;

export type TypeNavigationNames = (typeof NAVIGATION_OBJ)[keyof typeof NAVIGATION_OBJ]["name"];