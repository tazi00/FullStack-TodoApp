import { ChildrenProps } from "../Layout/Reusuable";

interface ModalProps extends ChildrenProps {
  close: () => void;
}
function Modal({ children, close }: ModalProps) {
  return (
    <div className="model">
      <div className="modal-overlay" onClick={() => close()}></div>
      <div className={`modal-main`}>{children}</div>
    </div>
  );
}

export default Modal;

export function ModalHeader({ children }: ChildrenProps) {
  return (
    <>
      <div className="modal-header">{children}</div>
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
