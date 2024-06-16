import { FC } from "react";
import { CommonProps } from "../../../types";
import { START_PATTERN_FILTER } from "../../../constants";
import { DefaultComponent } from "../default-component/default-component";
import { useTextContent } from "../../../hooks";

type RedLineProps = CommonProps;

export const RedLine: FC<RedLineProps> = (props) => {
  const { children, offsetKey } = props;

  const { content } = useTextContent({
    children,
    regExp: START_PATTERN_FILTER.RED_LINE,
  });

  return (
    <>
      <span className="text-red-600 font-medium" data-offset-key={`modified--${offsetKey}`}>
        {content}
      </span>
      <DefaultComponent {...props} />
    </>
  );
};
