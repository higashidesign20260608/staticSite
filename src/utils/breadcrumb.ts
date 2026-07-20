import { getAllNavigationLabelPath } from "./navigation";
import type { ItfNavigationLabelPath } from "../types/type-navigation";
import { baseUrl } from "../constants/constant-common";

const allNavigationLabelPath: ItfNavigationLabelPath[] = getAllNavigationLabelPath();

// パンくず作成に必要な情報を取得
export function getBreadcrumbInfoArr (currentPageUrl: string): ItfNavigationLabelPath[] {

  if (!currentPageUrl || currentPageUrl === "") {
    throw new Error(`currentPageUrl nothing`);
  };

  // currentPageUrlより、必要な値を抽出
  // 1. https://higashidesign20260608.github.io/staticSite/blog/categoryA
  // 2. https:, "", higashidesign20260608.github.io, staticSite, blog, categoryA, ""
  // 3. blog, categoryA, ""
  // 4. blog, categoryA
  const splitPageUrlArr: string[] = currentPageUrl.split("/").toSpliced(0,4);
  // 最後尾要素に空文字("")が存在する場合があるので、存在する場合は削除
  if (splitPageUrlArr[splitPageUrlArr.length-1] === "") {
    splitPageUrlArr.pop();
  };

  // 抽出した値より、パンくずの各path作成
  // 1. blog, categoryA
  // 2. /blog/, /blog/categoryA/
  // 3. /, /blog/, /blog/categoryA/
  let pathTemp = `/${baseUrl}/`;
  const breadcrumbForPaths: string[] = splitPageUrlArr.map((splitPageUrl: string) => {
    let returnPath;
    returnPath = `${pathTemp}${splitPageUrl}/`;
    pathTemp = returnPath;
    return returnPath;
  });

  // topページ用のpathを配列先頭に追加
  breadcrumbForPaths.unshift("/");
  
  // breadcrumbForPaths配列のpathをgetAllLabelPathInfoオブジェクト配列のパスと突き合わせ
  // 合致したオブジェクト抽出
  let breadcrumbInfoObjContainUndefined: (ItfNavigationLabelPath | undefined)[] = breadcrumbForPaths.map((path: string) => allNavigationLabelPath.find(allLabelPathInfoObj => allLabelPathInfoObj.path === path));
  // undefinedの可能性を排除
  let breadcrumbInfo: ItfNavigationLabelPath[] = breadcrumbInfoObjContainUndefined.filter((item): item is ItfNavigationLabelPath => item !== undefined);

  // breadcrumbInfoObjのlabelの表示文字数制限処理(11文字以降をまとめて"…"に変換)
  breadcrumbInfo.forEach((obj) => {
    if (!obj) {
      throw new Error(`breadcrumbInfo nothing`);
    };
    if (obj.label.length > 10) {
      obj.label = `${obj.label.substring(0,10)}…`
    };
  })

  return breadcrumbInfo;
}
