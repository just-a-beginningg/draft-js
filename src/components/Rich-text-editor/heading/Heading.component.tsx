import { FC, useEffect, useState } from "react";
import { CommonProps } from "../../../types";
import { START_PATTERN_FILTER } from "../../../constants";
import { DefaultComponent } from "../default-component/default-component";

interface HeadingProps extends CommonProps {
  level?: 1 | 2 | 3;
}

const HTML_TAG_MAP: Record<number, keyof JSX.IntrinsicElements> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

const FILTER_MAP: Record<number, RegExp> = {
  1: START_PATTERN_FILTER.HEADING1,
  2: START_PATTERN_FILTER.HEADING2,
  3: START_PATTERN_FILTER.HEADING3,
};

export const Heading: FC<HeadingProps> = ({ level = 1, ...commonProps }) => {
  const { children, offsetKey } = commonProps;
  const Component = HTML_TAG_MAP[level];

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    const regexp = FILTER_MAP[level];
    setContent(text.replace(regexp, ""));
  }, [children, level]);

  return (
    <>
      <Component data-offset-key={`modified--${offsetKey}`}>
        {content}
      </Component>
      <DefaultComponent {...commonProps}/>
    </>
  );
};
