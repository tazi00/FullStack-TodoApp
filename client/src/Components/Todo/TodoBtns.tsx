import React from "react";
import Button from "../../Ui/Button";
import { useModal } from "../../store";

function TodoBtns() {
  const showModal = useModal((state) => state.showModal);
  // const show = useModal((state) => state.show);
  // console.log(showModal());

  return (
    <div className="todo-btns">
      <Button variant={"medium"} onClick={showModal}>
        Add Todo
      </Button>
      {/* <button onClick={showModal}>Add todo</button> */}
    </div>
  );
}

export default TodoBtns;
