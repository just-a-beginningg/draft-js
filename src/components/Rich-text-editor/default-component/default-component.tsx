import { FC } from "react";
import { CommonProps } from "../../../types";

type DefaultComponentProps = CommonProps;
export const DefaultComponent: FC<DefaultComponentProps> = ({ children }) => {
  return (
    <>
      <span style={{ display: "none", visibility: "hidden" }}>{children}</span>
    </>
  );
};
