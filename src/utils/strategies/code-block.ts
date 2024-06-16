import { ContentBlock } from "draft-js";
import { findWithRegex } from "../findWithRegex";
import { PATTERN } from "../../constants";
import { CallbackFn } from "../../types";



export function codeBlockStrategy(
    contentBlock: ContentBlock,
    callback: CallbackFn
  ) {
    findWithRegex(PATTERN.CODE_BLOCK, contentBlock, callback);
  }