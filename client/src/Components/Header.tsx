import { Container, Grid } from "../Layout/Reusuable";
import LogoBox from "./LogoBox";
import LoggedInAuth from "./Auth/LoggedInAuth";
import LoggedOutAuth from "./Auth/LoggedOutAuth";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import { useLoginModal } from "../store";

function Header() {
  const { user, isLoading, isAuthenticated } = useUser();
  const showLoginModal = useLoginModal((state) => state.showModal);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) showLoginModal();
  }, [isLoading, isAuthenticated, showLoginModal]);

  return (
    <header>
      <Container>
        <Grid col1="2" col2="1">
          <LogoBox title="Todooo" />
          {!user ? <LoggedInAuth /> : <LoggedOutAuth />}
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
