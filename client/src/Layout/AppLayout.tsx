import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Header from "../Components/Header";
import { Main } from "../Components/Main";
import TodoModal from "../Components/Todo/TodoModal";

function AppLayout() {
  return (
    <div className="app_layout">
      <Header />
      <Main />
      <footer>
        <p>A fullstack todo app powered by riziUI</p>
      </footer>
      <TodoModal />
      <Register />
      <Login />
    </div>
  );
}

export default AppLayout;
