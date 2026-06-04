import type { TypeNavigationNames } from "../constants/constant-navigation";
import { NAVIGATION_OBJ } from "../constants/constant-navigation";
import type { ItfNavigation, ItfNavigationLabelPath } from "../types/type-navigation";

const navigationObjAry: ItfNavigation[] = Object.values(NAVIGATION_OBJ);

// 指定（複数）のナビゲーション情報の取得
export function getNavigations(navigationNames:TypeNavigationNames[]): ItfNavigation[] {
  const navigations: ItfNavigation[] =
    navigationNames.map(navigationName => {
      const navigation: ItfNavigation | undefined = navigationObjAry.find((f) => (f.name === navigationName));
      if (!navigation) {
        throw new Error(`navigation not found for name: ${navigationName}`);
      }
      return navigation;
    });
  return navigations;
};

// 指定（単体）のナビゲーション情報の取得
export function getNavigation(navigationName:TypeNavigationNames): ItfNavigation {
  const navigation: ItfNavigation | undefined = navigationObjAry.find((f) => (f.name === navigationName));
  if (!navigation) {
    throw new Error(`navigation not found for name: ${navigationName}`);
  }
  return navigation;
};

// 指定（単体）のサブナビゲーション情報（複数の場合あり）の取得
export function getSubNavigationsOfNavigation(navigationName:TypeNavigationNames): ItfNavigation[] {

  // 指定のナビゲーション情報取得
  const navigation: ItfNavigation | undefined = navigationObjAry.find((f) => (f.name === navigationName));
  if (!navigation) {
    throw new Error(`navigation not found for name: ${navigationName}`);
  }

  // 取得したナビゲーション情報のサブナビゲーション情報取得
  const subNavigations: ItfNavigation[] | null = navigation.sub;
  if (subNavigations == null) {
    throw new Error(`sub navigation null for name: ${navigationName}`);
  }
  return subNavigations;
};

// 全ナビゲーションのラベルとパスの情報取得
export function getAllNavigationLabelPath():ItfNavigationLabelPath[] {
  return navigationObjAry.flatMap(flattenNavigation);
}

function flattenNavigation(nav: ItfNavigation): ItfNavigationLabelPath[] {
  return [
    { label: nav.label, path: nav.path },
    ...(nav.sub?.flatMap(flattenNavigation) ?? [])
  ];
}