import React from "react";
import { ChildrenProps } from "../Layout/Reusuable";
const variantType = {
  medium: "medium",
  small: "small",
  large: "large",
};
interface ButtonProps extends ChildrenProps {
  variant: "medium" | "small" | "large";
}
function Button({ children, variant }: ButtonProps) {
  return <button className={`${variantType[variant]}`}>{children}</button>;
}

export default Button;
