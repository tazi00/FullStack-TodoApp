import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMain,
  ModalOverlay,
} from "../../rickziUi/Modal";
import { LiaKissWinkHeart } from "react-icons/lia";
import TodoForm from "./TodoForm";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../store";

function TodoModal() {
  const show = useModal((state) => state.show);
  const closeModal = useModal((state) => state.closeModal);
  return (
    <div className="todo-modal">
      <AnimatePresence>
        {show && (
          <Modal>
            <ModalOverlay onClick={() => closeModal()} />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              <ModalMain size={"wide"}>
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
              </ModalMain>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TodoModal;
