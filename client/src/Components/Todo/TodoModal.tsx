import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../Ui/Modal";
import { LiaKissWinkHeart } from "react-icons/lia";
import TodoForm from "./TodoForm";
function TodoModal() {
  return (
    <div className="todo-modal">
      <Modal>
        <ModalHeader>
          <h2>
            Add Todo <span>&times;</span>
          </h2>
        </ModalHeader>
        <ModalBody>
          <TodoForm />
        </ModalBody>
        <ModalFooter>
          <p>
            <LiaKissWinkHeart />
            created by riziUI
          </p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TodoModal;
