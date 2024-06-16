import { ContentBlock } from "draft-js";
import { CallbackFn } from "../../types";
import { PATTERN } from "../../constants";
import { findWithRegex } from "../findWithRegex";


export function redLineStrategy(
    contentBlock: ContentBlock,
    callback: CallbackFn
  ) {
    findWithRegex(PATTERN.RED_LINE, contentBlock, callback);
  }