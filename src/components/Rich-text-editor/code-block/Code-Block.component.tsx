import { FC } from "react";
import { START_PATTERN_FILTER } from "../../../constants";
import { CommonProps } from "../../../types";
import { DefaultComponent } from "../default-component/default-component";
import { useTextContent } from "../../../hooks";

type CodeBlockProps = CommonProps;
export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { children, offsetKey } = props;

  const { content } = useTextContent({
    children,
    regExp: START_PATTERN_FILTER.CODE_BLOCK,
  });
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
