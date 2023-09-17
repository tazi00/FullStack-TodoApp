import React from "react";

function LoggedInAuth() {
  return (
    <nav className="auth_box not_login ">
      <ul>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default LoggedInAuth;
