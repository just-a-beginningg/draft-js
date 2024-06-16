import { ContentBlock } from "draft-js";
import { findWithRegex } from "../findWithRegex";
import { CallbackFn } from "../../types";
import { PATTERN } from "../../constants";

export function heading1Strategy(
  contentBlock: ContentBlock,
  callback: CallbackFn
) {
  findWithRegex(PATTERN.HEADING1, contentBlock, callback);
}
export function heading2Strategy(
  contentBlock: ContentBlock,
  callback: CallbackFn
) {
  findWithRegex(PATTERN.HEADING2, contentBlock, callback);
}
export function heading3Strategy(
  contentBlock: ContentBlock,
  callback: CallbackFn
) {
  findWithRegex(PATTERN.HEADING3, contentBlock, callback);
}
