import React from "react";
import { createPortal } from "react-dom";
import { ChildrenProps } from "../Layout/Reusuable";

function Modal({ children }: ChildrenProps) {
  return createPortal(
    <>
      <div className="model">
        <div className="modal-overlay"></div>
        <div className="modal-main">{children}</div>
      </div>
    </>,
    document.getElementById("todo-portal")!
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
