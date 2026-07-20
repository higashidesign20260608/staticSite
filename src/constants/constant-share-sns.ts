import type { ItfShareSns } from "../types/type-share-sns";
import { baseUrl } from "./constant-common";

// sns情報オブジェクト
export const SHARE_SNS_OBJ = {
	X: {
		name: "x",
		label: "X",
		href: "#",
    iconImgSrc: `${baseUrl}/sns-icon/x-icon-black.png`,
    iconImgAlt: "iconX",
	},
	LINE: {
		name: "line",
		label: "LINE",
		href: "#",
    iconImgSrc: `${baseUrl}/sns-icon/line-icon.png`,
    iconImgAlt: "iconLine",
	},
} as const satisfies Record<string, ItfShareSns>;

export type TypeShareSnsNames = (typeof SHARE_SNS_OBJ)[keyof typeof SHARE_SNS_OBJ]["name"];
