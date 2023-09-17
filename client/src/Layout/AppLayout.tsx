import Header from "../Components/Header";
import { Main } from "../Components/Main";
import TodoModal from "../Components/Todo/TodoModal";
import { useModal } from "../store";

function AppLayout() {
  const show = useModal((state) => state.show);

  return (
    <div className="app_layout">
      <Header />
      <Main />
      <footer>
        <p>A fullstack todo app powered by riziUI</p>
      </footer>
      {show && <TodoModal />}
    </div>
  );
}

export default AppLayout;
