import { FC, useEffect, useState } from "react";
import { CommonProps } from "../../../types";
import { START_PATTERN_FILTER } from "../../../constants";
import { DefaultComponent } from "../default-component/default-component";

type RedLineProps = CommonProps;

export const RedLine: FC<RedLineProps> = (props) => {
  const { children, offsetKey } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    const regexp = START_PATTERN_FILTER.RED_LINE;
    setContent(text.replace(regexp, ""));
  }, [children]);

  return (
    <>
      <span className="text-red-600 font-medium" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
