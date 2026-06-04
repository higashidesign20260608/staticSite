import type { ItfMySns } from "../types/type-my-sns";

// sns情報オブジェクト
export const MY_SNS_OBJ = {
  INSTAGRAM: {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/25.momiji",
    iconImgSrc: "/sns-icon/instagram-icon-black.png",
    iconImgAlt: "iconInstagram",
  },
} as const satisfies Record<string, ItfMySns>;

export type TypeMySnsNames = (typeof MY_SNS_OBJ)[keyof typeof MY_SNS_OBJ]["name"];
