import { Link } from "react-router-dom";
import { myContext } from "../pages/Context";
import { useContext } from "react";

function Nav() {
  const context = useContext(myContext);

  const logout = async () => {
    const response = await fetch("/logout", {
      method: "post",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result === "LOGGED OUT") {
      window.location.href = "http://localhost:3000";
    }
  };

  return (
    <nav>
      {context === "undefined" ? (
        <li>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>{" "}
        </li>
      ) : (
        <li>
          <Link to="/PostAd">Post a rental property</Link>
          <Link onClick={logout}>Log out</Link>
        </li>
      )}

      <>
        <Link to="/">ShowAll</Link>

        <Link to="/Filter">Filter</Link>

        <Link to="/Search">Search</Link>
      </>
    </nav>
  );
}

export default Nav;
