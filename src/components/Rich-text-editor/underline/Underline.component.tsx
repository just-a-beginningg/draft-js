import { FC, useEffect, useState } from "react";
import { START_PATTERN_FILTER } from "../../../constants";
import { CommonProps } from "../../../types";
import { DefaultComponent } from "../default-component/default-component";

type UnderlineProps = CommonProps;
export const Underline: FC<UnderlineProps> = (props) => {
  const { children, offsetKey } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    const regexp = START_PATTERN_FILTER.UNDERLINE;
    setContent(text.replace(regexp, ""));
  }, [children]);
  return (
    <>
      <span className="underline font-medium" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
