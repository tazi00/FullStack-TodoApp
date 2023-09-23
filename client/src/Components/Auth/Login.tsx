import { AnimatePresence, motion } from "framer-motion";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMain,
  ModalOverlay,
} from "../../rickziUi/Modal";
import { LiaKissWinkHeart } from "react-icons/lia";
import { useLoginModal } from "../../store";
import LoginForm from "./LoginForm";

function Login() {
  const showLogin = useLoginModal((state) => state.showLogin);
  const closeModal = useLoginModal((state) => state.closeModal);

  return (
    <>
      <div className="login-box">
        <AnimatePresence>
          {showLogin && (
            <Modal>
              <ModalOverlay onClick={closeModal} />
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
                <ModalMain size="small" shadow>
                  <ModalHeader>
                    <div className="login-head">
                      <h2>Login</h2>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <LoginForm />
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
    </>
  );
}

export default Login;
