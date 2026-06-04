import type { ItfMySns } from "../types/type-my-sns";

// sns情報オブジェクト
const snsObj = {
	MY_INSTAGRAM: {
		name: "my-instagram",
		label: "Instagram",
		href: "#",
    iconImgSrc: "/sns-icon/instagram-icon-black.png",
    iconImgAlt: "iconInstagram",
	},
	SHARE_X: {
		name: "share-x",
		label: "X",
		href: "https://twitter.com/intent/tweet?",
    iconImgSrc: "/sns-icon/x-icon-black.png",
    iconImgAlt: "iconX",
	},
	SHARE_LINE: {
		name: "share-line",
		label: "LINE",
		href: "https://social-plugins.line.me/lineit/share?",
    iconImgSrc: "/sns-icon/line-icon.png",
    iconImgAlt: "iconLine",
	},
} as const satisfies Record<string, ItfMySns>;

const snsAry: ItfMySns[] = Object.values(snsObj);

export type TypeSnsNames = (typeof snsObj)[keyof typeof snsObj]["name"];

function getSnsInfo (snsName: TypeSnsNames, currentPageUrl: string, text: string): ItfMySns {
	const sns = snsAry.find((s) => (s.name === snsName));
	
	const params = new URLSearchParams();

	if (!sns) {
    throw new Error(`SNS info not found for name: ${snsName}`);
  }

  const encodedUrl = encodeURIComponent(currentPageUrl);

  if (sns.name === snsObj.SHARE_X.name || sns.name === snsObj.SHARE_LINE.name) {
		params.append("url", currentPageUrl);
		if (sns.name === snsObj.SHARE_X.name) {
      params.append("text", text);
    }
  }
	const queryString = params.toString();
  const href = queryString ? `${sns.href}${queryString}` : sns.href;
	
  return {
    ...sns,
    href,
  };
};

export { getSnsInfo };
