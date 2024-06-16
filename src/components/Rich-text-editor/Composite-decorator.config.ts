import { CompositeDecorator } from "draft-js";
import { Heading } from "./heading/Heading.component";
import { boldStrategy, codeBlockStrategy, heading1Strategy, heading2Strategy, heading3Strategy, redLineStrategy, underLineStrategy } from "../../utils";
import { Bold } from "./bold/Bold.component";
import { RedLine } from "./red-line/Red-Line.component";
import { Underline } from "./underline/Underline.component";
import { CodeBlock } from "./code-block/Code-Block.component";

export const compositeDecorator = new CompositeDecorator([
  {
    strategy: heading1Strategy,
    component: Heading,
    props: { level: 1 },
  },
  {
    strategy: heading2Strategy,
    component: Heading,
    props: { level: 2 },
  },
  {
    strategy: heading3Strategy,
    component: Heading,
    props: { level: 3 },
  },
  {
    strategy: boldStrategy,
    component: Bold,
  },
  {
    strategy: redLineStrategy,
    component: RedLine,
  },
  {
    strategy: underLineStrategy,
    component: Underline,
  },
  {
    strategy: codeBlockStrategy,
    component: CodeBlock,
  },
]);
