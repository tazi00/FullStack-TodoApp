import { ChildrenProps } from "../Layout/Reusuable";
const variantType = {
  medium: "medium",
  small: "small",
  large: "large",
};
interface ButtonProps extends ChildrenProps {
  variant: "medium" | "small" | "large";
  onClick: () => void;
}
function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${variantType[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
