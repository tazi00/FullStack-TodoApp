import { ChildrenProps } from "../Layout/Reusuable";
const variantType = {
  medium: "medium",
  small: "small",
  large: "large",
};
const modeType = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};
interface ButtonProps extends ChildrenProps {
  variant?: "medium" | "small" | "large";
  mode?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
}
function Button({
  children,
  variant = "medium",
  onClick,
  mode = "primary",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} ${variantType[variant]} ${modeType[mode]}`}
    >
      {children}
    </button>
  );
}

export default Button;
