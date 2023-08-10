import { Link } from "react-router-dom";
import { myContext } from "../pages/Context";
import { useContext } from "react";

function Nav() {
  const context = useContext(myContext);

  const showDeleteAlert = () => {
    console.log("clicked");
    alert("DELETE");
    <div class="alert alert-warning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>Warning: Invalid email address!</span>
    </div>;
  };

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
          <Link to="/">HomeRental.</Link>
        </p>
        {context === "undefined" ? (
          <ul className="flex items-center gap-5">
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/Rentals">Rentals</Link>
            </li>
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/Login">List Rental</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-5">
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/PostAd">List Rental</Link>
            </li>
            <li className="hover:text-cyan-500 transition-colors">
              <Link to="/MyRentals">My Rentals</Link>
            </li>

            <div class="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <label className="hover:text-cyan-500 transition-colors">
                Account
              </label>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="hover:text-cyan-500 transition-colors">
                  <Link onClick={logout}>Log out</Link>
                </li>

                <li>
                  <Link to="/DeleteAccount" className="text-red-500">
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
