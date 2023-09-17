import { Container, Grid } from "../Layout/Reusuable";
import LogoBox from "./LogoBox";
import LoggedInAuth from "./Auth/LoggedInAuth";
import LoggedOutAuth from "./Auth/LoggedOutAuth";

function Header() {
  const user = true;

  return (
    <header>
      <Container>
        <Grid col1="2" col2="1">
          <LogoBox title="Todooo" />
          {user ? <LoggedInAuth /> : <LoggedOutAuth />}
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
