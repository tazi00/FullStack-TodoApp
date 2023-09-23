import { useLoginModal, useRegisterModal } from "../../store";
import Button from "../../rickziUi/Button";
import { motion } from "framer-motion";
import { useLogin } from "../../hooks/useLogin";
import ErrorNotifier from "../../rickziUi/ErrorNotifier";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginCredentials } from "../../services/authApi";
import LoadingNotifier from "../../rickziUi/LoadingNotifier";
import { useEffect } from "react";

function LoginForm() {
  const showRegisterModal = useRegisterModal((state) => state.showModal);
  const showpassword = useRegisterModal((state) => state.showPassword);
  const togglePass = useRegisterModal((state) => state.togglePassword);
  const closeModal = useLoginModal((state) => state.closeModal);
  const { todoLogin, isLoading, error: isError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<LoginCredentials>();

  console.log();
  useEffect(() => {
    setFocus("identifier");
  }, [setFocus]);

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    try {
      await todoLogin(data);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

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
      <div className="rickzi_form-box">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <label htmlFor="">Username or Email*</label>
            <input
              type="text"
              disabled={isLoading}
              autoComplete="email"
              placeholder="username or email"
              {...register("identifier", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Username or Email must be at least 5 characters",
                },
              })}
            />
            {errors.identifier && (
              <small className="input-error2">
                {errors.identifier.message}
              </small>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="">Password*</label>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="password"
              disabled={isLoading}
              autoComplete="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters",
                },
              })}
            />

            <motion.span
              className="eye"
              onClick={() => togglePass()}
              initial="hidden"
              animate={showpassword ? "visible" : "hidden"}
              exit="hidden"
              variants={passwordContainerVariants}
            >
              {showpassword ? (
                <motion.div className="hide" />
              ) : (
                <motion.div className="show" />
              )}
            </motion.span>
            {errors.password && (
              <small className="input-error">{errors.password.message}</small>
            )}
          </div>

          <div className="form-row align-end">
            <Button disabled={isLoading} type="submit">
              Login
            </Button>
          </div>
        </form>
        <h4>
          Are you newuser ?{" "}
          <span
            onClick={() => {
              showRegisterModal();
              closeModal();
            }}
          >
            Register
          </span>
        </h4>
        <h5>Forgot Password?</h5>
      </div>
      {isError && <ErrorNotifier errorMsg={isError} />}
      {isLoading && <LoadingNotifier title={"Please wait ..."} />}
    </>
  );
}

export default LoginForm;
