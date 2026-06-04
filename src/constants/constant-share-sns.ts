import type { ItfShareSns } from "../types/type-share-sns";

// sns情報オブジェクト
export const SHARE_SNS_OBJ = {
	X: {
		name: "x",
		label: "X",
		href: "https://twitter.com/intent/tweet?",
    iconImgSrc: "/sns-icon/x-icon-black.png",
    iconImgAlt: "iconX",
	},
	LINE: {
		name: "line",
		label: "LINE",
		href: "https://social-plugins.line.me/lineit/share?",
    iconImgSrc: "/sns-icon/line-icon.png",
    iconImgAlt: "iconLine",
	},
} as const satisfies Record<string, ItfShareSns>;

export type TypeShareSnsNames = (typeof SHARE_SNS_OBJ)[keyof typeof SHARE_SNS_OBJ]["name"];
