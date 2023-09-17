import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../Ui/Modal";
import { LiaKissWinkHeart } from "react-icons/lia";
import TodoForm from "./TodoForm";
import { useModal } from "../../store";

function TodoModal() {
  const closeModal = useModal((state) => state.closeModal);
  return (
    <div className="todo-modal">
      <Modal close={closeModal}>
        <ModalHeader>
          <h2>
            Add Todo <span onClick={() => closeModal()}>&times;</span>
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
