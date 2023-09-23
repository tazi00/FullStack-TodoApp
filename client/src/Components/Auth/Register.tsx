import { AnimatePresence, motion } from "framer-motion";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMain,
  ModalOverlay,
} from "../../rickziUi/Modal";
import { LiaKissWinkHeart } from "react-icons/lia";
import Button from "../../rickziUi/Button";
import { useLoginModal, useRegisterModal } from "../../store";

function Register() {
  const showRegister = useRegisterModal((state) => state.showRegister);
  const closeModal = useRegisterModal((state) => state.closeModal);
  const showLoginModal = useLoginModal((state) => state.showModal);
  const password = useRegisterModal((state) => state.showPassword);
  const togglePass = useRegisterModal((state) => state.togglePassword);
  const passwordContainerVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    hidden: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  };
  return (
    <>
      <div className="login-box">
        <AnimatePresence>
          {showRegister && (
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
                  <ModalHeader className="pt-2">
                    <div className="login-head">
                      <h2>Register</h2>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="rickzi_form-box">
                      <form action="">
                        <div className="form-row">
                          <label htmlFor="">Username*</label>
                          <input type="text" placeholder="username" />
                        </div>
                        <div className="form-row">
                          <label htmlFor="">Email*</label>
                          <input type="email" placeholder="email" />
                        </div>
                        <div className="form-row">
                          <label htmlFor="">Password*</label>
                          <input
                            type={password ? "password" : "text"}
                            placeholder="password"
                          />
                          <motion.span
                            className="eye"
                            onClick={() => togglePass()}
                            initial="hidden"
                            animate={password ? "visible" : "hidden"}
                            exit="hidden"
                            variants={passwordContainerVariants}
                          >
                            {password ? (
                              <motion.div className="hide" />
                            ) : (
                              <motion.div className="show" />
                            )}
                          </motion.span>
                        </div>
                        <div className="form-row align-end">
                          <Button type="submit">Login</Button>
                        </div>
                      </form>
                      <h4>
                        Already registerd?{" "}
                        <span
                          onClick={() => {
                            showLoginModal();
                            closeModal();
                          }}
                        >
                          Login
                        </span>{" "}
                      </h4>
                    </div>
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

export default Register;
