import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.setItem("auth-token", null);
    history.push("/");
  };

  return (
    <div>
      <header>
        <h1>BLOG YOURSELF</h1>
        <form action="/">
          <button type="submit">Dashboard</button>
        </form>
        <form action="/login">
          <button type="submit">Login</button>
        </form>
        <form action="/register">
          <button type="submit">Register</button>
        </form>
        <form action="/compose">
          <button type="submit">Compose</button>
        </form>
        <form>
          <button type="submit" onClick={handleLogOut}>
            Log Out
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
