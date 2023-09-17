import Header from "../Components/Header";
import { Main } from "../Components/Main";
import TodoModal from "../Components/Todo/TodoModal";

function AppLayout() {
  return (
    <div className="app_layout">
      <Header />
      <Main />
      <footer>footer</footer>
      <TodoModal />
    </div>
  );
}

export default AppLayout;
