import { ContentBlock } from "draft-js";
import { CallbackFn } from "../types";

export function findWithRegex(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  regex: any,
  contentBlock: ContentBlock,
  callback: CallbackFn
) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
