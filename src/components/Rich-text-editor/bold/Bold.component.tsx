import { FC, useEffect, useState } from "react";
import { CommonProps } from "../../../types";
import { START_PATTERN_FILTER } from "../../../constants";
import { DefaultComponent } from "../default-component/default-component";

type BoldProps = CommonProps;

export const Bold: FC<BoldProps> = (props) => {
  const { children, offsetKey } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    const regexp = START_PATTERN_FILTER.BOLD;
    setContent(text.replace(regexp, ""));
  }, [children]);

  return (
    <>
      <span className="font-bold" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
     <DefaultComponent {...props}/>
    </>
  );
};
