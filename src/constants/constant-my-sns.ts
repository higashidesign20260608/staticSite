import type { ItfMySns } from "../types/type-my-sns";

// sns情報オブジェクト
export const MY_SNS_OBJ = {
  INSTAGRAM: {
    name: "instagram",
    label: "Instagram",
    href: "#",
    iconImgSrc: "/sns-icon/instagram-icon-black.png",
    iconImgAlt: "iconInstagram",
  },
} as const satisfies Record<string, ItfMySns>;

export type TypeMySnsNames = (typeof MY_SNS_OBJ)[keyof typeof MY_SNS_OBJ]["name"];
