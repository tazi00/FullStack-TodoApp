import { useLoginModal, useRegisterModal } from "../../store";

function LoggedInAuth() {
  const showLoginModal = useLoginModal((state) => state.showModal);
  const closeLoginModal = useLoginModal((state) => state.closeModal);
  const showRegisterModal = useRegisterModal((state) => state.showModal);
  const closeRegisterModal = useRegisterModal((state) => state.closeModal);

  return (
    <nav className="auth_box not_login ">
      <ul>
        <li
          onClick={() => {
            showLoginModal();
            // closeRegisterModal();
          }}
        >
          <a href="#">Login</a>
        </li>
        <li
          onClick={() => {
            // closeLoginModal();
            showRegisterModal();
          }}
        >
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default LoggedInAuth;
