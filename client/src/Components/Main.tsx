import { Container, Grid } from "../Layout/Reusuable";
import Sidebar from "./Sidebar";
import TodoBox from "./Todo/TodoBox";

export function Main() {
  return (
    <main>
      <Container>
        <Grid col1="1" col2="4" className="gap-2">
          <Sidebar />
          <TodoBox></TodoBox>
        </Grid>
      </Container>
    </main>
  );
}
