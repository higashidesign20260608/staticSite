import type { ItfMySns } from "../types/type-my-sns";
import { MY_SNS_OBJ } from "../constants/constant-my-sns";
import type { TypeMySnsNames } from "../constants/constant-my-sns";

const mySnsObjAry: ItfMySns[] = Object.values(MY_SNS_OBJ);


export function getMySns(snsName:TypeMySnsNames): ItfMySns {
  const mySns = mySnsObjAry.find((sns) => (sns.name === snsName));
  if (!mySns) {
    throw new Error(`SNS info not found for name: ${snsName}`);
  };
  return mySns;
}