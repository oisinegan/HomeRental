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
    <nav className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <p className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          HomeRental.
        </p>
        {context === "undefined" ? (
          <ul className="flex items-center gap-5">
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/Login">List Property</Link>
            </li>
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/Login">Login</Link>{" "}
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-5">
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/PostAd">List Property</Link>
            </li>
            <li className="hover:text-cyan-500 transition-colors">
              <Link onClick={logout}>Log out</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
