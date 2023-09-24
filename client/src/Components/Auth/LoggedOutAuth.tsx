import { useUser } from "../../hooks/useUser";
import { getRandomObject } from "../../utilities/generateRandomColors";
import { clearDataLocalStore } from "../../BrowserData/localStore";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../../rickziUi/Button";

function LoggedOutAuth() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  function logout() {
    clearDataLocalStore();
    queryClient.setQueriesData(["user"], null);
  }
  return (
    <nav className="auth_box login ">
      <figure>
        {user?.img ? (
          <img src="" alt="" />
        ) : (
          <figcaption style={getRandomObject() || {}}>
            {user?.userName?.slice(0, 1).toUpperCase()}
          </figcaption>
        )}
      </figure>
      <h3>
        {user?.userName} <span>{user?.email}</span>
      </h3>
      <Button className="ml-2" onClick={logout}>
        Logout
      </Button>
    </nav>
  );
}

export default LoggedOutAuth;
