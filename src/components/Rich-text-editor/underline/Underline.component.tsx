import { FC } from "react";
import { START_PATTERN_FILTER } from "../../../constants";
import { CommonProps } from "../../../types";
import { DefaultComponent } from "../default-component/default-component";
import { useTextContent } from "../../../hooks";

type UnderlineProps = CommonProps;
export const Underline: FC<UnderlineProps> = (props) => {
  const { children, offsetKey } = props;

  const { content } = useTextContent({
    children,
    regExp: START_PATTERN_FILTER.UNDERLINE,
  });
  return (
    <>
      <span className="underline font-medium" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
