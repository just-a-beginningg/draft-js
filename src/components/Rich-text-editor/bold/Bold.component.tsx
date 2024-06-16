import { FC } from "react";
import { CommonProps } from "../../../types";
import { DefaultComponent } from "../default-component/default-component";
import { useTextContent } from "../../../hooks";
import { START_PATTERN_FILTER } from "../../../constants";

type BoldProps = CommonProps;

export const Bold: FC<BoldProps> = (props) => {
  const { children, offsetKey } = props;

  const { content } = useTextContent({
    children,
    regExp: START_PATTERN_FILTER.BOLD,
  });

  return (
    <>
      <span className="font-bold" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
