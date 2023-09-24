import { useLoginModal, useRegisterModal } from "../../store";

function LoggedInAuth() {
  const showLoginModal = useLoginModal((state) => state.showModal);
  const showRegisterModal = useRegisterModal((state) => state.showModal);

  return (
    <nav className="auth_box not_login ">
      <ul>
        <li
          onClick={() => {
            showLoginModal();
          }}
        >
          <a href="#">Login</a>
        </li>
        <li
          onClick={() => {
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
