import { ContentBlock } from "draft-js";
import { findWithRegex } from "../findWithRegex";
import { PATTERN } from "../../constants";
import { CallbackFn } from "../../types";



export function underLineStrategy(
    contentBlock: ContentBlock,
    callback: CallbackFn
  ) {
    findWithRegex(PATTERN.UNDERLINE, contentBlock, callback);
  }