import Button from "../../rickziUi/Button";
import { useModal } from "../../store";

function TodoBtns() {
  const openModal = useModal((state) => state.showModal);

  return (
    <div className="todo-btns">
      <Button variant={"medium"} onClick={() => openModal()}>
        Add Todo
      </Button>
    </div>
  );
}

export default TodoBtns;
