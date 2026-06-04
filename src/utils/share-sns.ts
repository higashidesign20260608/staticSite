import type { ItfShareSns } from "../types/type-share-sns";
import { SHARE_SNS_OBJ } from "../constants/constant-share-sns";
import type { TypeShareSnsNames } from "../constants/constant-share-sns";

const shareSnsObjAry: ItfShareSns[] = Object.values(SHARE_SNS_OBJ);


export function getShareSns(snsName:TypeShareSnsNames, currentPageUrl: string, text: string): ItfShareSns {
  const shareSns = shareSnsObjAry.find((sns) => (sns.name === snsName));
  const params = new URLSearchParams();

  if (!shareSns) {
    throw new Error(`SNS info not found for name: ${snsName}`);
  };

  if (shareSns.name === SHARE_SNS_OBJ.X.name || shareSns.name === SHARE_SNS_OBJ.LINE.name) {
		params.append("url", currentPageUrl);
		if (shareSns.name === SHARE_SNS_OBJ.X.name) {
      params.append("text", text);
    }
  }  

	const queryString = params.toString();
  const href = queryString ? `${shareSns.href}${queryString}` : shareSns.href;
	
  return {
    ...shareSns,
    href,
  };
}