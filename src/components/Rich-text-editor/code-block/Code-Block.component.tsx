import { FC, useEffect, useState } from "react";
import { START_PATTERN_FILTER } from "../../../constants";
import { CommonProps } from "../../../types";
import { DefaultComponent } from "../default-component/default-component";

type CodeBlockProps = CommonProps;
export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { children, offsetKey } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    const regexp = START_PATTERN_FILTER.CODE_BLOCK;
    setContent(text.replace(regexp, ""));
  }, [children]);
  return (
    <>
      <span
        className="font-bold p-8 inline-block text-[#bababa] rounded"
        data-offset-key={`modified--${offsetKey}`}
      >
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
