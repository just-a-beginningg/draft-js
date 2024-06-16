import { ContentBlock } from "draft-js";
import { findWithRegex } from "../findWithRegex";
import { PATTERN } from "../../constants";
import { CallbackFn } from "../../types";

export function boldStrategy(
  contentBlock: ContentBlock,
  callback: CallbackFn
) {
  findWithRegex(PATTERN.BOLD, contentBlock, callback);
}
