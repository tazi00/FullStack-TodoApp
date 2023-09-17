import { Grid } from "../../Layout/Reusuable";
import TodoBtns from "./TodoBtns";
import TodoItem from "./TodoItem";
import TodoSelect from "./TodoSelect";
import TodoTite from "./TodoTite";

function TodoBox() {
  return (
    <>
      <div className="todo_box">
        <div className={"todo-options"}>
          <TodoTite title="Filters"></TodoTite>
          <Grid col={"2"}>
            <TodoSelect />
            <TodoBtns />
          </Grid>
        </div>
        <TodoTite />
        <div className="todo_list-box">
          <Grid col="3" className="gap-3">
            <TodoItem type={"work"} />
            <TodoItem type={"home"} />
            <TodoItem type={"work"} />
            <TodoItem type={"work"} />
            <TodoItem type={"home"} />
            <TodoItem type={"work"} />
          </Grid>
        </div>
      </div>
    </>
  );
}

export default TodoBox;
