export const PATTERN = {
    HEADING1: /^#\s[\w]+/g,
    HEADING2: /^##\s[\w]+/g,
    HEADING3: /^###\s[\w]+/g,
    BOLD: /^\*\s[\w]+/g,
    RED_LINE: /^\*\*\s[\w]+/g,
    UNDERLINE: /^\*\*\*\s[\w]+/g,
    CODE_BLOCK: /^```\s[\w]+/g,
  };

  export const START_PATTERN_FILTER = {
    HEADING1: /^#\s/,
    HEADING2: /^##\s/,
    HEADING3: /^###\s/,
    BOLD: /^\*\s/,
    RED_LINE: /^\*\*\s/,
    UNDERLINE: /^\*\*\*\s/,
    CODE_BLOCK: /^```\s/,
  };