import { useState, useEffect } from "react";

interface UseTextContentProps {
  children: JSX.Element[];
  regExp: RegExp;
}
export const useTextContent = ({ children, regExp }: UseTextContentProps) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!children || children.length == 0) {
      return;
    }
    const text = children[0].props.text ?? "";
    setContent(text.replace(regExp, ""));
  }, [children, regExp]);

  return { content };
};
