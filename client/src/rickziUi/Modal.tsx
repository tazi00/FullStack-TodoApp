import { ChildrenProps } from "../Layout/Reusuable";
import { MouseEventHandler } from "react";
interface ModalOverlayProps {
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}

interface ModalMainProps extends ChildrenProps {
  size?: "small" | "medium" | "large" | "wide";
  shadow?: boolean;
}
const sizes = {
  small: "model_small",
  medium: "model_medium",
  large: "model_large",
  wide: "model_wide",
};
function Modal({ children }: ChildrenProps) {
  return <div className={`model `}>{children}</div>;
}

export function ModalOverlay({ onClick }: ModalOverlayProps) {
  return <div className="modal-overlay" onClick={onClick}></div>;
}

export function ModalMain({
  children,
  size = "medium",
  shadow = false,
}: ModalMainProps) {
  return (
    <div className={`modal-main ${sizes[size]} ${shadow && "modal-shadow"}`}>
      {children}
    </div>
  );
}

interface ModalHeaderProps extends ChildrenProps {
  className?: string;
}
export function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <>
      <div className={`modal-header ${className}`}>{children}</div>
    </>
  );
}
export function ModalBody({ children }: ChildrenProps) {
  return (
    <>
      <div className="modal-body">{children}</div>
    </>
  );
}
export function ModalFooter({ children }: ChildrenProps) {
  return (
    <>
      <div className="modal-footer">{children}</div>
    </>
  );
}
export default Modal;
